
function task1() {
    // var date = moment(new Date()).format("dddd")
    
    var date = new Date().getTime()
    var firstRamadan = new Date("11 march , 2024").getTime()
    var diff = firstRamadan - date
    var dayDiff = (diff / (1000 * 60 * 60 * 24))
    let dayMod = dayDiff - Math.floor(dayDiff)
    let day = Math.floor(dayDiff)
    let hours = dayMod * 24
    let modHour = hours - Math.floor(hours)
    let minutes = modHour  * 60
    let modMin = minutes - Math.floor(minutes)
    let seconds = modMin * 60
    console.log(dayDiff, hours, minutes, seconds)
    // console.log(date)
    var ramzan = document.getElementById("ramzanCount")
    console.log(ramzan)
    ramzan.innerHTML = `Day:  ${day}   Hours: ${Math.floor(hours)} Minutes: ${Math.floor(minutes)}  Seconds: ${Math.floor(seconds)}`
}
setInterval(() => {
    task1()

}, 1000);