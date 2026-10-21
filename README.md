# Scribd Premium Downloader — steVeR Edition 🟣

> © **ing steVeR** — نشتق من المشروع المفتوح المصدر الأصلي [Scribd-Downloader-Premium](https://github.com/HugoAleOlguin/Scribd-Downloader-Premium) باحتفاظ كامل بمنطقه، مع أسلوب وإضافات خاصة.

إضافة متصفح Chrome (Manifest V3) لتنزيل مستندات **Scribd** كملف **PDF** عن طريق خدمة تنزيل خارجية — بعمرة واحدة فقط.

---

## ✨ ما يميز هذه النسخة (steVeR Edition)

| الميزة | التفاصيل |
|---|---|
| 🟣 **ثيم steVeR** | واجهة بنفسجية/فوشيا في البانل العائم والبوبب، مع حقوق `© ing steVeR` |
| ⬇ **زر في شريط Scribd** | زر `⬇ Download PDF` يظهر داخل الترويسة العلوية (بجانب البحث) على صفحات المستندات |
| 🖱️ **تنزيل بضغطة واحدة** | الضغط على الزر يؤدي إلى فتح وضع القراءة embed وبدء التحميل الخارجي تلقائيًا |
| 🌐 **إنجليزية فقط** | أُزيلت اللغة الإسبانية؛ الواجهة كلها EN |
| 📥 **طريقة واحدة** | خيار التحميل من الموقع الخارجي فقط (أُزيلت طرق التقاط الصور) |

**الإصدار:** 2.9.0 — `version_name: steVeR Edition`

---

## 🧪 التثبيت في Chrome (وضع المطوّر / Developer Mode)

### بالعربية

1. **حمّل المشروع:** اضغط زر **Code** الأخضر أعلى المستودع ← **Download ZIP** ← فك الضغط في مجلد على جهازك (مثلاً سطح المكتب). *(أو استخدام `git clone` إن كان لديك Git.)*
2. **افتح صفحة الإضافات:** في Chrome اكتب في شريط العنوان:

   ```
   chrome://extensions
   ```

3. **فعّل وضع المطوّر:** مفتاح **Developer mode / وضع المطوّر** يوجد أعلى يمين الصفحة — أدره إلى **ON**. بدون هذه الخطوة لن يظهر زر التحميل اليدوي.
4. **حمّل الإضافة:** انقر زر **Load unpacked / تحميل غير مضغوظ** (يظهر بعد تفعيل وضع المطوّر) ← اختر **مجلد الإضافة** — المجلد الذي يحتوي ملف `manifest.json`.
5. **تأكد من التفعيل:** ستظهر بطاقة `Scribd Premium Downloader — steVeR Edition` في القائمة، وتأكد أن مفتاحها مفعّل (أزرق).
6. **جرّب:** افتح أي مستند Scribd وحدّث الصفحة *(F5)* — سترى زر **⬇ Download PDF** في أعلى الصفحة + البانل العائم.

### 🔄 عند أي تحديث للمشروع

حمّل النسخة الجديدة <- استبدل الملفات في نفس المجلد <- في `chrome://extensions` اضغط زر **التحديث ↻ (Reload)** على بطاقة الإضافة <- حدّث صفحة Scribd.

### فيديو الخطوات باختصار (نصي)

```
chrome://extensions  →  Developer mode: ON  →  Load unpacked  →  اختر المجلد  →  F5 على Scribd
```

### English quick guide

1. Download this repository (**Code → Download ZIP**) and unzip it.
2. Open `chrome://extensions`.
3. Turn **Developer mode** ON (top-right toggle).
4. Click **Load unpacked** and select the extracted folder (the one containing `manifest.json`).
5. Open any Scribd document page — use the header button **⬇ Download PDF** or the floating panel, then the download starts automatically.

---

## 📖 طريقة الاستخدام

1. افتح مستند Scribd ← سيظهر زر **⬇ Download PDF** في شريط Scribd العلوي + البانل العائم أسفل يمين الشاشة.
2. اضغط **⬇ Download PDF** ← الصفحة تفتح وضع القراءة و**يبدأ التحميل من الموقع الخارجي تلقائيًا** بعد ثانية.
3. أكمل الخطوات في التاب الجديد إن ظهرت (التحقق الآلي يعمل وحده) ← ينتهي بملف PDF يُلحظ في مجلد التنزيلات.

> يمكنك أيضًا الضغط مباشرة على زر **Descargar PDF Original** داخل البانل العائم.

---

## 🗂️ بنية المشروع

```
Scribd-Downloader-steVeR/
├── manifest.json          # بيانات الإضافة (MV3) — steVeR Edition
├── background.js          # Service Worker: التنزيل الخارجي + الأتمتة + الإشعارات
├── content.js             # منطق الصفحة: البانل العائم + زر الترويسة + التدفق
├── overlay.css            # ثيم steVeR (بنفسجي/فوشيا) للبانل العائم
├── popup.html / popup.js  # نافذة البوبب (EN) + زر GitHub
├── libs/
│   ├── i18n.js            # الترجمات (EN فقط)
│   ├── shim.js
│   ├── html2canvas.min.js
│   └── jspdf.umd.min.js
└── icons/                 # أيقونات الإضافة
```

---

## ⚠️ ملاحظات

- هذا المستودع **خاص (Private)** — زر GitHub داخل البوبب يوجّه إليه؛ غير المشارِك معك لن يرى محتواه.
- المشروع يُستخدم للأغراض الشخصية (نسخ مستنداتك) — احترم حقوق الناشرين.
- كل التحقق تم بنجاح: القوالب والأقواس متوازنة، وUTF-8 بدون BOM، و`manifest.json` سليم.

---

## 📜 الحقوق

- **التصميم والأسلوب والحقوق:** © ing steVeR
- **المشروع الأصلي:** [HugoAleOlguin/Scribd-Downloader-Premium](https://github.com/HugoAleOlguin/Scribd-Downloader-Premium) — شكرًا للعمل المفتوح المصدر.
