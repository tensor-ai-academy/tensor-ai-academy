/* =========================================================
   TENSOR ACADEMY
   Main Application Controller
   Mobile Navigation / Scroll Reveal
========================================================= */

(function () {

    "use strict";


    /* =====================================================
       MOBILE NAVIGATION
    ===================================================== */

    const menuToggle =
        document.getElementById("menu-toggle");

    const navigation =
        document.getElementById("main-navigation");


    if (menuToggle && navigation) {

        menuToggle.addEventListener(
            "click",
            function () {

                const isOpen =
                    navigation.classList.toggle(
                        "is-open"
                    );


                menuToggle.setAttribute(
                    "aria-expanded",
                    isOpen ? "true" : "false"
                );


                menuToggle.classList.toggle(
                    "is-active",
                    isOpen
                );

            }
        );


        /* Close menu after clicking a link */

        const navigationLinks =
            navigation.querySelectorAll("a");


        navigationLinks.forEach(
            function (link) {

                link.addEventListener(
                    "click",
                    function () {

                        navigation.classList.remove(
                            "is-open"
                        );

                        menuToggle.classList.remove(
                            "is-active"
                        );

                        menuToggle.setAttribute(
                            "aria-expanded",
                            "false"
                        );

                    }
                );

            }
        );

    }


    /* =====================================================
       SCROLL REVEAL
    ===================================================== */

    const revealElements =
        document.querySelectorAll(
            ".section-heading, " +
            ".about-text, " +
            ".license-card, " +
            ".program-card, " +
            ".stat-item, " +
            ".mission-card, " +
            ".verification-card, " +
            ".faq-item, " +
            ".contact-card"
        );


    revealElements.forEach(
        function (element) {

            element.classList.add(
                "reveal"
            );

        }
    );


    if ("IntersectionObserver" in window) {

        const observer =
            new IntersectionObserver(
                function (entries) {

                    entries.forEach(
                        function (entry) {

                            if (
                                entry.isIntersecting
                            ) {

                                entry.target.classList.add(
                                    "visible"
                                );


                                observer.unobserve(
                                    entry.target
                                );

                            }

                        }
                    );

                },
                {
                    threshold: 0.12,

                    rootMargin:
                        "0px 0px -40px 0px"
                }
            );


        revealElements.forEach(
            function (element) {

                observer.observe(
                    element
                );

            }
        );

    } else {

        revealElements.forEach(
            function (element) {

                element.classList.add(
                    "visible"
                );

            }
        );

    }


    /* =====================================================
       HEADER SCROLL STATE
    ===================================================== */

    const header =
        document.getElementById(
            "site-header"
        );


    if (header) {

        let ticking = false;


        function updateHeader() {

            if (window.scrollY > 20) {

                header.classList.add(
                    "scrolled"
                );

            } else {

                header.classList.remove(
                    "scrolled"
                );

            }

            ticking = false;

        }


        window.addEventListener(
            "scroll",
            function () {

                if (!ticking) {

                    window.requestAnimationFrame(
                        updateHeader
                    );

                    ticking = true;

                }

            },
            {
                passive: true
            }
        );

    }


    /* =====================================================
       CURRENT YEAR
    ===================================================== */

    const currentYear =
        new Date().getFullYear();


    const footerYear =
        document.querySelector(
            ".footer-bottom p"
        );


    if (footerYear) {

        footerYear.innerHTML =
            footerYear.innerHTML.replace(
                "2026",
                currentYear
            );

    }

})();
