/* =========================================================
   TENSOR ACADEMY
   Theme Manager
   Light / Dark Mode
========================================================= */

(function () {
    "use strict";

    const STORAGE_KEY = "tensor-academy-theme";
    const html = document.documentElement;

    function setTheme(theme) {
        if (theme === "dark") {
            html.classList.add("dark");
        } else {
            html.classList.remove("dark");
        }

        const themeToggle = document.getElementById("theme-toggle");
        const themeIcon = document.querySelector(".theme-icon");

        if (themeToggle) {
            themeToggle.setAttribute(
                "aria-label",
                theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
            );
        }

        if (themeIcon) {
            themeIcon.textContent = theme === "dark" ? "☀" : "☾";
        }
    }

    function getPreferredTheme() {
        const savedTheme = localStorage.getItem(STORAGE_KEY);

        if (savedTheme === "dark" || savedTheme === "light") {
            return savedTheme;
        }

        if (
            window.matchMedia &&
            window.matchMedia("(prefers-color-scheme: dark)").matches
        ) {
            return "dark";
        }

        return "light";
    }

    function initTheme() {
        setTheme(getPreferredTheme());
    }

    function bindThemeToggle() {
        const themeToggle = document.getElementById("theme-toggle");

        if (!themeToggle) return;

        themeToggle.addEventListener("click", function () {
            const isDark = html.classList.contains("dark");
            const nextTheme = isDark ? "light" : "dark";

            setTheme(nextTheme);
            localStorage.setItem(STORAGE_KEY, nextTheme);
        });
    }

    document.addEventListener("DOMContentLoaded", function () {
        initTheme();
        bindThemeToggle();
    });
})();
