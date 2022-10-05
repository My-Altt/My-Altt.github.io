setInterval(showTime, 1000);
function showTime() {
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
  
    if (hour > 24) {
        hour -= 24;
    }
    if (hour == 0) {
        hr = 12;
    }
  
    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
  
    let currentTime = hour + ":" 
            + min + ":" + sec
  
    document.getElementById("time")
            .innerHTML = currentTime;
}
showTime();
