import './style.css'

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileLinks = document.querySelectorAll('.mobile-link');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }

  // 2. Dark Mode Toggle
  const html = document.documentElement;
  const darkModeToggle = document.getElementById('dark-mode-toggle');
  const mobileDarkModeToggle = document.getElementById('mobile-dark-mode-toggle');
  
  const lightIcon = document.getElementById('theme-toggle-light-icon');
  const darkIcon = document.getElementById('theme-toggle-dark-icon');
  const mobileLightIcon = document.getElementById('mobile-theme-toggle-light-icon');
  const mobileDarkIcon = document.getElementById('mobile-theme-toggle-dark-icon');

  // Check initial state
  if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    html.classList.add('dark');
    lightIcon?.classList.remove('hidden');
    mobileLightIcon?.classList.remove('hidden');
  } else {
    html.classList.remove('dark');
    darkIcon?.classList.remove('hidden');
    mobileDarkIcon?.classList.remove('hidden');
  }

  const toggleDarkMode = () => {
    html.classList.toggle('dark');
    const isDark = html.classList.contains('dark');
    
    if (isDark) {
      localStorage.setItem('theme', 'dark');
      lightIcon?.classList.remove('hidden');
      darkIcon?.classList.add('hidden');
      mobileLightIcon?.classList.remove('hidden');
      mobileDarkIcon?.classList.add('hidden');
    } else {
      localStorage.setItem('theme', 'light');
      lightIcon?.classList.add('hidden');
      darkIcon?.classList.remove('hidden');
      mobileLightIcon?.classList.add('hidden');
      mobileDarkIcon?.classList.remove('hidden');
    }
  };

  darkModeToggle?.addEventListener('click', toggleDarkMode);
  mobileDarkModeToggle?.addEventListener('click', toggleDarkMode);

  // 3. Video Modal
  const videoTriggers = document.querySelectorAll('.video-trigger');
  const videoModal = document.getElementById('video-modal');
  const closeVideoBtn = document.getElementById('close-video');

  videoTriggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
      videoModal?.classList.remove('hidden');
      setTimeout(() => {
        videoModal?.classList.remove('opacity-0');
      }, 10);
    });
  });

  const closeVideo = () => {
    videoModal?.classList.add('opacity-0');
    setTimeout(() => {
      videoModal?.classList.add('hidden');
    }, 300);
  };

  closeVideoBtn?.addEventListener('click', closeVideo);
  videoModal?.addEventListener('click', (e) => {
    if (e.target === videoModal) closeVideo();
  });

  // 4. Recipe Filter (Featured Dishes)
  const filterBtns = document.querySelectorAll('.filter-btn');
  const menuItems = document.querySelectorAll('.menu-item');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active class from all
      filterBtns.forEach(b => {
        b.classList.remove('active', 'bg-accent', 'text-white', 'border-accent');
        b.classList.add('border-primary/20', 'dark:border-secondary/20', 'text-primary', 'dark:text-secondary');
      });
      
      // Add active to clicked
      btn.classList.add('active', 'bg-accent', 'text-white', 'border-accent');
      btn.classList.remove('border-primary/20', 'dark:border-secondary/20', 'text-primary', 'dark:text-secondary');

      const filter = btn.getAttribute('data-filter');

      menuItems.forEach(item => {
        if (filter === 'all' || item.classList.contains(filter)) {
          item.style.display = 'block';
          // Small animation
          item.classList.add('opacity-0', 'scale-95');
          setTimeout(() => {
            item.classList.remove('opacity-0', 'scale-95');
          }, 50);
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  // 5. Testimonials Slider
  const slider = document.getElementById('testimonial-slider');
  const dots = document.querySelectorAll('.slider-dot');
  let currentSlide = 0;
  
  const goToSlide = (index) => {
    currentSlide = index;
    if (slider) {
      slider.style.transform = `translateX(-${index * (100 / 3)}%)`;
    }
    
    dots.forEach((dot, i) => {
      if (i === index) {
        dot.classList.remove('bg-secondary/30');
        dot.classList.add('bg-accent');
      } else {
        dot.classList.add('bg-secondary/30');
        dot.classList.remove('bg-accent');
      }
    });
  };

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => goToSlide(index));
  });

  // Auto slide
  if (slider) {
    setInterval(() => {
      let nextSlide = (currentSlide + 1) % dots.length;
      goToSlide(nextSlide);
    }, 5000);
  }

  // 6. Form Validation
  const reservationForm = document.getElementById('reservation-form');
  const formMessage = document.getElementById('form-message');

  if (reservationForm) {
    reservationForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const name = document.getElementById('name').value;
      const guests = document.getElementById('guests').value;
      const date = document.getElementById('date').value;
      const time = document.getElementById('time').value;

      if (name && guests && date && time) {
        formMessage.textContent = 'Reservation confirmed! We look forward to hosting you.';
        formMessage.className = 'block text-center mt-4 font-medium p-3 rounded-lg bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400';
        reservationForm.reset();
        setTimeout(() => {
          formMessage.className = 'hidden';
        }, 5000);
      }
    });
  }

  const newsletterForm = document.getElementById('newsletter-form');
  const newsletterMsg = document.getElementById('newsletter-msg');

  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = newsletterForm.querySelector('input');
      if (input && input.value) {
        newsletterMsg.classList.remove('hidden');
        newsletterForm.reset();
        setTimeout(() => {
          newsletterMsg.classList.add('hidden');
        }, 3000);
      }
    });
  }
});