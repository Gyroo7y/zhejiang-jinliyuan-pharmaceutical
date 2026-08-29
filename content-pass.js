(() => {
  const cn = () => document.documentElement.lang !== 'en';
  const text = (z,e) => cn() ? z : e;
  const route=()=>location.hash.replace(/^#\/?/,'');
  const content={
    platform:['科研平台','围绕产品与工艺研究，形成研发工作的重要基础。','公司以研发、生产与服务协同推进长期建设，研发人员多年占职工总数10%以上。','平台与人才','以研发人员和专业技术人员为基础，连接产品资料、工艺研究与长期能力。','协同路径','科研平台、产品研发、技术协作与科研成果各自保留独立入口。'],
    development:['产品研发','从产品需求到资料沉淀，持续推进产品研发工作。','原料药、制剂、中间体及其他产品构成产品目录；研发工作围绕产品资料与工艺基础持续展开。','产品资料','从产品分类和详情进入产品基础信息。','研发连接','产品研发与科研平台、技术协作形成清晰的工作关联。'],
    collaboration:['技术协作','以专业协作连接研发、制造与产品服务。','围绕产品、制造与研发相关事项，建立清晰的业务沟通路径。','协作方向','产品、制造与研发相关事项可由对应业务方向进入。','沟通入口','通过合作咨询获得清晰的联系与分流。'],
    outcomes:['科研成果','以长期积累连接科研与产业实践。','公司获评国家高新技术企业、绍兴市专利示范企业，并已完成近百项涉及医药中间体、原料药和制剂的国内外注册审批。','成果积累','企业资质、产品资料与技术协作共同构成长期能力。','继续查阅','可从企业资质、产品资料与技术协作继续了解。'],
    'production-quality':['生产与质量','生产体系与质量管理，共同支撑可靠交付。','原料药、制剂、中间体及相关产品构成业务基础；生产体系、过程衔接与质量沟通协同运行。','生产体系','围绕既有业务，组织产品、制造与过程衔接。','质量管理','质量相关事项与不良事件报告入口保持清晰分流。']
  };
  function page(head,lead,blocks){return `<section class="inner-hero"><div><p>INNOVATION</p><h1>${head}</h1><span>${lead}</span></div></section><section class="deep-page">${blocks.map((x,i)=>`<article class="deep-${i+1}"><small>0${i+1}</small><div><h2>${x[0]}</h2><p>${x[1]}</p></div></article>`).join('')}</section>`;}
  function enhance(){const r=route(),main=document.querySelector('main');if(!main)return;
    if(r==='about/culture'){main.innerHTML=page(text('企业文化','Culture'),text('关爱生命，健康立源。','Care for life. Health through Kinglyuan.'),[[text('企业宗旨','Purpose'),text('关爱生命，健康立源。把对生命与健康的关切，放在企业长期发展的起点。','Care for life. Health through Kinglyuan.' )],[text('企业文化','Culture'),text('团结、拼搏、求实、创新。以共同目标、务实行动与持续进取推进日常工作。','Unity, endeavour, pragmatism and innovation.')],[text('人才观','People'),text('人尽其才，物尽其用。给予信任、赋予责任、共享价值。','Put people and potential to good use; build through trust, responsibility and shared value.')]]);}
    if(r.startsWith('rd/')){const x=content[r.split('/')[1]];if(x)main.innerHTML=page(text(x[0],x[0]),text(x[1],x[1]),[[text(x[2],x[2]),text(x[3],x[3])],[text(x[4],x[4]),text(x[5],x[5])]]);}
    if(r.startsWith('responsibility/')){const k=r.split('/')[1],m={community:['公益慈善','以关爱生命、回馈社会为长期责任方向。'],health:['职业健康','关注员工健康与工作环境，让日常协作更有保障。'],safety:['安全生产','将安全意识贯穿于长期制造活动的日常环节。'],environment:['环境保护','将环境、项目、监测及验收资料集中于信息公开查阅。'],sustainability:['可持续发展','将公益、职业健康、安全生产与环境保护置于长期建设的同一责任框架。']}[k];if(m)main.innerHTML=page(text(m[0],m[0]),text(m[1],m[1]),[[text('责任实践','Responsible practice'),text(m[1],m[1])],[text('相关信息','Related information'),text(k==='environment'?'环境与项目资料请进入信息公开查阅。':'通过相关业务栏目和联系页面获得进一步沟通入口。',k==='environment'?'Environmental and project records are available in Disclosures.':'Use the relevant section and Contact for further information.')]]);}
    if(r==='careers'){main.querySelector('.page-copy')?.insertAdjacentHTML('beforeend',`<div class="job-details"><details><summary>QC（分析检测） · 20人 · 上虞</summary><p>负责分析检测相关工作；要求具备岗位所需的专业能力与责任意识。截止时间：2022年06月。</p></details><details><summary>工艺研发 · 5人 · 上虞 / 上海奉贤</summary><p>参与工艺研发相关工作；要求具备岗位所需专业背景与研发能力。截止时间：2022年06月。</p></details><details><summary>专业技术人员 / 管培生 · 5人 · 上虞</summary><p>岗位方向包括 QA/QC、车间技术、EHS、设备设施仪器及其他职能。截止时间：2022年06月。</p></details><p>历史公开岗位，投递前请联系确认。盛经理：13906856629（微信同号）。</p></div>`);}
    if(r==='contact'){main.querySelector('.contacts')?.insertAdjacentHTML('afterend',`<section class="enquiry"><h2>${text('在线留言 / 合作咨询','Enquiry')}</h2><form><input required placeholder="${text('公司 / 机构','Company')}"/><input required placeholder="${text('姓名','Name')}"/><input required placeholder="${text('电话或邮箱','Phone or email')}"/><select><option>${text('咨询方向','Enquiry type')}</option><option>${text('产品与销售','Products')}</option><option>${text('研发合作','R&D collaboration')}</option></select><textarea placeholder="${text('留言内容','Message')}"></textarea><button>${text('提交留言','Submit')}</button><small></small></form></section>`);main.querySelector('form')?.addEventListener('submit',e=>{e.preventDefault();e.currentTarget.querySelector('small').textContent=text('已收到本地演示提交；信息未发送、未保存。','Local demonstration received; nothing was sent or saved.');});}
  }
  addEventListener('hashchange',enhance);enhance();
})();

/* V4.1 blue-system refinement: language completion, stable poster motion and compact page interactions. */
(() => {
  const route=()=>location.hash.replace(/^#\/?/,'')||'home', zh=()=>document.documentElement.lang!=='en', T=(z,e)=>zh()?z:e;
  const allText={
    '本公司产品厄贝沙坦片获得药品注册批件':'Irbesartan Tablets Granted Drug Registration Approval',
    '粒度对原料药性能的影响':'The Effect of Particle Size on API Performance',
    '我司欲扩大专利产品“氰酸酯树脂单体SD-1”产能':'Expansion Planned for Patented Cyanate Ester Resin Monomer SD-1 Capacity'
  };
  let stopHeroCanvas=()=>{};
  function startHeroCanvas(main){
    stopHeroCanvas();
    if(document.documentElement.dataset.theme==='warm')return;
    const media=main.querySelector('.v5-concept-hero .hero-media');
    if(!media||matchMedia('(prefers-reduced-motion: reduce)').matches)return;
    const canvas=document.createElement('canvas'),ctx=canvas.getContext('2d',{alpha:true});
    if(!ctx)return;
    canvas.className='hero-flow-canvas';canvas.setAttribute('aria-hidden','true');media.append(canvas);
    let frame=0,raf=0,visible=true,stopped=false,w=0,h=0,dpr=1;
    const resize=()=>{const rect=media.getBoundingClientRect();dpr=Math.min(devicePixelRatio||1,1.5);w=Math.max(1,Math.round(rect.width*dpr));h=Math.max(1,Math.round(rect.height*dpr));canvas.width=w;canvas.height=h;ctx.setTransform(dpr,0,0,dpr,0,0);};
    const drawRibbon=(time,offset,color,width,alpha)=>{const cw=w/dpr,ch=h/dpr;ctx.save();ctx.globalCompositeOperation='screen';ctx.globalAlpha=alpha;ctx.lineWidth=width;ctx.lineCap='round';const gradient=ctx.createLinearGradient(0,0,cw,0);gradient.addColorStop(0,'rgba(78,184,255,0)');gradient.addColorStop(.28,color);gradient.addColorStop(.62,color);gradient.addColorStop(1,'rgba(255,198,137,0)');ctx.strokeStyle=gradient;ctx.beginPath();for(let x=-80;x<=cw+100;x+=22){const wave=Math.sin((x+time*150+offset)/150)*ch*.075+Math.sin((x-time*92+offset)/68)*ch*.028;const y=ch*(.38+offset*.00023)+wave+Math.sin(time*.65+offset)*ch*.035;if(x===-80)ctx.moveTo(x,y);else ctx.lineTo(x,y);}ctx.stroke();ctx.restore();};
    const draw=(now)=>{if(stopped)return;const t=now/1000;if(visible&&!document.hidden){const cw=w/dpr,ch=h/dpr;ctx.clearRect(0,0,cw,ch);drawRibbon(t,0,'rgba(97,209,255,.95)',7,.58);drawRibbon(t,340,'rgba(133,118,255,.85)',4,.48);drawRibbon(t,720,'rgba(255,184,121,.80)',2.5,.55);ctx.save();ctx.globalCompositeOperation='screen';for(let n=0;n<14;n++){const x=((t*95+n*173)%(cw+180))-90;const y=ch*(.22+(n%6)*.115)+Math.sin(t*1.8+n)*ch*.03;const g=ctx.createRadialGradient(x,y,0,x,y,15);g.addColorStop(0,n%4===0?'rgba(255,194,132,.88)':'rgba(183,239,255,.82)');g.addColorStop(1,'rgba(151,220,255,0)');ctx.fillStyle=g;ctx.fillRect(x-16,y-16,32,32);}ctx.restore();canvas.dataset.flowPhase=String(Math.round(t*100));canvas.dataset.flowOffset=String(Math.round(Math.sin(t*1.4)*120));frame++;canvas.dataset.flowFrame=String(frame);}raf=requestAnimationFrame(draw);};
    const resizeObserver=new ResizeObserver(resize),intersection=new IntersectionObserver(entries=>{visible=entries.some(entry=>entry.isIntersecting)},{threshold:.04});
    resize();resizeObserver.observe(media);intersection.observe(media);raf=requestAnimationFrame(draw);
    stopHeroCanvas=()=>{if(stopped)return;stopped=true;cancelAnimationFrame(raf);resizeObserver.disconnect();intersection.disconnect();canvas.remove();stopHeroCanvas=()=>{};};
  }
  function refineHome(main){
    const video=main.querySelector('.hero-motion'); if(video){const src=document.documentElement.dataset.theme==='warm'?'assets/concept/warm-v1/warm-hero.png':'assets/concept/jinliyuan-v4-luminous-flow-hero-20260828-1920x1080.png';video.outerHTML=`<img class="hero-poster" src="${src}" alt="">`;}
    startHeroCanvas(main);
    if(!zh()){const h=main.querySelector('.v5-concept-hero h1');if(h)h.innerHTML='Forward.<br>For Health.';main.querySelectorAll('.news-items b').forEach(b=>{if(allText[b.textContent.trim()])b.textContent=allText[b.textContent.trim()];});}
  }
  function sortProducts(main){
    const nav=main.querySelector('.refined-catalogue nav'); if(nav){const order=['#/products/','#/products/formulations','#/products/api','#/products/intermediate','#/products/other','#/products/adverse'];[...nav.querySelectorAll('a')].sort((a,b)=>order.indexOf(a.getAttribute('href'))-order.indexOf(b.getAttribute('href'))).forEach(a=>nav.append(a));}
    const list=main.querySelector('.product-list');if(list){const ranks={ [T('制剂','Formulations')]:0,[T('原料药','APIs')]:1,[T('中间体','Intermediates')]:2,[T('其他产品','Other products')]:3};[...list.querySelectorAll('a')].sort((a,b)=>{const ra=ranks[a.querySelector('i')?.textContent.trim()]??9,rb=ranks[b.querySelector('i')?.textContent.trim()]??9,ai=a.querySelector('.product-thumb')?0:1,bi=b.querySelector('.product-thumb')?0:1;return ra-rb||ai-bi;}).forEach(a=>list.append(a));}
    const intro=main.querySelector('.catalogue-intro');if(intro){intro.querySelector('h2')?.remove();intro.querySelector('p')?.remove();const marker=intro.querySelector('small');if(marker)marker.textContent=T('完整公开目录','COMPLETE PRODUCT DIRECTORY');}
    const discovery=main.querySelector('.product-discovery nav');if(discovery){if(!discovery.querySelector('[href="#/products/"]'))discovery.insertAdjacentHTML('afterbegin',`<a href="#/products/"><span>00</span><b>${T('全部产品','All products')}</b><i>→</i></a>`);const order=['#/products/','#/products/formulations','#/products/api','#/products/intermediate','#/products/other'];[...discovery.querySelectorAll('a')].sort((a,b)=>order.indexOf(a.getAttribute('href'))-order.indexOf(b.getAttribute('href'))).forEach(a=>discovery.append(a));}
  }
  function culture(main){
    const host=main.querySelector('.culture-v41');if(!host||host.dataset.interactive)return;host.dataset.interactive='true';
    const items=[...host.querySelectorAll('article')]; items.forEach((item,i)=>{const note=[T('把关爱生命、健康立源作为企业公开文化宗旨，落在每一次长期投入的起点。','The public purpose of care for life and health through Kinglyuan is a starting point for long-term work.'),T('团结、拼搏、求实、创新，强调共同目标、务实行动与持续进取的工作方式。','Unity, endeavour, pragmatism and innovation describe shared goals, practical action and continued progress.'),T('人尽其才，物尽其用，强调信任、责任与让能力在真实工作中被看见。','People and potential put to good use emphasises trust, responsibility and making capability visible through real work.')][i];item.setAttribute('role','button');item.tabIndex=0;item.setAttribute('aria-expanded','false');item.insertAdjacentHTML('beforeend',`<div class="culture-detail"><p>${note}</p><span>${T('了解这项主张','Explore this principle')} <i>→</i></span></div>`);const select=()=>{const on=!item.classList.contains('is-selected');items.forEach(x=>{x.classList.remove('is-selected');x.setAttribute('aria-expanded','false');});if(on){item.classList.add('is-selected');item.setAttribute('aria-expanded','true');}};item.addEventListener('click',select);item.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();select();}});});
  }
  function refineRd(main,part){
    const page=main.querySelector('.rd-v41');if(!page)return;const title=page.querySelector('.rd-path h2');if(title)title.innerHTML=T('三条关联路径，<br>服务同一长期能力。','Three connected paths<br>for enduring capability.');
    if(part==='platform'){const img=page.querySelector('.rd-opening img');if(img){img.src='assets/concept/jinliyuan-v4-subpage-innovation-v2-20260828.png';img.alt='';img.insertAdjacentHTML?.('afterend','');}page.querySelector('.rd-opening figcaption')?.remove();}
  }
  function cleanupGallery(main){main.querySelector('.gallery-opening p')?.remove();const lead=main.querySelector('.inner-hero span');if(lead)lead.textContent=T('以企业展示图片了解工作环境与日常场景。','Explore the working environment and everyday scenes through company images.');}
  function apply(){const main=document.querySelector('main'),parts=route().split('/');if(!main)return;if(parts[0]==='home')refineHome(main);else stopHeroCanvas();if(parts[0]==='products')sortProducts(main);if(parts.join('/')==='about/culture')culture(main);if(parts[0]==='rd')refineRd(main,parts[1]);if(parts.join('/')==='about/company')cleanupGallery(main);}
  addEventListener('hashchange',()=>setTimeout(apply,95));setTimeout(apply,130);
})();

/* Public-source depth pass: structured supplement, not new claims. */
(() => {
  const route=()=>location.hash.replace(/^#\/?/,'')||'home',zh=()=>document.documentElement.lang!=='en',T=(z,e)=>zh()?z:e;
  function add(main,cls,html,target){if(main.querySelector(`.${cls}`))return;const anchor=target||main.lastElementChild;if(!anchor)return;anchor.insertAdjacentHTML('afterend',`<section class="${cls} editorial-reveal is-visible">${html}</section>`);}
  function apply(){const main=document.querySelector('main'),p=route().split('/');if(!main)return;
    if(p.join('/')==='about/profile'){add(main,'profile-public-depth',`<div><small>02 / COMPANY PROFILE</small><h2>${T('规模、人才与长期建设。','Scale, people and long-term development.')}</h2></div><div><p>${T('公司位于浙江省杭州湾畔。公开企业简介显示：占地 180,000 平方米，资产规模人民币 9.6 亿元，拥有员工 560 人；经过二十多年的发展，形成研发、生产与服务一体化的企业基础。','Located by Hangzhou Bay in Zhejiang, the public company profile states a 180,000-square-metre site, RMB 960 million in assets and a workforce of 560. Over more than two decades, it has formed an integrated foundation across research, manufacturing and service.')}</p><p>${T('公开企业简介还记载：具有高级职称的人员 32 人，中级及其他相关技术人员占职工总数的 42%。','The public profile also records 32 people with senior professional titles, while mid-level and other relevant technical personnel account for 42% of the workforce.')}</p><div class="profile-inline-facts"><span><b>560</b>${T('名员工','Employees')}</span><span><b>32</b>${T('高级职称人员','Senior-title personnel')}</span><span><b>42%</b>${T('中级及相关技术人员','Mid-level & relevant technical personnel')}</span></div></div>`,main.querySelector('.page-copy'));}
    // R&D content is carried by each route's editorial body; no provenance/context add-on is rendered.
    // Responsibility pages carry their public thematic text in the main editorial structure;
    // no secondary source-disclaimer block is exposed to visitors.
    if(p[0]==='careers')add(main,'career-public-depth',`<small>CAREER DETAILS</small><p>${T('三项历史岗位保留职责、任职资格、人数、地点和 2022 年 06 月截止信息；投递前请联系企业确认当前岗位状态。','Three historical openings retain their responsibilities, qualifications, headcount, location and June 2022 deadline. Contact the company to confirm current availability before applying.')}</p>`,main.querySelector('.job-board'));
  }
  addEventListener('hashchange',()=>setTimeout(apply,160));setTimeout(apply,195);
})();

/* V4.1 pagination system: compact identity banners and route-specific editorial framing. */
(() => {
  const route=()=>location.hash.replace(/^#\/?/,'')||'home', zh=()=>document.documentElement.lang!=='en', T=(z,e)=>zh()?z:e;
  const families={about:'about',products:'products',rd:'innovation',responsibility:'responsibility',updates:'news',disclosures:'news',careers:'connect',contact:'connect'};
  const category={about:T('关于我们','About'),products:T('产品与服务','Products & services'),rd:T('科技创新','Innovation'),responsibility:T('社会责任','Responsibility'),updates:T('新闻中心','News'),disclosures:T('信息公开','Disclosures'),careers:T('加入我们','Careers'),contact:T('联系我们','Contact')};
  const banner={about:'about',products:'products',rd:'innovation',responsibility:'responsibility',updates:'connect',disclosures:'connect',careers:'connect',contact:'connect'};
  const esc=s=>String(s||'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
  function standardBanner(main,parts){
    if(main.querySelector('.page-banner'))return;
    const old=main.querySelector('.inner-hero'); if(!old)return;
    const h=old.querySelector('h1')?.innerHTML||category[parts[0]]||'';
    const lead=old.querySelector('span')?.innerHTML||'';
    const tag=old.querySelector('p')?.textContent||category[parts[0]]||'';
    const family=banner[parts[0]]||'connect', cat=category[parts[0]]||esc(tag), warm=document.documentElement.dataset.theme==='warm', image=warm?'assets/concept/warm-v1/warm-editorial-banner-v1.svg':family==='innovation'?'assets/concept/jinliyuan-v4-subpage-innovation-v2-20260828.png':`assets/concept/jinliyuan-v4-subpage-${family}-20260828.png`;
    const current=old.querySelector('h1')?.textContent||cat;
    old.outerHTML=`<section class="page-banner page-banner--${family}" data-banner="${family}"><img src="${image}" alt="" aria-hidden="true"><div class="page-banner-veil"></div><div class="page-banner-inner"><nav class="page-crumb" aria-label="${T('页面路径','Breadcrumb')}"><a href="#/home">${T('首页','Home')}</a><i aria-hidden="true">/</i><span>${cat}</span><i aria-hidden="true">/</i><b>${esc(current)}</b></nav><p>${esc(tag)}</p><h1>${h}</h1><span>${lead}</span><div class="banner-path" aria-hidden="true"><i></i><i></i><i></i></div></div></section>`;
  }
  function injectOpening(main,parts){
    const key=parts.join('/');
    if(key==='about/company'&&!main.querySelector('.gallery-opening')){
      const gallery=main.querySelector('.masonry-gallery'); if(gallery)gallery.insertAdjacentHTML('beforebegin',`<section class="gallery-opening editorial-reveal"><small>01 / COMPANY VIEW</small><h2>${T('在真实现场资料中，<br>了解企业展示。','See the company through<br>its published visual record.')}</h2></section>`);
    }
    if(key==='about/profile'||key==='about/honors'){
      const target=main.querySelector('.page-copy,.about-page,.profile-page');
      if(target&&!main.querySelector('.about-editorial-marker'))target.insertAdjacentHTML('afterbegin',`<div class="about-editorial-marker editorial-reveal"><span>01</span><i></i><small>${key.endsWith('honors')?T('公开资质与记录','PUBLIC QUALIFICATIONS & RECORDS'):T('企业简介与发展脉络','COMPANY PROFILE & CONTINUITY')}</small></div>`);
    }
    if(parts[0]==='rd'){
      const target=main.querySelector('.rd-v41'); if(target&&!target.querySelector('.rd-route-mark'))target.insertAdjacentHTML('afterbegin',`<div class="rd-route-mark" aria-hidden="true"><span>01</span><i></i><i></i><i></i><b>03</b></div>`);
    }
    if(parts[0]==='responsibility'){
      main.classList.add(`responsibility-rhythm-${parts[1]||'overview'}`);
    }
    if(parts[0]==='updates'||parts[0]==='disclosures'){
  const list=main.querySelector('.news-v41,.disclosures-v41'); if(list&&!main.querySelector('.archive-marker'))list.insertAdjacentHTML('beforebegin',`<div class="archive-marker editorial-reveal"><span>01</span><i></i><small>${parts[0]==='updates'?T('公司新闻档案','COMPANY NEWS ARCHIVE'):T('环境与项目档案','ENVIRONMENT & PROJECT ARCHIVE')}</small></div>`);
    }
  }
  function reveal(main){
    const units=[...main.querySelectorAll('.culture-v41>article,.rd-opening,.rd-path,.responsibility-v41>article,.responsibility-actions section,.catalogue-intro,.catalogue nav,.product-list,.product-detail-v41>*,.adverse-v41>*,.career-v41>*,.job-board,.news-v41 a,.disclosures-v41 li,.local-enquiry,.gallery-opening,.masonry-gallery,.product-discovery,.about-editorial-marker,.archive-marker')];
    units.forEach((el,i)=>{el.classList.add('editorial-reveal');el.style.setProperty('--reveal-delay',`${Math.min(i%3,2)*75}ms`);});
    if(matchMedia('(prefers-reduced-motion: reduce)').matches||!('IntersectionObserver'in window)){units.forEach(x=>x.classList.add('is-visible'));return;}
    const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target);}}),{threshold:.08}); units.forEach(x=>observer.observe(x));
  }
  function apply(){
    const parts=route().split('/'),main=document.querySelector('main'),header=document.querySelector('.immersive-header'); if(!main)return;
    if(parts[0]==='home'){header?.classList.remove('subpage-mode');return;}
    header?.classList.add('subpage-mode'); main.classList.add('editorial-page',`page-family-${families[parts[0]]||'connect'}`); standardBanner(main,parts); injectOpening(main,parts); reveal(main);
  }
  addEventListener('hashchange',()=>setTimeout(apply,55)); setTimeout(apply,90);
})();

/* V4.1 stable desktop navigation: click to open, explicit actions to close. */
(() => {
  const bindCompactNav = () => {
    const header = document.querySelector('.immersive-header');
    if (!header || header.dataset.compactNav) return;
    header.dataset.compactNav = 'true';
    const triggers = [...header.querySelectorAll('.desktop-nav-trigger')];
    const panels = [...header.querySelectorAll('.desktop-menu-panel')];
    const close = () => {
      triggers.forEach((trigger) => trigger.setAttribute('aria-expanded', 'false'));
      panels.forEach((panel) => { panel.hidden = true; });
    };
    triggers.forEach((trigger) => trigger.addEventListener('click', () => {
      const panel = header.querySelector(`[data-menu-panel="${trigger.dataset.menu}"]`);
      const isOpen = panel && !panel.hidden;
      close();
      if (!isOpen && panel) {
        panel.hidden = false;
        trigger.setAttribute('aria-expanded', 'true');
      }
    }));
    panels.forEach((panel) => panel.querySelectorAll('a').forEach((link) => link.addEventListener('click', close)));
    document.addEventListener('pointerdown', (event) => { if (!header.contains(event.target)) close(); });
    document.addEventListener('keydown', (event) => { if (event.key === 'Escape') close(); });
  };
  addEventListener('hashchange', () => setTimeout(bindCompactNav));
  setTimeout(bindCompactNav);
})();

/* V4.1 homepage close: concise discovery mosaic and useful final routes. */
(() => {
  const copy = (z, e) => document.documentElement.lang === 'en' ? e : z;
  const prepare = () => {
    const section = document.querySelector('.exploration-gateway');
    if (!section) return;
    if (!section.dataset.mosaic) {
      const source = section.querySelector('img')?.getAttribute('src') || 'assets/concept/jinliyuan-v4-exploration-20260828.png';
      section.dataset.mosaic = 'true';
      section.classList.add('exploration-mosaic');
      section.innerHTML = `<article class="mosaic-feature"><figure><img src="${source}" alt=""></figure><div><p>EXPLORE WHAT COMES NEXT</p><h2>${copy('探索下一步的可能。','Explore what comes next.')}</h2><span>${copy('连接科研平台、产品研发与技术协作，在既有公开业务范围内继续探索。','Connect research platform, product development and technical collaboration within the existing public business scope.')}</span><a href="#/rd/platform"><b>${copy('科研平台','Research Platform')}</b><i aria-hidden="true">→</i></a></div></article><a class="mosaic-route mosaic-development" href="#/rd/development"><small>02 / ${copy('产品研发','PRODUCT DEVELOPMENT')}</small><h3>${copy('从产品资料与工艺工作，继续探索。','Continue from product records and process work.')}</h3><span>${copy('查看产品研发','Explore product development')}</span><i aria-hidden="true">→</i></a><a class="mosaic-route mosaic-collaboration" href="#/rd/collaboration"><small>03 / ${copy('技术协作','TECHNICAL COLLABORATION')}</small><h3>${copy('让专业沟通，连接下一步。','Let professional dialogue connect what comes next.')}</h3><span>${copy('查看技术协作','Explore technical collaboration')}</span><i aria-hidden="true">→</i></a>`;
    }
    const close = document.querySelector('.partner-cta');
    if (close && !close.dataset.routes) {
      close.dataset.routes = 'true';
      close.classList.add('closing-routes');
      close.innerHTML = `<div class="closing-routes-intro"><p>CONTINUE THE CONVERSATION</p><h2>${copy('从一次清晰的沟通开始。','Start with a clear conversation.')}</h2></div><nav><a href="#/careers"><small>01</small><b>${copy('加入我们','Careers')}</b><span>${copy('查看历史公开岗位','View historical openings')}</span><i aria-hidden="true">→</i></a><a href="#/contact"><small>02</small><b>${copy('联系我们','Contact us')}</b><span>${copy('按业务方向进入沟通渠道','Find the right business route')}</span><i aria-hidden="true">→</i></a><a class="closing-disclosure" href="#/disclosures"><small>03</small><b>${copy('信息公开','Disclosures')}</b><span>${copy('查阅环境与项目公开记录','View environment and project records')}</span><i aria-hidden="true">→</i></a></nav>`;
    }
    if (matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
      section.classList.add('is-visible');
      return;
    }
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    }), { threshold: 0.16 });
    observer.observe(section);
  };
  addEventListener('hashchange', () => setTimeout(prepare));
  setTimeout(prepare);
})();

/* V4.1 completion pass: replaces the temporary content shell with independent public-content routes. */
(() => {
  const data=window.JINLIYUAN_DATA||{product:[],news:[]}, media=window.JINLIYUAN_PRODUCT_MEDIA||{}, asset='assets/official/';
  const route=()=>location.hash.replace(/^#\/?/,'')||'home', zh=()=>document.documentElement.lang!=='en', T=(z,e)=>zh()?z:e;
  const A=(to,label,cls='')=>`<a class="${cls}" href="#/${to}">${label}</a>`;
  const clean=p=>(p?.title||p?.name||'').replace(/\s*\([^)]*\)/g,'').trim();
  const type=p=>[6,7,12,13,14,16,54,55].includes(p.id)?'formulations':p.id>=25&&p.id<=53?'intermediate':p.kind==='other'?'other':'api';
  const typeName=p=>({formulations:T('制剂','Formulations'),intermediate:T('中间体','Intermediates'),other:T('其他产品','Other products'),api:T('原料药','APIs')})[type(p)];
  const getCas=p=>(p.auditedText||'').match(/CAS\s*(?:NO|号)?[：:.\s]*([^\s；，]+)/i)?.[1]||'—';
const hero=(tag,h,lead)=>{const root=route().split('/')[0],family=({about:'about',products:'products',rd:'innovation',responsibility:'responsibility',updates:'connect',disclosures:'connect',careers:'connect',contact:'connect'})[root]||'connect',cat=T(({about:'关于金立源',products:'产品与服务',rd:'科技创新',responsibility:'社会责任',updates:'新闻中心',disclosures:'信息公开',careers:'加入我们',contact:'联系我们'})[root]||'金立源',({about:'About',products:'Products & services',rd:'Innovation',responsibility:'Responsibility',updates:'News',disclosures:'Disclosures',careers:'Careers',contact:'Contact'})[root]||'Kinglyuan'),warm=document.documentElement.dataset.theme==='warm',image=warm?'assets/concept/warm-v1/warm-editorial-banner-v1.svg':family==='innovation'?'assets/concept/jinliyuan-v4-subpage-innovation-v2-20260828.png':`assets/concept/jinliyuan-v4-subpage-${family}-20260828.png`;return `<section class="page-banner page-banner--${family}" data-banner="${family}"><img src="${image}" alt="" aria-hidden="true"><div class="page-banner-veil"></div><div class="page-banner-inner"><nav class="page-crumb" aria-label="${T('页面路径','Breadcrumb')}"><a href="#/home">${T('首页','Home')}</a><i aria-hidden="true">/</i><span>${cat}</span><i aria-hidden="true">/</i><b>${h}</b></nav><p>${tag}</p><h1>${h}</h1><span>${lead}</span><div class="banner-path" aria-hidden="true"><i></i><i></i><i></i></div></div></section>`;};
  const visual=p=>media[p.id]?`<img class="product-thumb" src="${asset}${media[p.id]}" alt="${clean(p)}">`:`<span class="category-thumb" aria-label="${T(`${typeName(p)}类别`,`${typeName(p)} category`)}"><i>${String(p.id).padStart(2,'0')}</i><b>${typeName(p).slice(0,1)}</b></span>`;
  function culture(){return `${hero('CULTURE',T('企业文化','Culture'),T('关爱生命，健康立源。','Care for life. Health through Kinglyuan.'))}<section class="culture-v41"><article class="culture-purpose"><small>01 / PURPOSE</small><h2>${T('关爱生命，<br>健康立源。','Care for life.<br>Health through Kinglyuan.')}</h2><p>${T('这是企业公开文化的核心宗旨：把对生命与健康的关切，放在长期发展的起点。','This public purpose places care for life and health at the start of long-term development.')}</p></article><div class="culture-orbit" aria-hidden="true"><i></i><i></i><i></i><b>KLY</b></div><article class="culture-values"><small>02 / CULTURE</small><h2>${T('团结、拼搏、<br>求实、创新。','Unity. Endeavour.<br>Pragmatism. Innovation.')}</h2><p>${T('以共同目标、务实行动与持续进取推进日常工作，让文化成为可感知的工作方式。','Shared goals, practical action and continued progress make culture a visible way of working.')}</p></article><article class="culture-people"><small>03 / PEOPLE</small><h2>${T('人尽其才，<br>物尽其用。','People and potential,<br>put to good use.')}</h2><p>${T('给予信任、赋予责任、共享价值；为人才建立能够充分展示自身能力的平台。','Build a platform for capability through trust, responsibility and shared value.')}</p></article></section>`;}
  const rd={platform:[T('科研平台','Research platform'),T('以研发、生产与服务的一体化基础，支持长期能力建设。','An integrated foundation across R&D, manufacturing and service supports long-term capability.'),T('公司以研发、生产与服务协同推进长期建设，研发人员多年占职工总人数10%以上。','The company advances long-term capability through R&D, manufacturing and service, with R&D personnel accounting for more than 10% of staff for consecutive years.'),[T('专业人才','Specialist talent'),T('产品资料','Product records'),T('工艺研究','Process work')],'home-project-3.jpg'],development:[T('产品研发','Product development'),T('从产品资料与工艺工作出发，保持清晰的研发脉络。','Keep a clear R&D thread from product records and process work.'),T('产品研发围绕原料药、制剂、中间体及其他产品的资料与工艺工作持续展开。','Product development continues through product records and process work across APIs, formulations, intermediates and other products.'),[T('资料梳理','Information'),T('工艺研究','Process work'),T('研发连接','R&D links')],'company-qy2.jpg'],collaboration:[T('技术协作','Technical collaboration'),T('让产品、制造与专业沟通，形成有序连接。','Connect products, manufacturing and professional dialogue in an orderly way.'),T('技术协作连接产品、制造与研发相关事项，并提供清晰的沟通入口。','Technical collaboration connects product, manufacturing and R&D matters through clear dialogue routes.'),[T('产品资料','Product information'),T('制造事项','Manufacturing matters'),T('研发合作','R&D collaboration')],'gallery/qy11.jpg'],outcomes:[T('科研成果','Research outcomes'),T('以长期积累连接科研与产业实践。','Connect research and industrial practice through long-term accumulation.'),T('公司获评国家高新技术企业、绍兴市专利示范企业，并已完成近百项涉及医药中间体、原料药和制剂的国内外注册审批。','The company has been recognised as a National High-tech Enterprise and a Shaoxing Patent Demonstration Enterprise, and has completed nearly one hundred domestic and overseas registrations involving pharmaceutical intermediates, APIs and formulations.'),[T('资质记录','Qualification records'),T('产品资料','Product records'),T('技术协作','Technical collaboration')],'company-qy2.jpg'],'production-quality':[T('生产与质量','Production & quality'),T('生产体系与质量管理，共同构成稳定运行的日常基础。','Production systems and quality management form the everyday foundation for stable operation.'),T('原料药、制剂、中间体及其他产品构成业务基础；生产体系、过程衔接与质量沟通协同运行。','APIs, formulations, intermediates and other products form the business foundation, supported by production systems, process coordination and quality dialogue.'),[T('生产体系','Production system'),T('过程关注','Process attention'),T('质量沟通','Quality dialogue')],'company-qy2.jpg'],quality:[T('质量管理','Quality management'),T('让质量相关事项保持清晰的沟通入口。','Keep a clear communication route for quality-related matters.'),T('质量管理将业务范围、质量沟通与不良事件报告组织为清晰的服务路径。','Quality management brings business scope, quality dialogue and adverse-event reporting into a clear service pathway.'),[T('业务范围','Business scope'),T('质量沟通','Quality dialogue'),T('不良事件报告','Adverse-event reporting')],'company-qy2.jpg']};
  Object.assign(rd,{
    platform:[rd.platform[0],rd.platform[1],T('研发人员与专业技术人员共同支撑产品资料、工艺研究与长期能力建设。','R&D and technical personnel support product records, process work and long-term capability.'),rd.platform[3],rd.platform[4]],
    development:[rd.development[0],rd.development[1],T('产品研发围绕产品资料、工艺研究与研发连接持续展开。','Product development continues through product records, process work and R&D connections.'),rd.development[3],rd.development[4]],
    collaboration:[rd.collaboration[0],rd.collaboration[1],T('技术协作连接产品、制造与研发相关事项，并提供清晰的沟通入口。','Technical collaboration connects product, manufacturing and R&D matters through clear dialogue routes.'),rd.collaboration[3],rd.collaboration[4]],
    outcomes:[rd.outcomes[0],rd.outcomes[1],T('科研成果页呈现企业资质记录、产品资料与技术协作之间的长期积累。','Research outcomes brings together qualification records, product information and technical collaboration.'),rd.outcomes[3],rd.outcomes[4]],
    'production-quality':[rd['production-quality'][0],rd['production-quality'][1],T('生产体系、过程关注与质量沟通共同支撑稳定运行。','Production systems, process attention and quality dialogue support stable operation.'),rd['production-quality'][3],rd['production-quality'][4]],
    quality:[rd.quality[0],rd.quality[1],T('质量管理保持业务范围、质量沟通与不良事件报告之间的清晰连接。','Quality management keeps a clear connection between business scope, quality dialogue and adverse-event reporting.'),rd.quality[3],rd.quality[4]]
  });
  function rdPage(key){const x=rd[key]||rd.platform;return `${hero('RESEARCH · MANUFACTURING',x[0],x[1])}<section class="rd-v41 rd-${key}"><div class="rd-opening"><div><small>01 / LONG-TERM CAPABILITY</small><h2>${x[0]}</h2><p>${x[2]}</p></div><figure><img src="${asset}${x[4]}" alt=""></figure></div><div class="rd-path"><div><small>02 / WORKING PATHWAY</small><h2>${T('以不同环节，<br>连接同一条长期路径。','Distinct stages,<br>one enduring pathway.')}</h2></div><ol>${x[3].map((n,i)=>`<li><span>0${i+1}</span><b>${n}</b></li>`).join('')}</ol></div>${key==='collaboration'?`<div class="rd-action">${A('contact',T('发起合作咨询','Start an enquiry'),'line-link')}</div>`:''}</section>`;}
  const resp={community:[T('公益慈善','Community'),T('关爱生命，也将责任延展至公共价值。','Care for life and extend responsibility into public value.'),T('以关爱生命、回馈社会与持续关注，构成长期责任的公共价值方向。','Care for life, public value and ongoing attention shape a long-term direction for community responsibility.'),[T('关爱生命','Care for life'),T('回馈社会','Public value'),T('持续关注','Ongoing attention')]],health:[T('职业健康','Occupational health'),T('关注员工健康，是长期制造活动中的基础责任。','Attention to employee health is a foundational responsibility in long-term manufacturing.'),T('职业健康围绕员工健康、工作环境与人才沟通组织日常关注。','Occupational health brings together employee health, the work environment and people dialogue.'),[T('健康关注','Health attention'),T('工作环境','Work environment'),T('人才沟通','People dialogue')]],safety:[T('安全生产','Production safety'),T('把安全意识放入每一个日常环节。','Place safety awareness in every everyday stage.'),T('安全生产将日常意识、生产环节与责任沟通连成连续路径。','Production safety connects everyday awareness, production stages and responsible dialogue.'),[T('日常意识','Everyday awareness'),T('生产环节','Production stages'),T('责任沟通','Responsible dialogue')]],environment:[T('环境保护','Environmental protection'),T('把环境责任，放入可查阅的记录。','Place environmental responsibility in accessible records.'),T('环境保护与环境、项目、监测和验收资料形成清晰的查阅路径。','Environmental protection connects clearly with environment, project, monitoring and acceptance records.'),[T('环境关注','Environmental attention'),T('项目公示','Project notices'),T('资料查阅','Records')]],sustainability:[T('可持续发展','Sustainability'),T('以长期视角，连接生产、环境与公共责任。','Connect manufacturing, environment and public responsibility with a long-term view.'),T('公益慈善、职业健康、安全生产与环境保护共同构成责任协同的长期框架。','Community, health, safety and environmental protection form a long-term framework for responsible coordination.'),[T('长期视角','Long-term view'),T('责任协同','Responsible coordination'),T('持续建设','Continuous work')]]};
  Object.assign(resp,{
    community:[resp.community[0],resp.community[1],T('公益慈善以关爱生命、回馈社会与持续关注构成长期责任的公共价值方向。','Community responsibility connects care for life, public value and ongoing attention as a long-term direction.'),resp.community[3]],
    health:[resp.health[0],resp.health[1],T('职业健康围绕员工健康、工作环境与人才沟通组织日常关注。','Occupational health brings together employee health, the work environment and people dialogue.'),resp.health[3]],
    safety:[resp.safety[0],resp.safety[1],T('安全生产将日常意识、生产环节与责任沟通连成连续路径。','Production safety connects everyday awareness, production stages and responsible dialogue.'),resp.safety[3]],
    environment:[resp.environment[0],resp.environment[1],T('环境保护与环境、项目、监测和验收资料形成清晰的查阅路径。','Environmental protection connects clearly with environment, project, monitoring and acceptance records.'),resp.environment[3]],
    sustainability:[resp.sustainability[0],resp.sustainability[1],T('可持续发展以长期视角连接生产、环境与公共责任。','Sustainability connects manufacturing, environment and public responsibility through a long-term view.'),resp.sustainability[3]]
  });
  const responsibilityDetails={
    community:[T('将关爱生命的价值延展至公共层面，并以持续关注保持长期责任视角。','Extend care for life into the public sphere and keep a long-term perspective through continued attention.'),T('以回馈社会作为责任方向之一，让关怀融入长期建设。','Public value is one direction of responsibility, bringing care into long-term development.'),T('通过五个主题的相互连接，呈现公共价值与企业长期建设的关系。','The five connected themes show the relationship between public value and long-term company development.')],
    health:[T('关注员工健康与工作环境，是长期制造活动中相互关联的基础议题。','Employee health and the work environment are connected foundations for long-term manufacturing.'),T('人才沟通让健康关注进入日常协作；具体制度以企业确认资料为准。','People dialogue brings health attention into everyday collaboration; specific policies remain subject to company confirmation.'),T('健康、环境与安全在长期责任框架中彼此关联，而非孤立处理。','Health, environment and safety are connected rather than isolated within the long-term responsibility framework.')],
    safety:[T('将安全意识放入日常环节，形成从生产关注到责任沟通的连续路径。','Place safety awareness in everyday stages to form a continuous path from production attention to responsible dialogue.'),T('生产环节与沟通路径相互配合，让安全意识进入每一个日常节点。','Production stages and communication routes work together to bring safety awareness into every everyday touchpoint.'),T('安全生产与职业健康、环境保护共同构成长期运行中的基本关注。','Production safety sits alongside occupational health and environmental protection as a basic long-term concern.')],
    environment:[T('将环境关注与可查阅的项目、监测及验收资料分开组织，避免与企业新闻混杂。','Organise environmental attention separately from accessible project, monitoring and acceptance records, rather than mixing it with company news.'),T('相关环境与项目资料保留独立查阅路径，方便按公开记录继续了解。','Related environmental and project material retains its own route for continued reference by public record.'),T('信息公开为环境与项目档案提供清晰入口。','Disclosures provides a clear route to environmental and project archives.')],
    sustainability:[T('以长期视角连接生产、环境与公共责任，使不同主题形成一条连续的建设路径。','A long-term view connects manufacturing, environment and public responsibility into one continuous path.'),T('公益慈善、职业健康、安全生产与环境保护共同构成责任协同的四个关联面向。','Community, health, safety and environmental protection form four connected aspects of responsible coordination.'),T('持续建设强调长期关注，让责任方向落实到日常协同。','Continuous work emphasises long-term attention and brings responsibility into everyday coordination.')]
  };
  function responsibility(key){
    if(!key)return `${hero('RESPONSIBILITY',T('社会责任','Responsibility'),T('关爱生命，也关注每一个长期运行的环节。','Care for life and every long-term operating link.'))}<section class="responsibility-overview"><div><small>LONG-TERM RESPONSIBILITY</small><h2>${T('责任不是同一张概览，<br>而是五条清晰的路径。','Responsibility is not one overview,<br>but five clear paths.')}</h2></div><nav>${Object.entries(resp).map(([k,v],i)=>A(`responsibility/${k}`,`<span>0${i+1}</span><b>${v[0]}</b><i>↗</i>`)).join('')}</nav></section>`;
    const x=resp[key]||resp.community, detail=responsibilityDetails[key]||responsibilityDetails.community;
    return `${hero('RESPONSIBILITY',x[0],x[1])}<section class="responsibility-v41"><article><small>01 / RESPONSIBILITY</small><h2>${x[1]}</h2><p>${x[2]}</p></article><div class="responsibility-ring" aria-hidden="true"><i></i><i></i><b>${String(Object.keys(resp).indexOf(key)+1).padStart(2,'0')}</b></div><div class="responsibility-actions">${x[3].map((v,i)=>`<section><span>0${i+1}</span><h3>${v}</h3><p>${key==='environment'&&i===2?A('disclosures',T('查看信息公开','View disclosures')):detail[i]}</p></section>`).join('')}</div></section>`;
  }
function products(){const part=route().split('/')[1]||'all';if(part==='adverse')return adverse();if(/^\d+$/.test(part))return detail(Number(part));const list=data.product.filter(p=>part==='all'||type(p)===part);return `${hero('PRODUCTS & SERVICES',T('产品与服务','Products & services'),T('原料药、中间体、制剂及其他产品目录。','A directory of APIs, intermediates, formulations and other products.'))}<section class="catalogue refined-catalogue"><div class="catalogue-intro"><small>PRODUCT DIRECTORY</small></div><nav>${[['all',T('全部','All')],['api',T('原料药','APIs')],['formulations',T('制剂','Formulations')],['intermediate',T('中间体','Intermediates')],['other',T('其他产品','Other')],['adverse',T('不良事件与反应','Adverse events')]].map(([k,n])=>A(`products/${k==='all'?'':k}`,n,k===part?'selected':'')).join('')}</nav><div class="product-list">${list.map(p=>`<a href="#/products/${p.id}">${visual(p)}<i>${typeName(p)}</i><b>${clean(p)}</b><span>${getCas(p)}</span><em>${T('查看资料','View')}</em></a>`).join('')}</div></section>`;}
  function detail(id){const p=data.product.find(x=>x.id===id);if(!p)return hero('PRODUCT INFORMATION','404',T('未找到产品资料。','Product record not found.'));return `${hero('PRODUCT INFORMATION',clean(p),T('公开产品资料','Public product record'))}<section class="product-detail-v41"><div>${visual(p)}</div><article><small>PRODUCT RECORD</small><h2>${clean(p)}</h2><dl><div><dt>CAS</dt><dd>${getCas(p)}</dd></div><div><dt>${T('类别','Category')}</dt><dd>${typeName(p)}</dd></div></dl><p>${(p.auditedText||'').slice(0,480)}</p>${A('contact',T('咨询产品资料','Enquire about this product'),'line-link')}</article></section>`;}
  function adverse(){return `${hero('ADVERSE EVENT REPORTING',T('不良事件与反应','Adverse event reporting'),T('填写基础信息后，请通过企业确认的专用渠道提交。','Complete the basic information, then use the company-confirmed dedicated channel.'))}<section class="adverse-v41"><div><small>REPORTING INFORMATION</small><h2>${T('报告说明','How to report')}</h2><p>${T('本页仅提供基础填写示例。当前不发送、不保存信息；不提供附件上传。专用电话和邮箱须由企业最终确认。','This page provides a basic reporting example only. It does not send or save information, accepts no uploads, and keeps dedicated contacts pending company confirmation.')}</p><b>${T('专用电话','Dedicated telephone')}：XXX-XXXX-XXXX</b><b>${T('专用邮箱','Dedicated email')}：adr-xxx@kinglyuan.com（${T('待企业确认','pending company confirmation')}）</b></div>${form('adverse')}</section>`;}
  const jobs=[[T('QC（分析检测）','QC (analytical testing)'),'20',T('上虞','Shangyu'),[T('负责原辅料、中间体及成品的分析检测相关工作。','Undertake analytical testing related to raw materials, intermediates and finished products.'),T('按岗位要求完成检验记录、数据整理及实验室日常协作。','Complete test records, data organisation and laboratory collaboration as required.')],[T('化学、药学、分析等相关专业；具备责任意识与团队协作能力。','Chemistry, pharmacy or analytical background; responsibility and teamwork.'),T('能适应生产型企业的规范化工作要求。','Able to work within standardised manufacturing requirements.')]],[T('工艺研发','Process R&D'),'5',T('上虞 / 上海奉贤','Shangyu / Shanghai Fengxian'),[T('参与医药产品工艺研发及相关实验、资料整理工作。','Participate in pharmaceutical process R&D, related experiments and document organisation.'),T('配合研发项目的工艺优化、放大及跨部门沟通。','Support process optimisation, scale-up and cross-functional communication.')],[T('化学、制药工程或相关专业；具备研发思维与实验基础。','Chemistry, pharmaceutical engineering or related background with R&D thinking and laboratory foundations.'),T('具备良好的沟通、学习与执行能力。','Strong communication, learning and execution skills.')]],[T('专业技术人员 / 管培生','Technical professionals / management trainees'),'5',T('上虞','Shangyu'),[T('岗位方向包括 QA/QC、车间技术、EHS、设备设施仪器及其他职能。','Role directions include QA/QC, workshop technology, EHS, equipment/facilities/instruments and other functions.'),T('在实际岗位中积累专业能力，参与团队协作。','Build professional capability through practical work and team collaboration.')],[T('相关专业背景，认可长期、规范的工作方式。','Relevant professional background and alignment with long-term, disciplined work.'),T('具备主动学习、责任意识与协作能力。','Proactive learning, responsibility and collaboration.')]]];
  function careers(){return `${hero('CAREERS',T('加入我们','Careers'),T('让能力在真实工作中被看见。','Let capability be seen through real work.'))}<section class="career-v41"><div><small>WORKING WITH US</small><h2>${T('人尽其才，<br>物尽其用。','People and potential,<br>put to good use.')}</h2><p>${T('给予信任、赋予责任、共享价值；让人才在企业长期建设中充分展示自身能力。','Trust, responsibility and shared value let people demonstrate capability through long-term company development.')}</p></div><img src="${asset}gallery/qy11.jpg" alt=""></section><section class="job-board"><div><small>HISTORICAL PUBLIC OPENINGS</small><h2>${T('历史公开岗位','Historical public openings')}</h2><p>${T('截止时间：2022年06月。历史公开岗位，投递前请联系确认。盛经理：13906856629（微信同号）。','Deadline: June 2022. Historical public openings; contact to confirm before applying. Manager Sheng: 13906856629 (same WeChat).')}</p></div>${jobs.map((j,i)=>`<details class="job-detail"><summary><span>0${i+1}</span><b>${j[0]}</b><em>${j[1]} ${T('人','positions')} · ${j[2]}</em><i>+</i></summary><div><section><h3>${T('岗位职责','Responsibilities')}</h3><ul>${j[3].map(v=>`<li>${v}</li>`).join('')}</ul></section><section><h3>${T('任职资格','Qualifications')}</h3><ul>${j[4].map(v=>`<li>${v}</li>`).join('')}</ul></section></div></details>`).join('')}</section>`;}
  function form(kind='contact'){return `<form class="local-form ${kind}-form"><label>${T('公司 / 机构','Company')}<input ${kind==='contact'?'required':''}></label><label>${T('姓名 / 报告人','Name / reporter')}<input required></label><label>${T('电话或邮箱','Phone or email')}<input required></label><label>${T('方向 / 涉及产品','Direction / product')}<select><option>${T('产品与销售','Products & sales')}</option><option>${T('研发合作','R&D collaboration')}</option><option>${T('采购与供应','Procurement & supply')}</option></select></label><label class="form-wide">${T('留言 / 事件描述','Message / event description')}<textarea required></textarea></label><button>${T('提交本地演示','Submit local demo')}</button><output></output></form>`;}
  const isDisclosure=n=>/(公示|环境|监测|验收|土壤|地下水|项目)/.test(n.title||'');
  function updates(){const list=data.news.filter(n=>!isDisclosure(n));return `${hero('NEWS',T('企业动态','Company updates'),T('只呈现公司新闻；环境与项目资料独立归档。','Company news only; environment and project records are separately archived.'))}<section class="news-v41"><small>COMPANY NEWS</small><h2>${T('企业新闻','Company news')}</h2>${list.map(n=>`<a href="#/updates/${n.id}"><time>${n.date||''}</time><b>${n.title||n.name||''}</b><i>↗</i></a>`).join('')||`<p>${T('暂无公司新闻记录。','No company-news records.')}</p>`}</section>`;}
  function disclosures(){const list=data.news.filter(isDisclosure);return `${hero('DISCLOSURES',T('信息公开','Disclosures'),T('环境、项目、监测与验收资料独立归档。','Environment, project, monitoring and acceptance records are separately archived.'))}<section class="disclosures-v41"><div><small>PUBLIC ARCHIVE</small><h2>${T('环境与项目公开','Environment & project disclosures')}</h2><p>${T('按公开日期整理历史记录，便于查阅。','Historical public records organised by date for straightforward access.')}</p></div><ol>${list.map((n,i)=>`<li><span>${String(i+1).padStart(2,'0')}</span><time>${n.date||''}</time><b>${n.title||n.name||''}</b><i>${T('公开记录','Public record')}</i></li>`).join('')}</ol></section>`;}
  function gallery(){const ids=[1,2,4,5,6,7,9,11,13,14,3,8,10,12,15];return `${hero('COMPANY EXHIBITION',T('企业展示','Company exhibition'),T('从工作环境与日常场景，了解金立源。','Explore Kinglyuan through working environments and everyday scenes.'))}<section class="masonry-gallery">${ids.map((id,i)=>`<button class="gallery-tile" data-image="${id}"><img src="${asset}gallery/qy${id}.jpg" alt="${T(`企业展示 ${id}`,`Company exhibition ${id}`)}" loading="lazy"><span>${String(i+1).padStart(2,'0')}</span></button>`).join('')}</section><dialog class="gallery-lightbox"><button class="close">×</button><button class="prev">←</button><figure><img alt=""><figcaption></figcaption></figure><button class="next">→</button></dialog>`;}
  function contact(){return `${hero('CONTACT',T('联系我们','Contact'),T('按业务方向找到对应的沟通渠道。','Find the right channel for your enquiry.'))}<section class="contacts">${[['01',T('公司办公室','Company office'),'+86-575-82738388','kinglyuan@kinglyuan.com'],['02',T('原料药 / 中间体 / 氰酸脂 / 催化剂','API / intermediate / cyanate ester / catalyst'),'+86-575-82737898 / 82738387 / 82738386','api@kinglyuan.com'],['03',T('制剂产品','Formulation products'),'+86-575-82738398 / 82737868 / 82738389','zhj@kinglyuan.com']].map(x=>`<article><p>${x[0]}</p><h2>${x[1]}</h2><b>${x[2]}</b><span>${x[3]}</span></article>`).join('')}</section><section class="enquiry local-enquiry"><div><small>ENQUIRY</small><h2>${T('在线留言 / 合作咨询','Enquiry / collaboration')}</h2><p>${T('填写基础信息，开始一次清晰的沟通。','Share the basics to start a clear conversation.')}</p></div>${form()}</section>`;}
  function bind(){document.querySelectorAll('.local-form').forEach(f=>f.addEventListener('submit',e=>{e.preventDefault();const out=f.querySelector('output');if(out)out.textContent=T('已显示本地提交状态：信息未发送、未保存。','Local status shown: nothing was sent or saved.');}));const d=document.querySelector('.gallery-lightbox'),ids=[1,2,4,5,6,7,9,11,13,14,3,8,10,12,15];let n=0;const show=i=>{n=(i+ids.length)%ids.length;const id=ids[n];d.querySelector('img').src=`${asset}gallery/qy${id}.jpg`;d.querySelector('figcaption').textContent=T(`企业展示 ${String(n+1).padStart(2,'0')}`,`Company exhibition ${String(n+1).padStart(2,'0')}`);};document.querySelectorAll('.gallery-tile').forEach(b=>b.addEventListener('click',()=>{n=ids.indexOf(+b.dataset.image);show(n);d.showModal();}));d?.querySelector('.close')?.addEventListener('click',()=>d.close());d?.querySelector('.prev')?.addEventListener('click',()=>show(n-1));d?.querySelector('.next')?.addEventListener('click',()=>show(n+1));}
  function enhance(){const main=document.querySelector('main');if(!main)return;const bits=route().split('/'),r=bits[0],s=bits[1]||'';if(r==='home'){const old=main.querySelector('.continuum'),oldFacts=main.querySelector('.facts');if(old&&!main.querySelector('.mission-stage')){old.outerHTML=`<section class="mission-stage"><div><p>OUR MISSION</p><h2>${T('让可靠制造，成为健康期待的一部分。','Let reliable manufacturing become part of every expectation of health.')}</h2></div><article><p>${T('围绕原料药、制剂及相关产品的研发、生产与服务，持续建设清晰、可靠的长期能力。','Across APIs, formulations and related products, we build clear, dependable capability for the long term through R&D, manufacturing and service.')}</p>${A('about',T('了解金立源','About Kinglyuan'),'mission-link')}</article></section><section class="capability-stage"><div class="capability-stage-head"><p>LONG-TERM CAPABILITY</p><h2>${T('从产品出发，<br>连接长期能力。','From products to<br>long-term capability.')}</h2></div><div class="capability-editorial">${[['products','产品与服务','Products & services','公开产品资料与产品咨询。','Public records and product enquiries.','products'],['rd/production-quality','生产体系','Production system','围绕既有业务范围组织生产与过程衔接。','A production foundation organised around the public business scope.','production'],['rd/quality','质量管理','Quality management','让质量相关事项保持清晰的沟通入口。','Clear routes for quality-related communication.','quality'],['rd/collaboration','技术协作','Technical collaboration','连接产品、制造与专业沟通。','Connect products, manufacturing and professional dialogue.','collaboration']].map(([to,z,e,zd,ed,img],i)=>`<a class="capability-chapter" href="#/${to}" style="--chapter:${i}"><figure><img src="assets/concept/jinliyuan-v4-capability-${img}-20260828.png" alt=""><span class="chapter-arrow" aria-hidden="true"><i></i></span></figure><small>0${i+1} / ${T('能力章节','CAPABILITY')}</small><h3>${T(z,e)}</h3><p>${T(zd,ed)}</p></a>`).join('')}</div></section>`;if(oldFacts)oldFacts.outerHTML=`<section class="why-stage"><div class="why-stage-head"><div><p>WHY KINGLYUAN</p><h2>${T('为什么选择金立源？','Why Kinglyuan?')}</h2></div>${A('about',T('了解更多','Learn more'),'why-link')}</div><section class="facts"><div><strong>20<sup>+</sup></strong><span>${T('年发展历程','Years of development')}</span></div><div><strong>47<sup>+</sup></strong><span>${T('公开产品资料','Public product records')}</span></div><div><strong><small>${T('¥','RMB')}</small>960<em>M</em></strong><span>${T('资产规模','Assets')}</span></div><div><strong>180,000<em>㎡</em></strong><span>${T('占地面积','Site area')}</span></div></section></section>`;const cards=[...main.querySelectorAll('.capability-chapter')];if(!matchMedia('(prefers-reduced-motion: reduce)').matches&&'IntersectionObserver'in window){const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target)}}),{threshold:.16});cards.forEach(card=>observer.observe(card));}else cards.forEach(card=>card.classList.add('is-visible'));}}let html='';if(r==='about'&&s==='culture')html=culture();else if(r==='about'&&s==='company')html=gallery();else if(r==='rd')html=rdPage(s);else if(r==='responsibility')html=responsibility(s);else if(r==='products')html=products();else if(r==='careers')html=careers();else if(r==='contact')html=contact();else if(r==='updates')html=updates();else if(r==='disclosures')html=disclosures();if(html){main.innerHTML=html;bind();}}
  addEventListener('hashchange',enhance);enhance();
})();

/* Final presentation pass: runs in the same rendering turn so route changes do not expose
   an interim catalogue, banner, or earlier copy before the visitor-facing view is ready. */
(() => {
  const route=()=>location.hash.replace(/^#\/?/,'')||'home';
  const zh=()=>document.documentElement.lang!=='en';
  const T=(z,e)=>zh()?z:e;
  const replaceText=(node,z,e)=>{if(node)node.textContent=T(z,e);};
  function sortDirectory(main){
    const nav=main.querySelector('.refined-catalogue nav');
    if(nav){const order=['#/products/','#/products/formulations','#/products/api','#/products/intermediate','#/products/other','#/products/adverse'];[...nav.querySelectorAll('a')].sort((a,b)=>order.indexOf(a.getAttribute('href'))-order.indexOf(b.getAttribute('href'))).forEach(a=>nav.append(a));}
    const rows=[...main.querySelectorAll('.product-list>a')];
    const ranks={ [T('制剂','Formulations')]:0,[T('原料药','APIs')]:1,[T('中间体','Intermediates')]:2,[T('其他产品','Other products')]:3};
    rows.sort((a,b)=>{const ra=ranks[a.querySelector('i')?.textContent.trim()]??9,rb=ranks[b.querySelector('i')?.textContent.trim()]??9;const ma=a.querySelector('.product-thumb')?0:1,mb=b.querySelector('.product-thumb')?0:1;return ra-rb||ma-mb;}).forEach(row=>row.parentElement.append(row));
    replaceText(main.querySelector('.catalogue-intro small'),'产品目录','PRODUCT DIRECTORY');
  }
  function animateFacts(main){
    const facts=[...main.querySelectorAll('.why-stage .facts strong')];
    if(!facts.length)return;
    const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
    const start=el=>{
      if(el.dataset.counted)return;el.dataset.counted='true';
      const source=el.innerHTML,target=Number((el.textContent||'').replace(/[^0-9]/g,''));
      if(!target||reduced)return;
      const digits=String(target).replace(/\B(?=(\d{3})+(?!\d))/g,',');
      const first=source.indexOf(digits);if(first<0)return;
      const before=source.slice(0,first),after=source.slice(first+digits.length),from=performance.now(),duration=900;
      const tick=now=>{const progress=Math.min(1,(now-from)/duration),value=Math.round(target*(1-Math.pow(1-progress,3)));el.innerHTML=`${before}${value.toLocaleString('en-US')}${after}`;if(progress<1)requestAnimationFrame(tick);};
      el.innerHTML=`${before}0${after}`;requestAnimationFrame(tick);
    };
    if(reduced){facts.forEach(start);return;}
    const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){start(entry.target);observer.unobserve(entry.target);}}),{threshold:.35});facts.forEach(el=>observer.observe(el));
  }
  function polish(){
    const main=document.querySelector('main');if(!main)return;const current=route();
    if(current==='home'){
      replaceText(main.querySelector('.why-stage .facts>div:nth-child(2) span'),'产品目录记录','Product records');
      replaceText(main.querySelector('.capability-chapter:first-child p'),'产品目录与产品咨询。','Product directory and enquiries.');
      animateFacts(main);
    }
    if(current==='about/profile')replaceText(main.querySelector('.facts>div:nth-child(2) span'),'产品目录记录','Product records');
    if(current.startsWith('products')){
      sortDirectory(main);
      replaceText(main.querySelector('.product-detail-v41~* .product-note'),'','');
      const bannerLead=main.querySelector('.page-banner--products .page-banner-inner>span');
      if(bannerLead)replaceText(bannerLead,'原料药、中间体、制剂及其他产品目录。','A directory of APIs, intermediates, formulations and other products.');
    }
    if(current.startsWith('rd/'))main.querySelectorAll('figcaption').forEach(c=>{if(/概念氛围图|Concept visual/i.test(c.textContent))c.remove();});
    if(current==='disclosures'){
      replaceText(main.querySelector('.disclosures-v41>div small'),'档案记录','ARCHIVE');
      replaceText(main.querySelector('.disclosures-v41>div h2'),'环境与项目档案','Environment & project archive');
      main.querySelectorAll('.disclosures-v41 li i').forEach(i=>replaceText(i,'档案记录','Archive record'));
    }
    if(current==='products/adverse'){
      replaceText(main.querySelector('.adverse-v41>div p'),'请填写基础信息；提交后仅显示本地状态，信息不会发送或保存。专用电话和邮箱待企业确认。','Complete the basic information. Submission shows a local status only; information is not sent or saved. Dedicated contacts are pending company confirmation.');
    }
  }
  addEventListener('hashchange',polish);polish();
})();
