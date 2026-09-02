// =========================================================
// ⚙️  الملف الرئيسي (main.js)
// =========================================================

let currentLang = localStorage.getItem('ora-lang') || 'ar';

function applyLanguage(lang) {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        if (translations[lang] && translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.dataset.i18nPlaceholder;
        if (translations[lang] && translations[lang][key]) {
            el.placeholder = translations[lang][key];
        }
    });
    const langBtn = document.getElementById('langBtn');
    if (langBtn) langBtn.textContent = lang === 'ar' ? 'EN' : 'AR';
}

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('ora-lang', lang);
    applyLanguage(lang);
}

document.addEventListener('DOMContentLoaded', function() {

    // LOADER
    const loader = document.getElementById('loader');
    if (loader) {
        setTimeout(() => loader.classList.add('hide'), 700);
    }

    // NAVBAR SCROLL
    window.addEventListener('scroll', function() {
        const nav = document.getElementById('navbar');
        if (nav) nav.classList.toggle('scrolled', window.scrollY > 50);
    });

    // MOBILE MENU
    const menuBtn = document.getElementById('menuBtn');
    const navLinks = document.getElementById('navLinks');
    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', () => navLinks.classList.toggle('open'));
        navLinks.querySelectorAll('a').forEach(a => {
            a.addEventListener('click', () => navLinks.classList.remove('open'));
        });
    }

    // LANGUAGE BUTTON
    const langBtn = document.getElementById('langBtn');
    if (langBtn) {
        langBtn.addEventListener('click', () => {
            setLanguage(currentLang === 'ar' ? 'en' : 'ar');
        });
    }

    // THEME BUTTON
    const themeBtn = document.getElementById('themeBtn');
    if (themeBtn) {
        themeBtn.addEventListener('click', function() {
            document.body.classList.toggle('dark');
            const icon = this.querySelector('i');
            if (icon) icon.className = document.body.classList.contains('dark') ? 'fa-regular fa-sun' : 'fa-regular fa-moon';
            localStorage.setItem('ora-theme', document.body.classList.contains('dark') ? 'dark' : 'light');
        });
    }

    // COUNTERS
    const counters = document.querySelectorAll('.counter');
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const target = parseInt(el.dataset.target);
                let count = 0;
                const step = Math.ceil(target / 40);
                const timer = setInterval(() => {
                    count += step;
                    if (count >= target) {
                        el.textContent = target + '+';
                        clearInterval(timer);
                    } else {
                        el.textContent = count;
                    }
                }, 30);
                counterObserver.unobserve(el);
            }
        });
    }, { threshold: 0.5 });
    counters.forEach(c => counterObserver.observe(c));

    // REVEAL
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

    // CONTROL PANEL
    const toggle = document.getElementById('controlToggle');
    const panel = document.getElementById('controlPanel');
    if (toggle && panel) {
        toggle.addEventListener('click', () => panel.classList.toggle('show'));
        document.getElementById('closePanel').addEventListener('click', () => panel.classList.remove('show'));

        const primaryInput = document.getElementById('primaryColor');
        const secondaryInput = document.getElementById('secondaryColor');
        const bgInput = document.getElementById('bgColor');
        const primaryVal = document.getElementById('primaryVal');
        const secondaryVal = document.getElementById('secondaryVal');
        const bgVal = document.getElementById('bgVal');

        const savedPrimary = localStorage.getItem('ora-primary');
        const savedSecondary = localStorage.getItem('ora-secondary');
        const savedBg = localStorage.getItem('ora-bg');

        if (savedPrimary) { primaryInput.value = savedPrimary;
            primaryVal.textContent = savedPrimary; }
        if (savedSecondary) { secondaryInput.value = savedSecondary;
            secondaryVal.textContent = savedSecondary; }
        if (savedBg) { bgInput.value = savedBg;
            bgVal.textContent = savedBg; }

        function updateColors() {
            document.documentElement.style.setProperty('--primary', primaryInput.value);
            document.documentElement.style.setProperty('--secondary', secondaryInput.value);
            document.documentElement.style.setProperty('--bg', bgInput.value);
            primaryVal.textContent = primaryInput.value;
            secondaryVal.textContent = secondaryInput.value;
            bgVal.textContent = bgInput.value;

            localStorage.setItem('ora-primary', primaryInput.value);
            localStorage.setItem('ora-secondary', secondaryInput.value);
            localStorage.setItem('ora-bg', bgInput.value);
        }

        primaryInput.addEventListener('input', updateColors);
        secondaryInput.addEventListener('input', updateColors);
        bgInput.addEventListener('input', updateColors);

        document.getElementById('resetColors').addEventListener('click', () => {
            primaryInput.value = '#0f1a2e';
            secondaryInput.value = '#c9a87c';
            bgInput.value = '#f5f2ed';
            updateColors();
        });
    }

    // SWIPER
    if (document.querySelector('.swiper')) {
        new Swiper('.swiper', {
            loop: true,
            speed: 1200,
            effect: 'creative',
            creativeEffect: {
                prev: { translate: ['-30%', 0, -200] },
                next: { translate: ['100%', 0, 0] }
            },
            autoplay: { delay: 4500, disableOnInteraction: false },
            navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
            pagination: { el: '.swiper-pagination', clickable: true }
        });
    }

    // INIT
    applyLanguage(currentLang);

    if (localStorage.getItem('ora-theme') === 'dark') {
        document.body.classList.add('dark');
        const themeIcon = document.querySelector('#themeBtn i');
        if (themeIcon) themeIcon.className = 'fa-regular fa-sun';
    }

    const savedPrimary = localStorage.getItem('ora-primary');
    const savedSecondary = localStorage.getItem('ora-secondary');
    const savedBg = localStorage.getItem('ora-bg');

    if (savedPrimary) document.documentElement.style.setProperty('--primary', savedPrimary);
    if (savedSecondary) document.documentElement.style.setProperty('--secondary', savedSecondary);
    if (savedBg) document.documentElement.style.setProperty('--bg', savedBg);
});
