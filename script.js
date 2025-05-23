// Default links data
const defaultLinks = {
    quick: [
        { name: 'Gmail', url: 'https://gmail.com', icon: 'fas fa-envelope', color: '#ea4335' },
        { name: 'YouTube', url: 'https://youtube.com', icon: 'fab fa-youtube', color: '#ff0000' },
        { name: 'GitHub', url: 'https://github.com', icon: 'fab fa-github', color: '#333' },
        { name: 'Drive', url: 'https://drive.google.com', icon: 'fab fa-google-drive', color: '#4285f4' },
        { name: 'Twitter', url: 'https://twitter.com', icon: 'fab fa-twitter', color: '#1da1f2' },
        { name: 'LinkedIn', url: 'https://linkedin.com', icon: 'fab fa-linkedin', color: '#0077b5' }
    ],
    sports: [
        { name: 'ESPN', url: 'https://espn.com', icon: 'fas fa-football-ball', color: '#cc0000' },
        { name: 'NBA', url: 'https://nba.com', icon: 'fas fa-basketball-ball', color: '#17408b' },
        { name: 'NFL', url: 'https://nfl.com', icon: 'fas fa-football-ball', color: '#013369' },
        { name: 'MLB', url: 'https://mlb.com', icon: 'fas fa-baseball-ball', color: '#041e42' },
        { name: 'The Athletic', url: 'https://theathletic.com', icon: 'fas fa-running', color: '#ff6600' }
    ],
    news: [
        { name: 'CNN', url: 'https://cnn.com', icon: 'fas fa-tv', color: '#cc0000' },
        { name: 'MSNBC', url: 'https://msnbc.com', icon: 'fas fa-tv', color: '#0078d4' },
        { name: 'AP News', url: 'https://apnews.com', icon: 'fas fa-newspaper', color: '#ff8000' },
        { name: 'Reuters', url: 'https://reuters.com', icon: 'fas fa-globe', color: '#ff6600' },
        { name: 'NY Times', url: 'https://nytimes.com', icon: 'fas fa-newspaper', color: '#000' },
        { name: 'Guardian', url: 'https://theguardian.com', icon: 'fas fa-book-open', color: '#052962' }
    ]
};

// News RSS feeds
const newsFeeds = {
    cnn: {
        url: 'http://rss.cnn.com/rss/edition.rss',
        name: 'CNN',
        color: '#cc0000'
    },
    msnbc: {
        url: 'https://feeds.nbcnews.com/nbcnews/public/news',
        name: 'MSNBC',
        color: '#0078d4'
    },
    ap: {
        url: 'https://feeds.apnews.com/rss/apf-topnews',
        name: 'AP News',
        color: '#ff8000'
    },
    reuters: {
        url: 'https://feeds.reuters.com/reuters/topNews',
        name: 'Reuters',
        color: '#ff6600'
    },
    npr: {
        url: 'https://feeds.npr.org/1001/rss.xml',
        name: 'NPR',
        color: '#1c1c1c'
    },
    bbc: {
        url: 'http://feeds.bbci.co.uk/news/rss.xml',
        name: 'BBC',
        color: '#bb1919'
    },
    verge: {
        url: 'https://www.theverge.com/rss/index.xml',
        name: 'The Verge',
        color: '#5a31f4'
    },
    techcrunch: {
        url: 'https://techcrunch.com/feed/',
        name: 'TechCrunch',
        color: '#0f9d58'
    },
    nyt: {
        url: 'https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml',
        name: 'NYT',
        color: '#000000'
    }
};

// Background color presets
const backgroundPresets = [
    { name: 'Default', gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', type: 'gradient' },
    { name: 'Ocean', gradient: 'linear-gradient(135deg, #00c9ff 0%, #92fe9d 100%)', type: 'gradient' },
    { name: 'Sunset', gradient: 'linear-gradient(135deg, #fc466b 0%, #3f5efb 100%)', type: 'gradient' },
    { name: 'Forest', gradient: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)', type: 'gradient' },
    { name: 'Purple Rain', gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', type: 'gradient' },
    { name: 'Fire', gradient: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)', type: 'gradient' },
    { name: 'Night Sky', gradient: 'linear-gradient(135deg, #0c3483 0%, #a2b6df 100%)', type: 'gradient' },
    { name: 'Mint Fresh', gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)', type: 'gradient' },
    { name: 'Golden Hour', gradient: 'linear-gradient(135deg, #ff9a56 0%, #ff6b35 100%)', type: 'gradient' },
    { name: 'Cool Blue', gradient: 'linear-gradient(135deg, #2196F3 0%, #21CBF3 100%)', type: 'gradient' },

    // New Beautiful Gradients
    { name: 'Aurora', gradient: 'linear-gradient(135deg, #00d2ff 0%, #3a7bd5 100%)', type: 'gradient' },
    { name: 'Cosmic', gradient: 'linear-gradient(135deg, #b465da 0%, #cf6cc9 33%, #ee609c 66%, #ee609c 100%)', type: 'gradient' },
    { name: 'Emerald', gradient: 'linear-gradient(135deg, #56ab2f 0%, #a8e6cf 100%)', type: 'gradient' },
    { name: 'Rose Gold', gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', type: 'gradient' },
    { name: 'Arctic', gradient: 'linear-gradient(135deg, #74b9ff 0%, #0984e3 100%)', type: 'gradient' },
    { name: 'Coral Reef', gradient: 'linear-gradient(135deg, #ff7f7f 0%, #ff3030 100%)', type: 'gradient' },
    { name: 'Lavender', gradient: 'linear-gradient(135deg, #e056fd 0%, #f0932b 100%)', type: 'gradient' },
    { name: 'Tropical', gradient: 'linear-gradient(135deg, #ff9068 0%, #fd746c 100%)', type: 'gradient' },
    { name: 'Mystic', gradient: 'linear-gradient(135deg, #667db6 0%, #0082c8 25%, #0082c8 75%, #667db6 100%)', type: 'gradient' },
    { name: 'Peachy', gradient: 'linear-gradient(135deg, #ffafbd 0%, #ffc3a0 100%)', type: 'gradient' },

    // Patterns
    { name: 'Dots', gradient: 'radial-gradient(circle at 1px 1px, #667eea 1px, transparent 0), #f8fafc', type: 'pattern' },
    { name: 'Grid', gradient: 'linear-gradient(#667eea 1px, transparent 1px), linear-gradient(90deg, #667eea 1px, transparent 1px), #f8fafc', type: 'pattern' },
    { name: 'Diagonal', gradient: 'repeating-linear-gradient(45deg, #667eea, #667eea 10px, #f8fafc 10px, #f8fafc 20px)', type: 'pattern' },
    { name: 'Waves', gradient: 'radial-gradient(ellipse at top, #667eea, transparent), radial-gradient(ellipse at bottom, #764ba2, transparent)', type: 'pattern' },
    { name: 'Hexagon', gradient: 'radial-gradient(circle at 50% 50%, #667eea 2px, transparent 2px)', type: 'pattern' },
    { name: 'Circuit', gradient: 'linear-gradient(90deg, #667eea 50%, transparent 50%), linear-gradient(#764ba2 50%, transparent 50%)', type: 'pattern' },

    // Images
    { name: 'Mountains', gradient: 'url("https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=2000&q=80")', type: 'image' },
    { name: 'Ocean Waves', gradient: 'url("https://images.unsplash.com/photo-1505142468610-359e7d316be0?auto=format&fit=crop&w=2000&q=80")', type: 'image' },
    { name: 'Forest', gradient: 'url("https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=2000&q=80")', type: 'image' },
    { name: 'City Lights', gradient: 'url("https://images.unsplash.com/photo-1514905552197-0610a4d8fd73?auto=format&fit=crop&w=2000&q=80")', type: 'image' },
    { name: 'Abstract Art', gradient: 'url("https://images.unsplash.com/photo-1557672172-298e090bd0f1?auto=format&fit=crop&w=2000&q=80")', type: 'image' },
    { name: 'Geometric', gradient: 'url("https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?auto=format&fit=crop&w=2000&q=80")', type: 'image' }
];

// Header color presets that work well with backgrounds
const headerColorPresets = {
    'auto': 'Auto-Match Background',
    'gradient': 'linear-gradient(135deg, #667eea, #764ba2)',
    'dark': 'linear-gradient(135deg, #2d3748, #4a5568)',
    'light': 'linear-gradient(135deg, #f7fafc, #edf2f7)',
    'ocean': 'linear-gradient(135deg, #0891b2, #0e7490)',
    'sunset': 'linear-gradient(135deg, #dc2626, #b91c1c)',
    'forest': 'linear-gradient(135deg, #059669, #047857)',
    'purple': 'linear-gradient(135deg, #7c3aed, #6d28d9)',
    'golden': 'linear-gradient(135deg, #d97706, #b45309)',
    'rose': 'linear-gradient(135deg, #e11d48, #be185d)',
    'emerald': 'linear-gradient(135deg, #10b981, #059669)',
    'sky': 'linear-gradient(135deg, #0ea5e9, #0284c7)'
};

// Current header settings
let currentHeaderSettings = {
    linksHeader: 'auto',
    newsHeader: 'auto'
};

// Local storage keys
const STORAGE_KEY = 'homepage_links';
const NEWS_CACHE_KEY = 'homepage_news_cache';
const BACKGROUND_KEY = 'homepage_background';
const HEADER_SETTINGS_KEY = 'homepage_header_settings';

// DOM elements - initialized safely
let domElements = {};
const grids = {};

// News state
let currentNewsSource = 'all';
let newsData = [];

// Initialization flag
let isInitialized = false;

// Icon and color suggestions for popular websites
const websiteSuggestions = {
    icons: {
        'youtube.com': 'fab fa-youtube',
        'github.com': 'fab fa-github',
        'twitter.com': 'fab fa-twitter',
        'facebook.com': 'fab fa-facebook',
        'instagram.com': 'fab fa-instagram',
        'linkedin.com': 'fab fa-linkedin',
        'gmail.com': 'fas fa-envelope',
        'google.com': 'fab fa-google',
        'amazon.com': 'fab fa-amazon',
        'netflix.com': 'fas fa-film',
        'spotify.com': 'fab fa-spotify',
        'discord.com': 'fab fa-discord',
        'reddit.com': 'fab fa-reddit',
        'stackoverflow.com': 'fab fa-stack-overflow',
        'dribbble.com': 'fab fa-dribbble',
        'behance.com': 'fab fa-behance',
        'figma.com': 'fab fa-figma',
        'slack.com': 'fab fa-slack',
        'tiktok.com': 'fab fa-tiktok',
        'pinterest.com': 'fab fa-pinterest',
        'twitch.tv': 'fab fa-twitch',
        'medium.com': 'fab fa-medium',
        'whatsapp.com': 'fab fa-whatsapp'
    },
    colors: {
        'youtube.com': '#ff0000',
        'github.com': '#333333',
        'twitter.com': '#1da1f2',
        'facebook.com': '#1877f2',
        'instagram.com': '#e4405f',
        'linkedin.com': '#0077b5',
        'gmail.com': '#ea4335',
        'google.com': '#4285f4',
        'amazon.com': '#ff9900',
        'netflix.com': '#e50914',
        'spotify.com': '#1db954',
        'discord.com': '#5865f2',
        'reddit.com': '#ff4500',
        'stackoverflow.com': '#f48024',
        'dribbble.com': '#ea4c89',
        'behance.com': '#1769ff',
        'figma.com': '#f24e1e',
        'slack.com': '#4a154b',
        'tiktok.com': '#000000',
        'pinterest.com': '#e60023',
        'twitch.tv': '#9146ff',
        'medium.com': '#000000',
        'whatsapp.com': '#25d366'
    }
};

// Initialize the app
document.addEventListener('DOMContentLoaded', function () {
    try {
        console.log('🚀 Initializing Homepage...');
        initializeDOMElements();
        loadBackground();
        loadHeaderSettings();
        loadLinks();
        setupEventListeners();
        loadNews();
        setupAutoSuggestions();
        console.log('✅ Homepage initialized successfully!');
        isInitialized = true;
    } catch (error) {
        console.error('❌ Failed to initialize homepage:', error);
        showErrorNotification('Failed to initialize homepage. Please refresh the page.');
    }
});

// Initialize DOM elements with error checking
function initializeDOMElements() {
    const elementIds = {
        addShortcutBtn: 'addShortcutBtn',
        backgroundBtn: 'backgroundBtn',
        modalOverlay: 'modalOverlay',
        closeBtn: 'closeBtn',
        cancelBtn: 'cancelBtn',
        shortcutForm: 'shortcutForm',
        refreshNewsBtn: 'refreshNews',
        newsFeed: 'newsFeed',
        shortcutName: 'shortcutName',
        shortcutUrl: 'shortcutUrl',
        shortcutIcon: 'shortcutIcon',
        shortcutSection: 'shortcutSection',
        shortcutColor: 'shortcutColor'
    };

    // Initialize DOM elements
    for (const [key, id] of Object.entries(elementIds)) {
        domElements[key] = document.getElementById(id);
        if (!domElements[key]) {
            console.warn(`⚠️ Element with id '${id}' not found`);
        }
    }

    // Initialize grid containers
    const gridIds = {
        quick: 'quickLinksGrid',
        sports: 'sportsGrid',
        news: 'newsGrid'
    };

    for (const [section, id] of Object.entries(gridIds)) {
        grids[section] = document.getElementById(id);
        if (!grids[section]) {
            console.warn(`⚠️ Grid element with id '${id}' not found`);
        }
    }

    console.log('✅ DOM elements initialized');
}

// Load saved background
function loadBackground() {
    try {
        const savedBackground = localStorage.getItem(BACKGROUND_KEY);
        if (savedBackground) {
            if (savedBackground.includes('url(')) {
                document.body.style.background = `${savedBackground} center/cover no-repeat, linear-gradient(135deg, #667eea 0%, #764ba2 100%)`;
            } else {
                document.body.style.background = savedBackground;
            }
            console.log('✅ Background loaded from storage');
        }

        // Apply adaptive styling after background is loaded
        setTimeout(() => {
            if (currentHeaderSettings.linksHeader === 'auto' || currentHeaderSettings.newsHeader === 'auto') {
                applyHeaderStyles();
            } else {
                updateAdaptiveButtonStyles();
            }
        }, 100);
    } catch (error) {
        console.error('❌ Failed to load background:', error);
    }
}

// Setup event listeners with error handling
function setupEventListeners() {
    try {
        // Add shortcut button
        if (domElements.addShortcutBtn) {
            domElements.addShortcutBtn.addEventListener('click', function (e) {
                e.preventDefault();
                console.log('📝 Opening add shortcut modal...');
                openModal();
            });
        }

        // Background button
        if (domElements.backgroundBtn) {
            domElements.backgroundBtn.addEventListener('click', function (e) {
                e.preventDefault();
                console.log('🎨 Opening background selector...');
                openBackgroundModal();
            });
        }

        // Modal controls
        if (domElements.closeBtn) {
            domElements.closeBtn.addEventListener('click', closeModal);
        }

        if (domElements.cancelBtn) {
            domElements.cancelBtn.addEventListener('click', closeModal);
        }

        // Modal overlay click to close
        if (domElements.modalOverlay) {
            domElements.modalOverlay.addEventListener('click', function (e) {
                if (e.target === domElements.modalOverlay) {
                    closeModal();
                }
            });
        }

        // Form submission
        if (domElements.shortcutForm) {
            domElements.shortcutForm.addEventListener('submit', function (e) {
                e.preventDefault();
                console.log('📤 Processing form submission...');
                handleFormSubmit(e);
            });
        }

        // Refresh news button
        if (domElements.refreshNewsBtn) {
            domElements.refreshNewsBtn.addEventListener('click', () => {
                console.log('🔄 Refreshing news...');
                loadNews(true);
            });
        }

        // News source buttons
        document.querySelectorAll('.source-btn').forEach(btn => {
            btn.addEventListener('click', function () {
                document.querySelectorAll('.source-btn').forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                currentNewsSource = this.dataset.source;
                renderNews();
            });
        });

        // Keyboard shortcuts
        document.addEventListener('keydown', function (e) {
            // Escape key to close modals
            if (e.key === 'Escape') {
                closeModal();
                closeBackgroundModal();
            }

            // Ctrl/Cmd + N to add new shortcut
            if ((e.ctrlKey || e.metaKey) && e.key === 'n' && !domElements.modalOverlay?.classList.contains('active')) {
                e.preventDefault();
                openModal();
            }

            // Ctrl/Cmd + R to refresh news
            if ((e.ctrlKey || e.metaKey) && e.key === 'r') {
                e.preventDefault();
                loadNews(true);
            }

            // Ctrl/Cmd + B to open background selector
            if ((e.ctrlKey || e.metaKey) && e.key === 'b') {
                e.preventDefault();
                openBackgroundModal();
            }
        });

        console.log('✅ Event listeners set up successfully');
    } catch (error) {
        console.error('❌ Failed to setup event listeners:', error);
    }
}

// Setup auto-suggestions for form fields
function setupAutoSuggestions() {
    try {
        if (!domElements.shortcutUrl || !domElements.shortcutIcon || !domElements.shortcutColor) {
            console.warn('⚠️ Form elements not found for auto-suggestions');
            return;
        }

        // Auto-suggest icon based on URL
        domElements.shortcutUrl.addEventListener('input', function (e) {
            const url = e.target.value.toLowerCase();

            // Don't override if user has already entered an icon
            if (domElements.shortcutIcon.value.trim() !== '') return;

            for (const [domain, icon] of Object.entries(websiteSuggestions.icons)) {
                if (url.includes(domain)) {
                    domElements.shortcutIcon.value = icon;
                    break;
                }
            }
        });

        // Auto-suggest color based on URL
        domElements.shortcutUrl.addEventListener('blur', function (e) {
            const url = e.target.value.toLowerCase();

            for (const [domain, color] of Object.entries(websiteSuggestions.colors)) {
                if (url.includes(domain)) {
                    domElements.shortcutColor.value = color;
                    break;
                }
            }
        });

        console.log('✅ Auto-suggestions set up successfully');
    } catch (error) {
        console.error('❌ Failed to setup auto-suggestions:', error);
    }
}

// Enhanced error handling for modals
function showModalError(message) {
    removeModalMessages();

    const errorElement = document.createElement('div');
    errorElement.className = 'modal-error';
    errorElement.style.cssText = `
        background: #fee2e2;
        color: #dc2626;
        padding: 0.75rem 1rem;
        border-radius: 8px;
        margin-bottom: 1rem;
        border: 1px solid #fecaca;
        font-size: 0.9rem;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        animation: slideDown 0.3s ease;
    `;
    errorElement.innerHTML = `
        <i class="fas fa-exclamation-circle"></i>
        ${message}
    `;

    const modalForm = document.querySelector('.modal-form');
    if (modalForm) {
        modalForm.insertBefore(errorElement, modalForm.firstChild);

        // Auto-remove after 5 seconds
        setTimeout(() => {
            if (errorElement && errorElement.parentNode) {
                errorElement.style.animation = 'slideUp 0.3s ease';
                setTimeout(() => errorElement.remove(), 300);
            }
        }, 5000);
    }
}

function showModalSuccess(message) {
    removeModalMessages();

    const successElement = document.createElement('div');
    successElement.className = 'modal-success';
    successElement.style.cssText = `
        background: #dcfce7;
        color: #16a34a;
        padding: 0.75rem 1rem;
        border-radius: 8px;
        margin-bottom: 1rem;
        border: 1px solid #bbf7d0;
        font-size: 0.9rem;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        animation: slideDown 0.3s ease;
    `;
    successElement.innerHTML = `
        <i class="fas fa-check-circle"></i>
        ${message}
    `;

    const modalForm = document.querySelector('.modal-form');
    if (modalForm) {
        modalForm.insertBefore(successElement, modalForm.firstChild);

        // Auto-remove after 3 seconds
        setTimeout(() => {
            if (successElement && successElement.parentNode) {
                successElement.style.animation = 'slideUp 0.3s ease';
                setTimeout(() => successElement.remove(), 300);
            }
        }, 3000);
    }
}

function removeModalMessages() {
    document.querySelectorAll('.modal-success, .modal-error').forEach(el => el.remove());
}

// Load links from localStorage or use defaults
function loadLinks() {
    try {
        const savedLinks = localStorage.getItem(STORAGE_KEY);
        const links = savedLinks ? JSON.parse(savedLinks) : defaultLinks;

        // Render links for each section
        Object.keys(links).forEach(section => {
            renderLinks(section, links[section]);
        });

        console.log('✅ Links loaded successfully');
    } catch (error) {
        console.error('❌ Failed to load links:', error);
        showErrorNotification('Failed to load shortcuts. Using defaults.');

        // Fallback to default links
        Object.keys(defaultLinks).forEach(section => {
            renderLinks(section, defaultLinks[section]);
        });
    }
}

// Save links to localStorage with error handling
function saveLinks(links) {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(links));
        console.log('✅ Links saved successfully');
    } catch (error) {
        console.error('❌ Failed to save links:', error);
        showErrorNotification('Failed to save shortcuts. Changes may be lost.');
    }
}

// Get current links from localStorage
function getCurrentLinks() {
    try {
        const savedLinks = localStorage.getItem(STORAGE_KEY);
        return savedLinks ? JSON.parse(savedLinks) : defaultLinks;
    } catch (error) {
        console.error('❌ Failed to get current links:', error);
        return defaultLinks;
    }
}

// Render links in a specific section
function renderLinks(section, links) {
    const grid = grids[section];

    if (!grid) {
        console.warn(`⚠️ Grid for section '${section}' not found`);
        return;
    }

    if (links.length === 0) {
        grid.innerHTML = createEmptyState(section);
        return;
    }

    try {
        grid.innerHTML = links.map(link => createLinkElement(link, section)).join('');

        // Add event listeners for delete buttons
        grid.querySelectorAll('.delete-btn').forEach(btn => {
            btn.addEventListener('click', function (e) {
                e.preventDefault();
                e.stopPropagation();
                const linkName = this.dataset.linkName;
                const linkSection = this.dataset.linkSection;
                deleteLink(linkSection, linkName);
            });
        });
    } catch (error) {
        console.error(`❌ Failed to render links for section '${section}':`, error);
        grid.innerHTML = `<div class="error-state">Failed to load ${section} shortcuts</div>`;
    }
}

// Create empty state HTML
function createEmptyState(section) {
    const sectionNames = {
        quick: 'Quick Links',
        sports: 'Sports',
        news: 'News Sites'
    };

    const icons = {
        quick: 'fas fa-link',
        sports: 'fas fa-trophy',
        news: 'fas fa-newspaper'
    };

    return `
        <div class="empty-state">
            <i class="${icons[section]}"></i>
            <p>No ${sectionNames[section].toLowerCase()} yet</p>
            <small>Click "Add Shortcut" to get started</small>
        </div>
    `;
}

// Create individual link element with error handling
function createLinkElement(link, section) {
    try {
        // Validate link object
        if (!link.name || !link.url) {
            console.warn('⚠️ Invalid link object:', link);
            return '';
        }

        return `
            <a href="${encodeURI(link.url)}" class="link-item" target="_blank" rel="noopener noreferrer" title="${link.name}">
                <i class="link-icon ${link.icon || 'fas fa-link'}" style="color: ${link.color || '#4285f4'}"></i>
                <span class="link-name">${link.name}</span>
                <button class="delete-btn" data-link-name="${link.name}" data-link-section="${section}" title="Delete shortcut">
                    <i class="fas fa-times"></i>
                </button>
            </a>
        `;
    } catch (error) {
        console.error('❌ Failed to create link element:', error);
        return '';
    }
}

// Open modal with enhanced error handling
function openModal() {
    try {
        if (!domElements.modalOverlay) {
            throw new Error('Modal overlay not found');
        }

        removeModalMessages();
        domElements.modalOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';

        // Focus on first input
        setTimeout(() => {
            if (domElements.shortcutName) {
                domElements.shortcutName.focus();
            }
        }, 300);

        console.log('✅ Modal opened successfully');
    } catch (error) {
        console.error('❌ Failed to open modal:', error);
        showErrorNotification('Failed to open add shortcut dialog.');
    }
}

// Close modal
function closeModal() {
    try {
        if (!domElements.modalOverlay) return;

        domElements.modalOverlay.classList.remove('active');
        document.body.style.overflow = '';

        if (domElements.shortcutForm) {
            domElements.shortcutForm.reset();
        }

        removeModalMessages();
        console.log('✅ Modal closed successfully');
    } catch (error) {
        console.error('❌ Failed to close modal:', error);
    }
}

// Open background color modal
function openBackgroundModal() {
    try {
        // Remove existing background modal
        const existingModal = document.querySelector('.background-modal');
        if (existingModal) {
            existingModal.remove();
        }

        // Group backgrounds by type
        const gradients = backgroundPresets.filter(bg => bg.type === 'gradient');
        const patterns = backgroundPresets.filter(bg => bg.type === 'pattern');
        const images = backgroundPresets.filter(bg => bg.type === 'image');

        // Create background modal HTML
        const backgroundModal = document.createElement('div');
        backgroundModal.className = 'modal-overlay background-modal';
        backgroundModal.innerHTML = `
            <div class="modal advanced-modal">
                <div class="modal-header">
                    <h3>Customize Appearance</h3>
                    <button class="close-btn" onclick="closeBackgroundModal()">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <div class="modal-form">
                    <!-- Background Tabs -->
                    <div class="background-tabs">
                        <button class="tab-btn active" data-tab="gradients">
                            <i class="fas fa-palette"></i>
                            Gradients
                        </button>
                        <button class="tab-btn" data-tab="patterns">
                            <i class="fas fa-th"></i>
                            Patterns
                        </button>
                        <button class="tab-btn" data-tab="images">
                            <i class="fas fa-image"></i>
                            Images
                        </button>
                        <button class="tab-btn" data-tab="headers">
                            <i class="fas fa-columns"></i>
                            Headers
                        </button>
                        <button class="tab-btn" data-tab="custom">
                            <i class="fas fa-code"></i>
                            Custom
                        </button>
                    </div>

                    <!-- Gradients Tab -->
                    <div class="tab-content active" id="gradients">
                        <h4>Gradient Backgrounds</h4>
                        <div class="background-grid">
                            ${gradients.map(preset => `
                                <div class="background-option" onclick="selectBackground('${preset.gradient.replace(/'/g, "\\'")}')" 
                                     style="background: ${preset.gradient}" title="${preset.name}">
                                    <span class="background-name">${preset.name}</span>
                                </div>
                            `).join('')}
                        </div>
                    </div>

                    <!-- Patterns Tab -->
                    <div class="tab-content" id="patterns">
                        <h4>Pattern Backgrounds</h4>
                        <div class="background-grid">
                            ${patterns.map(preset => `
                                <div class="background-option pattern-option" onclick="selectBackground('${preset.gradient.replace(/'/g, "\\'")}')" 
                                     style="background: ${preset.gradient}; background-size: 20px 20px;" title="${preset.name}">
                                    <span class="background-name">${preset.name}</span>
                                </div>
                            `).join('')}
                        </div>
                    </div>

                    <!-- Images Tab -->
                    <div class="tab-content" id="images">
                        <h4>Image Backgrounds</h4>
                        <div class="background-grid">
                            ${images.map(preset => `
                                <div class="background-option image-option" onclick="selectBackground('${preset.gradient.replace(/'/g, "\\'")}')" 
                                     style="background: ${preset.gradient} center/cover; position: relative; overflow: hidden;" title="${preset.name}">
                                    <span class="background-name">${preset.name}</span>
                                </div>
                            `).join('')}
                        </div>
                        <small style="color: #718096; margin-top: 1rem; display: block;">
                            <i class="fas fa-info-circle"></i>
                            Images are loaded from Unsplash and may take a moment to appear
                        </small>
                    </div>

                    <!-- Headers Tab -->
                    <div class="tab-content" id="headers">
                        <h4>Customize Section Headers</h4>
                        <div class="header-customization">
                            <div class="header-section">
                                <label>Links Section Header:</label>
                                <select id="linksHeaderSelect" onchange="updateHeaderStyle('linksHeader', this.value)">
                                    ${Object.entries(headerColorPresets).map(([key, value]) => `
                                        <option value="${key}" ${currentHeaderSettings.linksHeader === key ? 'selected' : ''}>
                                            ${typeof value === 'string' && !value.includes('gradient') ? value : key.charAt(0).toUpperCase() + key.slice(1)}
                                        </option>
                                    `).join('')}
                                </select>
                                <div class="header-preview" id="linksHeaderPreview"></div>
                            </div>
                            <div class="header-section">
                                <label>News Section Header:</label>
                                <select id="newsHeaderSelect" onchange="updateHeaderStyle('newsHeader', this.value)">
                                    ${Object.entries(headerColorPresets).map(([key, value]) => `
                                        <option value="${key}" ${currentHeaderSettings.newsHeader === key ? 'selected' : ''}>
                                            ${typeof value === 'string' && !value.includes('gradient') ? value : key.charAt(0).toUpperCase() + key.slice(1)}
                                        </option>
                                    `).join('')}
                                </select>
                                <div class="header-preview" id="newsHeaderPreview"></div>
                            </div>
                            <div class="header-actions">
                                <button type="button" class="btn btn-secondary" onclick="resetHeaders()">
                                    <i class="fas fa-undo"></i>
                                    Reset to Auto-Match
                                </button>
                                <button type="button" class="btn btn-primary" onclick="applyHeaderStyles()">
                                    <i class="fas fa-check"></i>
                                    Apply Headers
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- Custom Tab -->
                    <div class="tab-content" id="custom">
                        <h4>Custom Background</h4>
                        <div class="custom-background">
                            <label>CSS Background Value:</label>
                            <textarea id="customBackgroundInput" rows="4" placeholder="Examples:&#10;linear-gradient(135deg, #ff0000 0%, #0000ff 100%)&#10;url('your-image-url.jpg')&#10;radial-gradient(circle, #ff0000, #0000ff)"></textarea>
                            <button type="button" class="btn btn-secondary" onclick="applyCustomBackground()">
                                <i class="fas fa-paint-brush"></i>
                                Apply Custom Background
                            </button>
                            <small>
                                <i class="fas fa-lightbulb"></i>
                                Try <a href="https://cssgradient.io/" target="_blank">CSS Gradient Generator</a> or 
                                <a href="https://unsplash.com/" target="_blank">Unsplash</a> for images
                            </small>
                        </div>
                    </div>
                </div>
            </div>
        `;

        document.body.appendChild(backgroundModal);
        setTimeout(() => backgroundModal.classList.add('active'), 10);

        // Setup tab switching
        setupBackgroundTabs();
        updateHeaderPreviews();

        console.log('✅ Advanced background modal opened successfully');
    } catch (error) {
        console.error('❌ Failed to open background modal:', error);
        showErrorNotification('Failed to open background selector.');
    }
}

// Close background modal
function closeBackgroundModal() {
    try {
        const backgroundModal = document.querySelector('.background-modal');
        if (backgroundModal) {
            backgroundModal.classList.remove('active');
            setTimeout(() => {
                if (backgroundModal.parentNode) {
                    backgroundModal.remove();
                }
            }, 300);
        }
        console.log('✅ Background modal closed successfully');
    } catch (error) {
        console.error('❌ Failed to close background modal:', error);
    }
}

// Select background
function selectBackground(gradient) {
    try {
        // Handle different background types
        if (gradient.includes('url(')) {
            // For images, add fallback and sizing
            document.body.style.background = `${gradient} center/cover no-repeat, linear-gradient(135deg, #667eea 0%, #764ba2 100%)`;
        } else {
            document.body.style.background = gradient;
        }

        localStorage.setItem(BACKGROUND_KEY, gradient);

        // Auto-update headers if they're set to auto
        if (currentHeaderSettings.linksHeader === 'auto' || currentHeaderSettings.newsHeader === 'auto') {
            applyHeaderStyles();
        }

        showSuccessNotification('Background changed successfully!');
        closeBackgroundModal();
        console.log('✅ Background selected:', gradient);
    } catch (error) {
        console.error('❌ Failed to select background:', error);
        showErrorNotification('Failed to change background.');
    }
}

// Apply custom background
function applyCustomBackground() {
    try {
        const customInput = document.getElementById('customBackgroundInput');
        if (!customInput) {
            throw new Error('Custom background input not found');
        }

        const backgroundValue = customInput.value.trim();

        if (!backgroundValue) {
            showErrorNotification('Please enter a background value');
            return;
        }

        document.body.style.background = backgroundValue;
        localStorage.setItem(BACKGROUND_KEY, backgroundValue);

        // Auto-update headers if they're set to auto
        if (currentHeaderSettings.linksHeader === 'auto' || currentHeaderSettings.newsHeader === 'auto') {
            applyHeaderStyles();
        }

        showSuccessNotification('Custom background applied!');
        closeBackgroundModal();
        console.log('✅ Custom background applied:', backgroundValue);
    } catch (error) {
        console.error('❌ Failed to apply custom background:', error);
        showErrorNotification('Invalid background format. Please check your CSS syntax.');
    }
}

// Setup background tab switching
function setupBackgroundTabs() {
    try {
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.addEventListener('click', function () {
                // Remove active class from all tabs and content
                document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
                document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));

                // Add active class to clicked tab
                this.classList.add('active');

                // Show corresponding content
                const tabId = this.dataset.tab;
                const content = document.getElementById(tabId);
                if (content) {
                    content.classList.add('active');
                }
            });
        });

        console.log('✅ Background tabs set up successfully');
    } catch (error) {
        console.error('❌ Failed to setup background tabs:', error);
    }
}

// Update header style
function updateHeaderStyle(headerType, style) {
    try {
        currentHeaderSettings[headerType] = style;
        applyHeaderStyles();
        updateHeaderPreviews();
        saveHeaderSettings();

        console.log(`✅ ${headerType} updated to ${style}`);
    } catch (error) {
        console.error('❌ Failed to update header style:', error);
    }
}

// Update header previews in modal
function updateHeaderPreviews() {
    try {
        const linksPreview = document.getElementById('linksHeaderPreview');
        const newsPreview = document.getElementById('newsHeaderPreview');

        if (linksPreview) {
            const linksStyle = getHeaderStyle(currentHeaderSettings.linksHeader);
            linksPreview.style.background = linksStyle;
        }

        if (newsPreview) {
            const newsStyle = getHeaderStyle(currentHeaderSettings.newsHeader);
            newsPreview.style.background = newsStyle;
        }
    } catch (error) {
        console.error('❌ Failed to update header previews:', error);
    }
}

// Reset headers to auto-match
function resetHeaders() {
    try {
        currentHeaderSettings.linksHeader = 'auto';
        currentHeaderSettings.newsHeader = 'auto';

        // Update selects
        const linksSelect = document.getElementById('linksHeaderSelect');
        const newsSelect = document.getElementById('newsHeaderSelect');

        if (linksSelect) linksSelect.value = 'auto';
        if (newsSelect) newsSelect.value = 'auto';

        applyHeaderStyles();
        updateHeaderPreviews();
        saveHeaderSettings();

        showSuccessNotification('Headers reset to auto-match background!');
        console.log('✅ Headers reset to auto-match');
    } catch (error) {
        console.error('❌ Failed to reset headers:', error);
    }
}

// Enhanced form submission with comprehensive validation
function handleFormSubmit(e) {
    try {
        e.preventDefault();
        removeModalMessages();

        // Get form data
        const formData = new FormData(domElements.shortcutForm);
        const name = formData.get('shortcutName')?.trim();
        const url = formData.get('shortcutUrl')?.trim();
        const icon = formData.get('shortcutIcon')?.trim() || 'fas fa-link';
        const color = formData.get('shortcutColor');
        const section = domElements.shortcutSection?.value;

        console.log('📋 Form data:', { name, url, icon, color, section });

        // Comprehensive validation
        const validationError = validateFormData({ name, url, icon, color, section });
        if (validationError) {
            showModalError(validationError);
            return;
        }

        const newLink = { name, url, icon, color };

        // Add the link
        addLink(section, newLink);
        showModalSuccess(`"${name}" added successfully!`);

        // Close modal after success
        setTimeout(() => {
            closeModal();
        }, 1500);

    } catch (error) {
        console.error('❌ Error in form submission:', error);
        showModalError('An unexpected error occurred. Please try again.');
    }
}

// Comprehensive form validation
function validateFormData({ name, url, icon, color, section }) {
    // Name validation
    if (!name) {
        return 'Please enter a name for the shortcut';
    }

    if (name.length > 20) {
        return 'Name must be 20 characters or less';
    }

    if (name.length < 2) {
        return 'Name must be at least 2 characters long';
    }

    // URL validation
    if (!url) {
        return 'Please enter a URL';
    }

    if (!isValidUrl(url)) {
        return 'Please enter a valid URL (must start with http:// or https://)';
    }

    // Icon validation - More forgiving now
    if (icon && !isValidIconClass(icon)) {
        return 'Please enter a valid Font Awesome icon class (e.g., fas fa-home, fa-chalkboard-user, or just home)';
    }

    // Section validation
    if (!section) {
        return 'Please select a section';
    }

    if (!defaultLinks[section]) {
        return 'Invalid section selected';
    }

    // Check for duplicates
    const currentLinks = getCurrentLinks();
    if (currentLinks[section]) {
        const exists = currentLinks[section].some(link =>
            link.name.toLowerCase() === name.toLowerCase() ||
            link.url.toLowerCase() === url.toLowerCase()
        );

        if (exists) {
            return 'A shortcut with this name or URL already exists in this section';
        }
    }

    return null; // No validation errors
}

// Enhanced URL validation
function isValidUrl(string) {
    try {
        const url = new URL(string);
        return url.protocol === 'http:' || url.protocol === 'https:';
    } catch (_) {
        // Try adding https:// prefix if it's missing
        try {
            const urlWithProtocol = new URL('https://' + string);
            return true;
        } catch (_) {
            return false;
        }
    }
}

// Icon class validation - More flexible
function isValidIconClass(iconClass) {
    if (!iconClass) return true; // Optional field

    const trimmed = iconClass.trim();
    if (trimmed === '') return true;

    // More flexible validation for Font Awesome icon classes
    // Accept various formats: "fas fa-home", "fa-home", "home", etc.
    const iconPatterns = [
        /^(fas|far|fab|fal|fad|fat)\s+fa-[\w-]+$/,  // Full format: fas fa-home
        /^fa-[\w-]+$/,                              // Short format: fa-home  
        /^[\w-]+$/                                  // Just name: home
    ];

    return iconPatterns.some(pattern => pattern.test(trimmed));
}

// Normalize icon class to full format
function normalizeIconClass(iconClass) {
    if (!iconClass) return 'fas fa-link';

    const trimmed = iconClass.trim();
    if (trimmed === '') return 'fas fa-link';

    // If it already has a prefix, return as-is
    if (trimmed.match(/^(fas|far|fab|fal|fad|fat)\s+/)) {
        return trimmed;
    }

    // If it starts with fa-, add fas prefix
    if (trimmed.startsWith('fa-')) {
        return `fas ${trimmed}`;
    }

    // If it's just the name, add fas fa- prefix
    return `fas fa-${trimmed}`;
}

// Popular icons organized by category
const iconCategories = {
    'Popular': [
        'fas fa-home', 'fas fa-user', 'fas fa-envelope', 'fas fa-phone', 'fas fa-calendar',
        'fas fa-search', 'fas fa-heart', 'fas fa-star', 'fas fa-bookmark', 'fas fa-cog',
        'fas fa-download', 'fas fa-upload', 'fas fa-share', 'fas fa-link', 'fas fa-external-link-alt'
    ],
    'Social Media': [
        'fab fa-youtube', 'fab fa-twitter', 'fab fa-facebook', 'fab fa-instagram', 'fab fa-linkedin',
        'fab fa-github', 'fab fa-discord', 'fab fa-reddit', 'fab fa-tiktok', 'fab fa-whatsapp',
        'fab fa-telegram', 'fab fa-snapchat-ghost', 'fab fa-pinterest', 'fab fa-twitch'
    ],
    'Technology': [
        'fas fa-laptop', 'fas fa-mobile-alt', 'fas fa-desktop', 'fas fa-tablet-alt', 'fas fa-keyboard',
        'fas fa-mouse', 'fas fa-headphones', 'fas fa-microphone', 'fas fa-camera', 'fas fa-video',
        'fas fa-wifi', 'fas fa-bluetooth-b', 'fas fa-usb', 'fas fa-memory', 'fas fa-hdd'
    ],
    'Communication': [
        'fas fa-envelope', 'fas fa-comment', 'fas fa-comments', 'fas fa-phone', 'fas fa-fax',
        'fas fa-at', 'fas fa-inbox', 'fas fa-paper-plane', 'fas fa-bullhorn', 'fas fa-rss'
    ],
    'Entertainment': [
        'fas fa-film', 'fas fa-music', 'fas fa-gamepad', 'fas fa-tv', 'fas fa-broadcast-tower',
        'fas fa-headphones', 'fas fa-microphone', 'fas fa-camera', 'fas fa-video', 'fas fa-theater-masks'
    ],
    'Work & Productivity': [
        'fas fa-briefcase', 'fas fa-file', 'fas fa-folder', 'fas fa-chart-bar', 'fas fa-calculator',
        'fas fa-clipboard', 'fas fa-pen', 'fas fa-edit', 'fas fa-print', 'fas fa-fax',
        'fas fa-chalkboard-user', 'fas fa-presentation', 'fas fa-tasks', 'fas fa-project-diagram'
    ],
    'Shopping & Finance': [
        'fas fa-shopping-cart', 'fas fa-credit-card', 'fas fa-money-bill', 'fas fa-wallet', 'fas fa-store',
        'fas fa-tag', 'fas fa-receipt', 'fas fa-percent', 'fas fa-dollar-sign', 'fas fa-piggy-bank'
    ],
    'Sports': [
        'fas fa-football-ball', 'fas fa-basketball-ball', 'fas fa-baseball-ball', 'fas fa-volleyball-ball',
        'fas fa-running', 'fas fa-swimmer', 'fas fa-biking', 'fas fa-dumbbell', 'fas fa-trophy'
    ],
    'News & Media': [
        'fas fa-newspaper', 'fas fa-tv', 'fas fa-broadcast-tower', 'fas fa-microphone', 'fas fa-camera',
        'fas fa-video', 'fas fa-globe', 'fas fa-rss', 'fas fa-satellite-dish'
    ]
};

// Create icon picker modal
function openIconPicker() {
    try {
        // Remove existing icon picker
        const existingPicker = document.querySelector('.icon-picker-modal');
        if (existingPicker) {
            existingPicker.remove();
        }

        // Create icon picker modal
        const iconPickerModal = document.createElement('div');
        iconPickerModal.className = 'modal-overlay icon-picker-modal';
        iconPickerModal.innerHTML = `
            <div class="modal icon-picker">
                <div class="modal-header">
                    <h3>Choose an Icon</h3>
                    <button class="close-btn" onclick="closeIconPicker()">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <div class="modal-form">
                    <div class="icon-search">
                        <input type="text" id="iconSearch" placeholder="Search icons..." />
                        <small>Search by name (e.g., "home", "user", "email") or browse categories below</small>
                    </div>
                    <div class="icon-categories">
                        ${Object.keys(iconCategories).map(category => `
                            <button class="icon-category-btn ${category === 'Popular' ? 'active' : ''}" 
                                    data-category="${category}">${category}</button>
                        `).join('')}
                    </div>
                    <div class="icon-grid" id="iconGrid">
                        ${renderIconCategory('Popular')}
                    </div>
                    <div class="icon-input-section">
                        <label>Or enter manually:</label>
                        <input type="text" id="manualIconInput" placeholder="e.g., fas fa-home, fa-chalkboard-user, or just home" />
                        <div class="icon-preview">
                            <i id="iconPreview" class="fas fa-link"></i>
                            <span id="iconPreviewText">fas fa-link</span>
                        </div>
                    </div>
                    <div class="form-actions">
                        <button type="button" class="btn btn-secondary" onclick="closeIconPicker()">Cancel</button>
                        <button type="button" class="btn btn-primary" onclick="selectIcon()">Use This Icon</button>
                    </div>
                </div>
            </div>
        `;

        document.body.appendChild(iconPickerModal);
        setTimeout(() => iconPickerModal.classList.add('active'), 10);

        // Setup icon picker event listeners
        setupIconPickerEvents();

        console.log('✅ Icon picker opened successfully');
    } catch (error) {
        console.error('❌ Failed to open icon picker:', error);
        showErrorNotification('Failed to open icon picker.');
    }
}

// Render icons for a category
function renderIconCategory(category) {
    const icons = iconCategories[category] || [];
    return icons.map(iconClass => `
        <div class="icon-option" data-icon="${iconClass}" onclick="previewIcon('${iconClass}')">
            <i class="${iconClass}"></i>
            <span>${iconClass.replace('fas fa-', '').replace('fab fa-', '').replace('far fa-', '')}</span>
        </div>
    `).join('');
}

// Setup icon picker event listeners
function setupIconPickerEvents() {
    // Category buttons
    document.querySelectorAll('.icon-category-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            document.querySelectorAll('.icon-category-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            const category = this.dataset.category;
            document.getElementById('iconGrid').innerHTML = renderIconCategory(category);
        });
    });

    // Search functionality
    const searchInput = document.getElementById('iconSearch');
    if (searchInput) {
        searchInput.addEventListener('input', function (e) {
            const searchTerm = e.target.value.toLowerCase();
            if (searchTerm.length === 0) {
                document.getElementById('iconGrid').innerHTML = renderIconCategory('Popular');
                return;
            }

            // Search through all icons
            const allIcons = Object.values(iconCategories).flat();
            const filteredIcons = allIcons.filter(iconClass =>
                iconClass.toLowerCase().includes(searchTerm) ||
                iconClass.replace(/fas fa-|fab fa-|far fa-/, '').includes(searchTerm)
            );

            if (filteredIcons.length === 0) {
                document.getElementById('iconGrid').innerHTML = `
                    <div class="no-results">
                        <i class="fas fa-search"></i>
                        <p>No icons found for "${searchTerm}"</p>
                        <small>Try searching for: home, user, mail, phone, etc.</small>
                    </div>
                `;
            } else {
                document.getElementById('iconGrid').innerHTML = filteredIcons.map(iconClass => `
                    <div class="icon-option" data-icon="${iconClass}" onclick="previewIcon('${iconClass}')">
                        <i class="${iconClass}"></i>
                        <span>${iconClass.replace('fas fa-', '').replace('fab fa-', '').replace('far fa-', '')}</span>
                    </div>
                `).join('');
            }
        });
    }

    // Manual input with live preview
    const manualInput = document.getElementById('manualIconInput');
    if (manualInput) {
        manualInput.addEventListener('input', function (e) {
            const inputValue = e.target.value.trim();
            if (inputValue) {
                const normalizedIcon = normalizeIconClass(inputValue);
                previewIcon(normalizedIcon);
            }
        });
    }
}

// Preview selected icon
function previewIcon(iconClass) {
    try {
        // Remove previous selection
        document.querySelectorAll('.icon-option.selected').forEach(el => el.classList.remove('selected'));

        // Add selection to clicked icon
        const clickedIcon = document.querySelector(`[data-icon="${iconClass}"]`);
        if (clickedIcon) {
            clickedIcon.classList.add('selected');
        }

        // Update preview
        const preview = document.getElementById('iconPreview');
        const previewText = document.getElementById('iconPreviewText');

        if (preview && previewText) {
            preview.className = iconClass;
            previewText.textContent = iconClass;
        }

        // Update manual input
        const manualInput = document.getElementById('manualIconInput');
        if (manualInput) {
            manualInput.value = iconClass;
        }

        // Store selected icon
        window.selectedIcon = iconClass;
    } catch (error) {
        console.error('❌ Failed to preview icon:', error);
    }
}

// Select and use the icon
function selectIcon() {
    try {
        const selectedIcon = window.selectedIcon || document.getElementById('iconPreview')?.className || 'fas fa-link';

        // Set the icon in the main form
        if (domElements.shortcutIcon) {
            domElements.shortcutIcon.value = selectedIcon;
        }

        closeIconPicker();
        showSuccessNotification('Icon selected successfully!');
        console.log('✅ Icon selected:', selectedIcon);
    } catch (error) {
        console.error('❌ Failed to select icon:', error);
        showErrorNotification('Failed to select icon.');
    }
}

// Close icon picker
function closeIconPicker() {
    try {
        const iconPickerModal = document.querySelector('.icon-picker-modal');
        if (iconPickerModal) {
            iconPickerModal.classList.remove('active');
            setTimeout(() => {
                if (iconPickerModal.parentNode) {
                    iconPickerModal.remove();
                }
            }, 300);
        }
        console.log('✅ Icon picker closed successfully');
    } catch (error) {
        console.error('❌ Failed to close icon picker:', error);
    }
}

// Add a new link with enhanced error handling
function addLink(section, newLink) {
    try {
        const currentLinks = getCurrentLinks();

        if (!currentLinks[section]) {
            currentLinks[section] = [];
        }

        // Normalize URL if needed
        if (!newLink.url.startsWith('http://') && !newLink.url.startsWith('https://')) {
            newLink.url = 'https://' + newLink.url;
        }

        // Normalize icon class
        newLink.icon = normalizeIconClass(newLink.icon);

        currentLinks[section].push(newLink);
        saveLinks(currentLinks);
        renderLinks(section, currentLinks[section]);

        // Add animation to new item
        setTimeout(() => {
            const grid = grids[section];
            if (grid) {
                const newItem = grid.lastElementChild;
                if (newItem && newItem.classList.contains('link-item')) {
                    newItem.classList.add('new-item');
                }
            }
        }, 100);

        console.log('✅ Link added successfully:', newLink);
    } catch (error) {
        console.error('❌ Failed to add link:', error);
        throw new Error('Failed to add shortcut. Please try again.');
    }
}

// Delete a link with confirmation
function deleteLink(section, linkName) {
    try {
        if (!confirm(`Are you sure you want to delete "${linkName}"?`)) {
            return;
        }

        const currentLinks = getCurrentLinks();
        currentLinks[section] = currentLinks[section].filter(link => link.name !== linkName);
        saveLinks(currentLinks);
        renderLinks(section, currentLinks[section]);

        showSuccessNotification(`"${linkName}" deleted successfully!`);
        console.log('✅ Link deleted successfully:', linkName);
    } catch (error) {
        console.error('❌ Failed to delete link:', error);
        showErrorNotification('Failed to delete shortcut.');
    }
}

// Enhanced notification system
function showSuccessNotification(message) {
    showNotification(message, 'success');
}

function showErrorNotification(message) {
    showNotification(message, 'error');
}

function showInfoNotification(message) {
    showNotification(message, 'info');
}

function showNotification(message, type = 'success') {
    try {
        // Remove existing notifications
        document.querySelectorAll('.notification').forEach(n => n.remove());

        const colors = {
            success: { bg: 'linear-gradient(45deg, #10b981, #059669)', shadow: 'rgba(16, 185, 129, 0.4)' },
            error: { bg: 'linear-gradient(45deg, #ef4444, #dc2626)', shadow: 'rgba(239, 68, 68, 0.4)' },
            info: { bg: 'linear-gradient(45deg, #3b82f6, #2563eb)', shadow: 'rgba(59, 130, 246, 0.4)' }
        };

        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${colors[type].bg};
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 10px;
            box-shadow: 0 4px 15px ${colors[type].shadow};
            z-index: 1001;
            font-weight: 500;
            opacity: 0;
            transform: translateX(100%);
            transition: all 0.3s ease;
            max-width: 300px;
            word-wrap: break-word;
        `;
        notification.textContent = message;

        document.body.appendChild(notification);

        // Animate in
        setTimeout(() => {
            notification.style.opacity = '1';
            notification.style.transform = 'translateX(0)';
        }, 100);

        // Remove after 4 seconds
        setTimeout(() => {
            notification.style.opacity = '0';
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.remove();
                }
            }, 300);
        }, 4000);
    } catch (error) {
        console.error('❌ Failed to show notification:', error);
    }
}

// Load news from RSS feeds with better error handling
async function loadNews(forceRefresh = false) {
    if (!domElements.newsFeed) {
        console.warn('⚠️ News feed element not found');
        return;
    }

    try {
        const cachedNews = localStorage.getItem(NEWS_CACHE_KEY);
        const cacheTime = localStorage.getItem(NEWS_CACHE_KEY + '_time');
        const cacheAge = Date.now() - (cacheTime ? parseInt(cacheTime) : 0);

        // Use cache if less than 30 minutes old and not forcing refresh
        if (!forceRefresh && cachedNews && cacheAge < 30 * 60 * 1000) {
            newsData = JSON.parse(cachedNews);
            renderNews();
            console.log('✅ News loaded from cache');
            return;
        }

        // Show loading spinner
        domElements.newsFeed.innerHTML = `
            <div class="loading-spinner">
                <i class="fas fa-spinner fa-spin"></i>
                <p>Loading latest news...</p>
            </div>
        `;

        const promises = Object.entries(newsFeeds).map(async ([source, feed]) => {
            try {
                const articles = await fetchRSSFeed(feed.url, source);
                return articles.map(article => ({
                    ...article,
                    source: source,
                    sourceName: feed.name,
                    color: feed.color
                }));
            } catch (error) {
                console.error(`❌ Failed to fetch ${feed.name} feed:`, error);
                return [];
            }
        });

        const results = await Promise.all(promises);
        newsData = results.flat().sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));

        // Cache the results
        localStorage.setItem(NEWS_CACHE_KEY, JSON.stringify(newsData));
        localStorage.setItem(NEWS_CACHE_KEY + '_time', Date.now().toString());

        renderNews();
        console.log('✅ News loaded successfully');
    } catch (error) {
        console.error('❌ Failed to load news:', error);
        showNewsError();
    }
}

// Fetch RSS feed using CORS proxy
async function fetchRSSFeed(url, source) {
    const proxyUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(url)}&count=10`;

    try {
        const response = await fetch(proxyUrl, {
            method: 'GET',
            headers: { 'Accept': 'application/json' }
        });

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }

        const data = await response.json();

        if (data.status !== 'ok') {
            throw new Error('RSS feed error');
        }

        return data.items.map(item => ({
            title: item.title || 'No title',
            description: item.description ? stripHtml(item.description) : 'No description available',
            link: item.link || '#',
            pubDate: item.pubDate || new Date().toISOString(),
            guid: item.guid || item.link || Math.random().toString()
        }));
    } catch (error) {
        console.warn(`⚠️ RSS feed failed for ${source}, using mock data:`, error);
        return getMockNews(source);
    }
}

// Mock news data for fallback
function getMockNews(source) {
    const mockData = {
        cnn: [
            {
                title: "Breaking: Major Economic Policy Changes Announced",
                description: "Government officials outline new measures to address inflation and economic growth concerns.",
                link: "https://cnn.com",
                pubDate: new Date().toISOString(),
                guid: `cnn-${Date.now()}-1`
            },
            {
                title: "Technology Giants Report Strong Quarterly Earnings",
                description: "Several major tech companies exceed analyst expectations in latest financial reports.",
                link: "https://cnn.com",
                pubDate: new Date(Date.now() - 3600000).toISOString(),
                guid: `cnn-${Date.now()}-2`
            }
        ],
        msnbc: [
            {
                title: "Political Analysis: Upcoming Election Impact",
                description: "Experts weigh in on potential outcomes and their implications for policy direction.",
                link: "https://msnbc.com",
                pubDate: new Date(Date.now() - 1800000).toISOString(),
                guid: `msnbc-${Date.now()}-1`
            }
        ],
        ap: [
            {
                title: "International Relations: Diplomatic Progress Reported",
                description: "Recent negotiations show signs of breakthrough in long-standing international disputes.",
                link: "https://apnews.com",
                pubDate: new Date(Date.now() - 7200000).toISOString(),
                guid: `ap-${Date.now()}-1`
            }
        ],
        reuters: [
            {
                title: "Global Markets Show Mixed Results",
                description: "Stock exchanges worldwide display varied performance amid ongoing economic uncertainty.",
                link: "https://reuters.com",
                pubDate: new Date(Date.now() - 5400000).toISOString(),
                guid: `reuters-${Date.now()}-1`
            }
        ]
    };

    return mockData[source] || [];
}

// Strip HTML tags from text
function stripHtml(html) {
    try {
        const doc = new DOMParser().parseFromString(html, 'text/html');
        return doc.body.textContent || "";
    } catch (error) {
        console.error('❌ Failed to strip HTML:', error);
        return html; // Return original if parsing fails
    }
}

// Render news articles
function renderNews() {
    if (!domElements.newsFeed) return;

    try {
        let articlesToShow = newsData;

        if (currentNewsSource !== 'all') {
            articlesToShow = newsData.filter(article => article.source === currentNewsSource);
        }

        if (articlesToShow.length === 0) {
            domElements.newsFeed.innerHTML = `
                <div class="empty-state">
                    <i class="fas fa-newspaper"></i>
                    <p>No news articles available</p>
                    <small>Try refreshing or selecting a different source</small>
                </div>
            `;
            return;
        }

        domElements.newsFeed.innerHTML = articlesToShow.slice(0, 20).map(article => `
            <div class="news-article" onclick="openNewsArticle('${article.link}')" role="button" tabindex="0">
                <div class="news-meta">
                    <span class="news-source" style="background: ${article.color}">${article.sourceName}</span>
                    <span class="news-time">${formatTime(article.pubDate)}</span>
                </div>
                <h4 class="news-title">${article.title}</h4>
                <p class="news-description">${article.description}</p>
            </div>
        `).join('');
    } catch (error) {
        console.error('❌ Failed to render news:', error);
        showNewsError();
    }
}

// Format time for display
function formatTime(dateString) {
    try {
        const date = new Date(dateString);
        const now = new Date();
        const diffMs = now - date;
        const diffMins = Math.floor(diffMs / 60000);
        const diffHours = Math.floor(diffMins / 60);
        const diffDays = Math.floor(diffHours / 24);

        if (diffMins < 1) return 'Just now';
        if (diffMins < 60) return `${diffMins}m ago`;
        if (diffHours < 24) return `${diffHours}h ago`;
        if (diffDays < 7) return `${diffDays}d ago`;

        return date.toLocaleDateString();
    } catch (error) {
        console.error('❌ Failed to format time:', error);
        return 'Recently';
    }
}

// Open news article in new tab
function openNewsArticle(url) {
    try {
        window.open(url, '_blank', 'noopener,noreferrer');
    } catch (error) {
        console.error('❌ Failed to open news article:', error);
        showErrorNotification('Failed to open article');
    }
}

// Show news error state
function showNewsError() {
    if (!domElements.newsFeed) return;

    domElements.newsFeed.innerHTML = `
        <div class="news-error">
            <i class="fas fa-exclamation-triangle"></i>
            <p>Unable to load news</p>
            <small>Please check your internet connection and try again</small>
            <button onclick="loadNews(true)" style="margin-top: 1rem; padding: 0.5rem 1rem; background: #667eea; color: white; border: none; border-radius: 8px; cursor: pointer;">
                Retry
            </button>
        </div>
    `;
}

// Load saved headers
function loadHeaderSettings() {
    try {
        const savedHeaders = localStorage.getItem(HEADER_SETTINGS_KEY);
        if (savedHeaders) {
            currentHeaderSettings = { ...currentHeaderSettings, ...JSON.parse(savedHeaders) };
        }
        applyHeaderStyles();
        console.log('✅ Header settings loaded');
    } catch (error) {
        console.error('❌ Failed to load header settings:', error);
    }
}

// Save header settings
function saveHeaderSettings() {
    try {
        localStorage.setItem(HEADER_SETTINGS_KEY, JSON.stringify(currentHeaderSettings));
        console.log('✅ Header settings saved');
    } catch (error) {
        console.error('❌ Failed to save header settings:', error);
    }
}

// Apply header styles based on current settings
function applyHeaderStyles() {
    try {
        const linksHeader = document.querySelector('.links-column .column-header');
        const newsHeader = document.querySelector('.news-column .column-header');

        if (linksHeader) {
            const linksStyle = getHeaderStyle(currentHeaderSettings.linksHeader);
            linksHeader.style.background = linksStyle;
        }

        if (newsHeader) {
            const newsStyle = getHeaderStyle(currentHeaderSettings.newsHeader);
            newsHeader.style.background = newsStyle;
        }

        // Also update adaptive button styles
        updateAdaptiveButtonStyles();

        console.log('✅ Header styles applied');
    } catch (error) {
        console.error('❌ Failed to apply header styles:', error);
    }
}

// Get header style based on setting
function getHeaderStyle(setting) {
    if (setting === 'auto') {
        // Auto-generate based on current background
        return getAutoHeaderStyle();
    }

    return headerColorPresets[setting] || headerColorPresets.gradient;
}

// Auto-generate header style based on current background
function getAutoHeaderStyle() {
    const currentBg = document.body.style.background;

    // If it's an image, return a semi-transparent overlay
    if (currentBg.includes('url(')) {
        return 'linear-gradient(135deg, rgba(0,0,0,0.8), rgba(0,0,0,0.6))';
    }

    // If it's a pattern, return a complementary solid gradient
    if (currentBg.includes('radial-gradient') && currentBg.includes('transparent')) {
        return 'linear-gradient(135deg, rgba(102, 126, 234, 0.9), rgba(118, 75, 162, 0.9))';
    }

    // For gradient backgrounds, extract colors and create a darker version
    if (currentBg.includes('linear-gradient')) {
        return extractAndDarkenGradient(currentBg);
    }

    // Default fallback
    return 'linear-gradient(135deg, rgba(102, 126, 234, 0.95), rgba(118, 75, 162, 0.95))';
}

// Extract colors from gradient and create darker version
function extractAndDarkenGradient(gradientString) {
    try {
        // For complex gradients, provide smart auto-matching
        if (gradientString.includes('#00c9ff') || gradientString.includes('#00d2ff')) {
            return 'linear-gradient(135deg, #0891b2, #0e7490)'; // Ocean theme
        }
        if (gradientString.includes('#fc466b') || gradientString.includes('#ff7f7f')) {
            return 'linear-gradient(135deg, #dc2626, #b91c1c)'; // Red/Sunset theme
        }
        if (gradientString.includes('#11998e') || gradientString.includes('#56ab2f')) {
            return 'linear-gradient(135deg, #059669, #047857)'; // Green/Forest theme
        }
        if (gradientString.includes('#ff9a56') || gradientString.includes('#d97706')) {
            return 'linear-gradient(135deg, #d97706, #b45309)'; // Orange theme
        }
        if (gradientString.includes('#b465da') || gradientString.includes('#e056fd')) {
            return 'linear-gradient(135deg, #7c3aed, #6d28d9)'; // Purple theme
        }
        if (gradientString.includes('#74b9ff') || gradientString.includes('#2196F3')) {
            return 'linear-gradient(135deg, #0ea5e9, #0284c7)'; // Blue theme
        }

        // Default darker version
        return 'linear-gradient(135deg, rgba(45, 55, 72, 0.9), rgba(74, 85, 104, 0.9))';
    } catch (error) {
        return 'linear-gradient(135deg, rgba(102, 126, 234, 0.95), rgba(118, 75, 162, 0.95))';
    }
}

// Update adaptive button styles based on background
function updateAdaptiveButtonStyles() {
    try {
        const addBtn = document.getElementById('addShortcutBtn');
        const bgBtn = document.getElementById('backgroundBtn');
        const currentBg = document.body.style.background;

        if (!addBtn || !bgBtn) return;

        // Get adaptive colors based on background
        const adaptiveColors = getAdaptiveButtonColors(currentBg);

        // Apply adaptive styles
        addBtn.style.background = adaptiveColors.addButton;
        addBtn.style.boxShadow = adaptiveColors.addShadow;

        bgBtn.style.background = adaptiveColors.backgroundButton;
        bgBtn.style.boxShadow = adaptiveColors.backgroundShadow;

        console.log('✅ Adaptive button styles updated');
    } catch (error) {
        console.error('❌ Failed to update adaptive button styles:', error);
    }
}

// Get adaptive button colors based on background
function getAdaptiveButtonColors(backgroundString) {
    const colors = {
        addButton: 'linear-gradient(45deg, #ff6b6b, #ee5a24)',
        addShadow: '0 4px 15px rgba(238, 90, 36, 0.4)',
        backgroundButton: 'linear-gradient(45deg, #8b5cf6, #a78bfa)',
        backgroundShadow: '0 4px 15px rgba(139, 92, 246, 0.4)'
    };

    // Image backgrounds - use contrasting colors
    if (backgroundString.includes('url(')) {
        colors.addButton = 'linear-gradient(45deg, #ef4444, #dc2626)';
        colors.addShadow = '0 4px 15px rgba(239, 68, 68, 0.6)';
        colors.backgroundButton = 'linear-gradient(45deg, #f59e0b, #d97706)';
        colors.backgroundShadow = '0 4px 15px rgba(245, 158, 11, 0.6)';
        return colors;
    }

    // Ocean/Blue themes
    if (backgroundString.includes('#00c9ff') || backgroundString.includes('#00d2ff') || backgroundString.includes('#74b9ff')) {
        colors.addButton = 'linear-gradient(45deg, #06b6d4, #0891b2)';
        colors.addShadow = '0 4px 15px rgba(6, 182, 212, 0.4)';
        colors.backgroundButton = 'linear-gradient(45deg, #3b82f6, #2563eb)';
        colors.backgroundShadow = '0 4px 15px rgba(59, 130, 246, 0.4)';
    }

    // Sunset/Red themes
    else if (backgroundString.includes('#fc466b') || backgroundString.includes('#ff7f7f')) {
        colors.addButton = 'linear-gradient(45deg, #f97316, #ea580c)';
        colors.addShadow = '0 4px 15px rgba(249, 115, 22, 0.4)';
        colors.backgroundButton = 'linear-gradient(45deg, #ec4899, #db2777)';
        colors.backgroundShadow = '0 4px 15px rgba(236, 72, 153, 0.4)';
    }

    // Forest/Green themes
    else if (backgroundString.includes('#11998e') || backgroundString.includes('#56ab2f')) {
        colors.addButton = 'linear-gradient(45deg, #10b981, #059669)';
        colors.addShadow = '0 4px 15px rgba(16, 185, 129, 0.4)';
        colors.backgroundButton = 'linear-gradient(45deg, #84cc16, #65a30d)';
        colors.backgroundShadow = '0 4px 15px rgba(132, 204, 22, 0.4)';
    }

    // Purple themes
    else if (backgroundString.includes('#b465da') || backgroundString.includes('#e056fd') || backgroundString.includes('#667eea')) {
        colors.addButton = 'linear-gradient(45deg, #a855f7, #9333ea)';
        colors.addShadow = '0 4px 15px rgba(168, 85, 247, 0.4)';
        colors.backgroundButton = 'linear-gradient(45deg, #6366f1, #4f46e5)';
        colors.backgroundShadow = '0 4px 15px rgba(99, 102, 241, 0.4)';
    }

    // Golden/Orange themes
    else if (backgroundString.includes('#ff9a56') || backgroundString.includes('#d97706')) {
        colors.addButton = 'linear-gradient(45deg, #f59e0b, #d97706)';
        colors.addShadow = '0 4px 15px rgba(245, 158, 11, 0.4)';
        colors.backgroundButton = 'linear-gradient(45deg, #eab308, #ca8a04)';
        colors.backgroundShadow = '0 4px 15px rgba(234, 179, 8, 0.4)';
    }

    return colors;
}

// Global functions for inline event handlers
window.selectBackground = selectBackground;
window.applyCustomBackground = applyCustomBackground;
window.closeBackgroundModal = closeBackgroundModal;
window.openNewsArticle = openNewsArticle;
window.loadNews = loadNews;

// Icon picker global functions
window.openIconPicker = openIconPicker;
window.closeIconPicker = closeIconPicker;
window.previewIcon = previewIcon;
window.selectIcon = selectIcon;

// Header management global functions
window.updateHeaderStyle = updateHeaderStyle;
window.resetHeaders = resetHeaders;

// Debug function for development
window.debugHomepage = function () {
    console.log('🔍 Homepage Debug Info:');
    console.log('Initialized:', isInitialized);
    console.log('DOM Elements:', domElements);
    console.log('Grids:', grids);
    console.log('Current Links:', getCurrentLinks());
    console.log('News Data:', newsData);
    console.log('Background:', document.body.style.background);
};

console.log('📝 Homepage script loaded successfully!');

// --- Minimal Mode ---
let isMinimalMode = false;

function setMinimalMode(minimal) {
    isMinimalMode = minimal;
    const mainContent = document.querySelector('.main-content');
    const searchSection = document.querySelector('.search-section');
    const weatherWidget = document.getElementById('weatherWidget');
    if (mainContent) mainContent.style.display = minimal ? 'none' : '';
    if (searchSection) searchSection.style.display = '';
    if (weatherWidget) weatherWidget.style.display = minimal ? 'none' : '';
    document.body.classList.toggle('minimal-mode', minimal);
}

function toggleMinimalMode() {
    setMinimalMode(!isMinimalMode);
    const btn = document.getElementById('minimalModeBtn');
    if (btn) {
        btn.innerHTML = isMinimalMode
            ? '<i class="fas fa-expand"></i> Exit Minimal'
            : '<i class="fas fa-compress"></i> Minimal Mode';
    }
}

// --- Clock & Date ---
function updateClockDate() {
    const el = document.getElementById('clockDate');
    if (!el) return;
    const now = new Date();
    const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
    const dateStr = now.toLocaleDateString(undefined, options);
    const timeStr = now.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    el.textContent = `${dateStr} • ${timeStr}`;
}
setInterval(updateClockDate, 1000);
document.addEventListener('DOMContentLoaded', updateClockDate);

// --- Minimal Mode Button Event ---
document.addEventListener('DOMContentLoaded', function () {
    const btn = document.getElementById('minimalModeBtn');
    if (btn) btn.addEventListener('click', toggleMinimalMode);
});

// --- Weather Widget ---
const OPENWEATHER_API_KEY = 'b1b15e88fa797225412429c1c50c122a1'; // Demo key, replace with your own for production
const WEATHER_CACHE_KEY = 'homepage_weather_cache';
const WEATHER_CACHE_TIME = 15 * 60 * 1000; // 15 minutes

function fetchWeather(lat, lon) {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${OPENWEATHER_API_KEY}&units=metric`;
    return fetch(url).then(r => r.json());
}

function fetchWeatherByCity(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${OPENWEATHER_API_KEY}&units=metric`;
    return fetch(url).then(r => r.json());
}

function renderWeatherWidget(data) {
    if (!data || !data.weather || !data.main) return;
    const icon = data.weather[0].icon;
    const desc = data.weather[0].description;
    const temp = Math.round(data.main.temp);
    const city = data.name;
    const country = data.sys.country;
    const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;
    const html = `
        <div class="weather-widget">
            <img src="${iconUrl}" alt="${desc}" class="weather-icon" />
            <div class="weather-info">
                <div class="weather-temp">${temp}&deg;C</div>
                <div class="weather-desc">${desc}</div>
                <div class="weather-location">${city}, ${country}</div>
            </div>
            <button class="weather-refresh" title="Refresh Weather" onclick="refreshWeather()">
                <i class="fas fa-sync-alt"></i>
            </button>
        </div>
    `;
    document.getElementById('weatherWidget').innerHTML = html;
}

function loadWeather(force = false) {
    const widget = document.getElementById('weatherWidget');
    if (!widget) return;
    widget.innerHTML = '<div class="weather-widget"><i class="fas fa-spinner fa-spin"></i> Loading weather...</div>';
    // Check cache
    const cache = localStorage.getItem(WEATHER_CACHE_KEY);
    const cacheTime = localStorage.getItem(WEATHER_CACHE_KEY + '_time');
    if (!force && cache && cacheTime && Date.now() - parseInt(cacheTime) < WEATHER_CACHE_TIME) {
        renderWeatherWidget(JSON.parse(cache));
        return;
    }
    // Try geolocation
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(pos => {
            fetchWeather(pos.coords.latitude, pos.coords.longitude)
                .then(data => {
                    localStorage.setItem(WEATHER_CACHE_KEY, JSON.stringify(data));
                    localStorage.setItem(WEATHER_CACHE_KEY + '_time', Date.now().toString());
                    renderWeatherWidget(data);
                })
                .catch(() => fetchWeatherFallback());
        }, fetchWeatherFallback, { timeout: 5000 });
    } else {
        fetchWeatherFallback();
    }
}

function fetchWeatherFallback() {
    // Default to New York
    fetchWeatherByCity('New York').then(data => {
        localStorage.setItem(WEATHER_CACHE_KEY, JSON.stringify(data));
        localStorage.setItem(WEATHER_CACHE_KEY + '_time', Date.now().toString());
        renderWeatherWidget(data);
    });
}

function refreshWeather() {
    localStorage.removeItem(WEATHER_CACHE_KEY);
    localStorage.removeItem(WEATHER_CACHE_KEY + '_time');
    loadWeather(true);
}

window.refreshWeather = refreshWeather;
document.addEventListener('DOMContentLoaded', () => loadWeather());

// --- Dark Mode ---
function setDarkMode(enabled) {
    document.body.classList.toggle('dark-mode', enabled);
    localStorage.setItem('homepage_dark_mode', enabled ? '1' : '0');
    const btn = document.getElementById('darkModeBtn');
    if (btn) {
        btn.innerHTML = enabled
            ? '<i class="fas fa-sun"></i> Light Mode'
            : '<i class="fas fa-moon"></i> Dark Mode';
    }
}
function toggleDarkMode() {
    setDarkMode(!document.body.classList.contains('dark-mode'));
}
function loadDarkModePref() {
    const pref = localStorage.getItem('homepage_dark_mode');
    setDarkMode(pref === '1');
}
document.addEventListener('DOMContentLoaded', function () {
    loadDarkModePref();
    const btn = document.getElementById('darkModeBtn');
    if (btn) btn.addEventListener('click', toggleDarkMode);
});

// --- Notes Widget ---
const NOTES_KEY = 'homepage_notes';
const NOTES_POSITION_KEY = 'homepage_notes_position';
const NOTES_STATE_KEY = 'homepage_notes_state';

let isDragging = false;
let dragStartX = 0;
let dragStartY = 0;
let dragStartLeft = 0;
let dragStartTop = 0;

function saveNotes() {
    const val = document.getElementById('notesTextarea')?.value || '';
    localStorage.setItem(NOTES_KEY, val);
}

function loadNotes() {
    const val = localStorage.getItem(NOTES_KEY) || '';
    const textarea = document.getElementById('notesTextarea');
    if (textarea) textarea.value = val;
}

function saveNotesPosition() {
    const widget = document.getElementById('notesWidget');
    if (!widget) return;

    const rect = widget.getBoundingClientRect();
    const position = {
        left: rect.left,
        top: rect.top
    };
    localStorage.setItem(NOTES_POSITION_KEY, JSON.stringify(position));
}

function loadNotesPosition() {
    const widget = document.getElementById('notesWidget');
    if (!widget) return;

    const savedPosition = localStorage.getItem(NOTES_POSITION_KEY);
    if (savedPosition) {
        try {
            const position = JSON.parse(savedPosition);
            // Ensure the widget stays within screen bounds
            const maxLeft = window.innerWidth - widget.offsetWidth;
            const maxTop = window.innerHeight - widget.offsetHeight;

            const left = Math.max(0, Math.min(position.left, maxLeft));
            const top = Math.max(0, Math.min(position.top, maxTop));

            widget.style.left = left + 'px';
            widget.style.top = top + 'px';
            widget.style.right = 'auto';
            widget.style.bottom = 'auto';
        } catch (e) {
            console.warn('Failed to load notes position:', e);
        }
    }
}

function saveNotesState() {
    const widget = document.getElementById('notesWidget');
    if (!widget) return;

    const state = {
        collapsed: widget.classList.contains('collapsed'),
        hidden: widget.style.display === 'none'
    };
    localStorage.setItem(NOTES_STATE_KEY, JSON.stringify(state));
}

function loadNotesState() {
    const widget = document.getElementById('notesWidget');
    const showBtn = document.getElementById('showNotesBtn');
    if (!widget || !showBtn) return;

    const savedState = localStorage.getItem(NOTES_STATE_KEY);
    if (savedState) {
        try {
            const state = JSON.parse(savedState);
            if (state.hidden) {
                widget.style.display = 'none';
                showBtn.style.display = '';
            } else {
                widget.style.display = '';
                showBtn.style.display = 'none';
                if (state.collapsed) {
                    collapseNotes();
                }
            }
        } catch (e) {
            console.warn('Failed to load notes state:', e);
        }
    }
}

function startDrag(e) {
    const widget = document.getElementById('notesWidget');
    if (!widget || widget.classList.contains('collapsed')) return;

    // Don't start drag if clicking on textarea or buttons
    if (e.target.tagName === 'TEXTAREA' || e.target.tagName === 'BUTTON' || e.target.tagName === 'I') {
        return;
    }

    isDragging = true;
    dragStartX = e.clientX;
    dragStartY = e.clientY;

    const rect = widget.getBoundingClientRect();
    dragStartLeft = rect.left;
    dragStartTop = rect.top;

    widget.classList.add('dragging');
    document.addEventListener('mousemove', drag);
    document.addEventListener('mouseup', stopDrag);

    e.preventDefault();
}

function drag(e) {
    if (!isDragging) return;

    const widget = document.getElementById('notesWidget');
    if (!widget) return;

    const deltaX = e.clientX - dragStartX;
    const deltaY = e.clientY - dragStartY;

    const newLeft = dragStartLeft + deltaX;
    const newTop = dragStartTop + deltaY;

    // Keep widget within screen bounds
    const maxLeft = window.innerWidth - widget.offsetWidth;
    const maxTop = window.innerHeight - widget.offsetHeight;

    const constrainedLeft = Math.max(0, Math.min(newLeft, maxLeft));
    const constrainedTop = Math.max(0, Math.min(newTop, maxTop));

    widget.style.left = constrainedLeft + 'px';
    widget.style.top = constrainedTop + 'px';
    widget.style.right = 'auto';
    widget.style.bottom = 'auto';
}

function stopDrag() {
    if (!isDragging) return;

    isDragging = false;
    const widget = document.getElementById('notesWidget');
    if (widget) {
        widget.classList.remove('dragging');
        saveNotesPosition();
    }

    document.removeEventListener('mousemove', drag);
    document.removeEventListener('mouseup', stopDrag);
}

function collapseNotes() {
    const widget = document.getElementById('notesWidget');
    const collapseBtn = document.getElementById('collapseNotesBtn');
    if (!widget || !collapseBtn) return;

    widget.classList.add('collapsed');
    collapseBtn.innerHTML = '<i class="fas fa-expand-alt"></i>';
    collapseBtn.title = 'Expand Notes';

    // Make the collapsed widget clickable to expand
    widget.addEventListener('click', expandNotes);

    saveNotesState();
}

function expandNotes() {
    const widget = document.getElementById('notesWidget');
    const collapseBtn = document.getElementById('collapseNotesBtn');
    if (!widget || !collapseBtn) return;

    widget.classList.remove('collapsed');
    collapseBtn.innerHTML = '<i class="fas fa-compress-alt"></i>';
    collapseBtn.title = 'Collapse Notes';

    // Remove the click listener to prevent expanding when clicking inside
    widget.removeEventListener('click', expandNotes);

    saveNotesState();
}

function toggleCollapseNotes() {
    const widget = document.getElementById('notesWidget');
    if (!widget) return;

    if (widget.classList.contains('collapsed')) {
        expandNotes();
    } else {
        collapseNotes();
    }
}

function hideNotes() {
    const widget = document.getElementById('notesWidget');
    const showBtn = document.getElementById('showNotesBtn');
    if (!widget || !showBtn) return;

    widget.style.display = 'none';
    showBtn.style.display = '';

    // Position the show button where the widget was
    const rect = widget.getBoundingClientRect();
    if (rect.left > 0 && rect.top > 0) {
        showBtn.style.left = rect.left + 'px';
        showBtn.style.top = rect.top + 'px';
        showBtn.style.right = 'auto';
        showBtn.style.bottom = 'auto';
    }

    saveNotesState();
}

function showNotes() {
    const widget = document.getElementById('notesWidget');
    const showBtn = document.getElementById('showNotesBtn');
    if (!widget || !showBtn) return;

    widget.style.display = '';
    showBtn.style.display = 'none';

    saveNotesState();
}

// Handle window resize to keep widget in bounds
function handleWindowResize() {
    const widget = document.getElementById('notesWidget');
    if (!widget || widget.style.display === 'none') return;

    const rect = widget.getBoundingClientRect();
    const maxLeft = window.innerWidth - widget.offsetWidth;
    const maxTop = window.innerHeight - widget.offsetHeight;

    if (rect.left > maxLeft || rect.top > maxTop) {
        const newLeft = Math.max(0, Math.min(rect.left, maxLeft));
        const newTop = Math.max(0, Math.min(rect.top, maxTop));

        widget.style.left = newLeft + 'px';
        widget.style.top = newTop + 'px';
        saveNotesPosition();
    }
}

document.addEventListener('DOMContentLoaded', function () {
    loadNotes();
    loadNotesState();

    // Load position after a short delay to ensure proper sizing
    setTimeout(loadNotesPosition, 100);

    const textarea = document.getElementById('notesTextarea');
    if (textarea) textarea.addEventListener('input', saveNotes);

    const hideBtn = document.getElementById('hideNotesBtn');
    if (hideBtn) hideBtn.addEventListener('click', hideNotes);

    const showBtn = document.getElementById('showNotesBtn');
    if (showBtn) showBtn.addEventListener('click', showNotes);

    const collapseBtn = document.getElementById('collapseNotesBtn');
    if (collapseBtn) collapseBtn.addEventListener('click', toggleCollapseNotes);

    // Add drag functionality
    const notesHeader = document.querySelector('.notes-header');
    if (notesHeader) {
        notesHeader.addEventListener('mousedown', startDrag);
    }

    // Handle window resize
    window.addEventListener('resize', handleWindowResize);
});