/**
 * akd74 Personal Website — Interactive Script
 * Features: Theme toggle, ZH/EN i18n toggle, scroll reveal, scroll-spy,
 *           mobile navigation, and one-click email copy.
 */

const TRANSLATIONS = {
    zh: {
        skip: '跳转到主要内容',
        'nav.about': '关于',
        'nav.skills': '技能',
        'nav.projects': '项目',
        'nav.contact': '联系',
        'hero.status': '持续探索 · 欢迎交流与合作',
        'hero.greeting': '你好，我是',
        'hero.subtitle': '热衷于构建简洁、优雅且富有生命力的网页与应用。在工程实现与视觉细节之间寻找平衡，把想法打磨成触手可及的作品。',
        'hero.ctaProjects': '浏览项目',
        'hero.ctaContact': '联系我',
        'about.title': '关于我',
        'about.desc': '我喜欢从零开始打磨清晰、易用且耐看的数字产品。你可以在这里替换为自己的真实经历、兴趣方向与个人故事。',
        'about.card1.title': '现代界面设计',
        'about.card1.text': '注重排版层级、留白节奏与微交互反馈，让页面在桌面与移动端都保持一致的精致体验。',
        'about.card2.title': '简洁工程实现',
        'about.card2.text': '追求语义化结构、可维护的样式体系与高性能交互，不依赖冗余框架也能流畅运行。',
        'about.card3.title': '持续学习与沉淀',
        'about.card3.text': '保持对新技术与工具的好奇心，通过开源项目与个人网站记录思考与成长轨迹。',
        'skills.title': '技术栈与工具',
        'skills.desc': '常用技术与工作流（可根据你的实际技能自由增删）。',
        'skills.group1': '前端开发',
        'skills.group2': '开发与协作',
        'skills.group3': '设计与体验',
        'projects.title': '精选项目',
        'projects.desc': '部分个人作品与实验项目，点击可查看源码或演示。',
        'projects.p1.badge': '个人主页',
        'projects.p1.desc': '零构建、纯原生 HTML/CSS/JS 打造的现代化个人网页，支持深浅色主题切换、中英双语、响应式布局与流畅滚动动效。',
        'projects.p2.badge': '示例项目',
        'projects.p2.title': '工具箱 / Web App',
        'projects.p2.desc': '这里可以放置你的代表作品：简要说明项目解决的问题、核心亮点以及你所使用的技术方案。',
        'projects.p3.badge': '开源探索',
        'projects.p3.title': '自动化脚本 / 笔记',
        'projects.p3.desc': '分享提升日常效率的脚本工具、学习笔记或开源贡献，让访客更全面地了解你的技术热情。',
        'contact.title': '保持联系',
        'contact.desc': '无论是项目合作、技术交流，还是单纯打个招呼，都欢迎随时联系我。',
        'contact.sendEmail': '发送邮件',
        'contact.copyEmail': '复制邮箱',
        'contact.copied': '已复制邮箱!',
        'footer.note': '以简洁与优雅构建。',
        'footer.top': '返回顶部'
    },
    en: {
        skip: 'Skip to main content',
        'nav.about': 'About',
        'nav.skills': 'Skills',
        'nav.projects': 'Projects',
        'nav.contact': 'Contact',
        'hero.status': 'Exploring & open to collaborations',
        'hero.greeting': "Hi, I'm",
        'hero.subtitle': 'Passionate about crafting clean, refined, and responsive web experiences — balancing thoughtful visual detail with solid engineering.',
        'hero.ctaProjects': 'View Projects',
        'hero.ctaContact': 'Get in Touch',
        'about.title': 'About Me',
        'about.desc': 'I enjoy building clear, intuitive, and enduring digital products from scratch. Feel free to replace this bio with your own story and background.',
        'about.card1.title': 'Modern UI Craft',
        'about.card1.text': 'Focused on typographic hierarchy, breathing room, and subtle micro-interactions across desktop and mobile.',
        'about.card2.title': 'Clean Engineering',
        'about.card2.text': 'Semantic HTML, maintainable CSS custom properties, and lightweight vanilla JS with zero unnecessary bloat.',
        'about.card3.title': 'Continuous Learning',
        'about.card3.text': 'Always curious about new tools and ideas, documenting growth through open-source work and personal experiments.',
        'skills.title': 'Skills & Stack',
        'skills.desc': 'Core technologies and tools I work with (customize freely).',
        'skills.group1': 'Frontend',
        'skills.group2': 'Engineering & Tools',
        'skills.group3': 'Design & Quality',
        'projects.title': 'Featured Projects',
        'projects.desc': 'Selected personal projects and experiments.',
        'projects.p1.badge': 'Portfolio',
        'projects.p1.desc': 'A zero-build personal website crafted with vanilla HTML, CSS, and JS featuring dark/light themes, bilingual support, and smooth reveal motion.',
        'projects.p2.badge': 'Template',
        'projects.p2.title': 'Web App / Utility',
        'projects.p2.desc': 'Showcase a flagship project here: highlight the problem it solves, key features, and the architecture behind it.',
        'projects.p3.badge': 'Open Source',
        'projects.p3.title': 'Automation & Notes',
        'projects.p3.desc': 'Share helpful scripts, technical writing, or open-source contributions to give visitors a fuller picture of your work.',
        'contact.title': 'Get in Touch',
        'contact.desc': 'Whether you want to collaborate on a project, chat about tech, or just say hello, feel free to reach out.',
        'contact.sendEmail': 'Send Email',
        'contact.copyEmail': 'Copy Email',
        'contact.copied': 'Email Copied!',
        'footer.note': 'Crafted with clarity and care.',
        'footer.top': 'Back to top'
    }
};

document.addEventListener('DOMContentLoaded', () => {
    setupThemeToggle();
    setupLanguageToggle();
    setupMobileMenu();
    setupScrollReveal();
    setupScrollSpy();
    setupCopyEmail();
    updateFooterYear();
});

function setupThemeToggle() {
    const toggleBtn = document.getElementById('theme-toggle');
    if (!toggleBtn) return;

    toggleBtn.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-theme') || 'dark';
        const next = current === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', next);
        localStorage.setItem('theme', next);
    });
}

function setupLanguageToggle() {
    const toggleBtn = document.getElementById('lang-toggle');
    const langLabel = document.getElementById('lang-label');
    if (!toggleBtn || !langLabel) return;

    let currentLang = localStorage.getItem('lang') || 'zh';
    applyLanguage(currentLang, langLabel);

    toggleBtn.addEventListener('click', () => {
        currentLang = currentLang === 'zh' ? 'en' : 'zh';
        localStorage.setItem('lang', currentLang);
        applyLanguage(currentLang, langLabel);
    });
}

function applyLanguage(lang, langLabel) {
    const dict = TRANSLATIONS[lang] || TRANSLATIONS.zh;
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
    document.title = lang === 'zh' ? 'akd74 — 个人主页' : 'akd74 — Personal Website';
    langLabel.textContent = lang === 'zh' ? 'EN' : '中';

    document.querySelectorAll('[data-i18n]').forEach((el) => {
        const key = el.getAttribute('data-i18n');
        if (dict[key]) {
            el.textContent = dict[key];
        }
    });
}

function setupMobileMenu() {
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');
    if (!menuToggle || !navLinks) return;

    menuToggle.addEventListener('click', () => {
        const isOpen = navLinks.classList.toggle('open');
        menuToggle.setAttribute('aria-expanded', String(isOpen));
    });

    navLinks.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('open');
            menuToggle.setAttribute('aria-expanded', 'false');
        });
    });
}

function setupScrollReveal() {
    const elements = document.querySelectorAll('.reveal');
    if (!elements.length) return;

    if (!('IntersectionObserver' in window)) {
        elements.forEach((el) => el.classList.add('is-visible'));
        return;
    }

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.12, rootMargin: '0px 0px -30px 0px' }
    );

    elements.forEach((el) => observer.observe(el));
}

function setupScrollSpy() {
    const sections = document.querySelectorAll('main section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    if (!sections.length || !navLinks.length || !('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver(
        (entries) => {
            if (window.scrollY < 120) {
                navLinks.forEach((link) => link.classList.remove('active'));
                return;
            }
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute('id');
                    navLinks.forEach((link) => {
                        link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
                    });
                }
            });
        },
        { rootMargin: '-35% 0px -55% 0px' }
    );

    window.addEventListener('scroll', () => {
        if (window.scrollY < 120) {
            navLinks.forEach((link) => link.classList.remove('active'));
        }
    }, { passive: true });

    sections.forEach((section) => observer.observe(section));
}

function setupCopyEmail() {
    const copyBtn = document.getElementById('copy-email-btn');
    const copyText = document.getElementById('copy-email-text');
    if (!copyBtn || !copyText) return;

    let resetTimer = null;

    copyBtn.addEventListener('click', async () => {
        const email = copyBtn.getAttribute('data-email');
        if (!email) return;

        try {
            await navigator.clipboard.writeText(email);
        } catch {
            // Fallback for older browsers / non-HTTPS contexts
            const textarea = document.createElement('textarea');
            textarea.value = email;
            textarea.style.position = 'fixed';
            textarea.style.opacity = '0';
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand('copy');
            document.body.removeChild(textarea);
        }

        const lang = localStorage.getItem('lang') || 'zh';
        copyText.textContent = TRANSLATIONS[lang]['contact.copied'];
        clearTimeout(resetTimer);
        resetTimer = setTimeout(() => {
            const activeLang = localStorage.getItem('lang') || 'zh';
            copyText.textContent = TRANSLATIONS[activeLang]['contact.copyEmail'];
        }, 2000);
    });
}

function updateFooterYear() {
    const yearEl = document.getElementById('current-year');
    if (yearEl) {
        yearEl.textContent = String(new Date().getFullYear());
    }
}
