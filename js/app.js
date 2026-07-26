/* =========================================================
   Tensor Academy
   Main JavaScript
========================================================= */

(() => {
  "use strict";

  const STORAGE_KEYS = {
    language: "tensor-academy-language",
    theme: "tensor-academy-theme",
  };

  const translations = {
    en: {
      brandName: "Tensor Academy",
      taglineEn: "Learn AI. Shape the Future.",
      navAbout: "About Tensor Academy",
      navVerify: "Certificate Verification",
      navContact: "Contact",
      navFaq: "FAQ",
      verifyNow: "Verify Certificate",
      heroEyebrow: "Modern AI Academic Platform",
      heroTitle: "Learn AI. Shape the Future.",
      heroLead:
        "Tensor Academy is a bilingual online academy for Deep Learning, Machine Learning, Prompt Engineering, and AI apps/chatbots.",
      statStudents: "Students",
      statGraduates: "Graduates",
      statLevels: "Levels",
      exploreCourses: "Explore Courses",
      verifyCertificate: "Verify Certificate",
      panelTitle: "Academy Snapshot",
      feature1: "Online learning",
      feature2: "Telegram, Discord, Google Meet",
      feature3: "English + Persian / Dari",
      feature4: "Modern UI, mobile-first, responsive",
      aboutKicker: "About Tensor Academy",
      aboutTitle: "A professional AI academy built for practical growth.",
      aboutText1:
        "Tensor Academy is a private online academy focused on AI education, career readiness, and effective use of AI.",
      aboutText2:
        "It is designed to feel modern, academic, clean, and trustworthy across desktop and mobile devices.",
      coursesKicker: "Courses",
      coursesTitle: "Core learning tracks",
      certKicker: "Certificates",
      certTitle: "Verified learning records",
      certSampleTitle: "Sample Certificate",
      certSampleText:
        "The verification system is prepared for individual certificate pages, QR access, PDF viewing, and direct download.",
      openVerifyPage: "Open Verification Page",
      downloadPdf: "Download PDF",
      verifyKicker: "Certificate Verification",
      verifyTitle: "Check a certificate by ID",
      verifyText:
        "Use the search field to verify a certificate. The system is ready for a single student now and expandable later.",
      certIdLabel: "Certificate ID",
      verifyNote:
        "Example ID is provided for search testing. The real certificate page uses the ID shown in this project.",
      contactKicker: "Contact",
      contactTitle: "Get in touch with the academy",
      noneAvailable: "Not available",
      faqKicker: "FAQ",
      faqTitle: "Frequently asked questions",
      faq1q: "Is Tensor Academy bilingual?",
      faq1a: "Yes. The website will support English and Persian / Dari.",
      faq2q: "Does the site support certificate verification?",
      faq2a: "Yes. Each certificate can have its own page and verification path.",
      faq3q: "Can certificates be viewed and downloaded?",
      faq3a: "Yes. The design includes both view and download actions for the PDF.",
      backToTop: "Back to top",
    },
    fa: {
      brandName: "آکادمی تنسور",
      taglineEn: "هوش مصنوعی را بیاموز، آینده را بساز.",
      navAbout: "درباره آکادمی تنسور",
      navVerify: "تصدیق گواهی‌نامه",
      navContact: "تماس",
      navFaq: "پرسش‌های متداول",
      verifyNow: "تصدیق گواهی‌نامه",
      heroEyebrow: "پلتفرم مدرن آکادمیک هوش مصنوعی",
      heroTitle: "هوش مصنوعی را بیاموز، آینده را بساز.",
      heroLead:
        "آکادمی تنسور یک آکادمی آنلاین دو زبانه برای یادگیری عمیق، یادگیری ماشین، مهندسی پرامپت و اپلیکیشن‌ها / چت‌بات‌های هوش مصنوعی است.",
      statStudents: "دانشجو",
      statGraduates: "فارغ‌التحصیل",
      statLevels: "سطح",
      exploreCourses: "مشاهده کورس‌ها",
      verifyCertificate: "تصدیق گواهی‌نامه",
      panelTitle: "خلاصه آکادمی",
      feature1: "آموزش آنلاین",
      feature2: "تلگرام، دیسکورد، گوگل میت",
      feature3: "انگلیسی + فارسی / دری",
      feature4: "رابط مدرن، موبایل‌فرست، ریسپانسیو",
      aboutKicker: "درباره آکادمی تنسور",
      aboutTitle: "یک آکادمی حرفه‌ای هوش مصنوعی برای رشد عملی.",
      aboutText1:
        "آکادمی تنسور یک آکادمی خصوصی آنلاین است که بر آموزش هوش مصنوعی، آمادگی برای بازار کار و استفاده مؤثر از AI تمرکز دارد.",
      aboutText2:
        "این سایت طوری طراحی شده است که در موبایل و دسکتاپ، مدرن، آکادمیک، تمیز و قابل اعتماد دیده شود.",
      coursesKicker: "کورس‌ها",
      coursesTitle: "مسیرهای اصلی آموزش",
      certKicker: "تصدیق‌نامه‌ها",
      certTitle: "سوابق آموزشی تأییدشده",
      certSampleTitle: "نمونه تصدیق‌نامه",
      certSampleText:
        "سیستم تصدیق برای صفحه‌های جداگانه گواهی‌نامه، دسترسی QR، نمایش PDF و دانلود مستقیم آماده شده است.",
      openVerifyPage: "بازکردن صفحه تصدیق",
      downloadPdf: "دانلود PDF",
      verifyKicker: "تصدیق گواهی‌نامه",
      verifyTitle: "بررسی گواهی‌نامه با آیدی",
      verifyText:
        "از کادر جستجو برای بررسی گواهی‌نامه استفاده کن. این سیستم فعلاً برای یک دانشجو آماده است و بعداً قابل گسترش می‌باشد.",
      certIdLabel: "آیدی گواهی‌نامه",
      verifyNote:
        "آیدی نمونه برای آزمایش جستجو داده شده است. صفحه واقعی گواهی‌نامه از همان آیدی پروژه استفاده می‌کند.",
      contactKicker: "تماس",
      contactTitle: "با آکادمی در ارتباط شو",
      noneAvailable: "وجود ندارد",
      faqKicker: "پرسش‌های متداول",
      faqTitle: "سوالات پر تکرار",
      faq1q: "آیا آکادمی تنسور دو زبانه است؟",
      faq1a: "بله. سایت از انگلیسی و فارسی / دری پشتیبانی خواهد کرد.",
      faq2q: "آیا سایت از تصدیق گواهی‌نامه پشتیبانی می‌کند؟",
      faq2a: "بله. هر گواهی‌نامه می‌تواند صفحه و مسیر تصدیق جداگانه داشته باشد.",
      faq3q: "آیا گواهی‌نامه‌ها قابل نمایش و دانلود هستند؟",
      faq3a: "بله. طراحی هر دو گزینه نمایش و دانلود PDF را شامل می‌شود.",
      backToTop: "بازگشت به بالا",
    },
  };

  const html = document.documentElement;
  const body = document.body;

  const langToggle = document.getElementById("langToggle");
  const themeToggle = document.getElementById("themeToggle");
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const mobileNav = document.getElementById("mobileNav");
  const verifyForm = document.getElementById("verifyForm");
  const certificateIdInput = document.getElementById("certificateId");

  function setLanguage(lang) {
    const selected = lang === "fa" ? "fa" : "en";
    localStorage.setItem(STORAGE_KEYS.language, selected);

    html.lang = selected;
    html.dir = selected === "fa" ? "rtl" : "ltr";
    body.dir = selected === "fa" ? "rtl" : "ltr";

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const text = translations[selected][key];
      if (typeof text === "string") el.textContent = text;
    });

    if (langToggle) {
      langToggle.textContent = selected === "en" ? "FA" : "EN";
      langToggle.setAttribute(
        "aria-label",
        selected === "en" ? "Switch to Persian" : "Switch to English"
      );
    }

    const placeholder = certificateIdInput?.getAttribute("placeholder");
    if (certificateIdInput) {
      certificateIdInput.placeholder =
        selected === "fa" ? "TA-AI-2026_ABH_1059_AF" : placeholder || "TA-AI-2026_ABH_1059_AF";
    }
  }

  function setTheme(theme) {
    const selected = theme === "dark" ? "dark" : "light";
    localStorage.setItem(STORAGE_KEYS.theme, selected);
    body.setAttribute("data-theme", selected);

    if (themeToggle) {
      themeToggle.textContent = selected === "dark" ? "☀" : "◐";
      themeToggle.setAttribute(
        "aria-label",
        selected === "dark" ? "Switch to light mode" : "Switch to dark mode"
      );
    }
  }

  function toggleMobileNav(forceClose = false) {
    if (!mobileNav) return;
    const isOpen = !mobileNav.hidden;

    if (forceClose) {
      mobileNav.hidden = true;
      return;
    }

    mobileNav.hidden = isOpen;
  }

  const savedLanguage = localStorage.getItem(STORAGE_KEYS.language) || "en";
  const savedTheme = localStorage.getItem(STORAGE_KEYS.theme) || "light";

  setLanguage(savedLanguage);
  setTheme(savedTheme);

  langToggle?.addEventListener("click", () => {
    const current = localStorage.getItem(STORAGE_KEYS.language) || "en";
    setLanguage(current === "en" ? "fa" : "en");
  });

  themeToggle?.addEventListener("click", () => {
    const current = localStorage.getItem(STORAGE_KEYS.theme) || "light";
    setTheme(current === "light" ? "dark" : "light");
  });

  mobileMenuBtn?.addEventListener("click", () => {
    toggleMobileNav();
  });

  mobileNav?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => toggleMobileNav(true));
  });

  verifyForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    const id = (certificateIdInput?.value || "").trim();
    const targetId = id || "TA-AI-2026_MFM_2198_AF";
    window.location.href = `verify.html?id=${encodeURIComponent(targetId)}`;
  });

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") toggleMobileNav(true);
  });
})();
