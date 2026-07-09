(function () {
  const GA_ID = "G-4N3LN3MG1M";

  const s1 = document.createElement("script");
  s1.async = true;
  s1.src = "https://www.googletagmanager.com/gtag/js?id=" + GA_ID;
  document.head.appendChild(s1);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function () {
    dataLayer.push(arguments);
  };

  s1.onload = function () {
    gtag("js", new Date());
    gtag("config", GA_ID);
  };
})();