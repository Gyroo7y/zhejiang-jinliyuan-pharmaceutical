import { readFile } from 'node:fs/promises';
const read = (file) => readFile(file, 'utf8');
const js = await read('content-data.js');
const match = js.match(/window\.JINLIYUAN_DATA = ([\s\S]*);\s*$/);
if (!match) throw new Error('content data is missing');
const data = JSON.parse(match[1]);
const [app, html, css, pkg] = await Promise.all(['app.js','index.html','styles.css','package.json'].map(read));
const assets = ['hero-concept.png','quality-abstract.png','responsibility-abstract.png'];
await Promise.all(assets.map((name) => readFile(`assets/${name}`)));
const unique = (items) => new Set(items).size === items.length;
const checks = [
  ['47 audited products', data.product.length === 47],
  ['16 audited news records', data.news.length === 16],
  ['unique product and news detail routes', unique(data.product.map(x => x.id)) && unique(data.news.map(x => x.id))],
  ['product search and filters', app.includes('renderProducts') && app.includes('product-search') && app.includes('data-kind')],
  ['discoverable site search', app.includes('nav-search') && app.includes('href="#search"') && app.includes('renderSearch')],
  ['search covers products, news, pages and disclosures', app.includes('data.product.map') && app.includes('data.news.map') && app.includes('const disclosures=data.pdfs.map')],
  ['representative product homepage links', app.includes('const featured=data.product.slice(0,4)') && app.includes('href="#products/${p.id}"')],
  ['responsibility chapter and image', app.includes("artwork('responsibility-abstract.png'") && app.includes('href="#responsibility"')],
  ['three integrated artwork references', assets.every(name => (app + css).includes(name))],
  ['quality artwork uses image composition', app.includes("artwork('quality-abstract.png'") && css.includes('.quality-visual img{object-position:52% 50%}')],
  ['accessible mobile menu', app.includes('menu-toggle') && app.includes('aria-expanded') && css.includes('.nav.open{display:flex}')],
  ['language keeps semantic route', app.includes("location.hash||'#home'") && app.includes("route().split('/')[0]")],
  ['semantic detail route identities', app.includes('function productDetail') && app.includes('function news') && app.includes('heading(p.title')],
  ['clean product labels', data.product.every(p => p.title) && !app.includes('p.name')],
  ['trailing-slash normalization', app.includes("location.hash.endsWith('/')")],
  ['no visible placeholder/authenticity labels', !app.includes('Conceptual') && !app.includes('示意视觉') && !css.includes('CONCEPTUAL IMAGE') && !html.includes('pass2.js')],
  ['reduced-motion fallback', css.includes('prefers-reduced-motion')],
  ['demo form never sends or stores', app.includes('preventDefault') && app.includes('does not send or store') && !html.includes('<form action=')],
  ['no unsupported cardiovascular-specialist positioning', !/心血管专长|cardiovascular-specialist/i.test(app)],
  ['canonical build and check scripts', JSON.parse(pkg).scripts.build && JSON.parse(pkg).scripts.check]
];
for (const [name, passed] of checks) { if (!passed) throw new Error(`FAIL ${name}`); console.log(`PASS ${name}`); }
