/**
 * 技能清单生成器
 * 用法: node gen_catalog.js
 * 从 js/skills-data.js 重新生成 skills-catalog.md（按分类分组 + 顶部统计）
 */
const fs = require('fs');
const path = require('path');

const ROOT = __dirname;
const SRC = path.join(ROOT, 'js/skills-data.js');
const OUT = path.join(ROOT, 'skills-catalog.md');

const D = eval(fs.readFileSync(SRC, 'utf8').match(/const skillsData = (\[[\s\S]*\]);/)[1]);

// 与 skills-catalog.md 原有分类顺序保持一致
const CAT_ORDER = [
  'AI/ML', '营销', '前端开发', '安全', '文档处理', '内容创作', '开发工具', '创意设计',
  '视频', '后端开发', '测试', '移动开发', '数据库', '效率工具', 'Web3', '语音', '图像',
  '部署', '数字人', '监控', '数据分析', '金融', '设计', '云服务', '搜索', '3D',
  '内容管理', '资源合集'
];

const SOURCE_LABEL = { voltagent: 'VoltAgent', anbeime: 'anbeime', community: '社区精选' };

// 分组
const groups = {};
for (const s of D) {
  (groups[s.cat] = groups[s.cat] || []).push(s);
}

// 统计
const total = D.length;
const srcCount = {};
for (const s of D) srcCount[s.source] = (srcCount[s.source] || 0) + 1;
const teams = new Set(D.map(s => s.team)).size;
const cats = Object.keys(groups).length;

function srcBreakdown() {
  return Object.keys(srcCount)
    .sort((a, b) => srcCount[b] - srcCount[a])
    .map(k => `${SOURCE_LABEL[k] || k} ${srcCount[k]} 个`)
    .join(' / ');
}

// 渲染
let md = '';
md += '# AI家AI户 · 技能包(Skills)完整清单\n\n';
md += '> 数据来源：VoltAgent/awesome-agent-skills + anbeime/skill + 社区精选\n';
md += `> 最后更新：${new Date().toISOString().slice(0, 10)}\n\n`;
md += '## 总览\n\n';
md += `- **技能总数**：${total} 个\n`;
md += `- **来源**：${srcBreakdown()}\n`;
md += `- **覆盖团队**：${teams} 个\n`;
md += `- **覆盖分类**：${cats} 个\n\n`;
md += '## 按分类浏览\n\n';

for (const cat of CAT_ORDER) {
  const list = groups[cat];
  if (!list || list.length === 0) continue;
  list.sort((a, b) => (a.nameZh || '').localeCompare(b.nameZh || '', 'zh'));
  md += `### ${cat} （${list.length}）\n\n`;
  for (const s of list) {
    md += `- **${s.nameZh}** (${s.name}) — ${s.team}\n`;
  }
  md += '\n';
}

fs.writeFileSync(OUT, md.trimEnd() + '\n', 'utf8');
console.log(`已生成 skills-catalog.md：共 ${total} 个技能，${cats} 个分类，${teams} 个团队`);
