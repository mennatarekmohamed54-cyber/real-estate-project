const translations = {
    ar: {
        home: "الرئيسية",
        about: "عن الشركة",
        properties: "العقارات",
        news: "الأخبار",
        gallery: "المعرض",
        contact: "اتصال",
        heroBadge: "LUXURY LIVING",
        heroDiscover: "اكتشف",
        heroDream: "منزل أحلامك",
        heroDesc: "أرقى الوحدات السكنية والتجارية في قلب العاصمة، بتصميمات استثنائية وتجربة عقارية لا تُنسى.",
        heroBtn: "استكشف العقارات",
        contactBtn: "تواصل معنا",
        aboutTag: "قصتنا",
        aboutTitle: "نبني المستقبل بأيدي الخبراء",
        aboutDesc: "أورا للعقارات هي صرح من النزاهة والجودة، نقدم حلولاً سكنية واستثمارية تلبي تطلعاتكم وتجمع بين التصميم الراقي والموقع المثالي في قلب القاهرة.",
        years: "سنة خبرة",
        clients: "عميل سعيد",
        satisfaction: "% رضا",
        propertiesTag: "أحدث العروض",
        propertiesTitle: 'عقارات <span>مميزة</span>',
        propertiesDesc: "مجموعة مختارة من أفضل الوحدات بأسعار تنافسية وتصميمات فاخرة.",
        sale: "للبيع",
        rent: "للإيجار",
        investment: "استثماري",
        p1_name: "فيلا البستان",
        p2_name: "دوبلكس النيل",
        p3_name: "أرض العاصمة",
        newsTag: "آخر المستجدات",
        newsTitle: 'أخبار <span>السوق</span>',
        news1: "انخفاض الفائدة يزيد الطلب على الوحدات السكنية",
        news2: "افتتاح مشروع سكني ضخم في العاصمة الإدارية",
        news3: "دليلك الشامل لتجنب أخطاء شراء أول عقار",
        galleryTag: "إبداع معماري",
        galleryTitle: 'معرض <span>المشاريع</span>',
        contactTag: "تواصل مع خبرائنا",
        contactTitle: 'احجز استشارتك <span>المجانية</span>',
        contactDesc: "فريق من المستشارين المتخصصين على أتم الاستعداد لمساعدتك في اختيار العقار المثالي وفقاً لاحتياجاتك.",
        address: "مصر الجديدة - القاهرة",
        namePlaceholder: "الاسم بالكامل",
        emailPlaceholder: "البريد الإلكتروني",
        messagePlaceholder: "رسالتك",
        sendBtn: 'إرسال طلب الاستشارة <i class="fa-solid fa-paper-plane"></i>',
        ctaTag: "اكتشف المزيد",
        ctaTitle: "هل تبحث عن المزيد من الخيارات؟",
        ctaDesc: "تصفح قائمة كاملة بجميع العقارات المتاحة لدينا بكل التفاصيل والأسعار.",
        ctaBtn: "عرض جميع العقارات",
        allNews: "عرض جميع الأخبار",
        footerLinks: "روابط",
        footerSupport: "الدعم",
        footerContact: "اتصل بنا",
        copyright: "© 2026 أورا العقارية - جميع الحقوق محفوظة"
    },
    en: {
        home: "Home",
        about: "About Us",
        properties: "Properties",
        news: "News",
        gallery: "Gallery",
        contact: "Contact",
        heroBadge: "LUXURY LIVING",
        heroDiscover: "Discover",
        heroDream: "Your Dream Home",
        heroDesc: "The finest residential and commercial units in the heart of the capital, with exceptional designs and an unforgettable real estate experience.",
        heroBtn: "Explore Properties",
        contactBtn: "Contact Us",
        aboutTag: "OUR STORY",
        aboutTitle: "Building the Future with Expert Hands",
        aboutDesc: "Ora Real Estate is a bastion of integrity and quality, providing residential and investment solutions that meet your aspirations, combining elegant design with an ideal location in the heart of Cairo.",
        years: "Years Experience",
        clients: "Happy Clients",
        satisfaction: "% Satisfaction",
        propertiesTag: "LATEST OFFERS",
        propertiesTitle: 'Featured <span>Properties</span>',
        propertiesDesc: "A curated selection of premium properties at competitive prices.",
        sale: "For Sale",
        rent: "For Rent",
        investment: "Investment",
        p1_name: "Al-Bustan Villa",
        p2_name: "Nile Duplex",
        p3_name: "Capital Land",
        newsTag: "LATEST UPDATES",
        newsTitle: 'Market <span>News</span>',
        news1: "Lower interest rates boost demand for residential units",
        news2: "Major residential project launched in the New Capital",
        news3: "Your guide to avoiding first property buying mistakes",
        galleryTag: "ARCHITECTURAL CREATIVITY",
        galleryTitle: 'Project <span>Gallery</span>',
        contactTag: "CONTACT OUR EXPERTS",
        contactTitle: 'Book Your <span>Free Consultation</span>',
        contactDesc: "Our specialized consultants are ready to help you choose the perfect property based on your needs.",
        address: "New Cairo - Egypt",
        namePlaceholder: "Full Name",
        emailPlaceholder: "Email Address",
        messagePlaceholder: "Your Message",
        sendBtn: 'Send Consultation Request <i class="fa-solid fa-paper-plane"></i>',
        ctaTag: "DISCOVER MORE",
        ctaTitle: "Looking for more options?",
        ctaDesc: "Browse the complete list of all available properties with full details and prices.",
        ctaBtn: "View All Properties",
        allNews: "View All News",
        footerLinks: "Links",
        footerSupport: "Support",
        footerContact: "Contact",
        copyright: "© 2026 Ora Real Estate - All Rights Reserved"
    }
};

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
    const loader = document.getElementById('loader');
    if (loader) {
        setTimeout(() => loader.classList.add('hide'), 700);
    }

    window.addEventListener('scroll', function() {
        const nav = document.getElementById('navbar');
        if (nav) nav.classList.toggle('scrolled', window.scrollY > 50);
    });

    const menuBtn = document.getElementById('menuBtn');
    const navLinks = document.getElementById('navLinks');
    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', () => navLinks.classList.toggle('open'));
        navLinks.querySelectorAll('a').forEach(a => {
            a.addEventListener('click', () => navLinks.classList.remove('open'));
        });
    }

    const langBtn = document.getElementById('langBtn');
    if (langBtn) {
        langBtn.addEventListener('click', () => {
            setLanguage(currentLang === 'ar' ? 'en' : 'ar');
        });
    }

    const themeBtn = document.getElementById('themeBtn');
    if (themeBtn) {
        themeBtn.addEventListener('click', function() {
            document.body.classList.toggle('dark');
            const icon = this.querySelector('i');
            if (icon) icon.className = document.body.classList.contains('dark') ? 'fa-regular fa-sun' : 'fa-regular fa-moon';
            localStorage.setItem('ora-theme', document.body.classList.contains('dark') ? 'dark' : 'light');
        });
    }

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

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

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

        if (savedPrimary) { primaryInput.value = savedPrimary; primaryVal.textContent = savedPrimary; }
        if (savedSecondary) { secondaryInput.value = savedSecondary; secondaryVal.textContent = savedSecondary; }
        if (savedBg) { bgInput.value = savedBg; bgVal.textContent = savedBg; }

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
            primaryInput.value = '#1a1a2e';
            secondaryInput.value = '#c9a87c';
            bgInput.value = '#f5f2ed';
            updateColors();
        });
    }

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
