/**
 * Scribd Premium Downloader
 * Popup Logic with i18n
 * @version 2.7.0
 */

// I18n is loaded from libs/i18n.js

function updateUI(lang) {
    if (!window.I18n || !window.I18n[lang]) return;

    const t = window.I18n[lang].popup;

    document.getElementById('txt-title').innerText = t.title;
    document.getElementById('txt-subtitle').innerText = t.subtitle;
    document.getElementById('txt-status').innerText = t.status;

    // innerHTML en todos los steps porque las traducciones pueden tener etiquetas <strong>
    document.getElementById('txt-step1').innerHTML = t.step1;
    document.getElementById('txt-step2').innerHTML = t.step2;
    document.getElementById('txt-step3').innerHTML = t.step3;
    document.getElementById('txt-footer').innerText = t.footer;

    // Toggle Buttons (Spanish removed — English only)
    document.getElementById('btn-en').classList.add('active');
}

document.addEventListener('DOMContentLoaded', () => {
    // Load saved preference
    chrome.storage.local.get(['language'], (result) => {
        const lang = result.language || 'en'; // Default EN (Spanish removed)
        updateUI(lang);
    });

    // Listeners (Spanish button removed)
    document.getElementById('btn-en').addEventListener('click', () => {
        chrome.storage.local.set({ language: 'en' }, () => updateUI('en'));
    });
});
