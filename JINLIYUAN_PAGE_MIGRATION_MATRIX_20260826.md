# 金立源原官网到新版逐页面迁移表

日期：2026-08-26  
状态：实施前内容映射，不修改网站代码  
依据：2026-08-22 原官网公开审计、当前本地内容数据、Owner 逐批确认

## 1. 迁移状态定义

- `KEEP`：完整保留内容。
- `RESTRUCTURE`：内容完整保留，重新组织版式和层级。
- `MERGE_ENTRY`：入口合并，但原内容进入独立章节或详情。
- `CLEAN`：保留正文，删除旧导航、重复标题和模板噪声。
- `CORRECT`：纠正审计或旧站明确的分类/标题错误。
- `PENDING_SOURCE`：保留记录，原文件等待取回。
- `DEMO_ONLY`：演示功能，不向外发送数据。

## 2. 栏目与功能页

| 原官网页面 | 原内容 | 新版目标 | 动作 |
|---|---|---|---|
| `/`、`/index.php` | 首页及重复入口 | `/` | RESTRUCTURE，旧入口重定向 |
| `/about.html` | 企业简介 | `/about/profile` | KEEP + CLEAN |
| `/culture.html` | 企业文化 | `/about/culture` | KEEP + RESTRUCTURE |
| `/honors.html` | 企业资质 | `/about/honors` | KEEP，分类与灯箱 |
| `/company.html`、企业展示分页 | 企业展示 | `/about/company` | KEEP，精选画廊 + 加载更多 |
| `/product.html`、`/1product.html` | 产品总目录 | `/products` | RESTRUCTURE |
| `/products_3.html` | 原料药 | `/products/api` | KEEP |
| `/products_6.html` | 中间体 | `/products/intermediate` | KEEP |
| `/products_7.html` | 其他产品/制剂相关入口 | 按真实属性分流 | CORRECT |
| 产品分页 `/index.php/Home/Index/product/...` | 产品分页 | `/products`筛选与加载 | MERGE_ENTRY |
| `/adverse.html`、`/adverse1.html` | 不良反应/事件 | `/products/adverse-event-reporting` | RESTRUCTURE + DEMO_ONLY |
| `/ky.html`及分页 | 科研平台 | `/rd-manufacturing/platform` | KEEP + CLEAN |
| `/ky1.html` | 产品研发 | `/rd-manufacturing/development` | KEEP + CLEAN |
| `/ky3.html` | 技术协作 | `/rd-manufacturing/collaboration` | KEEP + CLEAN |
| `/ky2.html` | 科研成果 | `/rd-manufacturing/outcomes` | KEEP + CLEAN |
| 新版补充页 | 生产与质量管理 | `/rd-manufacturing/production-quality` | RESTRUCTURE，限公开事实 |
| `/news.html`、`/news1.html`及分页 | 新闻与历史记录 | `/updates`或`/disclosures` | 按内容分流，不重复 |
| `/sh.html` | 公益慈善 | `/responsibility/community` | KEEP |
| `/sh1.html` | 职业健康 | `/responsibility/occupational-health` | KEEP |
| `/sh2.html` | 安全生产 | `/responsibility/production-safety` | KEEP |
| `/sh3.html` | 环境保护 | `/responsibility/environment` | KEEP，链接信息公开 |
| `/sh4.html` | 可持续发展 | `/responsibility/sustainability` | KEEP |
| `/jobs.html` | 人才理念 | `/careers` | KEEP |
| `/jobs2.html` | 工作环境 | `/careers/environment` | KEEP |
| `/jobs1.html` | 人才招聘 | `/careers/openings` | KEEP，岗位直接展开 |
| `/contact.html` | 联系方式 | `/contact` | KEEP + RESTRUCTURE |
| `/order.html` | 在线留言 | `/contact/enquiry` | DEMO_ONLY |
| `/zzq/index.html` | 著作权声明 | `/legal`或页脚 | MERGE_ENTRY |
| 所有 `_en.html` 页面 | 英文对应内容 | 同路由 `lang=en` | RESTRUCTURE，以中文事实主源 |

## 3. 产品详情：47条全部迁移

统一映射规则：旧 `/product_detail/{id}.html` → 新 `/products/{id}`。列表标题清洗括号信息，完整资料保留在详情；英文名未确认时保留中文名。

### 原料药

| ID | 产品 | 目标 |
|---:|---|---|
| 1 | 替米沙坦 | `/products/1` |
| 2 | 西洛他唑 | `/products/2` |
| 3 | 维生素E烟酸酯 | `/products/3` |
| 4 | 缬沙坦 | `/products/4` |
| 5 | 厄贝沙坦 | `/products/5` |
| 18 | 坎地沙坦酯 | `/products/18` |
| 19 | 阿托伐他汀钙 | `/products/19` |
| 20 | 硫酸氢氯吡格雷 | `/products/20` |
| 21 | 恩替卡韦 | `/products/21` |
| 22 | 阿奇沙坦 | `/products/22` |

### 制剂及其他成品

| ID | 产品 | 目标 | 备注 |
|---:|---|---|---|
| 6 | 替米沙坦片 | `/products/6` | CORRECT：当前本地误归原料药 |
| 7 | 人参蜂王浆胶囊 | `/products/7` | CORRECT：当前本地误归原料药 |
| 12 | 珍珠粉胶囊 | `/products/12` | 按真实类别整理 |
| 13 | 冻干蜂王浆胶囊 | `/products/13` | 按真实类别整理 |
| 14 | 玉屏风口服液 | `/products/14` | 按真实类别整理 |
| 16 | 川贝枇杷糖浆 | `/products/16` | 按真实类别整理 |
| 54 | 西洛他唑片 | `/products/54` | 制剂 |
| 55 | 厄贝沙坦片 | `/products/55` | 制剂 |

### 中间体及其他工业产品

| ID | 产品 | 目标 |
|---:|---|---|
| 25 | 2-正丙基-4-甲基-6-羧基苯并咪唑（单咪唑） | `/products/25` |
| 26 | 2-正丙基-4-甲基-6-(1-甲基苯并咪唑-2-基)苯并咪唑（双咪唑） | `/products/26` |
| 27 | 联苯二苯并咪唑相关中间体 | `/products/27` |
| 28 | 4′-甲基-2-氰基联苯 | `/products/28` |
| 29 | 4′-甲基联苯-2-羧酸 | `/products/29` |
| 30 | 4′-甲基联苯-2-甲酸甲酯 | `/products/30` |
| 31 | 4′-溴甲基联苯-2-甲酸甲酯 | `/products/31` |
| 32 | 4′-溴甲基-2-氰基联苯 | `/products/32` |
| 33 | N-甲基邻苯二胺二盐酸盐 | `/products/33` |
| 34 | N-(三苯基甲基)-5-(4′-溴甲基联苯-2-基)四氮唑 | `/products/34` |
| 35 | L-缬氨酸甲酯盐酸盐 | `/products/35` |
| 36 | 厄贝沙坦烃化物 | `/products/36` |
| 37 | 厄贝沙坦中间体—侧链盐酸盐 | `/products/37` |
| 38 | 三苯基甲基坎地沙坦 | `/products/38` |
| 39 | 三苯甲基坎地沙坦酯 | `/products/39` |
| 40 | 三苯基甲基奥美沙坦酯 | `/products/40` |
| 41 | M-4 | `/products/41` |
| 42 | ATS-8 | `/products/42` |
| 43 | ATS-9 | `/products/43` |
| 44 | L-1 | `/products/44` |
| 45 | E-8 | `/products/45` |
| 46 | 5-(4-氯丁基)-1-环己基-1H-四氮唑 | `/products/46` |
| 47 | 3,4-二氢-6-羟基-2(1H)-喹啉酮 | `/products/47` |
| 48 | 4-哌啶甲酸 | `/products/48` |
| 49 | 钯炭催化剂 | `/products/49` |
| 50 | 双酚A型氰酸酯树脂单体（SD-1） | `/products/50` |
| 51 | SD-1-A | `/products/51` |
| 52 | SD-1-B | `/products/52` |
| 53 | SD-3 | `/products/53` |

注：化学名称缩写只用于本迁移表便于阅读；正式详情保留审计到的完整名称。

## 4. 16条动态与公示分流

| ID | 日期 | 内容 | 新版主归档 |
|---:|---|---|---|
| 1 | 2021/10/25 | 液相色谱仪分析人血浆中替米沙坦的浓度 | 行业与技术 |
| 2 | 2021/10/25 | 扩大专利产品氰酸酯树脂单体SD-1产能 | 公司新闻 |
| 3 | 2021/10/25 | 粒度对原料药性能的影响 | 行业与技术 |
| 4 | 2021/10/25 | 原料药技改项目环境影响评价行政许可受理公告 | 项目公示 |
| 5 | 2021/10/25 | 2021年土壤及地下水自行监测方案 | 监测与验收 |
| 7 | 2021/10/25 | 年产2080吨项目环评报批前公示 | 项目公示 |
| 8 | 2021/10/25 | 年产2080吨项目环保公示 | 环境信息 |
| 11 | 2021/11/12 | 厄贝沙坦片获得药品注册批件 | 公司新闻 |
| 16 | 2022/11/28 | 2022年土壤地下水检测报告 | 监测与验收 |
| 17 | 2023/11/09 | 年产60吨/120吨/500吨项目非重大变动环境影响分析公示 | 项目公示 |
| 20 | 2024/05/31 | 年产60吨/120吨/500吨项目环保设施竣工公示 | 监测与验收 |
| 21 | 2024/05/31 | 年产270吨等产业提升项目环保设施竣工公示 | 监测与验收 |
| 22 | 2024/06/01 | 年产60吨/120吨/500吨项目环保设施调试公示 | 监测与验收 |
| 23 | 2024/06/01 | 年产270吨等产业提升项目环保设施调试公示 | 监测与验收 |
| 24 | 2024/10/27 | 年产270吨等产业提升项目竣工环境保护验收公示 | 监测与验收 |
| 25 | 2024/10/27 | 年产60吨/120吨/500吨项目竣工环境保护验收公示 | 监测与验收 |

统一详情映射：旧 `/news_detail/{id}.html` → 新 `/updates/{id}` 或 `/disclosures/{id}`，由上表主归档决定。首页只精选 ID 11、2、3、1。

## 5. PDF与附件

- 原审计约10个PDF引用全部进入信息公开附件记录。
- 可取得文件：保存原文件、原文件名、日期和来源页面。
- 404、超时或无法取得：标记 `PENDING_SOURCE`，前台显示“原文件待取回”。
- 列表先进入详情页，再查看或下载，不直接触发文件下载。
- 中文原件不自动生成英文PDF。

## 6. 表单与外部联系

| 原功能 | 新版页面 | 当前阶段 |
|---|---|---|
| 在线留言 | `/contact/enquiry` | DEMO_ONLY，不发送 |
| 招聘申请 | `/careers/openings`内 | 邮件/演示交互，不上传简历 |
| 不良反应/事件 | `/products/adverse-event-reporting` | DEMO_ONLY，双入口 |
| 产品咨询 | 产品详情 → `/contact?type=product` | DEMO_ONLY |
| 地图 | `/contact` | 园区级静态位置 |

## 7. 英文页面迁移

- 每个中文栏目和详情建立对应英文路由状态。
- 事实以更新后的中文资料为主，不复制旧英文站冲突数据。
- 未确认产品英文名保留中文名、CAS和类别。
- 动态只翻译标题、日期和摘要；监管、环境及PDF原文不自动全文翻译。
- 语言切换停留在当前对应页面。

## 8. 实施前完整性门槛

- 47个产品详情全部有目标路由。
- 16条动态/公示全部有且只有一个主归档。
- 约10个PDF引用全部有状态。
- 原官网每个二级栏目都有新版去向。
- 在线留言、不良反应、招聘、搜索、语言切换、分页/加载和旧URL重定向均有实现计划。
- 第一批只实施关于金立源五个页面；本表其余映射作为后续批次约束。

