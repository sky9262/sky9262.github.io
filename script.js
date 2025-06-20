import { initThreeScene, updateThreeOnScroll } from './three_scene.js';
import { initCatAnimation } from './cat_animation.js';

document.addEventListener('DOMContentLoaded', () => {
    
    lucide.createIcons();

    AOS.init({
        duration: 800,
        easing: 'ease-in-out-quad',
        once: true,
        offset: 50,
    });
    
    initThreeScene();
    initCatAnimation();
    
    // Initialize theme and language
    initializeTheme();
    initializeLanguage();
    
    // Theme toggle functionality
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
    
    // Language toggle functionality
    const langToggle = document.getElementById('lang-toggle');
    if (langToggle) {
        langToggle.addEventListener('click', toggleLanguage);
    }

    const header = document.getElementById('main-header');
    const sections = document.querySelectorAll('main section');

    function handleScroll() {
        const scrollY = window.scrollY;
        if (scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        updateThreeOnScroll(scrollY);
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    document.querySelectorAll('a[href^=\"#\"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    const observerOptions = {
        root: null,
        rootMargin: '-20% 0px -20% 0px',
        threshold: 0.3 
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                const allNavLinks = document.querySelectorAll('.nav-link');
                
                allNavLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });

    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuLinks = mobileMenu.querySelectorAll('a');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        mobileMenuLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }

    function loadPassionsContent() {
        const container = document.getElementById('passions-content');
        if (!container) return;
        
        const currentLang = document.body.getAttribute('data-lang') || 'ja';
        const t = translations[currentLang];
        
        if (!t) {
            container.innerHTML = '<p class="text-red-500">Translation not found.</p>';
            return;
        }
        
        const content = `
            <h3 class="text-2xl font-bold mb-4">${t['passions.title']}</h3>
            <p class="mb-6">${t['passions.intro']}</p>
            
            <hr class="my-6 border-gray-300">
            
            <h4 class="text-xl font-semibold mb-3">${t['passions.architect.title']}</h4>
            <p class="mb-4">${t['passions.architect.intro']}</p>
            
            <ul class="mb-4 space-y-3">
                <li><strong>${t['passions.architect.feature1']}</strong> ${t['passions.architect.feature1_desc']}</li>
                <li><strong>${t['passions.architect.feature2']}</strong> ${t['passions.architect.feature2_desc']}</li>
            </ul>
            
            <blockquote class="italic border-l-4 border-orange-500 pl-4 my-6">
                "${t['passions.architect.quote']}"
            </blockquote>
            
            <hr class="my-6 border-gray-300">
            
            <h4 class="text-xl font-semibold mb-3">${t['passions.guardian.title']}</h4>
            <p class="mb-4">${t['passions.guardian.intro']}</p>
            
            <ul class="mb-4 space-y-3">
                <li><strong>${t['passions.guardian.feature1']}</strong> ${t['passions.guardian.feature1_desc']}</li>
                <li><strong>${t['passions.guardian.feature2']}</strong> ${t['passions.guardian.feature2_desc']}</li>
            </ul>
            
            <hr class="my-6 border-gray-300">
            
            <h4 class="text-xl font-semibold mb-3">${t['passions.philosophy.title']}</h4>
            <p class="mb-4">${t['passions.philosophy.intro']}</p>
            
            <ul class="mb-4 space-y-3">
                <li><strong>${t['passions.philosophy.kanso']}</strong> ${t['passions.philosophy.kanso_desc']}</li>
                <li><strong>${t['passions.philosophy.shibumi']}</strong> ${t['passions.philosophy.shibumi_desc']}</li>
                <li><strong>${t['passions.philosophy.kaizen']}</strong> ${t['passions.philosophy.kaizen_desc']}</li>
            </ul>
            
            <p class="mt-6">${t['passions.conclusion']}</p>
        `;
        
        container.innerHTML = content;
    }

    loadPassionsContent();
});

// Theme functionality
function initializeTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    applyTheme(savedTheme);
}

function toggleTheme() {
    const currentTheme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    applyTheme(newTheme);
    localStorage.setItem('theme', newTheme);
}

function applyTheme(theme) {
    if (theme === 'dark') {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
}

// Language functionality
function toggleLanguage() {
    const currentLang = document.body.getAttribute('data-lang') || 'ja';
    const newLang = currentLang === 'ja' ? 'en' : 'ja';
    switchLanguage(newLang);
}
