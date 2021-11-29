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
    await sleep(50)
    add_boot_text("Connecting to Network")
    await sleep(50)
    add_boot_text("Connected to network :"+getRndInteger(100,999)+"."+getRndInteger(10,999)+"."+getRndInteger(10,999)+"."+getRndInteger(10,999))
    await sleep(50)
    add_boot_text("Enter username for browser: root")
    await sleep(50)
    add_boot_text("Welcome to browserOS 0.1 LTS")
    await sleep(30)
    add_boot_text("System information:")
    await sleep(30)
    add_boot_text("  System load:  0.06               Processes:                140")
    await sleep(30)
    add_boot_text("  Usage of /:   14.0% of 57.34GB   Users logged in:          1")
    add_boot_text("root@browser:/$")
    await sleep(50)
    add_boot_text("root@browser:/$python3 -m awesomelewis2007_website")
    await sleep(50)
    add_boot_text("Contacting github.io")
    await sleep(50)
    add_boot_text("Returned response")
    await sleep(100)
    add_boot_text("style.css")
    await sleep(50)
    add_boot_text("script.js")
    await sleep(50)	
    add_boot_text("vga.ttf")
    await sleep(10)	
    add_boot_text("Starting render process")
    await sleep(10)	
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