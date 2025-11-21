// main.js - Main application file for loading components and handling interactions

// Load navbar component
async function loadNavbar() {
  try {
    const response = await fetch('../components/navbar.html');
    const html = await response.text();
    document.getElementById('navbar').innerHTML = html;
    updateActiveLink();
    setupNavbarToggle();
  } catch (error) {
    console.error('Error loading navbar:', error);
  }
}

// Load footer component
async function loadFooter() {
  try {
    const response = await fetch('../components/footer.html');
    const html = await response.text();
    document.getElementById('footer').innerHTML = html;
  } catch (error) {
    console.error('Error loading footer:', error);
  }
}

// Load hero component
async function loadHero() {
  try {
    const heroElement = document.getElementById('hero');
    if (!heroElement) return;
    
    const response = await fetch('../components/hero.html');
    const html = await response.text();
    heroElement.innerHTML = html;
  } catch (error) {
    console.error('Error loading hero:', error);
  }
}

// Update active link based on current page
function updateActiveLink() {
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.navbar-link');
  
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (currentPath === href || (currentPath === '/' && href === '/')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

// Setup mobile navbar toggle behavior
function setupNavbarToggle() {
  const toggle = document.querySelector('.navbar-toggle');
  const mobileMenu = document.getElementById('navbar-mobile-menu');
  const body = document.body;

  if (!toggle || !mobileMenu) return;

  // --- Helper Functions --- //

  const openMenu = () => {
    toggle.setAttribute('aria-expanded', 'true');
    mobileMenu.setAttribute('data-visible', 'true');
    // Optional: Prevent background scrolling when menu is open
    body.style.overflow = 'hidden'; 
  };

  const closeMenu = () => {
    toggle.setAttribute('aria-expanded', 'false');
    mobileMenu.setAttribute('data-visible', 'false');
    // Restore background scrolling
    body.style.overflow = ''; 
  };

  const isMenuOpen = () => {
    return toggle.getAttribute('aria-expanded') === 'true';
  };

  // --- Core Toggle Logic --- //

  toggle.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent this click from triggering the "click outside" listener immediately
    if (isMenuOpen()) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  // --- 1. Close when clicking a link --- //
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });

  // --- 2. Close with Escape Key --- //
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isMenuOpen()) {
      closeMenu();
    }
  });

  // --- 3. Close when clicking outside the menu --- //
  document.addEventListener('click', (e) => {
    if (isMenuOpen()) {
      // If the click target is NOT the menu and NOT the toggle button
      if (!mobileMenu.contains(e.target) && !toggle.contains(e.target)) {
        closeMenu();
      }
    }
  });

  // --- 4. Close when resizing screen (Orientation change or Desktop switch) --- //
  window.addEventListener('resize', () => {
    // If screen gets larger than mobile breakpoint (e.g., 768px) and menu is open
    if (window.innerWidth > 768 && isMenuOpen()) {
      closeMenu();
    }
  });

  // --- 5. Close on Scroll (Optional but requested) --- //
  // Note: Usually, "Body Scroll Lock" (above) is better UX than closing on scroll.
  // However, here is the code to close it if the user manages to scroll the page.
  window.addEventListener('scroll', () => {
    if (isMenuOpen()) {
        // Simple check: if page is scrolled more than 50px, close menu
        closeMenu();
    }
  }, { passive: true });
}

// Initialize
document.addEventListener('DOMContentLoaded', setupNavbarToggle);

// Handle contact form submission
function handleContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = new FormData(form);
    const statusDiv = document.getElementById('form-status');
    
    // Show success message (in production, send to server)
    statusDiv.innerHTML = '<div class="alert alert-success">Thank you! We\'ll get back to you soon.</div>';
    form.reset();
    
    // Clear success message after 5 seconds
    setTimeout(() => {
      statusDiv.innerHTML = '';
    }, 5000);
  });
}

// Initialize app
document.addEventListener('DOMContentLoaded', async () => {
  await loadNavbar();
  await loadFooter();
  await loadHero();
  handleContactForm();
  
  console.log('✓ Application initialized');
});
