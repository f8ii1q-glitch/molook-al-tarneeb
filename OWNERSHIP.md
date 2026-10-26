# OWNERSHIP — ملكية المشروع

> هذا الملف توثيق لمن يملك ماذا في المشروع. هو ليس رخصة (الرخصة في ملف `LICENSE`) وليس استشارة قانونية.

## 1. بيانات المشروع

| البند | القيمة |
|---|---|
| اسم المشروع | **ملوك الطرنيب | MOLOOK AL TARNEEB** |
| صاحب المشروع | **عبدالله بن قنيفذ العنزي** (Abdullah bin Qunayfidh Al-Anazi — الكتابة اللاتينية مقترحة ويمكن تعديلها) |
| تاريخ إنشاء المشروع | 2026-10-26 |
| حالة الرخصة | خاص، جميع الحقوق محفوظة، غير مرخص لإعادة التوزيع أو إعادة البيع دون إذن كتابي من صاحبه (انظر `LICENSE`) |
| الرخصة المفتوحة المصدر | لا توجد. لم تُضَف رخصة MIT أو Apache أو غيرهما إلى المشروع نفسه |
| الإصدار | 1.0.0 |

**الوصف:** موقع من صفحتين. الأولى «صفحة الأسطورة» الفكاهية عن صاحب المشروع بوصفه «أعظم لاعب طرنيب في التاريخ» (مزحة صريحة بلا أرقام أو إنجازات حقيقية). والثانية لعبة طرنيب بوضعين: أونلاين متعدد اللاعبين لحظيًا (أربعة لاعبين من أجهزة مختلفة، شراكات ثابتة جنوب/شمال ضد شرق/غرب، غرف برموز دعوة، والخادم هو الحَكَم الوحيد على الحالة)، و«العب وحدك» ضد الكمبيوتر داخل المتصفح بلا إنترنت بأربع شخصيات كرتونية (فارس وسحيم وكحلي وعبود) وثلاثة مستويات وزر «اقترح لي». وفي الصفحتين «قائمة من لا يغلبون الملك» الفكاهية، وفي الطاولة إيموجيات تعبير. الواجهة عربية كاملة (RTL) مع ترجمة إنجليزية.

## 2. ما أُنشئ خصيصًا للمشروع (مملوك لصاحب المشروع)

كل ما يلي كُتب أو رُسم أو صيغ داخل هذا المشروع، ويشمله `LICENSE`:

| المسار | المحتوى |
|---|---|
| `engine/` | محرك لعبة الطرنيب: الأوراق والخلط الآمن والتوزيع والمزايدة والأكلات والنقاط ونهاية المباراة ومنظور اللاعب، واللاعب الآلي `bot.ts` (قواعد استراتيجية كُتبت للمشروع) |
| `server/` | الخادم: الغرف والجلسات والاتصال اللحظي وحدود المعدل والتحقق من المدخلات وتخزين SQLite وخدمة الملفات الثابتة |
| `shared/` | البروتوكول بين الواجهة والخادم والتحقق من الرسائل ورموز الغرف والإعدادات المركزية `siteConfig.ts` |
| `client/` (الشيفرة) | صفحتا الموقع، مكونات الواجهة، الاتصال اللحظي من جهة المتصفح، المسار الداخلي، جلسة اللعب الفردي المحلية (`client/solo/`)، وعامل الخدمة (`client/service-worker.js`) وبيان التطبيق |
| `client/i18n/` | نصوص الواجهة بالعربية والإنجليزية (بما فيها أسماء الأنواع وعبارتا نهاية المباراة) |
| `client/styles/` | الهوية البصرية: الألوان والتخطيط والحركة وتصميم الأوراق والطاولة |
| `client/components/Avatar.tsx` وملف `client/solo/characters.ts` | رسوم الشخصيات الأربع (SVG مرسوم داخل الكود، ليس مأخوذًا من صور أو حزم أو شخصيات أحد) وأوصافها كما طلبها صاحب المشروع. أسماء الشخصيات ووصفها من طلبه؛ الرسم تفسير مني. الشخصيات غير مرتبطة بأي عمل أو شخصية معروفة |
| `shared/hall.ts` و`shared/reactions.ts` | قائمة الأسماء الفكاهية وإيموجيات التعبير. **أسماء القائمة الأولى (13 اسمًا) قدّمها صاحب المشروع وهي أسماء أشخاص حقيقيين**؛ مسؤولية التأكد من رضاهم عن ظهور أسمائهم علنًا تقع عليه. الأسماء التي يسجلها اللاعبون تبقى لأصحابها ولا يملكها المشروع |
| `client/components/Icons.tsx`، `client/public/*.svg`، `client/public/icons/`، `client/public/apple-touch-icon.png` | الأيقونات ورموز الأنواع والزخرفة وأيقونات التطبيق (PNG مولَّدة من شعار التاج المرسوم داخل المشروع): لا أيقونات مأخوذة من حزم خارجية |
| `tests/` | اختبارات الوحدات والتكامل والواجهة الكاملة (e2e) ومساعداتها |
| `scripts/`، `deploy/` | سكربتات البناء والتطوير وتوليد حزمة النشر، وقوالب النشر (Dockerfile وrender.yaml وشرح الخطوات) |
| `README.md`، `LICENSE`، `OWNERSHIP.md`، `docs/`، `Dockerfile`، `.env.example` | التوثيق وملفات الإعداد |

**النصوص:** نصوص صفحة الأسطورة (العناوين والفقرات والبنود الدستورية وبطاقات الألقاب) مبنية على الصياغة التي قدّمها صاحب المشروع في مواصفاته؛ وبقية نصوص الواجهة (القوائم والمساعدة والرسائل) كُتبت للمشروع.

## 3. المكتبات الخارجية وتراخيصها

هذه المكونات ليست ملكًا لصاحب المشروع. تبقى ملكًا لأصحابها وتحت تراخيصها، ولا يغيّر `LICENSE` ذلك. الإصدارات أدناه هي التي ثُبّتت وجُرّبت فعلًا في بيئة التطوير.

### مكتبات تُحزَم داخل ملفات الموقع الناتجة (`dist/`)

| المكتبة | الإصدار المجرَّب | الرخصة | الدور | تُحزَم في |
|---|---|---|---|---|
| react | 19.2.8 | MIT (Meta Platforms, Inc.) | بناء الواجهة | الواجهة |
| react-dom | 19.2.8 | MIT (Meta Platforms, Inc.) | عرض الواجهة في المتصفح | الواجهة |
| scheduler | 0.27.0 | MIT (Meta Platforms, Inc.) | جدولة داخلية لـ React | الواجهة |
| ws | 8.21.3 | MIT | خادم WebSocket | الخادم |
| zod | 3.25.76 | MIT | التحقق من رسائل العميل | الخادم |

أمر البناء `npm run build` يكتب نصوص تراخيص هذه المكتبات الخمس كما وردت في حزمها إلى `dist/public/third-party-licenses.txt`، لأن رخصة MIT تشترط بقاء إشعار الحقوق مع النسخ المحزومة.

### أدوات التطوير والاختبار (لا تُوزَّع مع الموقع)

| الأداة | الإصدار المجرَّب | الرخصة | الدور |
|---|---|---|---|
| esbuild | 0.28.2 | MIT | تجميع الواجهة والخادم وقت البناء |
| typescript | 6.0.3 | Apache-2.0 | فحص الأنواع |
| playwright | 1.63.0 | Apache-2.0 | اختبارات المتصفح (e2e) |
| @types/node | 26.6.3 | MIT (DefinitelyTyped) | أنواع TypeScript |
| @types/react، @types/react-dom، @types/ws | غير مثبتة هنا | MIT (DefinitelyTyped) | أنواع TypeScript؛ مدرجة في `package.json` لكنها لم تُثبَّت ولم تُجرَّب في بيئة التطوير (انظر `README.md` قسم القيود) |

### مكونات المنصة (غير مُضمَّنة في المشروع)

- **Node.js** (بيئة التشغيل، بترخيصها الخاص): يوفّر أيضًا الوحدتين `node:sqlite` و`node:crypto` اللتين يستخدمهما المشروع.
- **Chromium** (يشغّله Playwright في الاختبارات فقط): لا يُوزَّع مع المشروع.

### الخطوط

لا يضم المشروع أي ملف خط حاليًا؛ يعتمد على خطوط النظام احتياطيًا. إن أضفتَ ملفات IBM Plex Sans Arabic أو Tajawal فكلاهما بترخيص SIL Open Font License 1.1، ويجب إبقاء إشعار الرخصة مع الملفات (انظر `docs/FONTS.md`). يبقى الخط ملكًا لمصمميه.

## 4. بيان بشأن الملكية القانونية

وجود إشعار حقوق النشر في تذييل الموقع وفي هذا المستودع لا يكفي وحده لضمان الملكية القانونية لكل مكون. تعتمد الملكية الفعلية على عوامل أخرى، منها:

- **المكونات الخارجية** تبقى ملكًا لأصحابها وشروط تراخيصها (القسم 3).
- **قواعد لعبة الطرنيب** تقليدية وغير مملوكة لأحد؛ يمتلك صاحب المشروع تنفيذه المحدد وتصميمه ونصوصه لا اللعبة نفسها.
- **الشيفرة والنصوص الناتجة بمساعدة أدوات الذكاء الاصطناعي:** الوضع القانوني لحقوق النشر في المواد الناتجة بمساعدة هذه الأدوات يختلف بين الأنظمة القضائية ولا يزال يتطور. لم يُجرَ هنا أي فحص قانوني لذلك.
- **توثيق الملكية:** إثبات الملكية أمام الغير قد يتطلب أدلة إضافية (سجلات الإنشاء والنسخ الاحتياطية، وربما تسجيلًا رسميًا لدى الجهة المختصة في بلدك).

نصّا `LICENSE` وهذا الملف أُعدّا مع المشروع وهما غير مراجعَين قانونيًا. يُنصح بعرضهما على مختص قانوني قبل الاعتماد عليهما في أي نزاع أو ترخيص لطرف ثالث.

## 5. تعديل بيانات الملكية

- **اسم صاحب المشروع واسم الموقع** يُعدَّلان من ملف واحد: `shared/siteConfig.ts`. تقرؤه الواجهة (التذييل وصفحة الأسطورة وعنوان الصفحة) وسكربت البناء (الذي يحقن الاسم في وسوم HTML الثابتة)، ثم أعد البناء بـ `npm run build`.
- ملفا `LICENSE` وهذا الملف نصّان ثابتان؛ عدّلهما يدويًا إن تغيّر الاسم.

---

# OWNERSHIP (English summary)

| Item | Value |
|---|---|
| Project name | **MOLOOK AL TARNEEB (ملوك الطرنيب)** |
| Owner | **Abdullah bin Qunayfidh Al-Anazi** (the Latin spelling is a suggestion and may be changed) |
| Description | A two-page website: a satirical "legend" page about the owner, and a Tarneeb card game with two modes: a real-time 4-player online game with a server-authoritative engine, and an offline-capable solo mode against three computer-controlled cartoon characters (Fares, Suhaim, Kuhli, Aboud) with three difficulty levels, a hint button and emoji reactions, running entirely in the browser. A humorous "list of those who can't beat the King" (13 names supplied by the owner, which are real people's names, plus opt-in names registered by online players). Arabic (RTL) with a full English translation. |
| Created | 2026-10-26 |
| License | Proprietary, all rights reserved; no redistribution or resale without the owner's written permission (see `LICENSE`). No open-source license was added. |

**Created specifically for the project (owned by the owner):** everything under `engine/`, `server/`, `shared/`, `client/` (code, texts, styles, hand-drawn SVG icons and graphics), `tests/`, `scripts/`, and the documentation and configuration files.

**Third-party libraries (not owned by the owner, under their own licenses):** react, react-dom, scheduler (MIT), ws (MIT), zod (MIT) are bundled into the build output, and their license texts are written to `dist/public/third-party-licenses.txt` by `npm run build`. Build and test tooling: esbuild (MIT), typescript (Apache-2.0), playwright (Apache-2.0), and DefinitelyTyped type packages (MIT). No font files are bundled; if IBM Plex Sans Arabic or Tajawal are added they are SIL OFL 1.1.

**Legal note:** A copyright notice alone does not guarantee legal ownership of every component. Third-party components remain the property of their authors; the rules of Tarneeb are traditional and owned by no one; and the legal status of material produced with AI assistance varies by jurisdiction. `LICENSE` and this file were prepared together with the project and have not been reviewed by a lawyer.
