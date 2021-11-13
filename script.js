function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function add_boot_text(text){
    document.getElementById("boot").innerHTML = document.getElementById("boot").innerHTML+"<p>"+text+"</p>"
}
function gotoBottom(id){
    var element = document.getElementById(id);
    element.scrollTop = element.scrollHeight - element.clientHeight;
}
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}
async function onload(){
    add_boot_text("Starting OS")
    await sleep(500)
    add_boot_text("Starting Kernel")
    await sleep(500)
    add_boot_text("Starting Network")
    await sleep(100)
    add_boot_text("Connecting to Network")
    await sleep(100)
    add_boot_text("Connected to network :"+getRndInteger(100,999)+"."+getRndInteger(10,999)+"."+getRndInteger(10,999)+"."+getRndInteger(10,999))
    await sleep(100)
    add_boot_text("Contacting github.io")
    await sleep(100)
    add_boot_text("Returned response")
    await sleep(100)
    add_boot_text("style.css")
    await sleep(10)
    add_boot_text("script.js")
    await sleep(10)	
    add_boot_text("vga.ttf")
    await sleep(10)	
    add_boot_text("Starting render process")
    await sleep(1000)	
    add_boot_text("Opening app")
    await sleep(100)	
    document.getElementById("boot").innerHTML = "" 
    document.getElementById("body").style.backgroundColor = "white"
    await sleep(300)
    document.getElementById("body").style.backgroundColor = "blue"
    await sleep(500)
    document.getElementById("app").style.display = "block"
}

onload()