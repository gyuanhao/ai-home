/**
 * 全站“更新日期”统一改为今天
 * 用法: node update_dates.js
 *
 * 仅替换“更新日期”上下文（最后更新 / 数据最后更新 / 更新于 / last updated），
 * 不动产品发布日期、评测日期等。
 */
const fs = require('fs');
const path = require('path');

const ROOT = __dirname;
const TODAY_ZH = '2026年7月28日';
const TODAY_ISO = '2026-07-28';
const TODAY_EN = 'July 28, 2026';

// 收集的待处理文件
const files = [];
function add(dir) {
  for (const f of fs.readdirSync(dir)) {
    if (f.endsWith('.html')) files.push(path.join(dir, f));
  }
}
add(ROOT);
add(path.join(ROOT, 'vs'));
add(path.join(ROOT, 'models'));
files.push(path.join(ROOT, 'js/i18n.js'));
files.push(path.join(ROOT, 'scripts/models.json'));

// 正则：[匹配, 替换]
const rules = [
  // 中文站点级戳
  [/数据最后更新于 2026年\d{1,2}月\d{1,2}日/g, `数据最后更新于 ${TODAY_ZH}`],
  [/数据最后更新：2026年\d{1,2}月\d{1,2}日/g, `数据最后更新：${TODAY_ZH}`],
  [/信息最后更新：2026年\d{1,2}月\d{1,2}日（AI辅助工具2026年\d{1,2}月\d{1,2}日）/g, `信息最后更新：${TODAY_ZH}（AI辅助工具${TODAY_ZH}）`],
  [/最后更新于2026年\d{1,2}月\d{1,2}日/g, `最后更新于${TODAY_ZH}`],
  [/对比数据最后更新于 2026年\d{1,2}月\d{1,2}日/g, `对比数据最后更新于 ${TODAY_ZH}`],
  // 带 <strong> 的更新日期（放前面，避免被普通规则二次匹配）
  [/最后更新：<strong>2026年\d{1,2}月\d{1,2}日<\/strong>/g, `最后更新：<strong>${TODAY_ZH}</strong>`],
  // 普通中文“最后更新：”
  [/最后更新：2026年\d{1,2}月\d{1,2}日/g, `最后更新：${TODAY_ZH}`],
  // 模型页静态 fallback：更新于 / 最后更新：ISO
  [/更新于 2026-\d{2}-\d{2}/g, `更新于 ${TODAY_ISO}`],
  [/最后更新：2026-\d{2}-\d{2}/g, `最后更新：${TODAY_ISO}`],
  // vs 页 pageDate span
  [/最后更新：<span id="pageDate">2026-\d{2}-\d{2}<\/span>/g, `最后更新：<span id="pageDate">${TODAY_ISO}</span>`],
  // 模型内嵌 JSON + models.json 生成源
  [/"lastUpdated":"2026-\d{2}-\d{2}"/g, `"lastUpdated":"${TODAY_ISO}"`],
  // 英文（last updated / Last updated:）
  [/(last updated:?\s*)(January|February|March|April|May|June|July|August|September|October|November|December)\s+\d+,?\s+2026/gi, `$1${TODAY_EN}`],
  // hero “最后更新” 统计日期
  [/2026-07-01/g, TODAY_ISO],
];

let totalChanges = 0;
const touched = [];
for (const file of files) {
  let txt = fs.readFileSync(file, 'utf8');
  let changed = false;
  for (const [re, rep] of rules) {
    const before = txt;
    txt = txt.replace(re, rep);
    if (txt !== before) changed = true;
  }
  if (changed) {
    fs.writeFileSync(file, txt, 'utf8');
    touched.push(file);
    // 统计改动数
    for (const [re] of rules) {
      const m = txt.match(re);
    }
  }
}

console.log(`已更新 ${touched.length} 个文件：`);
touched.forEach(f => console.log('  - ' + path.relative(ROOT, f)));
