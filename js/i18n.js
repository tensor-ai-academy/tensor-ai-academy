/* =========================================================
   TENSOR ACADEMY
   Internationalization System
   English / Persian
   LTR / RTL
========================================================= */

(function () {

    "use strict";


    /* =====================================================
       CONFIGURATION
    ===================================================== */

    const STORAGE_KEY =
        "tensor-academy-language";


    const DEFAULT_LANGUAGE =
        "en";


    const SUPPORTED_LANGUAGES = [
        "en",
        "fa"
    ];


    /* =====================================================
       TRANSLATIONS
    ===================================================== */

    const translations = {

        en: {

            "brand.name":
                "Tensor Academy",

            "brand.tagline":
                "Learn AI. Shape the Future.",


            "nav.about":
                "About Tensor Academy",

            "nav.verification":
                "Certificate Verification",

            "nav.contact":
                "Contact",

            "nav.faq":
                "FAQ",


            "hero.eyebrow":
                "Licensed Educational Academy",

            "hero.title":
                "Learn Artificial Intelligence.",

            "hero.title.highlight":
                "Shape the Future.",

            "hero.description":
                "Tensor Academy is an online educational academy dedicated to developing knowledgeable, skilled, and future-ready individuals in artificial intelligence and emerging technologies.",

            "hero.primary":
                "Verify a Certificate",

            "hero.secondary":
                "About Tensor Academy",


            "about.label":
                "About Tensor Academy",

            "about.title":
                "Building AI Skills for a Smarter Future",

            "about.text1":
                "Tensor Academy is an online educational academy focused on artificial intelligence and emerging technologies. Our learning environment is designed to make practical and specialized AI education accessible to Persian-speaking learners around the world.",

            "about.text2":
                "Through structured learning at beginner, semi-specialist, and specialist levels, the academy aims to help learners understand, use, and adapt to technologies increasingly powered by artificial intelligence.",


            "license.label":
                "Official License Information",

            "license.title":
                "License Verification",

            "license.type":
                "License Type",

            "license.number":
                "License Number",

            "license.issuer":
                "Issuing Authority",

            "license.date":
                "Issue Date",

            "license.location":
                "Place of Activity",

            "license.status":
                "License Status",

            "license.type.value":
                "Educational Activity License",

            "license.issuer.value":
                "Ministry of Higher Education of Afghanistan — Directorate of Private Student Affairs",

            "license.location.value":
                "Online Educational Activity",

            "license.status.value":
                "Active / Valid",


            "program.label":
                "Learning Pathways",

            "program.title":
                "AI Education for Every Level",

            "program.beginner":
                "Beginner",

            "program.beginner.text":
                "A structured introduction to artificial intelligence, essential concepts, and practical AI tools for learners starting their journey.",

            "program.semi":
                "Semi-Specialist",

            "program.semi.text":
                "Develop practical knowledge in machine learning, deep learning, prompt engineering, and advanced AI applications.",

            "program.specialist":
                "Specialist",

            "program.specialist.text":
                "Advanced and specialized learning designed for learners seeking deeper expertise and practical experience in AI technologies.",


            "impact.label":
                "Our Impact",

            "impact.title":
                "Growing an AI-Literate Community",

            "impact.students":
                "Students",

            "impact.graduates":
                "Graduates",

            "impact.levels":
                "Learning Levels",


            "mission.label":
                "Our Mission",

            "mission.title":
                "Empowering People Through Artificial Intelligence",

            "mission.text":
                "Tensor Academy is committed to developing knowledgeable and capable individuals in artificial intelligence and emerging technologies, helping them become active contributors to society, discover career opportunities, and build income-generating skills through AI.",


            "vision.label":
                "Our Vision",

            "vision.title":
                "Preparing Learners for an AI-Powered World",

            "vision.text":
                "We envision a future where learners can confidently understand and effectively use technologies increasingly powered by artificial intelligence, while recognizing potential risks and contributing to a responsible and innovative digital society.",


            "verification.label":
                "Certificate Verification",

            "verification.title":
                "Verify an Official Tensor Academy Certificate",

            "verification.text":
                "Enter a certificate ID to access its official verification page and review the certificate information registered in the Tensor Academy verification system.",

            "verification.button":
                "Verify Certificate",


            "faq.label":
                "Frequently Asked Questions",

            "faq.title":
                "Frequently Asked Questions",


            "contact.label":
                "Contact Tensor Academy",

            "contact.title":
                "Get in Touch",

            "contact.email":
                "Official Email",

            "contact.telegram":
                "Telegram Manager",


            "footer.tagline":
                "Learn AI. Shape the Future.",

            "footer.privacy":
                "Privacy Policy",

            "footer.terms":
                "Terms of Use",

            "footer.rights":
                "All rights reserved.",

            "footer.director":
                "Founder & Director: Mohammad Omar Omari"

        },


        fa: {

            "brand.name":
                "آکادمی تنسور",

            "brand.tagline":
                "هوش مصنوعی را بیاموز، آینده را بساز",


            "nav.about":
                "درباره آکادمی تنسور",

            "nav.verification":
                "تأیید تصدیق‌نامه",

            "nav.contact":
                "ارتباط با ما",

            "nav.faq":
                "پرسش‌های متداول",


            "hero.eyebrow":
                "آکادمی آموزشی دارای جواز",

            "hero.title":
                "هوش مصنوعی را بیاموز.",

            "hero.title.highlight":
                "آینده را بساز.",

            "hero.description":
                "آکادمی تنسور یک آکادمی آموزشی آنلاین است که با تمرکز بر هوش مصنوعی و فناوری‌های نوظهور، برای پرورش افراد آگاه، متخصص و آماده برای آینده فعالیت می‌کند.",

            "hero.primary":
                "تأیید تصدیق‌نامه",

            "hero.secondary":
                "درباره آکادمی تنسور",


            "about.label":
                "درباره آکادمی تنسور",

            "about.title":
                "ساختن مهارت‌های هوش مصنوعی برای آینده‌ای هوشمندتر",

            "about.text1":
                "آکادمی تنسور یک آکادمی آموزشی آنلاین با تمرکز بر هوش مصنوعی و فناوری‌های نوظهور است. محیط آموزشی ما با هدف فراهم‌سازی آموزش عملی و تخصصی هوش مصنوعی برای فارسی‌زبانان سراسر جهان طراحی شده است.",

            "about.text2":
                "آکادمی تنسور از طریق آموزش ساختاریافته در سه سطح مبتدی، نیمه تخصصی و تخصصی تلاش می‌کند به دانشجویان کمک کند فناوری‌هایی را که روزبه‌روز بیشتر با هوش مصنوعی گره می‌خورند، درک کرده، به‌درستی استفاده کنند و با آن‌ها سازگار شوند.",


            "license.label":
                "اطلاعات جواز رسمی",

            "license.title":
                "تأیید جواز",

            "license.type":
                "نوع جواز",

            "license.number":
                "شماره جواز",

            "license.issuer":
                "مرجع صادرکننده",

            "license.date":
                "تاریخ صدور",

            "license.location":
                "محل فعالیت",

            "license.status":
                "وضعیت جواز",

            "license.type.value":
                "جواز فعالیت آموزشی",

            "license.issuer.value":
                "وزارت تحصیلات عالی افغانستان — ریاست امور محصلان خصوصی",

            "license.location.value":
                "فعالیت آموزشی آنلاین",

            "license.status.value":
                "فعال / معتبر",


            "program.label":
                "مسیرهای آموزشی",

            "program.title":
                "آموزش هوش مصنوعی برای همه سطوح",

            "program.beginner":
                "مبتدی",

            "program.beginner.text":
                "آشنایی ساختاریافته با هوش مصنوعی، مفاهیم اساسی و ابزارهای کاربردی هوش مصنوعی برای افرادی که مسیر یادگیری خود را آغاز می‌کنند.",

            "program.semi":
                "نیمه تخصصی",

            "program.semi.text":
                "توسعه دانش عملی در زمینه‌های یادگیری ماشین، یادگیری عمیق، مهندسی پرامپت و کاربردهای پیشرفته هوش مصنوعی.",

            "program.specialist":
                "تخصصی",

            "program.specialist.text":
                "آموزش پیشرفته و تخصصی برای افرادی که به دنبال دانش عمیق‌تر و تجربه عملی در فناوری‌های هوش مصنوعی هستند.",


            "impact.label":
                "دستاوردهای ما",

            "impact.title":
                "گسترش جامعه آگاه از هوش مصنوعی",

            "impact.students":
                "دانشجویان",

            "impact.graduates":
                "فارغ‌التحصیلان",

            "impact.levels":
                "سطوح آموزشی",


            "mission.label":
                "ماموریت ما",

            "mission.title":
                "توانمندسازی افراد از طریق هوش مصنوعی",

            "mission.text":
                "آکادمی تنسور متعهد است افراد آگاه و توانمند را در زمینه هوش مصنوعی و فناوری‌های نوظهور پرورش دهد تا بتوانند به‌عنوان اعضای فعال در جامعه نقش داشته باشند، فرصت‌های شغلی پیدا کنند و از طریق یادگیری و استفاده مؤثر از هوش مصنوعی، مهارت‌های درآمدزا کسب کنند.",


            "vision.label":
                "چشم‌انداز ما",

            "vision.title":
                "آماده‌سازی دانشجویان برای جهان مبتنی بر هوش مصنوعی",

            "vision.text":
                "ما آینده‌ای را تصور می‌کنیم که در آن دانشجویان بتوانند فناوری‌هایی را که روزبه‌روز بیشتر به هوش مصنوعی مجهز می‌شوند، با اطمینان درک و به‌صورت مؤثر استفاده کنند، خطرات احتمالی آن را بشناسند و در ساخت جامعه‌ای مسئولانه، نوآور و دیجیتال نقش داشته باشند.",


            "verification.label":
                "تأیید تصدیق‌نامه",

            "verification.title":
                "تأیید تصدیق‌نامه رسمی آکادمی تنسور",

            "verification.text":
                "آیدی تصدیق‌نامه را وارد کنید تا به صفحه رسمی تأیید آن دسترسی پیدا کرده و اطلاعات ثبت‌شده تصدیق‌نامه را در سامانه تأیید آکادمی تنسور بررسی کنید.",

            "verification.button":
                "تأیید تصدیق‌نامه",


            "faq.label":
                "پرسش‌های متداول",

            "faq.title":
                "پرسش‌های متداول",


            "contact.label":
                "ارتباط با آکادمی تنسور",

            "contact.title":
                "با ما در ارتباط شوید",

            "contact.email":
                "ایمیل رسمی",

            "contact.telegram":
                "تلگرام مدیر",


            "footer.tagline":
                "هوش مصنوعی را بیاموز، آینده را بساز",

            "footer.privacy":
                "سیاست حفظ حریم خصوصی",

            "footer.terms":
                "شرایط استفاده",

            "footer.rights":
                "تمامی حقوق محفوظ است.",

            "footer.director":
                "مؤسس و مدیر: محمد عمر «عمری»"

        }

    };


    /* =====================================================
       GET SAVED LANGUAGE
    ===================================================== */

    function getInitialLanguage() {

        const savedLanguage =
            localStorage.getItem(
                STORAGE_KEY
            );


        if (
            SUPPORTED_LANGUAGES.includes(
                savedLanguage
            )
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
            !SUPPORTED_LANGUAGES.includes(
                language
            )
        ) {

            language =
                DEFAULT_LANGUAGE;

        }


        const direction =
            language === "fa"
                ? "rtl"
                : "ltr";


        /* Update HTML direction */

        document.documentElement
            .setAttribute(
                "dir",
                direction
            );


        /* Update language */

        document.documentElement
            .setAttribute(
                "lang",
                language
            );


        /* Update translated elements */

        const elements =
            document.querySelectorAll(
                "[data-i18n]"
            );


        elements.forEach(
            function (element) {

                const key =
                    element.getAttribute(
                        "data-i18n"
                    );


                if (
                    translations[language] &&
                    translations[language][key]
                ) {

                    element.textContent =
                        translations[language][key];

                }

            }
        );


        /* Update language button */

        const languageToggle =
            document.getElementById(
                "language-toggle"
            );


        if (languageToggle) {

            languageToggle.textContent =
                language === "en"
                    ? "FA"
                    : "EN";

        }


        /* Save preference */

        localStorage.setItem(
            STORAGE_KEY,
            language
        );


        /* Notify other scripts */

        document.dispatchEvent(
            new CustomEvent(
                "languageChanged",
                {
                    detail: {
                        language:
                            language,

                        direction:
                            direction
                    }
                }
            )
        );

    }


    /* =====================================================
       INITIALIZE
    ===================================================== */

    let currentLanguage =
        getInitialLanguage();


    document.addEventListener(
        "DOMContentLoaded",
        function () {

            applyLanguage(
                currentLanguage
            );


            const languageToggle =
                document.getElementById(
                    "language-toggle"
                );


            if (languageToggle) {

                languageToggle.addEventListener(
                    "click",
                    function () {

                        currentLanguage =
                            currentLanguage === "en"
                                ? "fa"
                                : "en";


                        applyLanguage(
                            currentLanguage
                        );

                    }
                );

            }

        }
    );


})();
