/* ============================================================
   TENSOR ACADEMY — Premium Application Script
   Fullscreen Menu, Reveal, Count‑Up, Digit Conversion, i18n
   ============================================================ */
(function () {
  'use strict';

  /* ---------- i18n Translations ---------- */
  const i18n = {
    en: {
      tagline: 'Learn AI. Shape the Future.',
      nav_home: 'Home',
      nav_about: 'About',
      nav_courses: 'Courses',
      nav_certificates: 'Certificates',
      nav_verify: 'Verify Certificate',
      nav_contact: 'Contact',
      nav_faq: 'FAQ',
      nav_privacy: 'Privacy Policy',
      nav_terms: 'Terms of Use',
      hero_eyebrow: 'Modern AI Academic Platform',
      hero_title: 'Learn AI. Shape the Future.',
      hero_description: 'Tensor Academy is a bilingual online academy for Deep Learning, Machine Learning, Prompt Engineering, and AI apps/chatbots.',
      hero_cta_courses: 'Explore Courses',
      hero_cta_verify: 'Verify Certificate',
      stat_students: 'Students',
      stat_graduates: 'Graduates',
      stat_levels: 'Learning Levels',
      about_title: 'About Tensor Academy',
      about_vision_title: 'Our Vision',
      about_vision_text: 'We help learners build practical AI skills, understand modern artificial intelligence technologies, use AI effectively, and prepare themselves for future career and income opportunities.',
      about_founder_label: 'Founder:',
      about_founder_value: 'Mohammad Omar Omari',
      about_type_label: 'Type:',
      about_type_value: 'Private Academy',
      about_mode_label: 'Mode:',
      about_mode_value: 'Online',
      about_platforms_label: 'Platforms:',
      about_platforms_value: 'Telegram, Discord, Google Meet',
      about_field_label: 'Field:',
      about_field_value: 'Artificial Intelligence Education',
      courses_title: 'Our Courses',
      course_dl_desc: 'Foundations, practice, and real-world applications.',
      course_ml_desc: 'Data-driven models, training workflows, and evaluation.',
      course_pe_desc: 'Effective prompting for productivity, automation, and AI workflows.',
      course_aiapps_desc: 'Building practical AI assistants and chatbot products.',
      level_beginner: 'Beginner',
      level_semi: 'Semi-specialized',
      level_specialized: 'Specialized',
      certificates_title: 'Certificates',
      certificates_subtitle: 'Every graduate receives a verifiable certificate with a unique ID and dedicated online page.',
      cert_feat_verifiable: 'Verifiable Online',
      cert_feat_unique: 'Unique Certificate ID',
      cert_feat_pdf: 'Downloadable PDF',
      cert_cta: 'Verify a Certificate',
      contact_title: 'Contact Us',
      contact_email_label: 'Email',
      contact_social_label: 'Social & Learning',
      faq_title: 'Frequently Asked Questions',
      recognition_title: 'Recognition',
      recog_authority_label: 'Authority:',
      recog_authority_value: 'Ministry of Higher Education Afghanistan',
      recog_department_label: 'Department:',
      recog_department_value: 'Private Institutions Supervision Committee',
      recog_license_label: 'License Type:',
      recog_license_value: 'Educational activity license',
      recog_license_number_label: 'License Number:',
      recog_date_label: 'Issue Date:',
      recog_location_label: 'Location:',
      recog_location_value: 'Online educational activity',
      recog_status_label: 'Status:',
      recog_status_value: 'Active / Valid',
      footer_verify: 'Certificate Verification',
      footer_privacy: 'Privacy Policy',
      footer_terms: 'Terms of Use',
      footer_contact: 'Contact',
      footer_copy: '© 2026 Tensor Academy. All rights reserved.',
      verify_heading: 'Certificate Verification',
      verify_placeholder: 'Enter Certificate ID',
      verify_button: 'Verify',
      verify_error_empty: 'Please enter a Certificate ID.',
      verify_error_notfound: 'Certificate not found. Please check the ID and try again.',
    },
    fa: {
      tagline: 'هوش مصنوعی را بیاموز، آینده را بساز',
      nav_home: 'خانه',
      nav_about: 'دربارهٔ ما',
      nav_courses: 'دوره‌ها',
      nav_certificates: 'گواهی‌نامه‌ها',
      nav_verify: 'تأیید گواهی‌نامه',
      nav_contact: 'تماس',
      nav_faq: 'سوالات متداول',
      nav_privacy: 'سیاست حفظ حریم خصوصی',
      nav_terms: 'شرایط استفاده',
      hero_eyebrow: 'پلتفرم مدرن آموزش هوش مصنوعی',
      hero_title: 'هوش مصنوعی را بیاموز، آینده را بساز',
      hero_description: 'آکادمی تنسور یک آکادمی آنلاین دو زبانه برای یادگیری عمیق، یادگیری ماشین، مهندسی پرامپت و اپلیکیشن‌ها و چت‌بات‌های هوش مصنوعی است.',
      hero_cta_courses: 'مشاهدهٔ دوره‌ها',
      hero_cta_verify: 'تأیید گواهی‌نامه',
      stat_students: 'دانشجو',
      stat_graduates: 'فارغ‌التحصیل',
      stat_levels: 'سطح آموزشی',
      about_title: 'دربارهٔ آکادمی تنسور',
      about_vision_title: 'چشم‌انداز ما',
      about_vision_text: 'ما به یادگیرندگان کمک می‌کنیم مهارت‌های عملی هوش مصنوعی را کسب کنند، با فناوری‌های نوین آشنا شوند، از هوش مصنوعی به‌طور مؤثر استفاده کنند و برای فرصت‌های شغلی و درآمدی آینده آماده شوند.',
      about_founder_label: 'بنیان‌گذار:',
      about_founder_value: 'محمد عمر عمری',
      about_type_label: 'نوع:',
      about_type_value: 'آکادمی خصوصی',
      about_mode_label: 'شیوه:',
      about_mode_value: 'آنلاین',
      about_platforms_label: 'پلتفرم‌ها:',
      about_platforms_value: 'تلگرام، دیسکورد، گوگل میت',
      about_field_label: 'حوزه:',
      about_field_value: 'آموزش هوش مصنوعی',
      courses_title: 'دوره‌های ما',
      course_dl_desc: 'مبانی، تمرین و کاربردهای واقعی.',
      course_ml_desc: 'مدل‌های داده‌محور، روند آموزش و ارزیابی.',
      course_pe_desc: 'پرامپت‌نویسی مؤثر برای بهره‌وری، اتوماسیون و فرایندهای هوش مصنوعی.',
      course_aiapps_desc: 'ساخت دستیارهای عملی هوش مصنوعی و محصولات چت‌بات.',
      level_beginner: 'مقدماتی',
      level_semi: 'نیمه‌تخصصی',
      level_specialized: 'تخصصی',
      certificates_title: 'گواهی‌نامه‌ها',
      certificates_subtitle: 'هر فارغ‌التحصیل یک گواهی‌نامهٔ قابل تأیید با شناسهٔ یکتا و صفحهٔ اختصاصی آنلاین دریافت می‌کند.',
      cert_feat_verifiable: 'قابل تأیید آنلاین',
      cert_feat_unique: 'شناسهٔ یکتای گواهی',
      cert_feat_pdf: 'قابل دانلود به‌صورت PDF',
      cert_cta: 'تأیید یک گواهی‌نامه',
      contact_title: 'تماس با ما',
      contact_email_label: 'ایمیل',
      contact_social_label: 'شبکه‌های اجتماعی و آموزشی',
      faq_title: 'سوالات متداول',
      recognition_title: 'اعتبار',
      recog_authority_label: 'مرجع:',
      recog_authority_value: 'وزارت تحصیلات عالی افغانستان',
      recog_department_label: 'بخش:',
      recog_department_value: 'کمیته نظارت بر نهادهای خصوصی',
      recog_license_label: 'نوع مجوز:',
      recog_license_value: 'مجوز فعالیت آموزشی',
      recog_license_number_label: 'شماره مجوز:',
      recog_date_label: 'تاریخ صدور:',
      recog_location_label: 'محل فعالیت:',
      recog_location_value: 'فعالیت آموزشی آنلاین',
      recog_status_label: 'وضعیت:',
      recog_status_value: 'معتبر / فعال',
      footer_verify: 'تأیید گواهی‌نامه',
      footer_privacy: 'سیاست حفظ حریم خصوصی',
      footer_terms: 'شرایط استفاده',
      footer_contact: 'تماس',
      footer_copy: '© ۲۰۲۶ آکادمی تنسور. تمامی حقوق محفوظ است.',
      verify_heading: 'تأیید گواهی‌نامه',
      verify_placeholder: 'شناسهٔ گواهی را وارد کنید',
      verify_button: 'تأیید',
      verify_error_empty: 'لطفاً شناسهٔ گواهی را وارد کنید.',
      verify_error_notfound: 'گواهی یافت نشد. لطفاً شناسه را بررسی و دوباره تلاش کنید.',
    }
  };

  /* ---------- Utility: Persian/Western digit conversion ---------- */
  const persianDigits = ['۰','۱','۲','۳','۴','۵','۶','۷','۸','۹'];
  function toPersianDigits(str) {
    return str.replace(/\d/g, d => persianDigits[d]);
  }
  function toWesternDigits(str) {
    return str.replace(/[۰-۹]/g, d => persianDigits.indexOf(d).toString());
  }
  function convertDigits(lang) {
    document.querySelectorAll('[data-digits="true"]').forEach(el => {
      const original = el.getAttribute('data-original') || el.textContent;
      if (!el.getAttribute('data-original')) el.setAttribute('data-original', original);
      el.textContent = lang === 'fa' ? toPersianDigits(original) : toWesternDigits(original);
    });
  }

  /* ---------- Language & Theme ---------- */
  const getLang = () => localStorage.getItem('tensor-lang') || 'en';
  const setLang = (lang) => localStorage.setItem('tensor-lang', lang);
  const getTheme = () => localStorage.getItem('tensor-theme') || 'light';
  const setTheme = (theme) => localStorage.setItem('tensor-theme', theme);

  function updateDocumentLanguage(lang) {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'fa' ? 'rtl' : 'ltr';
    const titleEl = document.querySelector('title');
    if (titleEl) {
      titleEl.textContent = lang === 'fa'
        ? 'آکادمی تنسور — هوش مصنوعی را بیاموز، آینده را بساز'
        : 'Tensor Academy — Learn AI. Shape the Future.';
    }
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', lang === 'fa'
        ? 'آکادمی تنسور — پلتفرم مدرن آموزش هوش مصنوعی. یادگیری عمیق، یادگیری ماشین، مهندسی پرامپت و اپلیکیشن‌های هوش مصنوعی.'
        : 'Tensor Academy — Modern AI Academic Platform. Learn Deep Learning, Machine Learning, Prompt Engineering, and AI Apps.');
    }
  }

  function applyTranslations(lang) {
    // data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (i18n[lang] && i18n[lang][key]) el.textContent = i18n[lang][key];
    });
    // data-i18n-placeholder
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (i18n[lang] && i18n[lang][key]) el.setAttribute('placeholder', i18n[lang][key]);
    });
    // Special platforms li
    const platformsLi = document.querySelector('.about-details li:nth-child(4)');
    if (platformsLi && i18n[lang].about_platforms_label && i18n[lang].about_platforms_value) {
      platformsLi.innerHTML = `<strong>${i18n[lang].about_platforms_label}</strong> ${i18n[lang].about_platforms_value}`;
    }
    // Digit conversion
    convertDigits(lang);
  }

  function switchLanguage() {
    const current = getLang();
    const next = current === 'en' ? 'fa' : 'en';
    setLang(next);
    updateDocumentLanguage(next);
    applyTranslations(next);
    const langBtn = document.getElementById('langToggle');
    if (langBtn) {
      const indicator = langBtn.querySelector('.lang-indicator');
      if (indicator) indicator.textContent = next === 'fa' ? 'En' : 'فا';
    }
  }

  function applyTheme(theme) {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    const themeBtn = document.getElementById('themeToggle');
    if (themeBtn) {
      const icon = themeBtn.querySelector('.theme-icon');
      if (icon) icon.textContent = theme === 'dark' ? '☀️' : '🌙';
    }
  }

  function toggleTheme() {
    const current = getTheme();
    const next = current === 'dark' ? 'light' : 'dark';
    setTheme(next);
    applyTheme(next);
  }

  /* ---------- Fullscreen Menu ---------- */
  function initFullscreenMenu() {
    const menuBtn = document.getElementById('mobileMenuBtn');
    const menu = document.getElementById('fullscreenMenu');
    if (!menuBtn || !menu) return;

    menuBtn.addEventListener('click', () => {
      const expanded = menuBtn.getAttribute('aria-expanded') === 'true';
      menuBtn.setAttribute('aria-expanded', !expanded);
      menu.classList.toggle('open');
    });

    // Close menu on link click
    menu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        menu.classList.remove('open');
        menuBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---------- Reveal on Scroll (Intersection Observer) ---------- */
  function initReveal() {
    const reveals = document.querySelectorAll('.reveal');
    if (!reveals.length) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    reveals.forEach(el => observer.observe(el));
  }

  /* ---------- Count‑Up Animation ---------- */
  function animateCountUp(el) {
    const target = parseInt(el.getAttribute('data-target'), 10);
    if (isNaN(target)) return;
    const lang = getLang();
    const suffix = el.getAttribute('data-suffix') || '';
    let current = 0;
    const duration = 1500;
    const start = performance.now();

    function step(timestamp) {
      const progress = Math.min((timestamp - start) / duration, 1);
      current = Math.floor(progress * target);
      const rawText = current + suffix;
      el.textContent = lang === 'fa' ? toPersianDigits(rawText) : rawText;
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  function initCountUp() {
    const counters = document.querySelectorAll('.count-up');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCountUp(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    counters.forEach(el => observer.observe(el));
  }

  /* ---------- Accordion ---------- */
  function initAccordion() {
    const triggers = document.querySelectorAll('.accordion-trigger');
    triggers.forEach(trigger => {
      trigger.addEventListener('click', function () {
        const expanded = this.getAttribute('aria-expanded') === 'true';
        triggers.forEach(t => t.setAttribute('aria-expanded', 'false'));
        document.querySelectorAll('.accordion-panel').forEach(p => p.classList.remove('open'));
        if (!expanded) {
          this.setAttribute('aria-expanded', 'true');
          this.nextElementSibling?.classList.add('open');
        }
      });
    });
  }

  /* ---------- Smooth Scroll ---------- */
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }

  /* ---------- Certificate Verification ---------- */
  function initVerification() {
    const form = document.getElementById('verifyForm');
    if (!form) return;
    const input = document.getElementById('certId');
    const errorMsg = document.getElementById('verifyError');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const id = input.value.trim();
      if (!id) {
        showError(i18n[getLang()].verify_error_empty);
        return;
      }
      if (id === 'TA-AI-2026_MFM_2198_AF') {
        window.location.href = 'verify/certificates/TA-AI-2026_MFM_2198_AF.html';
      } else {
        showError(i18n[getLang()].verify_error_notfound);
      }
    });
    function showError(msg) {
      errorMsg.textContent = msg;
      errorMsg.style.display = 'block';
      setTimeout(() => errorMsg.style.display = 'none', 5000);
    }
  }

  /* ---------- Initialization ---------- */
  function init() {
    const savedLang = getLang();
    updateDocumentLanguage(savedLang);
    applyTranslations(savedLang);
    const langBtn = document.getElementById('langToggle');
    if (langBtn) {
      const indicator = langBtn.querySelector('.lang-indicator');
      if (indicator) indicator.textContent = savedLang === 'fa' ? 'En' : 'فا';
      langBtn.addEventListener('click', switchLanguage);
    }

    const savedTheme = getTheme();
    applyTheme(savedTheme);
    document.getElementById('themeToggle')?.addEventListener('click', toggleTheme);

    initFullscreenMenu();
    initReveal();
    initCountUp();
    initAccordion();
    initSmoothScroll();
    initVerification();
  }

  document.readyState === 'loading' ? document.addEventListener('DOMContentLoaded', init) : init();
})();
