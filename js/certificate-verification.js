/* =========================================================
   TENSOR ACADEMY
   Certificate Verification Router
========================================================= */

(function () {

    "use strict";


    const form =
        document.getElementById(
            "certificate-search-form"
        );


    const input =
        document.getElementById(
            "certificate-id-input"
        );


    const errorMessage =
        document.getElementById(
            "verification-error"
        );


    if (!form || !input) {

        return;

    }


    /* =====================================================
       CERTIFICATE DATABASE
       
       Add every certificate here.
    ====================================================== */

    const certificates = {

        "TA-AI-2026-MFM-2198-AF":
            "verify/certificates/TA-AI-2026-MFM-2198-AF.html"

    };


    /* =====================================================
       NORMALIZE CERTIFICATE ID
    ====================================================== */

    function normalizeCertificateId(value) {

        return value
            .trim()
            .toUpperCase()
            .replace(/\s+/g, "");

    }


    /* =====================================================
       SHOW ERROR
    ====================================================== */

    function showError(message) {

        if (!errorMessage) {

            return;

        }


        errorMessage.textContent =
            message;


        errorMessage.classList.add(
            "visible"
        );

    }


    /* =====================================================
       HIDE ERROR
    ====================================================== */

    function hideError() {

        if (!errorMessage) {

            return;

        }


        errorMessage.textContent =
            "";

        errorMessage.classList.remove(
            "visible"
        );

    }


    /* =====================================================
       FORM SUBMISSION
    ====================================================== */

    form.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            hideError();


            const certificateId =
                normalizeCertificateId(
                    input.value
                );


            if (!certificateId) {

                showError(
                    "Please enter a certificate ID."
                );

                input.focus();

                return;

            }


            const certificateUrl =
                certificates[
                    certificateId
                ];


            if (!certificateUrl) {

                showError(
                    "Certificate ID not found. Please check the ID and try again."
                );

                input.focus();

                return;

            }


            /* =================================================
               REDIRECT
            ================================================== */

            window.location.href =
                certificateUrl;

        }
    );


})();
