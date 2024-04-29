/* 0x4248.github.io
 * My github page
 * GitHub: https:///www.github.com/0x4248
 * Licence: GNU General Public License v3.0
 * By: 0x4248
 */

function showOverlayWindow(id) {
    var overlay = document.getElementById(id);
    overlay.style.display = "block";
    overlay.style.opacity = "1";
    overlay.style.transition = "opacity 0.5s";
    var main = document.getElementById("main");
    main.style.filter = "blur(5px)";
    main.style.transition = "filter 0.5s";
    document.body.style.overflow = "hidden";
    overlay.style.overflow = "scroll";
}

function hideOverlayWindow(id) {
    var overlay = document.getElementById(id);
    overlay.style.display = "none";
    overlay.style.opacity = "0";
    overlay.style.transition = "opacity 0.5s";
    var main = document.getElementById("main");
    main.style.filter = "none";
    main.style.transition = "filter 0.5s";
    document.body.style.overflow = "auto";
}

