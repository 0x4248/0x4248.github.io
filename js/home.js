document.addEventListener("DOMContentLoaded", () => {
    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.scale = 1;
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.section, .section-border, .section-border-compact').forEach(element => {
        observer.observe(element);
    });
});



document.querySelector('.top-bar').style.transform = 'translateY(0)';
let lastScrollTop = 0;
window.addEventListener("scroll", () => {
    const topBar = document.querySelector('.top-bar');
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        topBar.style.transform = 'translateY(-100px)';
    } else {
        topBar.style.transform = 'translateY(0)';
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});