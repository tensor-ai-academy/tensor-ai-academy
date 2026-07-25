/* =========================================================
   TENSOR ACADEMY
   Main Application Controller
========================================================= */

(function () {
    "use strict";

    document.addEventListener("DOMContentLoaded", function () {

        /* =====================================================
           MOBILE NAVIGATION
        ===================================================== */

        const menuToggle = document.getElementById("menu-toggle");
        const mainNavigation = document.getElementById("main-navigation");

        if (menuToggle && mainNavigation) {

            menuToggle.addEventListener("click", function () {

                const isOpen =
                    mainNavigation.classList.toggle("active");

                menuToggle.setAttribute(
                    "aria-expanded",
                    String(isOpen)
                );

                menuToggle.setAttribute(
                    "aria-label",
                    isOpen
                        ? "Close navigation menu"
                        : "Open navigation menu"
                );

            });


            /* Close menu after selecting a navigation link */

            const navigationLinks =
                mainNavigation.querySelectorAll("a");

            navigationLinks.forEach(function (link) {

                link.addEventListener("click", function () {

                    mainNavigation.classList.remove("active");

                    menuToggle.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                    menuToggle.setAttribute(
                        "aria-label",
                        "Open navigation menu"
                    );

                });

            });


            /* Close menu when clicking outside */

            document.addEventListener(
                "click",
                function (event) {

                    const clickedInsideNavigation =
                        mainNavigation.contains(event.target);

                    const clickedMenuButton =
                        menuToggle.contains(event.target);

                    if (
                        !clickedInsideNavigation &&
                        !clickedMenuButton &&
                        mainNavigation.classList.contains("active")
                    ) {

                        mainNavigation.classList.remove("active");

                        menuToggle.setAttribute(
                            "aria-expanded",
                            "false"
                        );

                    }

                }
            );

        }


        /* =====================================================
           HEADER SCROLL STATE
        ===================================================== */

        const siteHeader =
            document.getElementById("site-header");

        if (siteHeader) {

            function updateHeader() {

                if (window.scrollY > 20) {

                    siteHeader.classList.add("scrolled");

                } else {

                    siteHeader.classList.remove("scrolled");

                }

            }

            updateHeader();

            window.addEventListener(
                "scroll",
                updateHeader,
                { passive: true }
            );

        }


        /* =====================================================
           SCROLL REVEAL ANIMATION
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


        if (
            "IntersectionObserver" in window &&
            revealElements.length
        ) {

            const revealObserver =
                new IntersectionObserver(
                    function (entries, observer) {

                        entries.forEach(function (entry) {

                            if (entry.isIntersecting) {

                                entry.target.classList.add(
                                    "is-visible"
                                );

                                observer.unobserve(
                                    entry.target
                                );

                            }

                        });

                    },
                    {
                        threshold: 0.12,
                        rootMargin: "0px 0px -40px 0px"
                    }
                );


            revealElements.forEach(function (element) {

                element.classList.add(
                    "reveal-on-scroll"
                );

                revealObserver.observe(
                    element
                );

            });

        } else {

            revealElements.forEach(function (element) {

                element.classList.add(
                    "is-visible"
                );

            });

        }


        /* =====================================================
           ACTIVE NAVIGATION LINK
        ===================================================== */

        const sections =
            document.querySelectorAll(
                "main section[id]"
            );

        const navLinks =
            document.querySelectorAll(
                ".main-navigation a"
            );


        if (
            "IntersectionObserver" in window &&
            sections.length &&
            navLinks.length
        ) {

            const sectionObserver =
                new IntersectionObserver(
                    function (entries) {

                        entries.forEach(function (entry) {

                            if (!entry.isIntersecting) {
                                return;
                            }

                            const currentId =
                                entry.target.getAttribute("id");

                            navLinks.forEach(function (link) {

                                const linkTarget =
                                    link.getAttribute("href");

                                if (
                                    linkTarget ===
                                    "#" + currentId
                                ) {

                                    link.classList.add(
                                        "active"
                                    );

                                } else {

                                    link.classList.remove(
                                        "active"
                                    );

                                }

                            });

                        });

                    },
                    {
                        threshold: 0.35
                    }
                );


            sections.forEach(function (section) {

                sectionObserver.observe(
                    section
                );

            });

        }


        /* =====================================================
           CURRENT YEAR
        ===================================================== */

        const currentYear =
            new Date().getFullYear();

        const yearElements =
            document.querySelectorAll(
                "[data-current-year]"
            );

        yearElements.forEach(function (element) {

            element.textContent =
                currentYear;

        });


        /* =====================================================
           ESC KEY
           Close mobile menu
        ===================================================== */

        document.addEventListener(
            "keydown",
            function (event) {

                if (
                    event.key === "Escape" &&
                    mainNavigation &&
                    mainNavigation.classList.contains("active")
                ) {

                    mainNavigation.classList.remove(
                        "active"
                    );

                    if (menuToggle) {

                        menuToggle.setAttribute(
                            "aria-expanded",
                            "false"
                        );

                    }

                }

            }
        );

    });

})();
