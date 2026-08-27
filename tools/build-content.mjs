import { readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const source = resolve(process.cwd(), '../01_public_site_audit/URL_INVENTORY.json');
const inventory = JSON.parse(await readFile(source, 'utf8'));
const site = inventory.sites.find((entry) => entry.site_id === 'zhejiang_jinliyuan');
if (!site) throw new Error('Zhejiang Jinliyuan audit site not found');
const records = site.records;
const productRecords = records.filter((entry) => /\/product_detail\/\d+\.html$/.test(entry.url));
const newsRecords = records.filter((entry) => /\/news_detail\/\d+\.html$/.test(entry.url));
if (productRecords.length !== 47 || newsRecords.length !== 16) throw new Error(`Audit counts changed: ${productRecords.length} products, ${newsRecords.length} news`);
const idFor = (url, pattern) => Number(url.match(pattern)[1]);
const clean = (s) => s.replace(/\s+/g, ' ').trim();
const product = productRecords.map((entry) => {
  const id = idFor(entry.url, /product_detail\/(\d+)/);
  const after = entry.main_content.split('当前位置：产品与服务 >')[1] || entry.title;
  const name = clean(after.split(/ 基本信息 | 【 返回主目录 】 | 含量：| 分子式：| 性\s*状：| 性能：| 质量标准：| 钯含量：/)[0]) || entry.title;
  const kind = id <= 11 || [18,19,20,21,22].includes(id) ? 'api' : id >= 54 ? 'formulation' : id >= 25 ? 'intermediate' : 'other';
  return { id, name, kind, legacyUrl: entry.url, title: entry.title, auditedText: clean(after) };
}).sort((a,b) => a.id - b.id);
const news = newsRecords.map((entry) => {
  const id = idFor(entry.url, /news_detail\/(\d+)/);
  const after = entry.main_content.split('当前位置：新闻中心 ')[1] || entry.title;
  const title = clean(after.split(' 发布时间')[0]) || entry.title;
  const date = (after.match(/发布时间：\[([^\]]+)\]/) || [])[1] || 'Legacy record';
  return { id, title, date, legacyUrl: entry.url, auditedText: clean(after) };
}).sort((a,b) => b.id - a.id);
const pdfs = records.filter((entry) => /\.pdf(?:$|\?)/i.test(entry.url)).map((entry) => ({ url: entry.url, status: entry.access_status === 'ACCESSIBLE' ? 'PUBLIC_SOURCE_RECORDED' : 'SOURCE_FILE_PENDING_RETRIEVAL', httpStatus: entry.http_status }));
// CONTENT_INVENTORY documents another eight public PDF references whose source URLs were not
// recoverable in the declared URL inventory. Keep them explicit rather than inventing links.
for (let i = 1; i <= 8; i++) pdfs.push({ url: null, title: `Audited public PDF reference ${i}`, status: 'SOURCE_FILE_PENDING_RETRIEVAL', source: 'CONTENT_INVENTORY.md: Zhejiang section documents 10 PDF references; URL not recoverable in URL_INVENTORY.json' });
const section = (suffix) => { const entry = records.find((r) => r.url.endsWith(suffix)); return entry ? { title: entry.title, url: entry.url, auditedText: clean(entry.main_content) } : null; };
const sections = { contact: section('/contact.html'), careers: section('/jobs.html') || section('/job.html') };
const out = `/* Generated from the canonical audit; do not hand-edit. */\nwindow.JINLIYUAN_DATA = ${JSON.stringify({product, news, pdfs, sections}, null, 2)};\n`;
await writeFile(resolve(process.cwd(), 'content-data.js'), out, 'utf8');
console.log(`Generated content-data.js: ${product.length} products, ${news.length} news, ${pdfs.length} disclosure/PDF records.`);
