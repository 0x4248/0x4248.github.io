function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function title_animation() {
    const title = document.getElementById("title");
    const titleText = title.innerHTML;
    title.innerHTML = "";
    
    for (let i = 0; i < titleText.length; i++) {
      const charSpan = document.createElement("span");
      charSpan.innerText = titleText.charAt(i);
      charSpan.style.opacity = 0;
      title.appendChild(charSpan);
    }
  
    let charIndex = 0;
    let timer = setInterval(() => {
      const charSpans = title.querySelectorAll("span");
      const currentChar = charSpans[charIndex];
      currentChar.style.opacity = 1;
      charIndex++;
  
      if (charIndex === charSpans.length) {
        clearInterval(timer);
      }
    }, 50);
  }
  
title_animation();
function fadeInElements() {
    const elements = document.querySelectorAll("#fade_in");
    let index = 0;

    const fadeInNext = async function () {
        if (index < elements.length) {
            elements[index].style.opacity = 0;
            elements[index].style.display = "block";
            elements[index].style.transition = "opacity 1s ease-in-out";
            elements[index].style.opacity = 1;
            index++;
            setTimeout(fadeInNext, 500);
        }
    };

    fadeInNext();
}
fadeInElements();

function growDiv() {
    var divs = document.getElementsByClassName("repo_card");
    for (var i = 0; i < divs.length; i++) {
        divs[i].addEventListener("mouseover", function () {
            this.style.zIndex = "1";
            this.style.transform = "scale(1.1)";
            this.style.boxShadow = "0 0 10px 1px rgba(255, 255, 255, 0.5)";
            
            var otherDivs = document.querySelectorAll(".repo_card:not(:hover)");
            for (var j = 0; j < otherDivs.length; j++) {
                otherDivs[j].style.filter = "brightness(0.4)";
            }
        });
        divs[i].addEventListener("mouseout", function () {
            this.style.zIndex = "0";
            this.style.transform = "scale(1)";
            this.style.boxShadow = "0 0 10px 1px rgba(0, 0, 0, 0.5)";
            
            var otherDivs = document.querySelectorAll(".repo_card:not(:hover)");
            for (var j = 0; j < otherDivs.length; j++) {
                otherDivs[j].style.filter = "none";
            }
        });
    }
}

growDiv();
