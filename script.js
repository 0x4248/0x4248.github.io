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
    add_boot_text("Welcome to Kali Linux!")
    await sleep(500)
    add_boot_text("root@kali:/$ nmap -sP 192.168.1.0/25")
    await sleep(1000)
    add_boot_text("Starting Nmap 7.92 ( https://nmap.org ) at 2022-1-1 00:00 EST")
    await sleep(500)
    add_boot_text("Nmap scan report for 192.168.1.1")
    await sleep(10)
    add_boot_text("Host is up (0.0034s latency).")
    await sleep(30)
    add_boot_text("Nmap scan report for 192.168.1.2")
    await sleep(30)
    add_boot_text("Host is up (0.0052s latency).")
    await sleep(30)
    add_boot_text("Nmap scan report for 192.168.1.254")
    await sleep(30)
    add_boot_text("Host is up (0.0168s latency).")
    await sleep(500)
    add_boot_text("root@kali:/$ nmap -sV 192.168.1.2")
    await sleep(1000)
    add_boot_text("Starting Nmap 7.92 ( https://nmap.org ) at 2022-1-1 00:00 EST")
    add_boot_text("Nmap scan report for 192.168.1.2")
    add_boot_text("Host is up (0.052s latency).")
    add_boot_text("Not shown: 998 closed tcp ports (conn-refused)")
    add_boot_text("PORT      STATE SERVICE    VERSION")
    add_boot_text("22/tcp open  ssh")
    add_boot_text("80/tcp open  http")
    add_boot_text("Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .")
    add_boot_text("Nmap done: 1 IP address (1 host up) scanned in 30.29 seconds")
    await sleep(50)
    add_boot_text("root@kali:/$ python3 -m openhttpsite -ip=192.168.1.2 -port=80")
    await sleep(200)
    add_boot_text("Connecting to site...")
    await sleep(1000)
    add_boot_text("Loading site...")
    await sleep(100)
    document.getElementById("boot").innerHTML = "" 
    document.getElementById("body").style.backgroundColor = "white"
    await sleep(300)
    document.getElementById("body").style.backgroundColor = "blue"
    await sleep(500)
    document.getElementById("app").style.display = "block"
}

onload()