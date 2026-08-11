document.addEventListener("DOMContentLoaded", () => {
    console.log("Logics A Tuition Center website loaded.");
    
    // Add smooth scrolling for navigation links
    document.querySelectorAll('.vintage-nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
});
