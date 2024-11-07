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
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.section, .section-border, .section-border-compact').forEach(element => {
        observer.observe(element);
    });
});


// if tab pressed show top bar
document.addEventListener("keydown", (event) => {
    if (event.key === 'Tab') {
        document.querySelector('.top-bar').style.transform = 'translateY(0)';
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const topBar = document.querySelector('.top-bar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > window.innerHeight / 10) {
            topBar.style.transform = 'translateY(0)';
        } else {
            topBar.style.transform = 'translateY(-100px)';
        }
    });
});