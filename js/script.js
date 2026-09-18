/* ===============================
   PORTFOLIO SCRIPT
   =============================== */

// ===== PAGE NAVIGATION =====
function navigateToCase(caseName) {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));

    // Show selected page
    const selectedPage = document.getElementById(`${caseName}-page`);
    if (selectedPage) {
        selectedPage.classList.add('active');
        
        // Update nav links
        updateNavLinks(caseName);
        
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

function updateNavLinks(caseName) {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => link.classList.remove('active'));
    
    // Find and activate the correct link
    const linkMap = {
        'home': 0,
        'refuturiza': 1,
        'soulcode': 2,
        'petropolis': 3
    };
    
    if (linkMap[caseName] !== undefined) {
        navLinks[linkMap[caseName]].classList.add('active');
    }
}

// ===== IMAGE MODAL =====
function openImageModal(src, alt) {
    const modal = document.getElementById('imageModal');
    const img = document.getElementById('modalImage');
    img.src = src;
    img.alt = alt || 'Modal Image';
    modal.classList.add('active');
}

function closeImageModal(event) {
    const modal = document.getElementById('imageModal');
    if (event === undefined || event.target === modal) {
        modal.classList.remove('active');
    }
}

// Close modal on ESC key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeImageModal();
    }
});

// ===== ACCESSIBILITY MANAGER =====
class AccessibilityManager {
    constructor() {
        this.fontSizeLevel = 0; // -1: small, 0: normal, 1: large
        this.contrastEnabled = false;
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.loadPreferences();
        this.applySettings();
    }

    setupEventListeners() {
        // Toggle panel
        const toggle = document.querySelector('.accessibility-toggle');
        const closeBtn = document.querySelector('.close-btn');
        const panel = document.querySelector('.accessibility-panel');

        toggle.addEventListener('click', () => this.togglePanel());
        closeBtn.addEventListener('click', () => this.togglePanel());

        // Font size controls
        document.getElementById('font-decrease').addEventListener('click', () => this.decreaseFont());
        document.getElementById('font-increase').addEventListener('click', () => this.increaseFont());
        document.getElementById('font-reset').addEventListener('click', () => this.resetFont());

        // Contrast toggle
        document.getElementById('contrast-toggle').addEventListener('change', () => this.toggleContrast());

        // Close panel when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.accessibility-widget')) {
                if (panel.style.display !== 'none') {
                    this.togglePanel();
                }
            }
        });
    }

    togglePanel() {
        const panel = document.querySelector('.accessibility-panel');
        if (panel.style.display === 'none') {
            panel.style.display = 'block';
        } else {
            panel.style.display = 'none';
        }
    }

    decreaseFont() {
        if (this.fontSizeLevel > -1) {
            this.fontSizeLevel--;
            this.applyFontSize();
            this.updateFontDisplay();
            this.savePreferences();
        }
    }

    increaseFont() {
        if (this.fontSizeLevel < 1) {
            this.fontSizeLevel++;
            this.applyFontSize();
            this.updateFontDisplay();
            this.savePreferences();
        }
    }

    resetFont() {
        this.fontSizeLevel = 0;
        this.applyFontSize();
        this.updateFontDisplay();
        this.savePreferences();
    }

    toggleContrast() {
        this.contrastEnabled = !this.contrastEnabled;
        this.applyContrast();
        this.updateToggle();
        this.savePreferences();
    }

    applySettings() {
        this.applyFontSize();
        this.applyContrast();
        this.updateFontDisplay();
        this.updateToggle();
    }

    applyFontSize() {
        const body = document.body;
        body.classList.remove('font-size-small', 'font-size-normal', 'font-size-large');
        
        switch (this.fontSizeLevel) {
            case -1:
                body.classList.add('font-size-small');
                break;
            case 0:
                body.classList.add('font-size-normal');
                break;
            case 1:
                body.classList.add('font-size-large');
                break;
        }
    }

    applyContrast() {
        const body = document.body;
        if (this.contrastEnabled) {
            body.classList.add('high-contrast');
        } else {
            body.classList.remove('high-contrast');
        }
    }

    updateFontDisplay() {
        const display = document.getElementById('font-display');
        const percentages = { '-1': '85%', '0': '100%', '1': '120%' };
        display.textContent = percentages[this.fontSizeLevel] || '100%';
    }

    updateToggle() {
        const toggle = document.getElementById('contrast-toggle');
        toggle.checked = this.contrastEnabled;
    }

    loadPreferences() {
        const saved = localStorage.getItem('accessibility-prefs');
        if (saved) {
            const prefs = JSON.parse(saved);
            this.fontSizeLevel = prefs.fontSizeLevel || 0;
            this.contrastEnabled = prefs.contrastEnabled || false;
        }
    }

    savePreferences() {
        const prefs = {
            fontSizeLevel: this.fontSizeLevel,
            contrastEnabled: this.contrastEnabled
        };
        localStorage.setItem('accessibility-prefs', JSON.stringify(prefs));
    }
}

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ===== INITIALIZE ON DOM READY =====
document.addEventListener('DOMContentLoaded', function() {
    // Initialize accessibility manager
    const accessibilityManager = new AccessibilityManager();
    
    // Set initial page
    navigateToCase('home');
    
    console.log('✓ Portfolio loaded successfully');
    console.log('✓ Accessibility features enabled');
});

// ===== PREVENT DEFAULT LINK BEHAVIOR =====
document.querySelectorAll('a[onclick]').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
    });
});
