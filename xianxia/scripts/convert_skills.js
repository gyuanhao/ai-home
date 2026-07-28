// 迁移技能包：读 ai-home/js/skills-data.js → 提取中文字段 + slug/detailUrl → 写 xianxia/src/data/skills.js
// 运行：node xianxia/scripts/convert_skills.js
// 【零基础说明】
//   原站技能数据是 js 格式（const skillsData=[...]），这里读它、只留中文字段
//   （名/团队/分类/描述/官网），并自动补上：
//     - slug：直接用原站英文 name（与 skills/<slug>.html 文件名一致）
//     - detailUrl：如果 ai-home/skills/<slug>.html 这个详情页文件存在，
//       就写 "../skills/<slug>.html"，否则留空（卡片只显示"前往仓库"）
//   原站更新技能后重跑即同步，不需要手动维护 slug/detailUrl。
const fs = require('fs');
const path = require('path');

// 路径按脚本自身位置推算，无论从哪个目录运行都正确
const HERE = __dirname;                 // xianxia/scripts
const XIANXIA = path.dirname(HERE);     // xianxia
const ROOT = path.dirname(XIANXIA);     // ai-home（仓库根）

const SRC = path.join(ROOT, 'js', 'skills-data.js');
const SKILLS_DIR = path.join(ROOT, 'skills');
const OUT = path.join(XIANXIA, 'src', 'data', 'skills.js');

// 1. 读原站技能数据
let src = fs.readFileSync(SRC, 'utf8');
// 2. 去掉 "const skillsData = " 前缀和结尾 ";"，得到数组字面量，再 eval 成真数组
let arrStr = src.replace(/^[\s\S]*?skillsData\s*=\s*/, '').replace(/;\s*$/, '');
let arr = eval('(' + arrStr + ')');

// 3. 每个技能只留中文字段，并补 slug / detailUrl
let out = arr.map(s => {
  const slug = s.name || '';
  const detailUrl = (slug && fs.existsSync(path.join(SKILLS_DIR, slug + '.html')))
    ? '../skills/' + slug + '.html'
    : '';
  return {
    name: s.nameZh || s.name,
    team: s.team || '',
    cat: s.cat || '',
    desc: s.descZh || s.desc || '',
    url: s.url || '',
    slug: slug,
    detailUrl: detailUrl
  };
});

// 4. 写成游戏的 skills.js
let js = '/* 迁移自 ai-home/js/skills-data.js（xianxia/scripts/convert_skills.js 生成）。\n'
       + '   只留中文字段；slug=原站英文name，detailUrl 自动匹配 skills/<slug>.html 是否存在。\n'
       + '   原站更新技能后重跑即同步，请勿手改本文件。 */\n'
       + 'window.AIHome = window.AIHome || {};\n\n'
       + 'AIHome.SKILLS = ' + JSON.stringify(out, null, 2) + ';\n';
fs.writeFileSync(OUT, js);

console.log('迁移 ' + out.length + ' 个技能 -> ' + OUT);
let withDetail = out.filter(s => s.detailUrl).length;
console.log('含详情页链接(detailUrl): ' + withDetail + ' / ' + out.length);
