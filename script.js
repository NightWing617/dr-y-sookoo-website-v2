tailwind.config = {
    theme: {
        extend: {
            colors: {
                primary: '#A5BDFD',
                accent: '#EDEDED',
                highlight: '#2D3142',
                softgreen: '#77DD77',
            },
            fontFamily: {
                heading: ['Montserrat', 'sans-serif'],
                body: ['Raleway', 'sans-serif'],
            }
        }
    }
};

// Mobile menu toggle
document.getElementById('mobile-menu-button').addEventListener('click', function() {
    document.getElementById('mobile-menu').classList.toggle('hidden');
});

// Accordion functionality
const accordions = document.querySelectorAll('.accordion');
accordions.forEach(accordion => {
    accordion.addEventListener('click', function() {
        this.classList.toggle('active');
        const content = this.nextElementSibling;

        // Close other accordions
        accordions.forEach(otherAccordion => {
            if (otherAccordion !== this) {
                otherAccordion.classList.remove('active');
                otherAccordion.nextElementSibling.style.maxHeight = null;
            }
        });

        // Toggle current accordion
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
        });

        // Close mobile menu if open
        document.getElementById('mobile-menu').classList.add('hidden');
    });
});
