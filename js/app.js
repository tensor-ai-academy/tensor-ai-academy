/*============================================================
  TENSOR ACADEMY — MAIN APPLICATION SCRIPT
  - Language Switcher (EN/FA) with RTL support
  - Dark / Light Mode with localStorage
  - Mobile Navigation
  - Sticky Header
  - Smooth Scrolling
  - FAQ Accordion
  - Certificate Verification
  - Scroll-to-Top Button
  - Toast Notifications
============================================================*/

(function () {
  'use strict';

  /*========================
    TRANSLATIONS DATABASE
  ========================*/
  const translations = {
    en: {
      // Header & Navigation
      'header.logo': 'Tensor Academy',
      'header.tagline': 'Learn AI. Shape the Future.',
      'nav.about': 'About',
      'nav.courses': 'Courses',
      'nav.certificates': 'Certificates',
      'nav.contact': 'Contact',
      'nav.faq': 'FAQ',
      'nav.verify': 'Verify Certificate',
      'nav.privacy': 'Privacy Policy',
      'nav.terms': 'Terms of Use',

      // Hero
      'hero.eyebrow': 'Modern AI Academic Platform',
      'hero.title': 'Learn AI.',
      'hero.titleHighlight': 'Shape the Future.',
      'hero.description': 'Tensor Academy is an online academy for Deep Learning, Machine Learning, Prompt Engineering, and AI apps/chatbots.',
      'hero.exploreCourses': 'Explore Courses',
      'hero.verifyCert': 'Verify Certificate',
      'hero.statStudents': 'Students',
      'hero.statGraduates': 'Graduates',
      'hero.statLevels': 'Learning Levels',

      // About
      'about.label': 'About Tensor Academy',
      'about.title': 'Empowering the Next Generation of AI Practitioners',
      'about.subtitle': 'A private online academy dedicated to advancing knowledge and practical skills in Artificial Intelligence.',
      'about.p1': 'Tensor Academy is a private online educational academy dedicated to advancing knowledge and practical skills in Artificial Intelligence and emerging technologies. Our academic approach is focused on developing knowledgeable, capable, and future-ready individuals who can understand, apply, and responsibly engage with technologies shaping the modern world.',
      'about.p2': 'Through structured learning pathways at Beginner, Semi-Specialist, and Specialist levels, Tensor Academy provides educational opportunities in key areas of AI, including Machine Learning, Deep Learning, Prompt Engineering, AI Applications, AI Chatbots, and practical AI technologies.',
      'about.p3': 'Our learning environment is designed to bridge the gap between theoretical understanding and practical application, enabling learners to develop relevant technical skills, explore real-world AI use cases, and build the confidence required to work with rapidly evolving technologies.',
      'about.p4': 'Beyond technical education, Tensor Academy is committed to helping learners discover professional opportunities, improve their employability, develop AI-powered skills, and explore legitimate ways to generate income through the effective application of artificial intelligence.',
      'about.p5': 'Our broader goal is to contribute to the development of an informed and capable AI community—one that can use emerging technologies effectively, recognize their potential risks and challenges, and contribute positively to a more innovative and technologically empowered society.',
      'about.founder': 'Founder',
      'about.type': 'Type',
      'about.typeVal': 'Private Academy',
      'about.mode': 'Mode',
      'about.modeVal': 'Online',
      'about.platforms': 'Platforms',
      'about.field': 'Field',
      'about.fieldVal': 'Artificial Intelligence Education',

      // Courses
      'courses.label': 'Our Courses',
      'courses.title': 'Explore AI Learning Paths',
      'courses.subtitle': 'Comprehensive courses from foundations to advanced applications, available at three levels of expertise.',
      'courses.dl.title': 'Deep Learning',
      'courses.dl.desc': 'Foundations, practice, and real-world applications of deep neural networks.',
      'courses.ml.title': 'Machine Learning',
      'courses.ml.desc': 'Data-driven models, training workflows, and model evaluation techniques.',
      'courses.pe.title': 'Prompt Engineering',
      'courses.pe.desc': 'Effective prompting for productivity, automation, and AI workflows.',
      'courses.apps.title': 'AI Apps / Chatbots',
      'courses.apps.desc': 'Building practical AI assistants and chatbot products.',

      // Levels
      'levels.label': 'Learning Pathways',
      'levels.title': 'Three Structured Levels',
      'levels.subtitle': 'Progress from foundational knowledge to specialized expertise through our carefully designed learning system.',
      'levels.beginner': 'Beginner',
      'levels.semi': 'Semi-specialized',
      'levels.specialized': 'Specialized',
      'levels.beginnerDesc': 'Foundational concepts and introductory skills for newcomers to AI.',
      'levels.semiDesc': 'Intermediate depth with practical projects and deeper technical understanding.',
      'levels.specializedDesc': 'Advanced mastery, research-oriented skills, and professional-level applications.',

      // Certificates
      'certificates.label': 'Certificates',
      'certificates.title': 'Verified Digital Credentials',
      'certificates.subtitle': 'Every graduate receives a verifiable certificate with a unique ID, detailing course, level, and achievements.',
      'certificates.infoTitle': 'Your Achievement, Secured',
      'certificates.infoText': 'Tensor Academy issues digital certificates for all completed courses. Each certificate includes a unique Certificate ID that can be verified online through our verification system.',
      'certificates.feat1': 'Unique Certificate ID',
      'certificates.feat2': 'Course & Level Details',
      'certificates.feat3': 'Score & Grade',
      'certificates.feat4': 'Instructor & Duration',
      'certificates.feat5': 'Online Verification',
      'certificates.feat6': 'PDF Certificate Download',
      'certificates.mockTitle': 'Certificate of Completion',
      'certificates.mockText': 'Tensor Academy',
      'certificates.mockId': 'ID: TA-AI-2026-XXXX',

      // Verification
      'verify.title': 'Verify a Certificate',
      'verify.subtitle': 'Enter the Certificate ID found on the certificate to verify its authenticity.',
      'verify.btn': 'Verify',
      'verify.sampleHint': 'Try sample IDs:',
      'verify.or': 'or',
      'verify.validStatus': 'Certificate Verified',
      'verify.validMessage': 'This certificate is authentic and has been verified successfully.',
      'verify.viewCertificate': 'View Certificate Details',
      'verify.invalidStatus': 'Verification Failed',
      'verify.invalidMessage': 'No valid certificate found with this ID.',
      'verify.invalidHint': 'Please check the ID and try again. If the issue persists, contact support.',
      'verify.searchTitle': 'Certificate Verification',
      'verify.searchSubtitle': 'Enter the unique Certificate ID to verify its authenticity.',

      // Contact
      'contact.label': 'Get in Touch',
      'contact.title': 'Contact Tensor Academy',
      'contact.subtitle': 'Reach out to us for inquiries, registration, or support.',
      'contact.email': 'Email',
      'contact.telegram': 'Telegram',
      'contact.sendEmail': 'Send Email',
      'contact.openTelegram': 'Open Telegram',

      // FAQ
      'faq.label': 'FAQ',
      'faq.title': 'Frequently Asked Questions',
      'faq.q1': 'What is Tensor Academy?',
      'faq.a1': 'Tensor Academy is a private online academy focused on Artificial Intelligence and emerging technologies. We provide structured learning pathways from beginner to specialized levels.',
      'faq.q2': 'What can I learn at Tensor Academy?',
      'faq.a2': 'You can learn Machine Learning, Deep Learning, Prompt Engineering, AI Applications, and AI Chatbots at different learning levels.',
      'faq.q3': 'Who can join Tensor Academy?',
      'faq.a3': 'Anyone interested in AI and technology can join, from beginners to advanced learners. Our courses are designed to accommodate all levels.',
      'faq.q4': 'How can I register for a course?',
      'faq.a4': 'Course registration is available through Telegram by contacting the Tensor Academy manager at @Tensor_academy_maneger.',
      'faq.q5': 'How can I verify a Tensor Academy certificate?',
      'faq.a5': 'Enter the unique Certificate ID found on your certificate in the Certificate Verification section to verify its authenticity online.',

      // Footer
      'footer.tagline': 'Learn AI. Shape the Future.',
      'footer.desc': 'A private online academy dedicated to advancing AI education and practical skills.',
      'footer.quickLinks': 'Quick Links',
      'footer.resources': 'Resources',
      'footer.contactHeading': 'Contact',
      'footer.rights': 'All rights reserved.',

      // Toast messages
      'toast.langChanged': 'Language changed successfully.',
      'toast.themeChanged': 'Theme updated.',
      'toast.copied': 'Copied to clipboard!',

      // Privacy Policy
      'privacy.title': 'Privacy Policy',
      'privacy.lastUpdated': 'Last Updated: July 2026',
      'privacy.intro': 'Tensor Academy ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we handle information when you use our website and services, including certificate verification and contact forms.',
      'privacy.s1_title': '1. Information We Collect',
      'privacy.s1_cert_title': 'Certificate Verification Data',
      'privacy.s1_cert_text': 'When you use our Certificate Verification tool, you provide a Certificate ID. This ID is checked against our public records to confirm authenticity. We do not store, log, or share the Certificate IDs you enter. The verification process is performed entirely in your browser and no data is transmitted to our servers.',
      'privacy.s1_contact_title': 'Contact Data',
      'privacy.s1_contact_text': 'If you contact us via email or Telegram, we will receive the information you choose to share (such as your name, email address, or Telegram username). We use this information solely to respond to your inquiry and do not share it with third parties.',
      'privacy.s1_storage_title': 'Local Storage for Preferences',
      'privacy.s1_storage_text': 'Our website stores two preferences locally in your browser using localStorage:',
      'privacy.s1_storage_lang': 'Your preferred language (English or Persian/Dari)',
      'privacy.s1_storage_theme': 'Your preferred theme (Light or Dark mode)',
      'privacy.s1_storage_note': 'This information stays only on your device. We do not have access to it, and it is never sent to any server. You can clear this data at any time through your browser settings.',
      'privacy.s2_title': '2. How We Use Information',
      'privacy.s2_text': 'Any information you voluntarily provide through contact methods is used exclusively to:',
      'privacy.s2_item1': 'Respond to your inquiries and provide support',
      'privacy.s2_item2': 'Facilitate course registration and communication',
      'privacy.s2_item3': 'Improve our educational services',
      'privacy.s2_disclaimer': 'We do not sell, rent, or trade your personal information to anyone.',
      'privacy.s3_title': '3. External Links',
      'privacy.s3_text': 'Our website contains links to external platforms such as Telegram. We are not responsible for the privacy practices of these third-party services. We encourage you to review their privacy policies when you visit them.',
      'privacy.s4_title': '4. Data Security',
      'privacy.s4_text': 'We take reasonable measures to protect the limited information we receive. However, no method of electronic communication is 100% secure. We recommend that you avoid sending sensitive personal information through unsecured channels.',
      'privacy.s5_title': '5. Changes to This Privacy Policy',
      'privacy.s5_text': 'We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated "Last Updated" date. We encourage you to review this page periodically.',
      'privacy.s6_title': '6. Contact Us',
      'privacy.s6_text': 'If you have any questions about this Privacy Policy, please contact us at:',

      // Terms of Use
      'terms.title': 'Terms of Use',
      'terms.lastUpdated': 'Last Updated: July 2026',
      'terms.intro': 'By accessing and using the Tensor Academy website and services, you agree to comply with the following Terms of Use. Please read them carefully.',
      'terms.s1_title': '1. Use of Content',
      'terms.s1_text': 'All content on this website, including text, graphics, logos, and course materials, is the property of Tensor Academy and is protected by applicable intellectual property laws. You may view and use the content for personal, non-commercial purposes only. Any reproduction, distribution, or modification without prior written permission is prohibited.',
      'terms.s2_title': '2. Certificate Verification',
      'terms.s2_text': 'The Certificate Verification tool is provided as a public service to confirm the authenticity of Tensor Academy certificates. Users must only verify certificates they have a legitimate interest in. Any attempt to misuse, reverse-engineer, or exploit the verification system is strictly prohibited.',
      'terms.s3_title': '3. Accuracy of Information',
      'terms.s3_text': 'We strive to keep all information on our website accurate and up-to-date. However, Tensor Academy makes no warranties or representations regarding the completeness or accuracy of the content. Course details, schedules, and availability may change without prior notice.',
      'terms.s4_title': '4. Prohibited Actions',
      'terms.s4_text': 'When using our website, you agree not to:',
      'terms.s4_item1': 'Attempt to gain unauthorized access to any part of the website',
      'terms.s4_item2': 'Use the website for any unlawful purpose',
      'terms.s4_item3': 'Interfere with the proper functioning of the website',
      'terms.s4_item4': 'Submit false or misleading information through any form',
      'terms.s5_title': '5. External Services',
      'terms.s5_text': 'Our website integrates with third-party platforms (such as Telegram and Discord) for communication and course delivery. We are not responsible for the content, policies, or practices of these external services. Your use of those platforms is subject to their respective terms.',
      'terms.s6_title': '6. Changes to Terms',
      'terms.s6_text': 'We reserve the right to modify these Terms of Use at any time. Changes will be effective immediately upon posting. Your continued use of the website after any modifications constitutes acceptance of the updated terms.',
      'terms.s7_title': '7. Contact',
      'terms.s7_text': 'If you have questions about these Terms of Use, please contact us at tensor.ai.academy@gmail.com or via Telegram at @Tensor_academy_maneger.',

      // Certificate Detail Page
      'certificate.studentName': 'Student Name',
      'certificate.fatherName': "Father's Name",
      'certificate.course': 'Course',
      'certificate.level': 'Level',
      'certificate.instructor': 'Instructor',
      'certificate.duration': 'Duration',
      'certificate.startDate': 'Start Date',
      'certificate.endDate': 'End Date',
      'certificate.issueDate': 'Issue Date',
      'certificate.score': 'Score',
      'certificate.grade': 'Grade',
      'certificate.status': 'Status',
      'certificate.achievementsTitle': 'Special Achievements'
    },
    fa: {
      // Header & Navigation
      'header.logo': 'آکادمی تنسور',
      'header.tagline': 'هوش مصنوعی را بیاموز، آینده را بساز',
      'nav.about': 'درباره',
      'nav.courses': 'دوره‌ها',
      'nav.certificates': 'گواهی‌نامه‌ها',
      'nav.contact': 'تماس',
      'nav.faq': 'سوالات متداول',
      'nav.verify': 'تأیید گواهی‌نامه',
      'nav.privacy': 'حریم خصوصی',
      'nav.terms': 'شرایط استفاده',

      // Hero
      'hero.eyebrow': 'پلتفرم مدرن آکادمیک هوش مصنوعی',
      'hero.title': 'هوش مصنوعی را بیاموز،',
      'hero.titleHighlight': 'آینده را بساز',
      'hero.description': 'آکادمی تنسور یک آکادمی آنلاین برای یادگیری عمیق، یادگیری ماشین، مهندسی پرامپت و اپلیکیشن‌ها و چت‌بات‌های هوش مصنوعی است.',
      'hero.exploreCourses': 'مشاهده دوره‌ها',
      'hero.verifyCert': 'تأیید گواهی‌نامه',
      'hero.statStudents': 'دانشجو',
      'hero.statGraduates': 'فارغ‌التحصیل',
      'hero.statLevels': 'سطح آموزشی',

      // About
      'about.label': 'درباره آکادمی تنسور',
      'about.title': 'پرورش نسل آینده متخصصان هوش مصنوعی',
      'about.subtitle': 'یک آکادمی خصوصی آنلاین که به توسعه دانش و مهارت‌های عملی در هوش مصنوعی اختصاص دارد.',
      'about.p1': 'آکادمی تنسور یک آکادمی آموزشی خصوصی و آنلاین است که با هدف توسعه دانش و مهارت‌های عملی در زمینه هوش مصنوعی و فناوری‌های نوظهور فعالیت می‌کند. رویکرد آموزشی ما بر پرورش افراد آگاه، توانمند و آماده برای آینده متمرکز است؛ افرادی که بتوانند فناوری‌های شکل‌دهنده دنیای مدرن را به‌درستی درک کرده، به‌صورت مؤثر به‌کار گیرند و با مسئولیت‌پذیری با آن‌ها تعامل داشته باشند.',
      'about.p2': 'آکادمی تنسور از طریق مسیرهای آموزشی ساختاریافته در سه سطح مبتدی، نیمه تخصصی و تخصصی، زمینه یادگیری در حوزه‌های کلیدی هوش مصنوعی از جمله یادگیری ماشین، یادگیری عمیق، مهندسی پرامپت، کاربردهای هوش مصنوعی، چت‌بات‌های هوش مصنوعی و فناوری‌های عملی مبتنی بر AI را فراهم می‌سازد.',
      'about.p3': 'محیط آموزشی آکادمی با هدف ایجاد پیوند میان درک نظری و کاربرد عملی طراحی شده است تا دانشجویان بتوانند مهارت‌های فنی مرتبط را توسعه دهند، کاربردهای واقعی هوش مصنوعی را بررسی کنند و اعتمادبه‌نفس لازم برای کار با فناوری‌های به‌سرعت در حال تحول را به دست آورند.',
      'about.p4': 'فراتر از آموزش مهارت‌های فنی، آکادمی تنسور متعهد است به دانشجویان در شناخت فرصت‌های حرفه‌ای، افزایش قابلیت اشتغال، توسعه مهارت‌های مبتنی بر هوش مصنوعی و کشف راه‌های مشروع برای کسب درآمد از طریق یادگیری و استفاده مؤثر از هوش مصنوعی کمک کند.',
      'about.p5': 'هدف گسترده‌تر ما کمک به شکل‌گیری جامعه‌ای آگاه و توانمند در حوزه هوش مصنوعی است؛ جامعه‌ای که بتواند از فناوری‌های نوظهور به‌صورت مؤثر استفاده کند، خطرات و چالش‌های احتمالی آن‌ها را بشناسد و در ایجاد جامعه‌ای نوآور، آگاه و توانمند از نظر فناوری نقش مثبتی ایفا کند.',
      'about.founder': 'بنیان‌گذار',
      'about.type': 'نوع',
      'about.typeVal': 'آکادمی خصوصی',
      'about.mode': 'شیوه',
      'about.modeVal': 'آنلاین',
      'about.platforms': 'پلتفرم‌ها',
      'about.field': 'حوزه',
      'about.fieldVal': 'آموزش هوش مصنوعی',

      // Courses
      'courses.label': 'دوره‌های ما',
      'courses.title': 'مسیرهای یادگیری هوش مصنوعی را کاوش کنید',
      'courses.subtitle': 'دوره‌های جامع از مبانی تا کاربردهای پیشرفته، در سه سطح تخصصی.',
      'courses.dl.title': 'یادگیری عمیق',
      'courses.dl.desc': 'مبانی، تمرین و کاربردهای واقعی شبکه‌های عصبی عمیق.',
      'courses.ml.title': 'یادگیری ماشین',
      'courses.ml.desc': 'مدل‌های داده‌محور، جریان‌های کاری آموزشی و تکنیک‌های ارزیابی مدل.',
      'courses.pe.title': 'مهندسی پرامپت',
      'courses.pe.desc': 'پرامپت‌نویسی مؤثر برای بهره‌وری، اتوماسیون و جریان‌های کاری هوش مصنوعی.',
      'courses.apps.title': 'اپلیکیشن‌ها و چت‌بات‌های هوش مصنوعی',
      'courses.apps.desc': 'ساخت دستیارهای هوش مصنوعی و محصولات چت‌بات عملی.',

      // Levels
      'levels.label': 'مسیرهای یادگیری',
      'levels.title': 'سه سطح ساختاریافته',
      'levels.subtitle': 'از دانش پایه تا تخصص پیشرفته از طریق سیستم آموزشی دقیق طراحی‌شده ما پیشرفت کنید.',
      'levels.beginner': 'مبتدی',
      'levels.semi': 'نیمه تخصصی',
      'levels.specialized': 'تخصصی',
      'levels.beginnerDesc': 'مفاهیم پایه و مهارت‌های مقدماتی برای تازه‌واردان به هوش مصنوعی.',
      'levels.semiDesc': 'عمق متوسط با پروژه‌های عملی و درک فنی عمیق‌تر.',
      'levels.specializedDesc': 'تسلط پیشرفته، مهارت‌های تحقیق‌محور و کاربردهای سطح حرفه‌ای.',

      // Certificates
      'certificates.label': 'گواهی‌نامه‌ها',
      'certificates.title': 'مدارک دیجیتال تأییدشده',
      'certificates.subtitle': 'هر فارغ‌التحصیل یک گواهی‌نامه قابل تأیید با شناسه یکتا دریافت می‌کند که شامل جزئیات دوره، سطح و دستاوردها است.',
      'certificates.infoTitle': 'دستاورد شما، ایمن',
      'certificates.infoText': 'آکادمی تنسور برای تمام دوره‌های تکمیل‌شده گواهی‌نامه دیجیتال صادر می‌کند. هر گواهی‌نامه شامل یک شناسه یکتا است که از طریق سامانه تأیید ما قابل بررسی آنلاین است.',
      'certificates.feat1': 'شناسه یکتای گواهی‌نامه',
      'certificates.feat2': 'جزئیات دوره و سطح',
      'certificates.feat3': 'نمره و رتبه',
      'certificates.feat4': 'مدرس و مدت دوره',
      'certificates.feat5': 'تأیید آنلاین',
      'certificates.feat6': 'دانلود PDF گواهی‌نامه',
      'certificates.mockTitle': 'گواهی پایان دوره',
      'certificates.mockText': 'آکادمی تنسور',
      'certificates.mockId': 'شناسه: TA-AI-2026-XXXX',

      // Verification
      'verify.title': 'تأیید گواهی‌نامه',
      'verify.subtitle': 'شناسه گواهی‌نامه موجود در مدرک را برای تأیید اصالت آن وارد کنید.',
      'verify.btn': 'تأیید',
      'verify.sampleHint': 'شناسه‌های نمونه را امتحان کنید:',
      'verify.or': 'یا',
      'verify.validStatus': 'گواهی‌نامه تأیید شد',
      'verify.validMessage': 'این گواهی‌نامه معتبر است و با موفقیت تأیید شد.',
      'verify.viewCertificate': 'مشاهده جزئیات گواهی‌نامه',
      'verify.invalidStatus': 'تأیید ناموفق',
      'verify.invalidMessage': 'هیچ گواهی‌نامه معتبری با این شناسه یافت نشد.',
      'verify.invalidHint': 'لطفاً شناسه را بررسی و دوباره تلاش کنید. در صورت ادامه مشکل، با پشتیبانی تماس بگیرید.',
      'verify.searchTitle': 'تأیید گواهی‌نامه',
      'verify.searchSubtitle': 'شناسه یکتای گواهی‌نامه را برای تأیید اصالت وارد کنید.',

      // Contact
      'contact.label': 'تماس با ما',
      'contact.title': 'تماس با آکادمی تنسور',
      'contact.subtitle': 'برای پرسش‌ها، ثبت‌نام یا پشتیبانی با ما تماس بگیرید.',
      'contact.email': 'ایمیل',
      'contact.telegram': 'تلگرام',
      'contact.sendEmail': 'ارسال ایمیل',
      'contact.openTelegram': 'باز کردن تلگرام',

      // FAQ
      'faq.label': 'سوالات متداول',
      'faq.title': 'پرسش‌های پرتکرار',
      'faq.q1': 'آکادمی تنسور چیست؟',
      'faq.a1': 'آکادمی تنسور یک آکادمی خصوصی آنلاین است که بر هوش مصنوعی و فناوری‌های نوظهور متمرکز است. ما مسیرهای یادگیری ساختاریافته از سطح مبتدی تا تخصصی ارائه می‌دهیم.',
      'faq.q2': 'در آکادمی تنسور چه چیزی می‌توانم یاد بگیرم؟',
      'faq.a2': 'شما می‌توانید یادگیری ماشین، یادگیری عمیق، مهندسی پرامپت، کاربردهای هوش مصنوعی و چت‌بات‌های هوش مصنوعی را در سطوح مختلف یاد بگیرید.',
      'faq.q3': 'چه کسانی می‌توانند به آکادمی تنسور بپیوندند؟',
      'faq.a3': 'هر کسی که به هوش مصنوعی و فناوری علاقه‌مند باشد، از مبتدی تا پیشرفته، می‌تواند بپیوندد. دوره‌های ما برای همه سطوح طراحی شده‌اند.',
      'faq.q4': 'چگونه می‌توانم در یک دوره ثبت‌نام کنم؟',
      'faq.a4': 'ثبت‌نام دوره از طریق تلگرام و با تماس با مدیر آکادمی تنسور به آدرس @Tensor_academy_maneger امکان‌پذیر است.',
      'faq.q5': 'چگونه می‌توانم گواهی‌نامه آکادمی تنسور را تأیید کنم؟',
      'faq.a5': 'شناسه یکتای گواهی‌نامه موجود در مدرک خود را در بخش تأیید گواهی‌نامه وارد کنید تا اصالت آن به‌صورت آنلاین بررسی شود.',

      // Footer
      'footer.tagline': 'هوش مصنوعی را بیاموز، آینده را بساز',
      'footer.desc': 'یک آکادمی خصوصی آنلاین که به توسعه آموزش و مهارت‌های عملی هوش مصنوعی اختصاص دارد.',
      'footer.quickLinks': 'لینک‌های سریع',
      'footer.resources': 'منابع',
      'footer.contactHeading': 'تماس',
      'footer.rights': 'تمامی حقوق محفوظ است.',

      // Toast messages
      'toast.langChanged': 'زبان با موفقیت تغییر کرد.',
      'toast.themeChanged': 'پوسته به‌روز شد.',
      'toast.copied': 'در کلیپ‌بورد کپی شد!',

      // Privacy Policy
      'privacy.title': 'حریم خصوصی',
      'privacy.lastUpdated': 'آخرین به‌روزرسانی: جولای ۲۰۲۶',
      'privacy.intro': 'آکادمی تنسور ("ما" یا "مالک") متعهد به حفظ حریم خصوصی شما است. این سیاست حریم خصوصی نحوه مدیریت اطلاعات هنگام استفاده از وب‌سایت و خدمات ما، از جمله تأیید گواهی‌نامه و فرم‌های تماس را توضیح می‌دهد.',
      'privacy.s1_title': '۱. اطلاعاتی که جمع‌آوری می‌کنیم',
      'privacy.s1_cert_title': 'داده‌های تأیید گواهی‌نامه',
      'privacy.s1_cert_text': 'هنگامی که از ابزار تأیید گواهی‌نامه استفاده می‌کنید، یک شناسه گواهی‌نامه ارائه می‌دهید. این شناسه با سوابق عمومی ما مقایسه می‌شود. ما شناسه‌های وارد شده را ذخیره، ثبت یا به اشتراک نمی‌گذاریم. فرایند تأیید کاملاً در مرورگر شما انجام می‌شود و هیچ داده‌ای به سرور ما ارسال نمی‌شود.',
      'privacy.s1_contact_title': 'داده‌های تماس',
      'privacy.s1_contact_text': 'اگر از طریق ایمیل یا تلگرام با ما تماس بگیرید، اطلاعاتی را که به اشتراک می‌گذارید (مانند نام، ایمیل یا شناسه تلگرام) دریافت می‌کنیم. این اطلاعات صرفاً برای پاسخ به درخواست شما استفاده می‌شود و با شخص ثالث به اشتراک گذاشته نمی‌شود.',
      'privacy.s1_storage_title': 'ذخیره‌سازی محلی برای تنظیمات',
      'privacy.s1_storage_text': 'وب‌سایت ما دو تنظیمات را به صورت محلی در مرورگر شما ذخیره می‌کند:',
      'privacy.s1_storage_lang': 'زبان انتخابی شما (انگلیسی یا فارسی/دری)',
      'privacy.s1_storage_theme': 'پوسته انتخابی شما (روشن یا تاریک)',
      'privacy.s1_storage_note': 'این اطلاعات فقط روی دستگاه شما باقی می‌ماند. ما به آن دسترسی نداریم و هرگز به هیچ سروری ارسال نمی‌شود. شما می‌توانید این داده‌ها را از طریق تنظیمات مرورگر خود پاک کنید.',
      'privacy.s2_title': '۲. نحوه استفاده از اطلاعات',
      'privacy.s2_text': 'هر اطلاعاتی که به‌صورت داوطلبانه از طریق راه‌های تماس ارائه می‌کنید منحصراً برای موارد زیر استفاده می‌شود:',
      'privacy.s2_item1': 'پاسخ به درخواست‌ها و ارائه پشتیبانی',
      'privacy.s2_item2': 'تسهیل ثبت‌نام دوره و ارتباطات',
      'privacy.s2_item3': 'بهبود خدمات آموزشی ما',
      'privacy.s2_disclaimer': 'ما اطلاعات شخصی شما را به هیچ‌کس نمی‌فروشیم، اجاره نمی‌دهیم یا مبادله نمی‌کنیم.',
      'privacy.s3_title': '۳. پیوندهای خارجی',
      'privacy.s3_text': 'وب‌سایت ما شامل پیوندهایی به پلتفرم‌های خارجی مانند تلگرام است. ما مسئولیتی در قبال شیوه‌های حریم خصوصی این سرویس‌های شخص ثالث نداریم. توصیه می‌کنیم هنگام بازدید از آن‌ها، سیاست‌های حریم خصوصی آن‌ها را بررسی کنید.',
      'privacy.s4_title': '۴. امنیت داده‌ها',
      'privacy.s4_text': 'ما اقدامات معقولی برای محافظت از اطلاعات محدودی که دریافت می‌کنیم انجام می‌دهیم. با این حال، هیچ روش ارتباط الکترونیکی ۱۰۰٪ امن نیست. توصیه می‌کنیم از ارسال اطلاعات حساس شخصی از طریق کانال‌های ناامن خودداری کنید.',
      'privacy.s5_title': '۵. تغییرات در این سیاست',
      'privacy.s5_text': 'ممکن است این سیاست حریم خصوصی را به‌روزرسانی کنیم. هرگونه تغییر با تاریخ "آخرین به‌روزرسانی" جدید در این صفحه منتشر می‌شود. توصیه می‌کنیم این صفحه را به‌طور دوره‌ای مرور کنید.',
      'privacy.s6_title': '۶. تماس با ما',
      'privacy.s6_text': 'اگر سوالی درباره این سیاست حریم خصوصی دارید، با ما تماس بگیرید:',

      // Terms of Use
      'terms.title': 'شرایط استفاده',
      'terms.lastUpdated': 'آخرین به‌روزرسانی: جولای ۲۰۲۶',
      'terms.intro': 'با دسترسی و استفاده از وب‌سایت و خدمات آکادمی تنسور، شما موافقت خود را با شرایط استفاده زیر اعلام می‌کنید. لطفاً آن‌ها را به دقت مطالعه کنید.',
      'terms.s1_title': '۱. استفاده از محتوا',
      'terms.s1_text': 'تمامی محتوای این وب‌سایت، از جمله متن‌ها، گرافیک‌ها، لوگوها و مطالب درسی، متعلق به آکادمی تنسور است و تحت حمایت قوانین مالکیت فکری قرار دارد. شما مجاز به مشاهده و استفاده از محتوا برای مقاصد شخصی و غیرتجاری هستید. هرگونه تکثیر، توزیع یا تغییر بدون اجازه کتبی قبلی ممنوع است.',
      'terms.s2_title': '۲. تأیید گواهی‌نامه',
      'terms.s2_text': 'ابزار تأیید گواهی‌نامه به‌عنوان یک سرویس عمومی برای تأیید اصالت گواهی‌نامه‌های آکادمی تنسور ارائه شده است. کاربران فقط باید گواهی‌نامه‌هایی را تأیید کنند که دارای منافع مشروع هستند. هرگونه تلاش برای سوءاستفاده، مهندسی معکوس یا بهره‌برداری از سیستم تأیید اکیداً ممنوع است.',
      'terms.s3_title': '۳. صحت اطلاعات',
      'terms.s3_text': 'ما تلاش می‌کنیم تمام اطلاعات وب‌سایت را دقیق و به‌روز نگه داریم. با این حال، آکادمی تنسور هیچ‌گونه ضمانتی در مورد کامل بودن یا صحت محتوا ارائه نمی‌دهد. جزئیات دوره‌ها، برنامه‌ها و زمان‌بندی ممکن است بدون اطلاع قبلی تغییر کند.',
      'terms.s4_title': '۴. اقدامات ممنوع',
      'terms.s4_text': 'هنگام استفاده از وب‌سایت ما، شما موافقت می‌کنید که:',
      'terms.s4_item1': 'تلاش برای دسترسی غیرمجاز به هیچ بخشی از وب‌سایت نکنید',
      'terms.s4_item2': 'از وب‌سایت برای مقاصد غیرقانونی استفاده نکنید',
      'terms.s4_item3': 'در عملکرد صحیح وب‌سایت اختلال ایجاد نکنید',
      'terms.s4_item4': 'اطلاعات نادرست یا گمراه‌کننده از طریق هیچ فرمی ارسال نکنید',
      'terms.s5_title': '۵. سرویس‌های خارجی',
      'terms.s5_text': 'وب‌سایت ما با پلتفرم‌های شخص ثالث (مانند تلگرام و دیسکورد) برای ارتباطات و ارائه دوره‌ها ادغام شده است. ما مسئولیتی در قبال محتوا، سیاست‌ها یا عملکرد این سرویس‌های خارجی نداریم. استفاده شما از این پلتفرم‌ها تابع شرایط آن‌ها است.',
      'terms.s6_title': '۶. تغییرات در شرایط',
      'terms.s6_text': 'ما حق تغییر این شرایط استفاده را در هر زمان برای خود محفوظ می‌داریم. تغییرات بلافاصله پس از انتشار معتبر خواهند بود. ادامه استفاده شما از وب‌سایت پس از هرگونه تغییر به‌منزله پذیرش شرایط جدید است.',
      'terms.s7_title': '۷. تماس',
      'terms.s7_text': 'اگر سوالی درباره این شرایط استفاده دارید، با ما از طریق ایمیل tensor.ai.academy@gmail.com یا تلگرام @Tensor_academy_maneger تماس بگیرید.',

      // Certificate Detail Page
      'certificate.studentName': 'نام دانشجو',
      'certificate.fatherName': 'نام پدر',
      'certificate.course': 'دوره',
      'certificate.level': 'سطح',
      'certificate.instructor': 'مدرس',
      'certificate.duration': 'مدت دوره',
      'certificate.startDate': 'تاریخ شروع',
      'certificate.endDate': 'تاریخ پایان',
      'certificate.issueDate': 'تاریخ صدور',
      'certificate.score': 'نمره',
      'certificate.grade': 'رتبه',
      'certificate.status': 'وضعیت',
      'certificate.achievementsTitle': 'دستاوردهای ویژه'
    }
  };

  /*========================
    STATE
  ========================*/
  let currentLang = localStorage.getItem('lang') || 'en';
  let currentTheme = localStorage.getItem('theme') || 'light';

  /*========================
    INITIALIZATION
  ========================*/
  function init() {
    applyLanguage(currentLang);
    applyTheme(currentTheme);
    setupEventListeners();
  }

  /*========================
    LANGUAGE MANAGEMENT
  ========================*/
  function applyLanguage(lang) {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'fa' ? 'rtl' : 'ltr';

    // Update all elements with data-lang attribute
    document.querySelectorAll('[data-lang]').forEach(el => {
      const key = el.dataset.lang;
      if (translations[lang] && translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });

    // Update language switcher UI
    document.querySelectorAll('.lang-switcher__btn').forEach(btn => {
      const isActive = btn.dataset.langCode === lang;
      btn.classList.toggle('lang-switcher__btn--active', isActive);
    });

    localStorage.setItem('lang', lang);
    currentLang = lang;

    // Re-attach verification result language if visible
    refreshVerificationResults();
  }

  function refreshVerificationResults() {
    // If there's an active verification result, re-render with new language
    const activeResult = document.querySelector('.verify-result--show');
    if (activeResult && activeResult.dataset.certId) {
      const id = activeResult.dataset.certId;
      const containerId = activeResult.id;
      showVerificationResult(id, containerId);
    }
  }

  /*========================
    THEME MANAGEMENT
  ========================*/
  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    const icon = document.querySelector('.theme-toggle__icon');
    if (icon) {
      icon.textContent = theme === 'dark' ? '☀️' : '🌙';
    }
    localStorage.setItem('theme', theme);
    currentTheme = theme;
  }

  function toggleTheme() {
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(newTheme);
  }

  /*========================
    MOBILE NAVIGATION
  ========================*/
  function toggleMobileMenu() {
    const menu = document.getElementById('mobileNav');
    const toggle = document.getElementById('mobileMenuToggle');
    if (!menu || !toggle) return;

    const isOpen = menu.classList.contains('mobile-nav--open');
    if (isOpen) {
      menu.classList.remove('mobile-nav--open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.querySelector('.menu-icon').textContent = '☰';
    } else {
      menu.classList.add('mobile-nav--open');
      toggle.setAttribute('aria-expanded', 'true');
      toggle.querySelector('.menu-icon').textContent = '✕';
    }
  }

  function closeMobileMenu() {
    const menu = document.getElementById('mobileNav');
    const toggle = document.getElementById('mobileMenuToggle');
    if (!menu || !toggle) return;

    if (menu.classList.contains('mobile-nav--open')) {
      menu.classList.remove('mobile-nav--open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.querySelector('.menu-icon').textContent = '☰';
    }
  }

  /*========================
    STICKY HEADER & SCROLL
  ========================*/
  function handleScroll() {
    const header = document.getElementById('header');
    if (header) {
      header.classList.toggle('header--scrolled', window.scrollY > 10);
    }

    const scrollBtn = document.getElementById('scrollTopBtn');
    if (scrollBtn) {
      scrollBtn.classList.toggle('scroll-top--visible', window.scrollY > 500);
    }
  }

  /*========================
    FAQ ACCORDION
  ========================*/
  function initFAQ() {
    document.querySelectorAll('.faq__item').forEach(item => {
      const question = item.querySelector('.faq__question');
      if (!question) return;

      question.addEventListener('click', () => {
        const isOpen = item.classList.contains('faq__item--open');

        // Close all other items
        document.querySelectorAll('.faq__item--open').forEach(openItem => {
          if (openItem !== item) {
            openItem.classList.remove('faq__item--open');
            const openQ = openItem.querySelector('.faq__question');
            if (openQ) openQ.setAttribute('aria-expanded', 'false');
          }
        });

        // Toggle current
        if (isOpen) {
          item.classList.remove('faq__item--open');
          question.setAttribute('aria-expanded', 'false');
        } else {
          item.classList.add('faq__item--open');
          question.setAttribute('aria-expanded', 'true');
        }
      });
    });
  }

  /*========================
    CERTIFICATE VERIFICATION
  ========================*/
  const VALID_IDS = ['TA-AI-2026_ABH_1059_AF', 'TA-AI-2026_MFM_2198_AF'];

  function initVerifyForms() {
    // Homepage form
    const homeForm = document.getElementById('verifyForm');
    if (homeForm) {
      homeForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const input = document.getElementById('verifyInput');
        if (input && input.value.trim()) {
          showVerificationResult(input.value.trim(), 'verifyResult');
        }
      });
    }

    // Verify page form (verify.html)
    const pageForm = document.getElementById('verifyPageForm');
    if (pageForm) {
      pageForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const input = document.getElementById('verifyPageInput');
        if (input && input.value.trim()) {
          showVerificationResult(input.value.trim(), 'verifyPageResult');
        }
      });
    }
  }

  function showVerificationResult(id, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const isValid = VALID_IDS.includes(id);
    const lang = currentLang;
    const t = translations[lang];
    const certPage = (id === 'TA-AI-2026_MFM_2198_AF')
      ? 'verify/certificates/TA-AI-2026_MFM_2198_AF.html'
      : null;

    let html = '';
    if (isValid) {
      html = `
        <div class="verify-result__card">
          <div class="verify-result__status verify-result__status--valid">✅ ${t['verify.validStatus']}</div>
          <p style="font-weight:600;margin-bottom:8px;">${t['verify.validMessage']}</p>
          <p style="font-size:var(--text-sm);color:var(--color-text-muted);">ID: <strong>${id}</strong></p>
          ${certPage ? `<a href="${certPage}" class="btn btn--primary btn--sm" style="margin-top:12px;">${t['verify.viewCertificate']}</a>` : ''}
        </div>
      `;
    } else {
      html = `
        <div class="verify-result__card">
          <div class="verify-result__status verify-result__status--invalid">❌ ${t['verify.invalidStatus']}</div>
          <p style="font-weight:600;">${t['verify.invalidMessage']}</p>
          <p style="font-size:var(--text-sm);color:var(--color-text-muted);">${t['verify.invalidHint']}</p>
        </div>
      `;
    }

    container.innerHTML = html;
    container.dataset.certId = id;
    container.classList.add('verify-result--show');
  }

  /*========================
    TOAST NOTIFICATIONS
  ========================*/
  function showToast(messageKey) {
    const toast = document.getElementById('toast');
    if (!toast) return;

    const msg = translations[currentLang][messageKey] || messageKey;
    toast.textContent = msg;
    toast.classList.add('toast--show');
    clearTimeout(toast._timeout);
    toast._timeout = setTimeout(() => {
      toast.classList.remove('toast--show');
    }, 3000);
  }

  /*========================
    SMOOTH SCROLLING
  ========================*/
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth' });
          closeMobileMenu();
        }
      });
    });
  }

  /*========================
    EVENT LISTENERS SETUP
  ========================*/
  function setupEventListeners() {
    // Language switcher buttons
    document.querySelectorAll('.lang-switcher__btn').forEach(btn => {
      btn.addEventListener('click', () => {
        applyLanguage(btn.dataset.langCode);
        showToast('toast.langChanged');
      });
    });

    // Theme toggle
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
      themeToggle.addEventListener('click', () => {
        toggleTheme();
        showToast('toast.themeChanged');
      });
    }

    // Mobile menu toggle
    const menuToggle = document.getElementById('mobileMenuToggle');
    if (menuToggle) {
      menuToggle.addEventListener('click', toggleMobileMenu);
    }

    // Close mobile menu on outside click or ESC
    document.addEventListener('click', (e) => {
      const menu = document.getElementById('mobileNav');
      const toggle = document.getElementById('mobileMenuToggle');
      if (!menu || !toggle) return;
      if (!menu.contains(e.target) && !toggle.contains(e.target) && menu.classList.contains('mobile-nav--open')) {
        closeMobileMenu();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeMobileMenu();
    });

    // Scroll events
    window.addEventListener('scroll', handleScroll, { passive: true });

    // FAQ
    initFAQ();

    // Verify forms
    initVerifyForms();

    // Smooth scroll
    initSmoothScroll();

    // Scroll to top button
    const scrollBtn = document.getElementById('scrollTopBtn');
    if (scrollBtn) {
      scrollBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
  }

  /*========================
    START THE ENGINE
  ========================*/
  document.addEventListener('DOMContentLoaded', init);

})();
