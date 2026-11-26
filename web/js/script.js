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
        'hero.status': '专注硬件开发与嵌入式系统 · 欢迎技术交流',
        'hero.greeting': '你好，我是',
        'hero.subtitle': '聚焦硬件电路与 PCB 设计、模拟前端信号调理、STM32/ESP32 嵌入式开发以及 SolidWorks 3D 整机结构落地，热衷把工程想法打磨成可稳定运行的实物样机。',
        'hero.ctaProjects': '浏览项目',
        'hero.ctaContact': '联系我',
        'about.title': '关于我',
        'about.desc': '电子工程与嵌入式硬件方向开发者，参与过多场嵌入式及智能制造工程实践，擅长从原理图与 PCB 设计、模拟前端调试到 3D 整机结构与系统联调的全链路工程落地。',
        'about.card1.title': '硬件电路与模拟前端',
        'about.card1.text': '熟练使用立创 EDA 与 Altium Designer，具备电源管理、电机驱动 PCB 及恒流源、PT100 差分采样与信号调理链路设计经验。',
        'about.card2.title': '嵌入式与 3D 整机落地',
        'about.card2.text': '结合 STM32 / ESP32（P4 & S3）控制开发与 SolidWorks 外观、连接件及内部走线规划，打通“板卡 → 结构 → 整机联调”闭环。',
        'about.card3.title': '工程调试与完整交付',
        'about.card3.text': '具备从方案验证、示波器/逻辑分析仪硬件排错到技术文档整理与作品演示视频剪辑配音的全流程实践能力。',
        'skills.title': '技术栈与工具',
        'skills.desc': '覆盖硬件设计、嵌入式开发、机械结构建模与实验调试的常用工具链。',
        'skills.group1': '硬件与结构设计',
        'skills.group2': '嵌入式与编程',
        'skills.group3': '协议、调试与交付',
        'skills.t.pcb': '原理图 & PCB',
        'skills.t.power': '电源与电机驱动',
        'skills.t.afe': '模拟前端 / PT100 采样',
        'skills.t.solder': '硬件焊接',
        'skills.t.rtos': 'RTOS（基础）',
        'skills.t.scope': '示波器 / 逻辑分析仪',
        'skills.t.dmm': '万用表排错',
        'skills.t.docs': '技术文档与联调',
        'skills.t.video': '演示视频剪辑与配音',
        'projects.title': '工程项目与实践',
        'projects.desc': '部分嵌入式系统、工业模拟前端与整机结构研发实践。',
        'projects.p1.badge': '嵌入式竞赛 · 国家级获奖',
        'projects.p1.title': '山地丘陵茶园采摘嵌入式系统',
        'projects.p1.desc': '面向山地丘陵茶园采摘场景的双芯片协同系统：ESP32-P4 负责与树莓派通信并衔接云端视觉处理，ESP32-S3 负责底层 520 电机驱动。主导电源与电机驱动 PCB 设计、SolidWorks 3D 外观及内部组件走线布局，并完成整机软硬件联调与演示制作。',
        'projects.p2.badge': '智能制造竞赛 · 获奖项目',
        'projects.p2.title': '模拟 PT100 工业温度采样硬件系统',
        'projects.p2.desc': '面向工业嵌入式温度采样场景，独立负责电阻采样板及信号处理与通信板硬件设计，构建“恒流源激励 → 电阻采样 → 差分采样与信号放大 → 量程调理适配 → 上位机端 ADC 转换”完整模拟前端信号链路，并完成技术文档整理与现场测试。',
        'projects.p3.badge': '长期研发 · 进行中',
        'projects.p3.title': '自动采摘装备整机结构研发',
        'projects.p3.desc': '持续迭代中的自动采摘整机结构开发项目，主导整机外观设计、关键组件连接件设计及装载框等结构模块建模，协同推进结构装配验证；当前已完成阶段性联调，实现原地多位置自主采摘。',
        'projects.p4.badge': '多场景竞赛 · 获奖实践',
        'projects.p4.title': '智能穿戴与农业装备硬件及结构实践',
        'projects.p4.desc': '围绕智能穿戴与农业装备等跨场景工程项目，主导硬件电路设计及基于 SolidWorks 的 3D 外壳、转接件等结构件建模装配，并独立完成作品演示视频剪辑与配音，保障从电路板卡到整机外观的完整交付。',
        'contact.title': '保持联系',
        'contact.desc': '欢迎硬件开发、嵌入式系统与智能制造方向的技术交流或项目合作，如需详细简历可通过邮件联系。',
        'contact.sendEmail': '发送邮件',
        'contact.copyEmail': '复制邮箱',
        'contact.copied': '已复制邮箱!',
        'footer.note': '硬件与嵌入式工程记录。',
        'footer.top': '返回顶部'
    },
    en: {
        skip: 'Skip to main content',
        'nav.about': 'About',
        'nav.skills': 'Skills',
        'nav.projects': 'Projects',
        'nav.contact': 'Contact',
        'hero.status': 'Hardware & Embedded Systems · Open to Connect',
        'hero.greeting': "Hi, I'm",
        'hero.subtitle': 'Focused on PCB design, analog front-end signal conditioning, STM32/ESP32 embedded systems, and SolidWorks 3D mechanical integration — turning ideas into reliable physical prototypes.',
        'hero.ctaProjects': 'View Projects',
        'hero.ctaContact': 'Get in Touch',
        'about.title': 'About Me',
        'about.desc': 'Hardware and embedded systems developer with hands-on experience across embedded design and intelligent manufacturing projects — spanning schematics, PCB layout, analog debugging, and 3D mechanical integration.',
        'about.card1.title': 'Hardware & Analog Front-End',
        'about.card1.text': 'Proficient in JLCPCB EDA and Altium Designer for power distribution, motor-drive PCBs, and precision analog chains (constant current source, PT100 differential sampling & conditioning).',
        'about.card2.title': 'Embedded & 3D Integration',
        'about.card2.text': 'Combining STM32 / ESP32 (P4 & S3) control with SolidWorks enclosure, connector, and internal wiring layout to deliver complete electro-mechanical assemblies.',
        'about.card3.title': 'Lab Debugging & Delivery',
        'about.card3.text': 'Experienced across prototype bring-up, oscilloscope/logic analyzer troubleshooting, technical documentation, and demo video editing & voiceover.',
        'skills.title': 'Skills & Stack',
        'skills.desc': 'Core engineering toolkit spanning PCB hardware, embedded firmware, 3D modeling, and lab testing.',
        'skills.group1': 'Hardware & Mechanical',
        'skills.group2': 'Embedded & Firmware',
        'skills.group3': 'Protocols, Lab & Delivery',
        'skills.t.pcb': 'Schematic & PCB',
        'skills.t.power': 'Power & Motor Drive',
        'skills.t.afe': 'Analog Front-End / PT100',
        'skills.t.solder': 'PCB Soldering',
        'skills.t.rtos': 'RTOS (Basics)',
        'skills.t.scope': 'Oscilloscope / Logic Analyzer',
        'skills.t.dmm': 'Multimeter Debugging',
        'skills.t.docs': 'Docs & Integration',
        'skills.t.video': 'Demo Video & Voiceover',
        'projects.title': 'Featured Projects',
        'projects.desc': 'Selected embedded systems, industrial analog front-end, and electro-mechanical projects.',
        'projects.p1.badge': 'Embedded · National Award',
        'projects.p1.title': 'Hilly Tea-Picking Embedded System',
        'projects.p1.desc': 'Dual-MCU tea-picking system for hilly terrain: ESP32-P4 communicates with Raspberry Pi for cloud vision processing while ESP32-S3 drives bottom 520 motors. Led power & motor-drive PCB design, SolidWorks 3D exterior & internal routing layout, system integration, and demo production.',
        'projects.p2.badge': 'Smart Mfg · Award Project',
        'projects.p2.title': 'Simulated PT100 Industrial Temp Acquisition',
        'projects.p2.desc': 'Independently designed the resistance sampling board and signal processing & communication board for industrial PT100 temperature sensing — building a complete analog chain (constant current excitation → resistance sampling → differential amplification → range conditioning → host ADC conversion) plus docs and testing.',
        'projects.p3.badge': 'Ongoing R&D',
        'projects.p3.title': 'Automated Harvesting Mechanical System',
        'projects.p3.desc': 'Long-cycle mechanical and prototype development project focusing on exterior styling, component mounting brackets, and collection basket structural design. Achieved stationary multi-position autonomous harvesting in current prototype integration.',
        'projects.p4.badge': 'Multi-Domain · Award Practice',
        'projects.p4.title': 'Wearable & Agri-Equipment Hardware & 3D',
        'projects.p4.desc': 'Led circuit hardware design and SolidWorks 3D enclosures/adapters across smart wearable and agricultural equipment projects, while independently handling demo video editing and voiceover for complete prototype delivery.',
        'contact.title': 'Get in Touch',
        'contact.desc': 'Open to technical discussions and collaborations in hardware, embedded systems, or intelligent manufacturing. Full resume available via email.',
        'contact.sendEmail': 'Send Email',
        'contact.copyEmail': 'Copy Email',
        'contact.copied': 'Email Copied!',
        'footer.note': 'Hardware & Embedded Engineering Portfolio.',
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
    document.title = lang === 'zh' ? 'akd74 — 硬件与嵌入式个人主页' : 'akd74 — Hardware & Embedded Portfolio';
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
