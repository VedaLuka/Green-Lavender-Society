// Smooth Scrolling for Internal Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Scroll-triggered Animations
document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll('.hidden');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    elements.forEach(element => observer.observe(element));
});

// Testimonials Carousel Auto-Rotate (if using a carousel)
const carousel = document.querySelector('#testimonialsCarousel');
if (carousel) {
    const testimonials = new bootstrap.Carousel(carousel, {
        interval: 5000,
        pause: 'hover'
    });
}

// Highlight Active Navbar Links on Scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');

    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 80;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});

// Back-to-Top Button
const backToTopButton = document.createElement('button');
backToTopButton.innerText = '↑';
backToTopButton.id = 'back-to-top';
backToTopButton.style.position = 'fixed';
backToTopButton.style.bottom = '20px';
backToTopButton.style.right = '20px';
backToTopButton.style.padding = '10px';
backToTopButton.style.fontSize = '18px';
backToTopButton.style.border = 'none';
backToTopButton.style.borderRadius = '50%';
backToTopButton.style.backgroundColor = '#2a9d8f';
backToTopButton.style.color = 'white';
backToTopButton.style.display = 'none';
backToTopButton.style.cursor = 'pointer';
backToTopButton.style.zIndex = '1000';

document.body.appendChild(backToTopButton);

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Interactive FAQ
const faqItems = document.querySelectorAll('.faq-item h5');
faqItems.forEach(item => {
    item.addEventListener('click', () => {
        const parent = item.parentElement;
        parent.classList.toggle('open');
        const content = parent.querySelector('p');
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
});

// CTA Button Hover Effect
const ctaButton = document.querySelector('.cta button');
if (ctaButton) {
    ctaButton.addEventListener('mouseover', () => {
        ctaButton.style.boxShadow = '0px 4px 10px rgba(42, 157, 143, 0.5)';
    });
    ctaButton.addEventListener('mouseout', () => {
        ctaButton.style.boxShadow = 'none';
    });
}

// Gallery Lightbox (Optional Feature)
const galleryImages = document.querySelectorAll('.gallery img');
galleryImages.forEach(image => {
    image.addEventListener('click', () => {
        const lightbox = document.createElement('div');
        lightbox.id = 'lightbox';
        lightbox.style.position = 'fixed';
        lightbox.style.top = '0';
        lightbox.style.left = '0';
        lightbox.style.width = '100%';
        lightbox.style.height = '100%';
        lightbox.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        lightbox.style.display = 'flex';
        lightbox.style.justifyContent = 'center';
        lightbox.style.alignItems = 'center';
        lightbox.style.zIndex = '1000';

        const img = document.createElement('img');
        img.src = image.src;
        img.style.maxWidth = '80%';
        img.style.maxHeight = '80%';
        img.style.borderRadius = '10px';
        lightbox.appendChild(img);

        lightbox.addEventListener('click', () => {
            document.body.removeChild(lightbox);
        });

        document.body.appendChild(lightbox);
    });
});
