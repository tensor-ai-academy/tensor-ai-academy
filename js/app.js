/* ============================================================
   TENSOR ACADEMY — Main Application Script
   Language, Theme, Navigation, Accordion, Verification, Bilingual
   ============================================================ */
(function () {
  'use strict';

  /* ---------- i18n Translations ---------- */
  const i18n = {
    en: {
      tagline: 'Learn AI. Shape the Future.',
      nav_about: 'About',
      nav_courses: 'Courses',
      nav_certificates: 'Certificates',
      nav_contact: 'Contact',
      nav_faq: 'FAQ',
      nav_verify: 'Verify Certificate',
      hero_eyebrow: 'Modern AI Academic Platform',
      hero_title: 'Learn AI. Shape the Future.',
      hero_description: 'Tensor Academy is a bilingual online academy for Deep Learning, Machine Learning, Prompt Engineering, and AI apps/chatbots.',
      hero_cta_courses: 'Explore Courses',
      hero_cta_verify: 'Verify Certificate',
      stat_students: 'Students',
      stat_graduates: 'Graduates',
      stat_levels: 'Learning Levels',
      about_title: 'About Tensor Academy',
      about_description: 'Tensor Academy is a private online AI academy focused on AI education, career readiness, practical skills, and effective use of artificial intelligence.',
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
      about_vision_title: 'Our Vision',
      about_vision_text: 'We help learners build practical AI skills, understand modern artificial intelligence technologies, use AI effectively, and prepare themselves for future career and income opportunities.',
      courses_title: 'Our Courses',
      course_dl_desc: 'Foundations, practice, and real-world applications.',
      course_ml_desc: 'Data-driven models, training workflows, and evaluation.',
      course_pe_desc: 'Effective prompting for productivity, automation, and AI workflows.',
      course_aiapps_desc: 'Building practical AI assistants and chatbot products.',
      level_beginner: 'Beginner',
      level_semi: 'Semi-specialized',
      level_specialized: 'Specialized',
      certificates_title: 'Certificates',
      certificates_subtitle: 'Every graduate receives a verifiable certificate with a unique ID, QR code, and dedicated online page.',
      cert_feat_verifiable: 'Verifiable Online',
      cert_feat_unique: 'Unique Certificate ID',
      cert_feat_pdf: 'Downloadable PDF',
      cert_cta: 'Verify a Certificate',
      contact_title: 'Contact Us',
      contact_email_label: 'Email',
      contact_social_label: 'Social & Learning',
      faq_title: 'Frequently Asked Questions',
      faq_q1: 'Is Tensor Academy bilingual?',
      faq_a1: 'Yes. The website supports English and Persian / Dari.',
      faq_q2: 'Does the site support certificate verification?',
      faq_a2: 'Yes. Each certificate can have its own verification page and dedicated URL.',
      faq_q3: 'Can certificates be viewed and downloaded?',
      faq_a3: 'Yes. Certificates can be viewed online and downloaded as PDF files.',
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
      nav_about: 'دربارهٔ ما',
      nav_courses: 'دوره‌ها',
      nav_certificates: 'گواهی‌نامه‌ها',
      nav_contact: 'تماس',
      nav_faq: 'سوالات متداول',
      nav_verify: 'تأیید گواهی‌نامه',
      hero_eyebrow: 'پلتفرم مدرن آموزش هوش مصنوعی',
      hero_title: 'هوش مصنوعی را بیاموز، آینده را بساز',
      hero_description: 'آکادمی تنسور یک آکادمی آنلاین دو زبانه برای یادگیری عمیق، یادگیری ماشین، مهندسی پرامپت و اپلیکیشن‌ها و چت‌بات‌های هوش مصنوعی است.',
      hero_cta_courses: 'مشاهدهٔ دوره‌ها',
      hero_cta_verify: 'تأیید گواهی‌نامه',
      stat_students: 'دانشجو',
      stat_graduates: 'فارغ‌التحصیل',
      stat_levels: 'سطح آموزشی',
      about_title: 'دربارهٔ آکادمی تنسور',
      about_description: 'آکادمی تنسور یک آکادمی خصوصی آنلاین در حوزهٔ هوش مصنوعی است که بر آموزش هوش مصنوعی، آمادگی شغلی، مهارت‌های عملی و استفادهٔ مؤثر از هوش مصنوعی تمرکز دارد.',
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
      about_vision_title: 'چشم‌انداز ما',
      about_vision_text: 'ما به یادگیرندگان کمک می‌کنیم مهارت‌های عملی هوش مصنوعی را کسب کنند، با فناوری‌های نوین آشنا شوند، از هوش مصنوعی به‌طور مؤثر استفاده کنند و برای فرصت‌های شغلی و درآمدی آینده آماده شوند.',
      courses_title: 'دوره‌های ما',
      course_dl_desc: 'مبانی، تمرین و کاربردهای واقعی.',
      course_ml_desc: 'مدل‌های داده‌محور، روند آموزش و ارزیابی.',
      course_pe_desc: 'پرامپت‌نویسی مؤثر برای بهره‌وری، اتوماسیون و فرایندهای هوش مصنوعی.',
      course_aiapps_desc: 'ساخت دستیارهای عملی هوش مصنوعی و محصولات چت‌بات.',
      level_beginner: 'مقدماتی',
      level_semi: 'نیمه‌تخصصی',
      level_specialized: 'تخصصی',
      certificates_title: 'گواهی‌نامه‌ها',
      certificates_subtitle: 'هر فارغ‌التحصیل یک گواهی‌نامهٔ قابل تأیید با شناسهٔ یکتا، کیوآرکد و صفحهٔ اختصاصی آنلاین دریافت می‌کند.',
      cert_feat_verifiable: 'قابل تأیید آنلاین',
      cert_feat_unique: 'شناسهٔ یکتای گواهی',
      cert_feat_pdf: 'قابل دانلود به‌صورت PDF',
      cert_cta: 'تأیید یک گواهی‌نامه',
      contact_title: 'تماس با ما',
      contact_email_label: 'ایمیل',
      contact_social_label: 'شبکه‌های اجتماعی و آموزشی',
      faq_title: 'سوالات متداول',
      faq_q1: 'آیا آکادمی تنسور دو زبانه است؟',
      faq_a1: 'بله. وب‌سایت از زبان انگلیسی و فارسی/دری پشتیبانی می‌کند.',
      faq_q2: 'آیا سایت از تأیید گواهی‌نامه پشتیبانی می‌کند؟',
      faq_a2: 'بله. هر گواهی‌نامه می‌تواند صفحهٔ تأیید و آدرس اینترنتی اختصاصی خود را داشته باشد.',
      faq_q3: 'آیا گواهی‌نامه‌ها قابل مشاهده و دانلود هستند؟',
      faq_a3: 'بله. گواهی‌نامه‌ها به‌صورت آنلاین قابل مشاهده و به‌عنوان فایل PDF قابل دانلود هستند.',
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

  /* ---------- Utility Functions ---------- */
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
    // Elements with data-i18n
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (i18n[lang] && i18n[lang][key]) {
        el.textContent = i18n[lang][key];
      }
    });
    // Elements with data-i18n-placeholder (for inputs)
    const placeholders = document.querySelectorAll('[data-i18n-placeholder]');
    placeholders.forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (i18n[lang] && i18n[lang][key]) {
        el.setAttribute('placeholder', i18n[lang][key]);
      }
    });
    // Platforms special case
    const platformsLi = document.querySelector('.about-details li:nth-child(4)');
    if (platformsLi && i18n[lang].about_platforms_label && i18n[lang].about_platforms_value) {
      platformsLi.innerHTML = `<strong>${i18n[lang].about_platforms_label}</strong> ${i18n[lang].about_platforms_value}`;
    }
    // Bilingual static blocks: lang-en / lang-fa visibility is handled by CSS based on html[lang]
    // No further action needed.
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
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
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

  /* ---------- Mobile Menu ---------- */
  function initMobileMenu() {
    const menuBtn = document.getElementById('mobileMenuBtn');
    const nav = document.getElementById('mainNav');
    if (!menuBtn || !nav) return;
    menuBtn.addEventListener('click', () => {
      const expanded = menuBtn.getAttribute('aria-expanded') === 'true';
      menuBtn.setAttribute('aria-expanded', !expanded);
      nav.classList.toggle('open');
    });
    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('open');
        menuBtn.setAttribute('aria-expanded', 'false');
      });
    });
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
          const panel = this.nextElementSibling;
          if (panel) panel.classList.add('open');
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
    if (!input || !errorMsg) return;

    form.addEventListener('submit', function (e) {
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
      setTimeout(() => { errorMsg.style.display = 'none'; }, 5000);
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
    const themeBtn = document.getElementById('themeToggle');
    if (themeBtn) {
      themeBtn.addEventListener('click', toggleTheme);
    }

    initMobileMenu();
    initAccordion();
    initSmoothScroll();
    initVerification();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
