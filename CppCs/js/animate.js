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
    await sleep(500)
    await opacity_to_100("body")
}
onload()