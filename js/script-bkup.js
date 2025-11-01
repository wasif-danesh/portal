/* ============================
   NAV: Mobile Drawer
============================ */
const menuToggle = document.getElementById('menuToggle');
const mobileDrawer = document.getElementById('mobileDrawer');
const closeDrawer = document.getElementById('closeDrawer');

if (menuToggle && mobileDrawer) {
    menuToggle.addEventListener('click', () => mobileDrawer.classList.add('open'));
}
if (closeDrawer && mobileDrawer) {
    closeDrawer.addEventListener('click', () => mobileDrawer.classList.remove('open'));
}
document.querySelectorAll('.mobile-drawer a').forEach(link =>
    link.addEventListener('click', () => mobileDrawer?.classList.remove('open'))
);


/* ============================
   THEME: OS detection + toggle
   (CSS variables handle colors)
============================ */
const body = document.body;
const html = document.documentElement; // 🔹 Added
const themeToggle = document.getElementById('themeToggle');
const themeIcon = themeToggle?.querySelector('.material-symbols-rounded');

const systemPrefDark = window.matchMedia('(prefers-color-scheme: dark)');
const savedTheme = localStorage.getItem('theme');

applyTheme(savedTheme || (systemPrefDark.matches ? 'dark' : 'light'), { save: false });

systemPrefDark.addEventListener('change', e => {
    if (!localStorage.getItem('theme')) {
        applyTheme(e.matches ? 'dark' : 'light', { save: false });
    }
});

themeToggle?.addEventListener('click', () => {
    const next = body.dataset.theme === 'dark' ? 'light' : 'dark';
    applyTheme(next, { save: true });
});

function applyTheme(mode, { save } = { save: false }) {
    body.classList.add('theme-transition');
    body.dataset.theme = mode;

    /* ✅ FIXED — add .light class to <html> for CSS compatibility */
    html.classList.toggle('light', mode === 'light');

    updateThemeIcon();
    if (save) localStorage.setItem('theme', mode);
    setTimeout(() => body.classList.remove('theme-transition'), 400);
    recolorIcons();
}

function updateThemeIcon() {
    if (!themeIcon) return;
    themeIcon.textContent = body.dataset.theme === 'dark' ? 'light_mode' : 'dark_mode';
}

/* Recolor Material icons after theme switch (defensive) */
function recolorIcons() {
    const color = getComputedStyle(document.body).getPropertyValue('--color-icon').trim();
    document.querySelectorAll('.material-symbols-rounded').forEach(el => {
        el.style.color = color || '';
    });
}
new MutationObserver(() => recolorIcons())
    .observe(document.body, { attributes: true, attributeFilter: ['data-theme'] });


/* ============================
   FADE-IN ON SCROLL
============================ */
const fadeObserver = new IntersectionObserver(
    entries => {
        entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); });
    },
    { threshold: 0.2 }
);

document
    .querySelectorAll('section, .service-card, .expertise-card, .process-step, .contact-card, .about-card')
    .forEach(el => fadeObserver.observe(el));


/* ============================
   SMOOTH IN-PAGE SCROLL
============================ */
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
        const id = a.getAttribute('href');
        if (!id || id === '#') return;
        const target = document.querySelector(id);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});


/* ============================
   BACK TO TOP
============================ */
const backToTop = document.getElementById('backToTop');

function toggleBackToTop() {
    if (!backToTop) return;
    if (window.scrollY > 400) {
        backToTop.style.display = 'flex';
        backToTop.style.opacity = '1';
    } else {
        backToTop.style.opacity = '0';
        setTimeout(() => {
            if (window.scrollY <= 400) backToTop.style.display = 'none';
        }, 200);
    }
}
window.addEventListener('scroll', toggleBackToTop);
backToTop?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
toggleBackToTop();


/* ============================
   CONTACT: Formspree submit
============================ */
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', async function (e) {
        e.preventDefault();

        const form = e.target;
        const status = document.getElementById('formStatus');

        if (status) {
            status.classList.remove('hidden');
            status.textContent = 'Sending...';
            status.className = 'text-sm mt-2 text-blue-400 h-5';
        }

        const data = Object.fromEntries(new FormData(form).entries());

        try {
            const res = await fetch('https://formspree.io/f/mldoezbj', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });

            if (res.ok) {
                if (status) {
                    status.textContent = '✅ Message sent successfully!';
                    status.className = 'text-sm mt-2 text-green-400 h-5';
                }
                form.reset();
            } else {
                throw new Error('Formspree error');
            }
        } catch (error) {
            if (status) {
                status.textContent = '❌ Something went wrong. Please try again.';
                status.className = 'text-sm mt-2 text-red-400 h-5';
            }
        }
    });
}


/* ============================
   PORTFOLIO MODAL
============================ */
const modal = document.getElementById("portfolioModal");
const modalImg = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const closeModal = document.querySelector(".close-modal");

document.querySelectorAll(".portfolio-card").forEach(card => {
    card.addEventListener("click", () => {
        const imgSrc = card.dataset.image;
        const title = card.dataset.title;
        const desc = card.dataset.description;

        modalImg.src = imgSrc;
        modalTitle.textContent = title;
        modalDesc.textContent = desc;

        modal.classList.add("active");
        document.body.classList.add("no-scroll");
    });
});

closeModal.addEventListener("click", () => {
    modal.classList.remove("active");
    document.body.classList.remove("no-scroll");
});

modal.addEventListener("click", e => {
    if (e.target === modal) {
        modal.classList.remove("active");
        document.body.classList.remove("no-scroll");
    }
});
