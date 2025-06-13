document.addEventListener('mousemove', (e) => {
    const image = document.querySelector('.parallax-image');
    const xAxis = (window.innerWidth / 2 - e.pageX) / 50;
    const yAxis = (window.innerHeight / 2 - e.pageY) / 50;
    image.style.transform = `translate(${xAxis}px, ${yAxis}px)`;
});

const counters = document.querySelectorAll('.counter');
const speed = 200;

function animateCounter(counter) {
    const target = +counter.getAttribute('data-target');
    let count = 0;
    
    const updateCount = () => {
        const increment = target / speed;
        if (count < target) {
            count += increment;
            counter.innerText = Math.ceil(count);
            setTimeout(updateCount, 1);
        } else {
            counter.innerText = target;
        }
    };
    
    updateCount();
}

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            if (entry.target.classList.contains('counter')) {
                animateCounter(entry.target);
            } else {
                entry.target.classList.add('animate__animated');
                entry.target.classList.add(entry.target.dataset.animation || 'animate__fadeIn');
            }
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.counter, .animate__animated').forEach(el => {
    observer.observe(el);
});

document.querySelector('.register-btn').addEventListener('click', (e) => {
    // e.preventDefault();
    const targetSection = document.querySelector('#registration');
    if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
    }
});


document.querySelectorAll('.bullet-item, .details-item, .stat-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'translateY(-5px)';
    });
    
    item.addEventListener('mouseleave', () => {
        item.style.transform = 'translateY(0)';
    });
});


function createRipple(event) {
    const button = event.currentTarget;
    const ripple = document.createElement('span');
    const rect = button.getBoundingClientRect();
    
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    ripple.classList.add('ripple');
    
    button.appendChild(ripple);
    
    ripple.addEventListener('animationend', () => {
        ripple.remove();
    });
}

document.querySelector('.register-btn').addEventListener('click', createRipple);





document.addEventListener('DOMContentLoaded', () => {
    const elements = [
        '.location-tag',
        '.workshop-title',
        '.workshop-subtitle',
        '.description-section',
        '.details-section',
        '.cert-section',
        '.trainer-section',
        '.faq-section'
    ];

    elements.forEach((selector, index) => {
        const element = document.querySelector(selector);
        if (element) {
            element.classList.add('fade-in');
            element.classList.add(`delay-${index + 1}`);
        }
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('.fade-in').forEach(element => {
        observer.observe(element);
    });

    setTimeout(() => {
        document.querySelectorAll('.fade-in').forEach(element => {
            element.classList.add('visible');
        });
    }, 100);
});

const animateOnScroll = () => {
    const elements = document.querySelectorAll('.bullet-item, .cert-feature, .faq-item');
    elements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = `all 0.5s ease-out ${index * 0.1}s`;
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });

    elements.forEach(element => observer.observe(element));
};

window.addEventListener('load', animateOnScroll);



document.addEventListener('DOMContentLoaded', () => {
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        item.classList.remove('active');
    });

    document.querySelectorAll('.faq-question').forEach(question => {
        question.addEventListener('click', () => {
            const faqItem = question.parentElement;
            
            faqItems.forEach(item => {
                if (item !== faqItem) {
                    item.classList.remove('active');
                }
            });
            
            faqItem.classList.toggle('active');
        });
    });

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.faq-item')) {
            faqItems.forEach(item => {
                item.classList.remove('active');
            });
        }
    });

    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            if (window.innerWidth <= 768) {
                faqItems.forEach(item => {
                    item.classList.remove('active');
                });
            }
        }, 250);
    });
});