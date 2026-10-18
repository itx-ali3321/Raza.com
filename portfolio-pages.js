/* portfolio-pages.js
   Shared script for about, data-entry, web-development, portfolio and contact pages.
   - active link for the current page
   - mobile menu (built automatically if the page does not have one)
   - dark / light theme toggle (remembered between pages)
   - navbar "scrolled" class
   - contact form -> opens the visitor's email app
*/
(function () {
    'use strict';

    var html = document.documentElement;

    function icons() {
        if (window.lucide && typeof lucide.createIcons === 'function') lucide.createIcons();
    }

    /* ---------- Active link ---------- */
    function currentPage() {
        // handles /about, /about.html, /about/, /index.html and "/"
        var parts = location.pathname.split('/').filter(Boolean);
        var p = (parts.pop() || 'index').replace(/\.html$/, '');
        return p || 'index';
    }

    function markActive() {
        var page = currentPage();
        document.querySelectorAll('.navbar .nav-links a, .mobile-menu .nav-links a').forEach(function (a) {
            var href = (a.getAttribute('href') || '').split('#')[0].split('?')[0].replace(/^\.?\//, '').replace(/\.html$/, '').replace(/\/$/, '');
            a.classList.toggle('active', href === page);
        });
    }

    /* ---------- Mobile menu ---------- */
    function buildMenu() {
        if (document.getElementById('mobileMenu')) return;
        var nav = document.querySelector('.navbar .nav-links');
        if (!nav) return;

        var overlay = document.createElement('div');
        overlay.className = 'mobile-menu-overlay';
        overlay.id = 'mobileOverlay';

        var menu = document.createElement('div');
        menu.className = 'mobile-menu';
        menu.id = 'mobileMenu';
        menu.setAttribute('aria-label', 'Mobile navigation');
        menu.innerHTML =
            '<button class="mobile-close" type="button" aria-label="Close menu">' +
            '<i data-lucide="x" style="width:16px;height:16px"></i></button>';
        menu.appendChild(nav.cloneNode(true));

        document.body.appendChild(overlay);
        document.body.appendChild(menu);
    }

    window.openMenu = function () {
        var m = document.getElementById('mobileMenu');
        var o = document.getElementById('mobileOverlay');
        var b = document.getElementById('mobileMenuBtn');
        if (m) m.classList.add('open');
        if (o) o.classList.add('open');
        if (b) b.setAttribute('aria-expanded', 'true');
    };

    window.closeMenu = function () {
        var m = document.getElementById('mobileMenu');
        var o = document.getElementById('mobileOverlay');
        var b = document.getElementById('mobileMenuBtn');
        if (m) m.classList.remove('open');
        if (o) o.classList.remove('open');
        if (b) b.setAttribute('aria-expanded', 'false');
    };

    function bindMenu() {
        var overlay = document.getElementById('mobileOverlay');
        if (overlay) overlay.addEventListener('click', window.closeMenu);

        document.querySelectorAll('.mobile-close').forEach(function (btn) {
            btn.addEventListener('click', window.closeMenu);
        });

        document.querySelectorAll('#mobileMenu a').forEach(function (a) {
            a.addEventListener('click', window.closeMenu);
        });

        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape') window.closeMenu();
        });

        window.addEventListener('resize', function () {
            if (window.innerWidth > 768) window.closeMenu();
        });
    }

    /* ---------- Theme ---------- */
    function setThemeIcon(theme) {
        var btn = document.getElementById('themeToggle');
        if (!btn) return;
        // lucide replaces the <i> with an <svg>, so rebuild the icon each time
        btn.innerHTML =
            '<i data-lucide="' + (theme === 'dark' ? 'sun' : 'moon') +
            '" id="themeIcon" style="width:18px;height:18px"></i>';
        icons();
    }

    window.toggleTheme = function () {
        var next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        html.setAttribute('data-theme', next);
        try { localStorage.setItem('theme', next); } catch (e) { }
        setThemeIcon(next);
    };

    function initTheme() {
        var saved = 'light';
        try { saved = localStorage.getItem('theme') || 'light'; } catch (e) { }
        html.setAttribute('data-theme', saved);
        setThemeIcon(saved);
    }

    /* ---------- Navbar scroll effect ---------- */
    function bindScroll() {
        var nav = document.getElementById('navbar') || document.querySelector('.navbar');
        if (!nav) return;
        function onScroll() { nav.classList.toggle('scrolled', window.scrollY > 50); }
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
    }

    /* ---------- Contact form ---------- */
    function initContactForm() {
        var form = document.querySelector('[data-contact-form]');
        if (!form) return;

        var params = new URLSearchParams(window.location.search);
        var requestedService = params.get('service');
        var serviceField = form.elements.namedItem('service');
        if (requestedService && serviceField) serviceField.value = requestedService;

        form.addEventListener('submit', function (event) {
            event.preventDefault();
            if (!form.reportValidity()) return;

            var values = new FormData(form);
            var service = values.get('service');
            var subject = 'Project inquiry: ' + service;
            var body = [
                'Name: ' + values.get('name'),
                'Email: ' + values.get('email'),
                'Service: ' + service,
                '',
                String(values.get('message') || '')
            ].join('\n');
            var mailto = 'mailto:itsali327442@gmail.com?subject=' + encodeURIComponent(subject) +
                '&body=' + encodeURIComponent(body);
            var note = form.querySelector('[data-form-note]');
            window.location.href = mailto;
            if (note) note.textContent = 'Your email app should open with the inquiry filled in. The message has not been sent yet.';
        });
    }

    /* ---------- Init ---------- */
    function init() {
        buildMenu();
        markActive();
        bindMenu();
        initTheme();
        bindScroll();
        initContactForm();
        icons();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();