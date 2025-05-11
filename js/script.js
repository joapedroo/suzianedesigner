// Preloader
window.addEventListener('load', function() {
    const preloader = document.querySelector('.preloader');
    setTimeout(() => {
        preloader.classList.add('fade-out');
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    }, 1000);
});

// Mobile Menu
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const menuOverlay = document.querySelector('.menu-overlay');
const closeBtn = document.querySelector('.close-btn');
const navLinks = document.querySelectorAll('.nav-link');

mobileMenuBtn.addEventListener('click', function() {
    menuOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
});

closeBtn.addEventListener('click', function() {
    menuOverlay.classList.remove('active');
    document.body.style.overflow = 'auto';
});

navLinks.forEach(link => {
    link.addEventListener('click', function() {
        menuOverlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
});

// Header Scroll Effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    const backToTop = document.querySelector('.back-to-top');
    
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
        backToTop.classList.add('active');
    } else {
        header.classList.remove('scrolled');
        backToTop.classList.remove('active');
    }
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Back to Top Button
const backToTop = document.querySelector('.back-to-top');
backToTop.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Animate Skills on Scroll
const skillBars = document.querySelectorAll('.skill-progress');

function animateSkills() {
    skillBars.forEach(bar => {
        const width = bar.getAttribute('data-width');
        bar.style.width = width;
    });
}

// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    offset: 100
});

// Portfolio Item Hover Effect
const portfolioItems = document.querySelectorAll('.portfolio-item');

portfolioItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.querySelector('.portfolio-overlay').style.opacity = '1';
        this.querySelector('.portfolio-img img').style.transform = 'scale(1.1)';
    });
    
    item.addEventListener('mouseleave', function() {
        this.querySelector('.portfolio-overlay').style.opacity = '0';
        this.querySelector('.portfolio-img img').style.transform = 'scale(1)';
    });
});

// Contact Form Submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = this.querySelector('#name').value;
        const email = this.querySelector('#email').value;
        const phone = this.querySelector('#phone').value;
        const message = this.querySelector('#message').value;
        
        // Format the message for WhatsApp
        const whatsappText = `Olá Suziane!\n\n*Nome:* ${name}\n*E-mail:* ${email}\n*Telefone:* ${phone || 'Não informado'}\n\n*Mensagem:*\n${message}\n\n(Enviado através do seu portfólio)`;
        
        // Encode the message for URL
        const encodedMessage = encodeURIComponent(whatsappText);
        
        // Your WhatsApp number (with country code but without + or 00)
        const whatsappNumber = '5591980747442';
        
        // Create WhatsApp link
        const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
        
        // Open WhatsApp in a new tab
        window.open(whatsappLink, '_blank');
        
        // Optional: Show confirmation message
        alert(`Obrigado, ${name}! Você será redirecionado para o WhatsApp para completar o contato.`);
        
        // Reset form
        this.reset();
    });
}

// Modal Contact Form
const modalContactForm = document.getElementById('modalContactForm');
if (modalContactForm) {
    modalContactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = this.querySelector('#modalName').value;
        const email = this.querySelector('#modalEmail').value;
        const phone = this.querySelector('#modalPhone').value;
        const message = this.querySelector('#modalMessage').value;
        
        // Format the message for WhatsApp
        const whatsappText = `Olá Suziane! (Contato via Modal)\n\n*Nome:* ${name}\n*E-mail:* ${email}\n*Telefone:* ${phone || 'Não informado'}\n\n*Mensagem:*\n${message}\n\n(Enviado através do seu portfólio)`;
        
        // Encode the message for URL
        const encodedMessage = encodeURIComponent(whatsappText);
        
        // Your WhatsApp number
        const whatsappNumber = '5591980747442';
        
        // Create WhatsApp link
        const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
        
        // Open WhatsApp in a new tab
        window.open(whatsappLink, '_blank');
        
        // Show confirmation
        alert(`Obrigado, ${name}! Você será redirecionado para o WhatsApp.`);
        
        // Close modal and reset form
        closeModal();
        this.reset();
    });
}

// Newsletter Form Submission
const newsletterForm = document.getElementById('newsletterForm');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = this.querySelector('input[type="email"]').value;
        
        // Here you would typically send the email to a server
        // For demonstration, we'll just show an alert
        alert(`Obrigado por assinar nossa newsletter! Um e-mail de confirmação foi enviado para ${email}.`);
        
        // Reset form
        this.reset();
    });
}

// Modal Functions
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeModal() {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        modal.classList.remove('active');
    });
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside content
window.addEventListener('click', function(e) {
    if (e.target.classList.contains('modal')) {
        closeModal();
    }
});

// Close modal with ESC key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// Project Modal
const viewProjectButtons = document.querySelectorAll('.view-project');
const projectModal = document.getElementById('projectModal');

if (viewProjectButtons.length && projectModal) {
    viewProjectButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get project data
            const projectItem = this.closest('.portfolio-item');
            const projectImg = projectItem.querySelector('.portfolio-img img');
            const projectTitle = projectItem.querySelector('h3').textContent;
            const projectCategory = projectItem.querySelector('p').textContent;
            
            // Set project data in modal
            document.getElementById('projectTitle').textContent = projectTitle;
            document.getElementById('projectDescription').textContent = 'Este é um exemplo de descrição detalhada do projeto. Em um cenário real, esta descrição seria personalizada para cada projeto.';
            document.getElementById('projectClient').textContent = 'Cliente Exemplo';
            document.getElementById('projectCategory').textContent = projectCategory;
            document.getElementById('projectDate').textContent = 'Janeiro 2024';
            document.getElementById('projectLink').setAttribute('href', '#');
            
            // Set main image
            const mainImage = document.getElementById('projectMainImage');
            mainImage.src = projectImg.src;
            mainImage.alt = projectImg.alt;
            
            // Set thumbnails (usando a mesma imagem para exemplo)
            const thumbnails = document.querySelectorAll('.thumbnail img');
            thumbnails.forEach(thumbnail => {
                thumbnail.src = projectImg.src;
                thumbnail.alt = projectImg.alt;
            });
            
            // Open modal
            openModal('projectModal');
        });
    });
}

// Thumbnail click event
const thumbnails = document.querySelectorAll('.thumbnail');
if (thumbnails.length) {
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            // Remove active class from all thumbnails
            thumbnails.forEach(t => t.classList.remove('active'));
            
            // Add active class to clicked thumbnail
            this.classList.add('active');
            
            // Update main image
            const mainImage = document.getElementById('projectMainImage');
            const thumbnailImg = this.querySelector('img');
            mainImage.src = thumbnailImg.src;
            mainImage.alt = thumbnailImg.alt;
        });
    });
}

// Animate elements when they come into view
const animateOnScroll = function() {
    const elements = document.querySelectorAll('[data-aos]');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementPosition < windowHeight - 100) {
            element.classList.add('aos-animate');
        }
    });
};

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// Initialize skills animation
window.addEventListener('scroll', function() {
    const skillsSection = document.querySelector('.about');
    if (isElementInViewport(skillsSection)) {
        animateSkills();
        // Remove event listener after animation to prevent re-triggering
        window.removeEventListener('scroll', animateSkills);
    }
});

function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom >= 0
    );
}

// Parallax Effect
window.addEventListener('scroll', function() {
    const showcase = document.querySelector('.hero');
    const scrollPosition = window.pageYOffset;
    
    if (showcase) {
        showcase.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
    }
});

// Floating Animation for Elements
const floatingElements = document.querySelectorAll('.floating');
floatingElements.forEach(element => {
    element.style.animation = `float 3s ease-in-out infinite`;
});