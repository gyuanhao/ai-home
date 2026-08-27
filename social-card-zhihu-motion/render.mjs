// 用 Playwright + 系统 Chrome 把每个 .poster 元素精准截图为 PNG
import { chromium } from 'playwright';
import { existsSync, mkdirSync } from 'node:fs';
import path from 'node:path';

const CHROME_PATH = 'C:/Program Files/Google/Chrome/Application/chrome.exe';
const URL = 'http://localhost:8765/';
const OUT_DIR = path.join(process.cwd(), 'output');
if (!existsSync(OUT_DIR)) mkdirSync(OUT_DIR, { recursive: true });

const posters = [
  { id: 'xhs-01', name: '01-cover' },
  { id: 'xhs-02', name: '02-why' },
  { id: 'xhs-03', name: '03-motion-pipeline' },
  { id: 'xhs-04', name: '04-color-system' },
  { id: 'xhs-05', name: '05-matrix-bento' },
  { id: 'xhs-06', name: '06-matrix-rain' },
  { id: 'xhs-07', name: '07-white-screen-bug' },
  { id: 'xhs-08', name: '08-takeaway-cta' },
];

console.log(`Rendering ${posters.length} posters...`);

const browser = await chromium.launch({
  executablePath: CHROME_PATH,
  headless: true,
});
const context = await browser.newContext({
  viewport: { width: 1080, height: 1440 },
  deviceScaleFactor: 1,
});
const page = await context.newPage();

console.log('Loading page...');
await page.goto(URL, { waitUntil: 'networkidle' });
// 等字体和 lucide 加载
await page.waitForTimeout(1500);
// 触发 lucide 图标渲染
await page.evaluate(() => {
  if (window.lucide && typeof window.lucide.createIcons === 'function') {
    window.lucide.createIcons();
  }
});
await page.waitForTimeout(500);

for (const p of posters) {
  const el = await page.$(`#${p.id}`);
  if (!el) {
    console.log(`  ✗ ${p.name}: element #${p.id} not found`);
    continue;
  }
  const outFile = path.join(OUT_DIR, `${p.name}.png`);
  await el.screenshot({ path: outFile, type: 'png' });
  const box = await el.boundingBox();
  console.log(`  ✓ ${p.name} (${Math.round(box.width)}×${Math.round(box.height)})`);
}

await browser.close();
console.log('Done.');
