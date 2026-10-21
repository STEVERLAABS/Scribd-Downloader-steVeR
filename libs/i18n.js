/**
 * Scribd Premium Downloader
 * Translations Library
 * @version 2.9.0
 */

const I18n = {
    en: {
        popup: {
            title: "Scribd Premium",
            subtitle: "Document Downloader",
            status: "Ready to use",
            how_to: "HOW DOES IT WORK?",
            step1: "Open any <strong>Scribd</strong> document you want to save.",
            step2: "A <strong>floating panel</strong> will appear on the screen. Reload if it doesn't.",
            step3: "Click <strong>'Server Extraction'</strong> as the main method, or <strong>'External Download'</strong> for an alternative.",
            footer: "v2.9.0 — steVeR Edition"
        },
        overlay: {
            title: "⚡ Scribd Premium",
            id: "ID:",
            file: "File:",
            pages: "Pages:",
            analyzing: "Counting pages...",
            activate: "⬇ Download PDF",
            // Scan Mode 1: Native
            hq_native_btn: "Extract from Server",
            hq_native_sub: "Original source quality",
            hq_native_badge: "OPTIMAL",
            hq_native_tooltip: "Downloads the original document images directly from the server to preserve maximum quality.",
            // Scan Mode 2: Backup (zoom-fit)
            hq_fit_btn: "Secondary Scan",
            hq_fit_sub: "Fullscreen capture",
            hq_fit_badge: "STANDARD",
            hq_fit_tooltip: "Takes a screenshot of the document. Use this option if server extraction is unavailable.",
            hq_btn: "Premium Extraction",
            hq_badge: "RECOMMENDED",
            hq_tooltip: "Downloads each original page to build an accurate PDF.",
            adv_opts: "Alternative option",
            vec_btn: "External Download",
            vec_badge: "Best Quality",
            vec_tooltip: "Takes you to a third party service to download the PDF instantly. Very fast, but not always working.",
            large_doc_warning: "⚠️ Large document ({pages} pages): Extraction will take a reasonable time. You may want to try 'External Download' first.",
            hq_long_warning: "Extraction initiated. Please do not close this tab.",
            states: {
                loading: "Preparing extraction...",
                saving: "Saving final PDF...",
                success: "PDF saved successfully!",
                error: "Something went wrong: "
            },
            errors: {
                pdf_lib: "Reload the page and try again.",
                no_pages: "No accessible pages were found.",
                capture: "Failed to process the tab capture."
            },
            feedback_pause: "⚠️ Keep this tab open",
            feedback_desc: "You can use your PC or change windows, just don't close this tab until the process finishes.",
            feedback_err_title: "⚠️ Extraction Interrupted",
            feedback_err_desc: "Please try again making sure not to close the tab.",
            feedback_err_help: "If the problem persists:<br/><a href='https://github.com/HugoAleOlguin/Scribd-Downloader-Premium/issues' target='_blank' style='color:#60a5fa; text-decoration:underline;'>Report on GitHub</a> or <a href='https://www.reddit.com/user/Hugo_Ale_Olguin_/' target='_blank' style='color:#60a5fa; text-decoration:underline;'>Message me on Reddit</a>"
        },
        toast: {
            init: { title: "Starting", desc: "Connecting to server..." },
            verify: { title: "Security Check", desc: "Completing Cloudflare protection automatically..." },
            // Cloudflare could not resolve automatically — asking user for manual help
            verify_manual: {
                title: "Action Required",
                desc: "Cloudflare needs your help. Complete the captcha on the page — the download will continue automatically.",
                help: "<b>What to do?</b><br/>Click the Cloudflare verification checkbox visible on the page. Once completed, the extension will continue automatically.<br/><br/>If no checkbox appears, reload the page and try again."
            },
            verify_done: { title: "Verification Complete", desc: "Accessing document..." },
            wait: { title: "Generating Download Link", desc: "Waiting for external server response..." },
            // Server took too long to generate the link — not a critical error
            wait_timeout: {
                title: "Server Is Taking Too Long",
                desc: "The external server didn't generate the link in time. You can close this tab and try again, or use 'Smart Scan (HQ)'.",
                help: "<b>What happened?</b><br/>The external download server is busy or the document is temporarily unavailable.<br/><br/>👉 <b>Options:</b><br/>• Close this tab and click 'Original PDF' again in a few minutes.<br/>• Use <b>'Smart Scan (HQ)'</b> as a reliable alternative."
            },
            redirect: { title: "Redirecting", desc: "Entering final download phase..." },
            analyzing: { title: "Analyzing Document", desc: "Locating PDF file..." },
            validating: { title: "Verifying Integrity", desc: "Checking file size and format..." },
            success: { title: "Document Ready!", desc: "Download has started. Enjoy!" },
            error_detected: {
                title: "Document Unavailable",
                desc: "The server indicates this document cannot be downloaded.",
                help: "<b>What happened?</b><br/>The external server does not have this document available as an original PDF.<br/><br/>👉 <b>Solution:</b> Use the <b>'Smart Scan (HQ)'</b> option to capture it page by page. Works on almost all documents."
            },
            error_damaged: {
                title: "File Unavailable",
                desc: "The original PDF is empty or corrupted.",
                help: "<b>Download Failed:</b><br/>The original PDF file is not available or is corrupted on the external server.<br/><br/>👉 <b>Solution:</b> Close this tab and use the <b>'Smart Scan (HQ)'</b> option in the extension panel. This alternative method works on almost all documents."
            },
            error_timeout: { title: "Request Timed Out", desc: "The external server took too long. Close this tab and try again in a few minutes." }
        }
    }
};

// Exportar para distintos contextos de ejecución
if (typeof module !== 'undefined' && module.exports) {
    module.exports = I18n;
} else if (typeof window !== 'undefined') {
    window.I18n = I18n; // Content Script / Popup
}
// El Service Worker maneja esto por separado con su copia embebida en background.js
