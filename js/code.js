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
    svc 0`

let code_element = document.getElementById('code');

function colourCode(code) {
    code = code.replace(/mov|ldr|svc|len/g, '<span style="color: lightcoral;">$&</span>');
    code = code.replace(/\.\w+/g, '<span style="color: lightgreen;">$&</span>');
    code = code.replace(/_start/g, '<span style="color: lightpink;">$&</span>');
    code = code.replace(/x[0-9]/g, '<span style="color: lightblue;">$&</span>');
    code = code.replace(/[0-9]/g, '<span style="color: lightblue;">$&</span>');
    return code;
}


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
        code = colourCode(code);
        code_element.innerHTML = code + '<span class="blinking-cursor">_</span>';
        already_shown = true;
    }
});