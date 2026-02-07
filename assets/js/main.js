document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const menuBtn = document.querySelector('[data-menu-btn]');
    const menu = document.querySelector('[data-menu]');
    
    if (menuBtn && menu) {
        menuBtn.addEventListener('click', () => {
            const isHidden = menu.classList.contains('hidden');
            if (isHidden) {
                menu.classList.remove('hidden');
                menu.classList.add('flex');
                menuBtn.setAttribute('aria-expanded', 'true');
            } else {
                menu.classList.add('hidden');
                menu.classList.remove('flex');
                menuBtn.setAttribute('aria-expanded', 'false');
            }
        });
    }

    // Dynamic Year in Footer
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // FAQ Accordion
    const faqBtns = document.querySelectorAll('[data-faq-btn]');
    faqBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const panel = btn.nextElementSibling;
            const isOpen = !panel.classList.contains('hidden');
            
            // Close others
            document.querySelectorAll('[data-faq-panel]').forEach(p => p.classList.add('hidden'));
            document.querySelectorAll('[data-faq-btn] svg').forEach(s => s.style.transform = 'rotate(0deg)');

            if (!isOpen) {
                panel.classList.remove('hidden');
                btn.querySelector('svg').style.transform = 'rotate(180deg)';
            }
        });
    });
});
