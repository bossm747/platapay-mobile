import { renderPage } from './router.js';

document.addEventListener('DOMContentLoaded', () => {
    renderPage(window.location.pathname);

    document.body.addEventListener('click', (e) => {
        if (e.target.tagName === 'A') {
            e.preventDefault();
            const url = e.target.getAttribute('href');
            window.history.pushState({}, '', url);
            renderPage(url);
        }
    });

    window.addEventListener('popstate', () => {
        renderPage(window.location.pathname);
    });
});
