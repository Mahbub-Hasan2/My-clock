function clock() {
    const Time = new Date();
    let Hours = Time.getHours();
    let minutes = Time.getMinutes();
    let seconds = Time.getSeconds();
    let amPm = "PM"

    // AM/PM
    if (Hours < 12) {
        amPm = 'AM'
    }
    // 00 = 12
    if (Hours == 0) {
        Hours = 12;
    }
    // converting 12 Hours
    if (Hours > 12){
        Hours = Hours - 12;
    }
    // adding 0
    if (Hours < 10) {
        Hours = '0' + Hours;
    }
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    if (seconds < 10) {
        seconds = '0' + seconds;
    }
    // adding(seconds);
    // adding(minutes);
    // function adding(time){
    //     if (time < 10) {
    //         time = '0' + time;
    //     }
    
    // }
    
    document.getElementById("clockId").innerHTML = `${Hours}:${minutes}:${seconds}:${amPm}`;
}

setInterval(clock, 1000);