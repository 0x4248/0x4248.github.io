/* 0x4248.github.io
 * My github page
 * GitHub: https:///www.github.com/0x4248
 * Licence: GNU General Public License v3.0
 * By: 0x4248
 */

let code = `
.section .data
    msg:
        .ascii \"0x4248\\n\"
        len = . - msg

.section .text
    .globl _start

_start:
    mov x0, 1
    ldr x1, =msg
    ldr x2, =len
    mov x8, 64
    svc 0
    mov x8, 93
    mov x0, 0
    svc 0`;

let code_element = document.getElementById('code');


let code_element_in_view = false;
let code_element_top = code_element.getBoundingClientRect().top;
let code_element_bottom = code_element.getBoundingClientRect().bottom;

function checkCodeElementInView() {
    code_element_top = code_element.getBoundingClientRect().top;
    code_element_bottom = code_element.getBoundingClientRect().bottom;
    if (code_element_top < window.innerHeight && code_element_bottom > 0) {
        code_element_in_view = true;
    } else {
        code_element_in_view = false;
    }
}

checkCodeElementInView();

let already_shown = false;

window.addEventListener('scroll', function() {
    checkCodeElementInView();
    if (code_element_in_view && !already_shown) {
        animateTyping(code);
        already_shown = true;
    }
});

function animateTyping(code) {
    let index = 0;
    let codeHTML = '';
    let interval;
    let inString = false;

    function addColor() {
        if (index >= code.length) {
            clearInterval(interval);
            code_element.innerHTML = codeHTML + '<span class="blinking-cursor">_</span>';
        } else {
            let char = code.charAt(index);
            let coloredChar = char;

            // if , colour code light blue
            if (char === ',') {
                coloredChar = '<span style="color: lightblue;">,</span>';
            }

            if (char === ':') {
                coloredChar = '<span style="color: lightblue;">:</span>';
            }

            if (char === '.') {
                coloredChar = '<span style="color: lightblue;">.</span>';
            }

            if (char === '"') {
                inString = !inString;
                coloredChar = '<span style="color: lightgreen;">"</span>';
            }
            if (inString) {
                coloredChar = '<span style="color: lightgreen;">' + char + '</span>';
            }
            codeHTML += coloredChar;
            code_element.innerHTML = codeHTML + '<span class="blinking-cursor">_</span>';
            index++;
        }
    }

    interval = setInterval(addColor, 20); // Adjust the interval duration for speed
}