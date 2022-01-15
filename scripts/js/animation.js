const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}
async function opacity_to_100(id){
    var opacity = 0
    for (let i = 0; i < 25; i++) {
        document.getElementById(id).style.opacity = opacity+"%"
        opacity = opacity + 4
        await sleep(20)
    } 
}
async function opacity_to_0(id){
    var opacity = 100
    for (let i = 0; i < 25; i++) {
        document.getElementById(id).style.opacity = opacity+"%"
        opacity = opacity - 4
        await sleep(20)
    }
}

async function onload(){
    opacity_to_100("main")
}
onload()
var image = document.getElementsByClassName('parallax');
new simpleParallax(image);
particlesJS.load('particles-js', 'particles.json', function() {
    console.log('callback - particles.js config loaded');
  });