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


const songs = [
    "mpfupLHZhcA",
    "RSxlFN95PcA",
    "b4VFkSG4lk8",
    "RjnXrg35vcc",
    "MtCC8Wn80A4",
    "OtLcqr3RQJY",
    "FcgJJ_s76SQ",
    "tPhG5aSFXl4",
    "umkPXVAGebQ",
    "j1IdZcV73e4"
];


let currentSongIndex = -1;

const musicFrame = document.getElementById("music")

function getRandomSongIndex() {
    let newIndex;
    do {
        newIndex = Math.floor(Math.random() * songs.length);
    } while (newIndex === currentSongIndex && songs.length > 1);
    return newIndex;
}

function changeMusic() {
    if (!musicFrame) return;
    currentSongIndex = getRandomSongIndex();
    const videoId = songs[currentSongIndex];
    musicFrame.src = `https://www.youtube-nocookie.com/embed/${videoId}?&amp;controls=0&modestbranding=1&color=white`;
}

document.addEventListener("DOMContentLoaded", changeMusic);