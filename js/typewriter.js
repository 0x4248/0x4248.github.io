/* 0x4248.github.io
 * My github page
 * GitHub: https:///www.github.com/0x4248
 * Licence: GNU General Public License v3.0
 * By: 0x4248
 */

let text = "Hi, I'm 0x4248!";
let i = 0;
let speed = 100;
let cursor = document.querySelector('.blinking-cursor');
let helloIm = document.getElementById('hello-im');

function typeWriter() {
    if (i < text.length) {
        helloIm.innerHTML = text.substring(0, i + 1) + '<span class="blinking-cursor">_</span>';
        i++;
        setTimeout(typeWriter, speed);
    } else {
        cursor.style.display = 'none';
    }
}
setTimeout(typeWriter, 2000);