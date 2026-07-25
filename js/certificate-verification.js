/* =========================================================
   TENSOR ACADEMY
   Certificate Verification Router
========================================================= */

(function () {
    "use strict";

    const form = document.getElementById("certificate-search-form");
    const input = document.getElementById("certificate-id-input");
    const errorBox = document.getElementById("verification-error");

    if (!form || !input || !errorBox) return;

    const certificateRoutes = {
        "TA-AI-2026-MFM-2198-AF": "verify/certificates/TA-AI-2026-MFM-2198-AF.html"
    };

    function normalizeId(value) {
        return String(value || "")
            .trim()
            .toUpperCase()
            .replace(/\s+/g, "");
    }

    function showError(message) {
        errorBox.textContent = message;
        errorBox.classList.add("visible");
    }

    function clearError() {
        errorBox.textContent = "";
        errorBox.classList.remove("visible");
    }

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        clearError();

        const certificateId = normalizeId(input.value);

        if (!certificateId) {
            showError("Please enter a certificate ID.");
            input.focus();
            return;
        }

        const targetUrl = certificateRoutes[certificateId];

        if (!targetUrl) {
            showError("Certificate ID not found. Please check the ID and try again.");
            input.focus();
            return;
        }

        window.location.href = targetUrl;
    });
})();
