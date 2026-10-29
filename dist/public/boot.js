/* يضبط لغة الصفحة واتجاهها قبل الرسم الأول (يُحمَّل من <head> قبل التطبيق). لا يحمل أي بيانات تتبع. */
(function () {
  var root = document.documentElement;
  var lang = root.getAttribute('data-default-lang') === 'en' ? 'en' : 'ar';
  try {
    var saved = window.localStorage.getItem('molook.lang');
    if (saved === 'ar' || saved === 'en') lang = saved;
  } catch (e) {
    /* التخزين غير متاح (وضع خاص مثلًا): نبقى على اللغة الافتراضية */
  }
  root.setAttribute('lang', lang);
  // المظهر المحفوظ (الديوان/تراثي/ليل/الراية) يُطبَّق هنا أيضًا كي لا يومض المظهر الافتراضي قبل تحميل التطبيق.
  var themeColors = { majlis: '#06241C', heritage: '#1C130B', night: '#070B16', flag: '#0D0D0E' };
  var theme = 'majlis';
  try {
    var savedTheme = window.localStorage.getItem('molook.theme');
    if (savedTheme === 'heritage' || savedTheme === 'night' || savedTheme === 'flag') theme = savedTheme;
  } catch (e) {
    /* التخزين غير متاح */
  }
  root.setAttribute('data-theme', theme);
  var meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute('content', themeColors[theme]);
  root.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
})();
