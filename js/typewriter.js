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
let other = ["Programmer", "Cybersecurity enthusiast", "Linux lover", "Uses python too much", "Loves anything open source", "Furry", "Hacker", "Developer", "Tech enthusiast", "Demiboy", "Loves dogs"];
let otherIndex = 0;

function typeWriter() {
    if (i < text.length) {
        helloIm.innerHTML = text.substring(0, i + 1) + '<span class="blinking-cursor">_</span>';
        i++;
        setTimeout(typeWriter, speed);
    } else {
        setTimeout(eraseText, 2000);
    }
}

function eraseText() {
    if (i >= 0) {
        helloIm.innerHTML = text.substring(0, i) + '<span class="blinking-cursor">_</span>';
        i--;
        setTimeout(eraseText, speed / 2);
    } else {
        setTimeout(typeOther, 500);
    }
}

function typeOther() {
    let currentWord = other[otherIndex];
    let j = 0;

    function typeWord() {
        if (j <= currentWord.length) {
            helloIm.innerHTML = currentWord.substring(0, j) + '<span class="blinking-cursor">_</span>';
            j++;
            setTimeout(typeWord, speed);
        } else {
            setTimeout(eraseWord, 2000);
        }
    }

    function eraseWord() {
        if (j >= 0) {
            helloIm.innerHTML = currentWord.substring(0, j) + '<span class="blinking-cursor">_</span>';
            j--;
            setTimeout(eraseWord, speed / 2);
        } else {
            otherIndex = (otherIndex + 1) % other.length;
            setTimeout(typeOther, 500);
        }
    }

    typeWord();
}

setTimeout(typeWriter, 2000);
