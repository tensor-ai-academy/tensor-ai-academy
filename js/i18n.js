/* =========================================================
   TENSOR ACADEMY
   Internationalization Manager
   English / Persian
   LTR / RTL
   Complete Language System
========================================================= */

(function () {
    "use strict";

    /* =====================================================
       CONFIGURATION
    ===================================================== */

    const STORAGE_KEY = "tensor-academy-language";
    const SUPPORTED_LANGUAGES = ["en", "fa"];
    const DEFAULT_LANGUAGE = "en";


    /* =====================================================
       TRANSLATIONS
    ===================================================== */

    const translations = {

        /* =================================================
           ENGLISH
        ================================================= */

        en: {

            title:
                "Tensor Academy | Learn AI. Shape the Future.",

            description:
                "Tensor Academy is an online educational academy focused on artificial intelligence, machine learning, deep learning, prompt engineering, and emerging AI technologies.",

            brandName:
                "Tensor Academy",

            brandTagline:
                "Learn AI. Shape the Future.",

            navAbout:
                "About Tensor Academy",

            navVerification:
                "Certificate Verification",

            navContact:
                "Contact",

            navFaq:
                "FAQ",

            heroEyebrow:
                "Licensed Educational Academy",

            heroTitleTop:
                "Learn Artificial Intelligence.",

            heroTitleBottom:
                "Shape the Future.",

            heroDescription:
                "Tensor Academy is an online educational academy dedicated to developing knowledgeable, skilled, and future-ready individuals in artificial intelligence and emerging technologies.",

            heroPrimary:
                "Verify a Certificate",

            heroSecondary:
                "About Tensor Academy",

            aboutLabel:
                "About Tensor Academy",

            aboutTitle:
                "Building AI Skills for a Smarter Future",

            aboutText1:
                "Tensor Academy is an online educational academy focused on artificial intelligence and emerging technologies. Our learning environment is designed to make practical and specialized AI education accessible to Persian-speaking learners around the world.",

            aboutText2:
                "Through structured learning at beginner, semi-specialist, and specialist levels, the academy aims to help learners understand, use, and adapt to technologies increasingly powered by artificial intelligence.",

            licenseLabel:
                "Official License Information",

            licenseTitle:
                "License Verification",

            licenseType:
                "License Type",

            licenseTypeValue:
                "Educational Activity License",

            licenseNumber:
                "License Number",

            licenseNumberValue:
                "D-3198",

            licenseIssuer:
                "Issuing Authority",

            licenseIssuerValue:
                "Ministry of Higher Education of Afghanistan — Directorate of Private Student Affairs",

            licenseDate:
                "Issue Date",

            licenseDateValue:
                "15 August 2024",

            licenseLocation:
                "Place of Activity",

            licenseLocationValue:
                "Online Educational Activity",

            licenseStatus:
                "License Status",

            licenseStatusValue:
                "Active / Valid",

            programLabel:
                "Learning Pathways",

            programTitle:
                "AI Education for Every Level",

            programBeginner:
                "Beginner",

            programBeginnerText:
                "A structured introduction to artificial intelligence, essential concepts, and practical AI tools for learners starting their journey.",

            programSemi:
                "Semi-Specialist",

            programSemiText:
                "Develop practical knowledge in machine learning, deep learning, prompt engineering, and advanced AI applications.",

            programSpecialist:
                "Specialist",

            programSpecialistText:
                "Advanced and specialized learning designed for learners seeking deeper expertise and practical experience in AI technologies.",

            impactLabel:
                "Our Impact",

            impactTitle:
                "Growing an AI-Literate Community",

            impactStudents:
                "Students",

            impactGraduates:
                "Graduates",

            impactLevels:
                "Learning Levels",

            missionLabel:
                "Our Mission",

            missionTitle:
                "Empowering People Through Artificial Intelligence",

            missionText:
                "Tensor Academy is committed to developing knowledgeable and capable individuals in artificial intelligence and emerging technologies, helping them become active contributors to society, discover career opportunities, and build income-generating skills through AI.",

            visionLabel:
                "Our Vision",

            visionTitle:
                "Preparing Learners for an AI-Powered World",

            visionText:
                "We envision a future where learners can confidently understand and effectively use technologies increasingly powered by artificial intelligence, while recognizing potential risks and contributing to a responsible and innovative digital society.",

            careerTitle:
                "Learn Skills. Create Opportunities.",

            careerText:
                "Practical AI knowledge can open pathways to professional growth, employment, and new income opportunities.",

            verificationLabel:
                "Certificate Verification",

            verificationTitle:
                "Verify an Official Tensor Academy Certificate",

            verificationText:
                "Enter a certificate ID to access its official verification page and review the certificate information registered in the Tensor Academy verification system.",

            verificationButton:
                "Verify Certificate",

            verificationPlaceholder:
                "Example: TA-AI-2026-AM-1050-AF",

            verificationExample:
                "Example: TA-AI-2026-AM-1050-AF",

            verificationInputLabel:
                "Certificate ID",

            faqLabel:
                "Frequently Asked Questions",

            faqTitle:
                "Frequently Asked Questions",

            faqQ1:
                "Is Tensor Academy an online academy?",

            faqA1:
                "Yes. Tensor Academy operates as an online educational academy and provides learning opportunities through digital communication and learning platforms.",

            faqQ2:
                "What subjects are taught?",

            faqA2:
                "The academy focuses on artificial intelligence, machine learning, deep learning, prompt engineering, advanced AI applications, and AI chatbot technologies.",

            faqQ3:
                "How can I verify a certificate?",

            faqA3:
                "Each certificate is assigned a unique identification code and dedicated verification URL. Certificate information can be reviewed through the official Tensor Academy verification system.",

            faqQ4:
                "How can I register for a course?",

            faqA4:
                "Course registration is handled through direct communication with the Tensor Academy management team via Telegram.",

            faqQ5:
                "Does Tensor Academy offer certificates?",

            faqA5:
                "Yes. Students who successfully complete the applicable educational requirements may receive a certificate containing a unique identification code and verification information.",

            contactLabel:
                "Contact Tensor Academy",

            contactTitle:
                "Get in Touch",

            contactEmail:
                "Official Email",

            contactTelegram:
                "Telegram Manager",

            footerTagline:
                "Learn AI. Shape the Future.",

            footerPrivacy:
                "Privacy Policy",

            footerTerms:
                "Terms of Use",

            footerRights:
                "All rights reserved.",

            footerDirector:
                "Founder & Director: Mohammad Omar Omari",

            languageButton:
                "FA",

            themeDarkLabel:
                "Switch to dark mode",

            themeLightLabel:
                "Switch to light mode",

            menuOpenLabel:
                "Open navigation menu",

            menuCloseLabel:
                "Close navigation menu"

        },


        /* =================================================
           PERSIAN
        ================================================= */

        fa: {

            title:
                "آکادمی تنسور | هوش مصنوعی را بیاموز، آینده را بساز",

            description:
                "آکادمی تنسور یک آکادمی آموزشی آنلاین با تمرکز بر هوش مصنوعی، یادگیری ماشین، یادگیری عمیق، مهندسی پرامپت و فناوری‌های نوظهور هوش مصنوعی است.",

            brandName:
                "آکادمی تنسور",

            brandTagline:
                "هوش مصنوعی را بیاموز، آینده را بساز",

            navAbout:
                "درباره آکادمی تنسور",

            navVerification:
                "تأیید تصدیق‌نامه",

            navContact:
                "ارتباط با ما",

            navFaq:
                "پرسش‌های متداول",

            heroEyebrow:
                "آکادمی آموزشی دارای جواز",

            heroTitleTop:
                "هوش مصنوعی را بیاموز.",

            heroTitleBottom:
                "آینده را بساز.",

            heroDescription:
                "آکادمی تنسور یک آکادمی آموزشی آنلاین است که با تمرکز بر هوش مصنوعی و فناوری‌های نوظهور، برای پرورش افراد آگاه، متخصص و آماده برای آینده فعالیت می‌کند.",

            heroPrimary:
                "تأیید تصدیق‌نامه",

            heroSecondary:
                "درباره آکادمی تنسور",

            aboutLabel:
                "درباره آکادمی تنسور",

            aboutTitle:
                "ساختن مهارت‌های هوش مصنوعی برای آینده‌ای هوشمندتر",

            aboutText1:
                "آکادمی تنسور یک آکادمی آموزشی آنلاین با تمرکز بر هوش مصنوعی و فناوری‌های نوظهور است. محیط آموزشی ما با هدف فراهم‌سازی آموزش عملی و تخصصی هوش مصنوعی برای فارسی‌زبانان سراسر جهان طراحی شده است.",

            aboutText2:
                "آکادمی تنسور از طریق آموزش ساختاریافته در سه سطح مبتدی، نیمه تخصصی و تخصصی تلاش می‌کند به دانشجویان کمک کند فناوری‌هایی را که روزبه‌روز بیشتر با هوش مصنوعی گره می‌خورند، درک کرده، به‌درستی استفاده کنند و با آن‌ها سازگار شوند.",

            licenseLabel:
                "اطلاعات جواز رسمی",

            licenseTitle:
                "تأیید جواز",

            licenseType:
                "نوع جواز",

            licenseTypeValue:
                "جواز فعالیت آموزشی",

            licenseNumber:
                "شماره جواز",

            licenseNumberValue:
                "D-3198",

            licenseIssuer:
                "مرجع صادرکننده",

            licenseIssuerValue:
                "وزارت تحصیلات عالی افغانستان — ریاست امور محصلان خصوصی",

            licenseDate:
                "تاریخ صدور",

            licenseDateValue:
                "۱۵ آگست ۲۰۲۴",

            licenseLocation:
                "محل فعالیت",

            licenseLocationValue:
                "فعالیت آموزشی آنلاین",

            licenseStatus:
                "وضعیت جواز",

            licenseStatusValue:
                "فعال / معتبر",

            programLabel:
                "مسیرهای آموزشی",

            programTitle:
                "آموزش هوش مصنوعی برای همه سطوح",

            programBeginner:
                "مبتدی",

            programBeginnerText:
                "آشنایی ساختاریافته با هوش مصنوعی، مفاهیم اساسی و ابزارهای کاربردی هوش مصنوعی برای افرادی که مسیر یادگیری خود را آغاز می‌کنند.",

            programSemi:
                "نیمه تخصصی",

            programSemiText:
                "توسعه دانش عملی در زمینه‌های یادگیری ماشین، یادگیری عمیق، مهندسی پرامپت و کاربردهای پیشرفته هوش مصنوعی.",

            programSpecialist:
                "تخصصی",

            programSpecialistText:
                "آموزش پیشرفته و تخصصی برای افرادی که به دنبال دانش عمیق‌تر و تجربه عملی در فناوری‌های هوش مصنوعی هستند.",

            impactLabel:
                "دستاوردهای ما",

            impactTitle:
                "گسترش جامعه آگاه از هوش مصنوعی",

            impactStudents:
                "دانشجویان",

            impactGraduates:
                "فارغ‌التحصیلان",

            impactLevels:
                "سطوح آموزشی",

            missionLabel:
                "ماموریت ما",

            missionTitle:
                "توانمندسازی افراد از طریق هوش مصنوعی",

            missionText:
                "آکادمی تنسور متعهد است افراد آگاه و توانمند را در زمینه هوش مصنوعی و فناوری‌های نوظهور پرورش دهد تا بتوانند به‌عنوان اعضای فعال در جامعه نقش داشته باشند، فرصت‌های شغلی پیدا کنند و از طریق یادگیری و استفاده مؤثر از هوش مصنوعی، مهارت‌های درآمدزا کسب کنند.",

            visionLabel:
                "چشم‌انداز ما",

            visionTitle:
                "آماده‌سازی دانشجویان برای جهان مبتنی بر هوش مصنوعی",

            visionText:
                "ما آینده‌ای را تصور می‌کنیم که در آن دانشجویان بتوانند فناوری‌هایی را که روزبه‌روز بیشتر به هوش مصنوعی مجهز می‌شوند، با اطمینان درک و به‌صورت مؤثر استفاده کنند، خطرات احتمالی آن را بشناسند و در ساخت جامعه‌ای مسئولانه، نوآور و دیجیتال نقش داشته باشند.",

            careerTitle:
                "مهارت بیاموز. فرصت بساز.",

            careerText:
                "دانش عملی هوش مصنوعی می‌تواند مسیرهای رشد حرفه‌ای، اشتغال و فرصت‌های جدید درآمدی را باز کند.",

            verificationLabel:
                "تأیید تصدیق‌نامه",

            verificationTitle:
                "تأیید تصدیق‌نامه رسمی آکادمی تنسور",

            verificationText:
                "آیدی تصدیق‌نامه را وارد کنید تا به صفحه رسمی تأیید آن دسترسی پیدا کرده و اطلاعات ثبت‌شده تصدیق‌نامه را در سامانه تأیید آکادمی تنسور بررسی کنید.",

            verificationButton:
                "تأیید تصدیق‌نامه",

            verificationPlaceholder:
                "نمونه: TA-AI-2026-AM-1050-AF",

            verificationExample:
                "نمونه: TA-AI-2026-AM-1050-AF",

            verificationInputLabel:
                "آیدی تصدیق‌نامه",

            faqLabel:
                "پرسش‌های متداول",

            faqTitle:
                "پرسش‌های متداول",

            faqQ1:
                "آیا آکادمی تنسور یک آکادمی آنلاین است؟",

            faqA1:
                "بلی. آکادمی تنسور به‌صورت آکادمی آموزشی آنلاین فعالیت می‌کند و از طریق پلتفرم‌های دیجیتال فرصت‌های یادگیری را فراهم می‌سازد.",

            faqQ2:
                "چه موضوعاتی آموزش داده می‌شود؟",

            faqA2:
                "آکادمی بر هوش مصنوعی، یادگیری ماشین، یادگیری عمیق، مهندسی پرامپت، کاربردهای پیشرفته هوش مصنوعی و فناوری‌های چت‌بات هوش مصنوعی تمرکز دارد.",

            faqQ3:
                "چگونه تصدیق‌نامه را تأیید کنم؟",

            faqA3:
                "برای هر تصدیق‌نامه یک آیدی منحصربه‌فرد و یک URL اختصاصی وجود دارد. اطلاعات تصدیق‌نامه را می‌توان از طریق سامانه رسمی تأیید آکادمی تنسور بررسی کرد.",

            faqQ4:
                "چگونه برای یک دوره ثبت‌نام کنم؟",

            faqA4:
                "ثبت‌نام دوره‌ها از طریق ارتباط مستقیم با مدیریت آکادمی تنسور در تلگرام انجام می‌شود.",

            faqQ5:
                "آیا آکادمی تنسور تصدیق‌نامه ارائه می‌کند؟",

            faqA5:
                "بلی. دانشجویانی که الزامات آموزشی مربوطه را با موفقیت تکمیل کنند، می‌توانند تصدیق‌نامه‌ای شامل آیدی منحصربه‌فرد و اطلاعات تأیید دریافت کنند.",

            contactLabel:
                "ارتباط با آکادمی تنسور",

            contactTitle:
                "با ما در ارتباط باشید",

            contactEmail:
                "ایمیل رسمی",

            contactTelegram:
                "مدیر تلگرام",

            footerTagline:
                "هوش مصنوعی را بیاموز، آینده را بساز",

            footerPrivacy:
                "سیاست حفظ حریم خصوصی",

            footerTerms:
                "شرایط استفاده",

            footerRights:
                "تمامی حقوق محفوظ است.",

            footerDirector:
                "مؤسس و مدیر: محمد عمر «عمری»",

            languageButton:
                "EN",

            themeDarkLabel:
                "تغییر به حالت تاریک",

            themeLightLabel:
                "تغییر به حالت روشن",

            menuOpenLabel:
                "باز کردن منوی ناوبری",

            menuCloseLabel:
                "بستن منوی ناوبری"

        }

    };


    /* =====================================================
       GET SAVED LANGUAGE
    ===================================================== */

    function getSavedLanguage() {

        const savedLanguage =
            localStorage.getItem(STORAGE_KEY);

        if (
            savedLanguage &&
            SUPPORTED_LANGUAGES.includes(savedLanguage)
        ) {

            return savedLanguage;

        }

        return DEFAULT_LANGUAGE;

    }


    /* =====================================================
       APPLY LANGUAGE
    ===================================================== */

    function applyLanguage(language) {

        if (
            !SUPPORTED_LANGUAGES.includes(language)
        ) {

            language =
                DEFAULT_LANGUAGE;

        }


        const dictionary =
            translations[language];


        /* -----------------------------------------------
           HTML LANGUAGE & DIRECTION
        ----------------------------------------------- */

        document.documentElement.lang =
            language;

        document.documentElement.dir =
            language === "fa"
                ? "rtl"
                : "ltr";


        /* -----------------------------------------------
           PAGE TITLE
        ----------------------------------------------- */

        if (dictionary.title) {

            document.title =
                dictionary.title;

        }


        /* -----------------------------------------------
           META DESCRIPTION
        ----------------------------------------------- */

        const metaDescription =
            document.querySelector(
                'meta[name="description"]'
            );

        if (
            metaDescription &&
            dictionary.description
        ) {

            metaDescription.setAttribute(
                "content",
                dictionary.description
            );

        }


        /* -----------------------------------------------
           STANDARD TEXT ELEMENTS
        ----------------------------------------------- */

        document
            .querySelectorAll(
                "[data-i18n]"
            )
            .forEach(
                function (element) {

                    const key =
                        element.getAttribute(
                            "data-i18n"
                        );

                    if (
                        dictionary[key] !== undefined
                    ) {

                        element.textContent =
                            dictionary[key];

                    }

                }
            );


        /* -----------------------------------------------
           PLACEHOLDER TRANSLATIONS
        ----------------------------------------------- */

        document
            .querySelectorAll(
                "[data-i18n-placeholder]"
            )
            .forEach(
                function (element) {

                    const key =
                        element.getAttribute(
                            "data-i18n-placeholder"
                        );

                    if (
                        dictionary[key] !== undefined
                    ) {

                        element.placeholder =
                            dictionary[key];

                    }

                }
            );


        /* -----------------------------------------------
           ARIA LABEL TRANSLATIONS
        ----------------------------------------------- */

        document
            .querySelectorAll(
                "[data-i18n-aria-label]"
            )
            .forEach(
                function (element) {

                    const key =
                        element.getAttribute(
                            "data-i18n-aria-label"
                        );

                    if (
                        dictionary[key] !== undefined
                    ) {

                        element.setAttribute(
                            "aria-label",
                            dictionary[key]
                        );

                    }

                }
            );


        /* -----------------------------------------------
           LANGUAGE BUTTON
        ----------------------------------------------- */

        const languageToggle =
            document.querySelector(
                "[data-language-toggle]"
            );

        if (languageToggle) {

            languageToggle.textContent =
                dictionary.languageButton;

            languageToggle.setAttribute(
                "aria-label",
                language === "en"
                    ? "Switch to Persian"
                    : "تغییر به زبان انگلیسی"
            );

            languageToggle.setAttribute(
                "title",
                language === "en"
                    ? "Switch to Persian"
                    : "تغییر به زبان انگلیسی"
            );

        }


        /* -----------------------------------------------
           THEME BUTTON ACCESSIBILITY
        ----------------------------------------------- */

        updateThemeLabel();


        /* -----------------------------------------------
           MOBILE MENU ACCESSIBILITY
        ----------------------------------------------- */

        updateMenuLabel();


        /* -----------------------------------------------
           SAVE LANGUAGE
        ----------------------------------------------- */

        localStorage.setItem(
            STORAGE_KEY,
            language
        );


        /* -----------------------------------------------
           CUSTOM EVENT
        ----------------------------------------------- */

        document.dispatchEvent(
            new CustomEvent(
                "tensorAcademyLanguageChanged",
                {
                    detail: {
                        language:
                            language
                    }
                }
            )
        );

    }


    /* =====================================================
       LANGUAGE TOGGLE
    ===================================================== */

    function initLanguageToggle() {

        const languageToggle =
            document.querySelector(
                "[data-language-toggle]"
            );

        if (!languageToggle) {

            return;

        }


        languageToggle.addEventListener(
            "click",
            function () {

                const currentLanguage =
                    document.documentElement.lang ||
                    DEFAULT_LANGUAGE;

                const nextLanguage =
                    currentLanguage === "en"
                        ? "fa"
                        : "en";

                applyLanguage(
                    nextLanguage
                );

            }
        );

    }


    /* =====================================================
       THEME LABEL
    ===================================================== */

    function updateThemeLabel() {

        const themeToggle =
            document.querySelector(
                "[data-theme-toggle]"
            );

        if (!themeToggle) {

            return;

        }


        const isDark =
            document.documentElement.classList.contains(
                "dark"
            );


        const language =
            document.documentElement.lang ||
            DEFAULT_LANGUAGE;


        const dictionary =
            translations[language];


        themeToggle.setAttribute(
            "aria-label",
            isDark
                ? dictionary.themeLightLabel
                : dictionary.themeDarkLabel
        );

        themeToggle.setAttribute(
            "title",
            isDark
                ? dictionary.themeLightLabel
                : dictionary.themeDarkLabel
        );

    }


    /* =====================================================
       MOBILE MENU LABEL
    ===================================================== */

    function updateMenuLabel() {

        const menuToggle =
            document.querySelector(
                "[data-menu-toggle]"
            );

        if (!menuToggle) {

            return;

        }


        const isOpen =
            menuToggle.getAttribute(
                "aria-expanded"
            ) === "true";


        const language =
            document.documentElement.lang ||
            DEFAULT_LANGUAGE;


        const dictionary =
            translations[language];


        menuToggle.setAttribute(
            "aria-label",
            isOpen
                ? dictionary.menuCloseLabel
                : dictionary.menuOpenLabel
        );

    }


    /* =====================================================
       PUBLIC API
    ===================================================== */

    window.TensorAcademyI18n = {

        setLanguage:
            applyLanguage,

        getLanguage:
            getSavedLanguage,

        getTranslations:
            function () {

                return translations;

            }

    };


    /* =====================================================
       INITIALIZATION
    ===================================================== */

    function initialize() {

        const language =
            getSavedLanguage();

        applyLanguage(
            language
        );

        initLanguageToggle();

    }


    if (
        document.readyState ===
        "loading"
    ) {

        document.addEventListener(
            "DOMContentLoaded",
            initialize
        );

    } else {

        initialize();

    }

})();
