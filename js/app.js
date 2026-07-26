(() => {
  'use strict';

  const STORAGE_KEYS = Object.freeze({
    theme: 'tensor-academy-theme',
    language: 'tensor-academy-language'
  });

  const DEFAULT_LANGUAGE = 'en';
  const DEFAULT_THEME = 'light';

  const SUPPORTED_LANGUAGES = Object.freeze(['en', 'fa']);
  const SUPPORTED_THEMES = Object.freeze(['light', 'dark']);

  const translations = {
    en: {
      'nav.about': 'About Tensor Academy',
      'nav.courses': 'Courses',
      'nav.certificates': 'Certificates',
      'nav.verify': 'Certificate Verification',
      'nav.contact': 'Contact',
      'nav.faq': 'FAQ',

      'hero.eyebrow': 'Modern AI Academic Platform',
      'hero.title': 'Learn AI. Shape the Future.',
      'hero.description':
        'Tensor Academy is a bilingual online academy for Deep Learning, Machine Learning, Prompt Engineering, and AI apps/chatbots.',
      'hero.exploreCourses': 'Explore Courses',
      'hero.verifyCertificate': 'Verify Certificate',

      'stats.students': 'Students',
      'stats.graduates': 'Graduates',
      'stats.levels': 'Learning Levels',

      'about.title': 'About Tensor Academy',
      'about.description':
        'Tensor Academy is a private online AI academy focused on AI education, career readiness, practical skills, and effective use of artificial intelligence.',

      'courses.title': 'Courses',
      'courses.deepLearning.title': 'Deep Learning',
      'courses.deepLearning.description':
        'Foundations, practice, and real-world applications.',
      'courses.machineLearning.title': 'Machine Learning',
      'courses.machineLearning.description':
        'Data-driven models, training workflows, and evaluation.',
      'courses.promptEngineering.title': 'Prompt Engineering',
      'courses.promptEngineering.description':
        'Effective prompting for productivity, automation, and AI workflows.',
      'courses.aiApps.title': 'AI Apps / Chatbots',
      'courses.aiApps.description':
        'Building practical AI assistants and chatbot products.',

      'levels.title': 'Learning Levels',
      'levels.beginner': 'Beginner',
      'levels.semiSpecialized': 'Semi-specialized',
      'levels.specialized': 'Specialized',

      'certificates.title': 'Certificates',
      'certificates.description':
        'Tensor Academy provides a certificate system designed to support verifiable academic achievements and future expansion for multiple learners.',
      'certificates.verify': 'Verify Certificate',

      'verification.title': 'Certificate Verification',
      'verification.description':
        'Enter a Certificate ID to verify a certificate and view its dedicated verification page.',
      'verification.placeholder': 'Enter Certificate ID',
      'verification.button': 'Verify Certificate',
      'verification.sample': 'Try sample certificate',

      'contact.title': 'Contact',
      'contact.email': 'Email',
      'contact.telegram': 'Telegram',
      'contact.phone': 'Phone',
      'contact.phoneUnavailable': 'Not Available',

      'faq.title': 'Frequently Asked Questions',
      'faq.bilingual.question': 'Is Tensor Academy bilingual?',
      'faq.bilingual.answer':
        'Yes. The website supports English and Persian / Dari.',
      'faq.verification.question':
        'Does the site support certificate verification?',
      'faq.verification.answer':
        'Yes. Each certificate can have its own verification page and dedicated URL.',
      'faq.pdf.question':
        'Can certificates be viewed and downloaded?',
      'faq.pdf.answer':
        'Yes. Certificates can be viewed online and downloaded as PDF files.',

      'footer.rights': '© 2026 Tensor Academy. All rights reserved.',
      'footer.privacy': 'Privacy Policy',
      'footer.terms': 'Terms of Use',
      'footer.verification': 'Certificate Verification',
      'footer.contact': 'Contact',

      'common.menu': 'Menu',
      'common.close': 'Close',
      'common.language': 'Language',
      'common.theme': 'Theme',
      'common.lightMode': 'Light mode',
      'common.darkMode': 'Dark mode'
    },

    fa: {
      'nav.about': 'درباره آکادمی تنسور',
      'nav.courses': 'دوره‌ها',
      'nav.certificates': 'گواهی‌نامه‌ها',
      'nav.verify': 'تأیید گواهی‌نامه',
      'nav.contact': 'تماس با ما',
      'nav.faq': 'سؤالات متداول',

      'hero.eyebrow': 'پلتفرم مدرن آکادمیک هوش مصنوعی',
      'hero.title': 'هوش مصنوعی را بیاموز، آینده را بساز',
      'hero.description':
        'آکادمی تنسور یک آکادمی آنلاین دو زبانه برای یادگیری عمیق، یادگیری ماشین، مهندسی پرامپت و اپلیکیشن‌ها و چت‌بات‌های هوش مصنوعی است.',
      'hero.exploreCourses': 'مشاهده دوره‌ها',
      'hero.verifyCertificate': 'تأیید گواهی‌نامه',

      'stats.students': 'دانشجو',
      'stats.graduates': 'فارغ‌التحصیل',
      'stats.levels': 'سطح آموزشی',

      'about.title': 'درباره آکادمی تنسور',
      'about.description':
        'آکادمی تنسور یک آکادمی خصوصی آنلاین در حوزه هوش مصنوعی است که بر آموزش AI، آمادگی شغلی، مهارت‌های عملی و استفاده مؤثر از هوش مصنوعی تمرکز دارد.',

      'courses.title': 'دوره‌ها',
      'courses.deepLearning.title': 'یادگیری عمیق',
      'courses.deepLearning.description':
        'مبانی، تمرین و کاربردهای واقعی یادگیری عمیق.',
      'courses.machineLearning.title': 'یادگیری ماشین',
      'courses.machineLearning.description':
        'مدل‌های داده‌محور، فرایند آموزش و ارزیابی مدل‌ها.',
      'courses.promptEngineering.title': 'مهندسی پرامپت',
      'courses.promptEngineering.description':
        'پرامپت‌نویسی مؤثر برای بهره‌وری، اتوماسیون و گردش‌کارهای هوش مصنوعی.',
      'courses.aiApps.title': 'اپلیکیشن‌ها و چت‌بات‌های هوش مصنوعی',
      'courses.aiApps.description':
        'ساخت دستیارهای کاربردی هوش مصنوعی و محصولات مبتنی بر چت‌بات.',

      'levels.title': 'سطوح آموزشی',
      'levels.beginner': 'مقدماتی',
      'levels.semiSpecialized': 'نیمه‌تخصصی',
      'levels.specialized': 'تخصصی',

      'certificates.title': 'گواهی‌نامه‌ها',
      'certificates.description':
        'آکادمی تنسور دارای سیستم گواهی‌نامه‌ای است که برای پشتیبانی از دستاوردهای آموزشی قابل تأیید و توسعه در مقیاس دانشجویان متعدد طراحی شده است.',
      'certificates.verify': 'تأیید گواهی‌نامه',

      'verification.title': 'تأیید گواهی‌نامه',
      'verification.description':
        'برای بررسی گواهی‌نامه و مشاهده صفحه اختصاصی آن، شناسه گواهی‌نامه را وارد کنید.',
      'verification.placeholder': 'شناسه گواهی‌نامه را وارد کنید',
      'verification.button': 'تأیید گواهی‌نامه',
      'verification.sample': 'مشاهده نمونه گواهی‌نامه',

      'contact.title': 'تماس با ما',
      'contact.email': 'ایمیل',
      'contact.telegram': 'تلگرام',
      'contact.phone': 'تلفن',
      'contact.phoneUnavailable': 'در دسترس نیست',

      'faq.title': 'سؤالات متداول',
      'faq.bilingual.question': 'آیا آکادمی تنسور دو زبانه است؟',
      'faq.bilingual.answer':
        'بله. وب‌سایت از زبان‌های انگلیسی و فارسی / دری پشتیبانی می‌کند.',
      'faq.verification.question':
        'آیا سایت از تأیید گواهی‌نامه پشتیبانی می‌کند؟',
      'faq.verification.answer':
        'بله. هر گواهی‌نامه می‌تواند صفحه تأیید اختصاصی و URL مستقل خود را داشته باشد.',
      'faq.pdf.question':
        'آیا گواهی‌نامه‌ها قابل مشاهده و دانلود هستند؟',
      'faq.pdf.answer':
        'بله. گواهی‌نامه‌ها را می‌توان به‌صورت آنلاین مشاهده و به شکل فایل PDF دانلود کرد.',

      'footer.rights': '© ۲۰۲۶ آکادمی تنسور. تمامی حقوق محفوظ است.',
      'footer.privacy': 'حریم خصوصی',
      'footer.terms': 'شرایط استفاده',
      'footer.verification': 'تأیید گواهی‌نامه',
      'footer.contact': 'تماس با ما',

      'common.menu': 'منو',
      'common.close': 'بستن',
      'common.language': 'زبان',
      'common.theme': 'پوسته',
      'common.lightMode': 'حالت روشن',
      'common.darkMode': 'حالت تاریک'
    }
  };

  const certificateRoutes = Object.freeze({
    'TA-AI-2026_MFM_2198_AF':
      'verify/certificates/TA-AI-2026_MFM_2198_AF.html',
    'TA-AI-2026_ABH_1059_AF':
      'verify/certificates/TA-AI-2026_ABH_1059_AF.html'
  });

  const getStoredValue = (key, allowedValues, fallback) => {
    try {
      const value = localStorage.getItem(key);
      return allowedValues.includes(value) ? value : fallback;
    } catch {
      return fallback;
    }
  };

  const setStoredValue = (key, value) => {
    try {
      localStorage.setItem(key, value);
    } catch {
      // Local storage may be unavailable in restricted environments.
    }
  };

  const getLanguage = () =>
    getStoredValue(
      STORAGE_KEYS.language,
      SUPPORTED_LANGUAGES,
      DEFAULT_LANGUAGE
    );

  const getTheme = () =>
    getStoredValue(
      STORAGE_KEYS.theme,
      SUPPORTED_THEMES,
      DEFAULT_THEME
    );

  const setDocumentLanguage = (language) => {
    const isPersian = language === 'fa';

    document.documentElement.lang = isPersian ? 'fa' : 'en';
    document.documentElement.dir = isPersian ? 'rtl' : 'ltr';
  };

  const translateElement = (element, language) => {
    const key = element.dataset.i18n;
    if (!key || !translations[language]?.[key]) {
      return;
    }

    element.textContent = translations[language][key];
  };

  const translateAttribute = (element, language) => {
    const key = element.dataset.i18nAttr;
    const attribute = element.dataset.i18nAttribute;

    if (
      !key ||
      !attribute ||
      !translations[language]?.[key]
    ) {
      return;
    }

    element.setAttribute(
      attribute,
      translations[language][key]
    );
  };

  const applyLanguage = (language) => {
    if (!SUPPORTED_LANGUAGES.includes(language)) {
      return;
    }

    setStoredValue(STORAGE_KEYS.language, language);
    setDocumentLanguage(language);

    document
      .querySelectorAll('[data-i18n]')
      .forEach((element) => {
        translateElement(element, language);
      });

    document
      .querySelectorAll('[data-i18n-attr]')
      .forEach((element) => {
        translateAttribute(element, language);
      });

    document
      .querySelectorAll('[data-language-value]')
      .forEach((element) => {
        element.textContent = language === 'fa' ? 'EN' : 'FA';
      });

    document
      .querySelectorAll('[data-language-name]')
      .forEach((element) => {
        element.textContent =
          language === 'fa' ? 'English' : 'فارسی';
      });

    document.dispatchEvent(
      new CustomEvent('tensor:languagechange', {
        detail: { language }
      })
    );
  };

  const applyTheme = (theme) => {
    if (!SUPPORTED_THEMES.includes(theme)) {
      return;
    }

    setStoredValue(STORAGE_KEYS.theme, theme);

    document.documentElement.dataset.theme = theme;

    document
      .querySelectorAll('[data-theme-value]')
      .forEach((element) => {
        element.textContent =
          theme === 'dark'
            ? translations[getLanguage()]['common.lightMode']
            : translations[getLanguage()]['common.darkMode'];
      });

    document
      .querySelectorAll('[data-theme-icon]')
      .forEach((element) => {
        element.textContent = theme === 'dark' ? '☀' : '☾';
      });

    document.dispatchEvent(
      new CustomEvent('tensor:themechange', {
        detail: { theme }
      })
    );
  };

  const initializeLanguageControls = () => {
    const languageControls = document.querySelectorAll(
      '[data-language-toggle], [data-language]'
    );

    languageControls.forEach((control) => {
      control.addEventListener('click', () => {
        const currentLanguage = getLanguage();
        const nextLanguage =
          currentLanguage === 'en' ? 'fa' : 'en';

        applyLanguage(nextLanguage);
      });
    });
  };

  const initializeThemeControls = () => {
    const themeControls = document.querySelectorAll(
      '[data-theme-toggle], [data-theme]'
    );

    themeControls.forEach((control) => {
      control.addEventListener('click', () => {
        const currentTheme = getTheme();
        const nextTheme =
          currentTheme === 'light' ? 'dark' : 'light';

        applyTheme(nextTheme);
      });
    });
  };

  const initializeMobileNavigation = () => {
    const menuToggle = document.querySelector(
      '[data-menu-toggle]'
    );

    const mobileMenu = document.querySelector(
      '[data-mobile-menu]'
    );

    if (!menuToggle || !mobileMenu) {
      return;
    }

    const closeMenu = () => {
      mobileMenu.classList.remove('is-open');
      menuToggle.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('menu-open');
    };

    menuToggle.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.toggle('is-open');

      menuToggle.setAttribute(
        'aria-expanded',
        String(isOpen)
      );

      document.body.classList.toggle(
        'menu-open',
        isOpen
      );
    });

    mobileMenu
      .querySelectorAll('a')
      .forEach((link) => {
        link.addEventListener('click', closeMenu);
      });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        closeMenu();
      }
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth >= 900) {
        closeMenu();
      }
    });
  };

  const initializeSmoothScrolling = () => {
    document
      .querySelectorAll('a[href^="#"]')
      .forEach((link) => {
        link.addEventListener('click', (event) => {
          const targetId = link.getAttribute('href');

          if (
            !targetId ||
            targetId === '#' ||
            targetId.length < 2
          ) {
            return;
          }

          const target = document.querySelector(targetId);

          if (!target) {
            return;
          }

          event.preventDefault();

          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });

          history.replaceState(
            null,
            '',
            targetId
          );
        });
      });
  };

  const initializeFaq = () => {
    const faqItems = document.querySelectorAll(
      '[data-faq-item]'
    );

    faqItems.forEach((item) => {
      const question = item.querySelector(
        '[data-faq-question]'
      );

      const answer = item.querySelector(
        '[data-faq-answer]'
      );

      if (!question || !answer) {
        return;
      }

      const answerId =
        answer.id ||
        `faq-answer-${Math.random()
          .toString(36)
          .slice(2, 10)}`;

      answer.id = answerId;

      question.setAttribute(
        'aria-controls',
        answerId
      );

      question.setAttribute(
        'aria-expanded',
        'false'
      );

      answer.hidden = true;

      question.addEventListener('click', () => {
        const isOpen =
          question.getAttribute('aria-expanded') === 'true';

        faqItems.forEach((otherItem) => {
          const otherQuestion =
            otherItem.querySelector(
              '[data-faq-question]'
            );

          const otherAnswer =
            otherItem.querySelector(
              '[data-faq-answer]'
            );

          if (
            otherQuestion &&
            otherAnswer &&
            otherItem !== item
          ) {
            otherQuestion.setAttribute(
              'aria-expanded',
              'false'
            );

            otherItem.classList.remove('is-open');
            otherAnswer.hidden = true;
          }
        });

        question.setAttribute(
          'aria-expanded',
          String(!isOpen)
        );

        item.classList.toggle(
          'is-open',
          !isOpen
        );

        answer.hidden = isOpen;
      });
    });
  };

  const initializeCertificateVerification = () => {
    const form = document.querySelector(
      '[data-certificate-form]'
    );

    const input = document.querySelector(
      '[data-certificate-id]'
    );

    if (!form || !input) {
      return;
    }

    form.addEventListener('submit', (event) => {
      event.preventDefault();

      const certificateId = input.value
        .trim()
        .toUpperCase();

      if (!certificateId) {
        input.focus();
        return;
      }

      const route =
        certificateRoutes[certificateId];

      if (route) {
        window.location.href = route;
        return;
      }

      const verificationResult =
        document.querySelector(
          '[data-verification-result]'
        );

      if (verificationResult) {
        verificationResult.hidden = false;
        verificationResult.textContent =
          'Certificate ID not found. Please check the ID and try again.';
        verificationResult.classList.add(
          'is-error'
        );
      }
    });
  };

  const initializeRevealAnimations = () => {
    const elements = document.querySelectorAll(
      '[data-reveal]'
    );

    if (!elements.length) {
      return;
    }

    if (
      !('IntersectionObserver' in window) ||
      window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches
    ) {
      elements.forEach((element) => {
        element.classList.add('is-visible');
      });

      return;
    }

    const observer = new IntersectionObserver(
      (entries, observerInstance) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add(
            'is-visible'
          );

          observerInstance.unobserve(
            entry.target
          );
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px'
      }
    );

    elements.forEach((element) => {
      observer.observe(element);
    });
  };

  const initializeActiveNavigation = () => {
    const sections = document.querySelectorAll(
      'main section[id]'
    );

    const navigationLinks =
      document.querySelectorAll(
        'a[href^="#"]'
      );

    if (
      !sections.length ||
      !navigationLinks.length ||
      !('IntersectionObserver' in window)
    ) {
      return;
    }

    const sectionObserver =
      new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) {
              return;
            }

            navigationLinks.forEach((link) => {
              const matches =
                link.getAttribute('href') ===
                `#${entry.target.id}`;

              link.classList.toggle(
                'is-active',
                matches
              );

              if (matches) {
                link.setAttribute(
                  'aria-current',
                  'page'
                );
              } else {
                link.removeAttribute(
                  'aria-current'
                );
              }
            });
          });
        },
        {
          rootMargin:
            '-20% 0px -65% 0px',
          threshold: 0
        }
      );

    sections.forEach((section) => {
      sectionObserver.observe(section);
    });
  };

  const initializeExternalLinks = () => {
    document
      .querySelectorAll('a[href^="http"]')
      .forEach((link) => {
        const currentHost =
          window.location.hostname;

        try {
          const linkHost =
            new URL(link.href).hostname;

          if (
            linkHost &&
            linkHost !== currentHost
          ) {
            link.target = '_blank';
            link.rel = 'noopener noreferrer';
          }
        } catch {
          // Ignore malformed URLs.
        }
      });
  };

  const initializeApp = () => {
    const initialLanguage = getLanguage();
    const initialTheme = getTheme();

    applyLanguage(initialLanguage);
    applyTheme(initialTheme);

    initializeLanguageControls();
    initializeThemeControls();
    initializeMobileNavigation();
    initializeSmoothScrolling();
    initializeFaq();
    initializeCertificateVerification();
    initializeRevealAnimations();
    initializeActiveNavigation();
    initializeExternalLinks();
  };

  if (document.readyState === 'loading') {
    document.addEventListener(
      'DOMContentLoaded',
      initializeApp,
      { once: true }
    );
  } else {
    initializeApp();
  }
})();
