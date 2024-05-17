/* 0x4248.github.io
 * My github page
 * GitHub: https:///www.github.com/0x4248
 * Licence: GNU General Public License v3.0
 * By: 0x4248
 */

let innerCursorPos = {
    x: 0,
    y: 0
};
let targetPos = {
    x: 0,
    y: 0
};
let scrollTimer = null;

document.addEventListener('mousemove', (e) => {
    const cursor = document.querySelector('.cursor');
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;

    targetPos.x = e.clientX;
    targetPos.y = e.clientY;
});

document.querySelectorAll('a, button').forEach(el => {
    el.addEventListener('mouseover', () => {
        document.querySelector('.cursor').classList.add('hover');
        document.querySelector('.cursor-inner').classList.add('hover');
    });
    el.addEventListener('mouseleave', () => {
        document.querySelector('.cursor').classList.remove('hover');
        document.querySelector('.cursor-inner').classList.remove('hover');
    });
});

document.addEventListener('wheel', () => {
    document.querySelector('.cursor').classList.add('scroll');
    document.querySelector('.cursor-inner').classList.add('scroll');

    clearTimeout(scrollTimer);
    scrollTimer = setTimeout(() => {
        document.querySelector('.cursor').classList.remove('scroll');
        document.querySelector('.cursor-inner').classList.remove('scroll');
    }, 150);
});

window.addEventListener('wheel', (e) => {
    if (e.deltaY > 0) {
        innerCursorPos.y += 2;
    } else {
        innerCursorPos.y -= 2;
    }
});


function updateInnerCursor() {
    const cursorInner = document.querySelector('.cursor-inner');
    const dx = (targetPos.x - innerCursorPos.x) * 0.2;
    const dy = (targetPos.y - innerCursorPos.y) * 0.2;

    innerCursorPos.x += dx;
    innerCursorPos.y += dy;

    cursorInner.style.left = `${innerCursorPos.x}px`;
    cursorInner.style.top = `${innerCursorPos.y}px`;

    requestAnimationFrame(updateInnerCursor);
}

requestAnimationFrame(updateInnerCursor);