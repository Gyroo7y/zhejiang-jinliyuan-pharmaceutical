import { access, readFile } from "node:fs/promises";

const read = (file) => readFile(file, "utf8");
const [html, app, css, data, media] = await Promise.all([
  "index.html", "app-v2.js", "styles-v2.css", "content-data.js", "product-media.js",
].map(read));
const content = JSON.parse(data.match(/window\.JINLIYUAN_DATA = ([\s\S]*);\s*$/)[1]);
const requiredAssets = [
  "assets/official/logo.png",
  "assets/concept/jinliyuan-abstract-brand-space-hero-v22.png",
  "assets/official/home-project-3.jpg",
  "assets/official/home-project-4.jpg",
  "assets/official/company-qy1.jpg",
  ...Array.from({length:15}, (_,i)=>`assets/official/gallery/qy${i+1}.jpg`),
];
await Promise.all(requiredAssets.map((file) => access(file)));

const routes = [
  "about/profile", "about/culture", "about/honors", "about/company",
  "products/formulation", "products/api", "products/intermediate", "products/other", "products/adverse",
  "quality/production", "quality/management", "quality/platform", "quality/collaboration",
  "news/company", "news/industry", "responsibility/safety", "responsibility/environment", "responsibility/community",
  "careers/environment", "careers/openings", "contact/enquiry",
];
const checks = [
  ["single local runtime", html.includes('app-v2.js?v=3.0') && html.includes('styles-v2.css?v=3.0')],
  ["no obsolete incorrect JLY mark", !/\bJLY\b/.test(app) && !/\bJLY\b/.test(css)],
  ["full-width balanced approved hero", css.includes("jinliyuan-abstract-brand-space-hero-v22.png") && css.includes("linear-gradient(98deg")],
  ["confirmed metrics and financial notation", app.includes('data-value="560"') && app.includes('data-value="960"') && app.includes('data-prefix="~"') && !app.includes("960B")],
  ["counter implementation and reduced-motion support", app.includes("IntersectionObserver") && app.includes("bindCounters") && css.includes("prefers-reduced-motion")],
  ["six featured product layout", app.includes("[55,6,54,7,12,14]") && css.includes("grid-template-columns:repeat(3,minmax(0,1fr))")],
  ["product categories do not repeat landing feature", app.includes('const feature = type === "all"') && app.includes("formulationIds")],
  ["desktop hover mega navigation and mobile menu", app.includes("navGroups") && css.includes(".nav-group:hover .mega") && css.includes(".primary-nav.is-open")],
  ["distinct page-family renderers", ["function about", "function products", "function quality", "function news", "function responsibility", "function careers", "function contact"].every(x=>app.includes(x))],
  ["all primary secondary routes configured", routes.every(route=>app.includes(route))],
  ["gallery has all authentic images and lightbox", app.includes("galleryOrder") && app.includes("bindGallery") && app.includes("gallery-dialog")],
  ["public facts retained without invented capacity claims", content.product.length === 47 && content.news.length === 16 && !/batch success|global clients|total capacity|845KL/i.test(app)],
  ["product search and disclosure archive retained", app.includes("bindProducts") && app.includes("function disclosure") && content.pdfs.some(item=>item.status === "SOURCE_FILE_PENDING_RETRIEVAL")],
  ["no external form submission", !/fetch\(|XMLHttpRequest|\.submit\(/.test(app)],
];
for (const [name, ok] of checks) {
  if (!ok) throw new Error(`FAIL ${name}`);
  console.log(`PASS ${name}`);
}
console.log(`PASS content counts: ${content.product.length} products, ${content.news.length} updates, ${content.pdfs.length} disclosure/PDF records`);
console.log(`PASS product media mapping present: ${media.includes("JINLIYUAN_PRODUCT_MEDIA")}`);
