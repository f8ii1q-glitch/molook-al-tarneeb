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
  root.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
})();
