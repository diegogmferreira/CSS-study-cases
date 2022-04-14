setInterval(() => {
    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');
    // let ampm = document.getElementById('ampm');

    let hh = document.getElementById('hh');
    let mm = document.getElementById('mm');
    let ss = document.getElementById('ss');

    let hrDot = document.querySelector('.hr-dot');
    let minDot = document.querySelector('.min-dot');
    let secDot = document.querySelector('.sec-dot');

    let hour = new Date().getHours();
    let minute = new Date().getMinutes();
    let second = new Date().getSeconds();

    // convert 24h into 12h
    // let am = hour >= 12 ? 'PM' : 'AM';
    // if (hour > 12) {
    //     hour = hour - 12;
    // }

    hour = (hour < 10) ? "0" + hour : hour;
    minute = (minute < 10) ? "0" + minute : minute;
    second = (second < 10) ? "0" + second : second;

    hours.innerHTML = hour + "<br><span>Hours</span>";
    minutes.innerHTML = minute + "<br><span>Minutes</span>";
    seconds.innerHTML = second + "<br><span>Seconds</span>";
    // ampm.innerHTML = am;

    hh.style.strokeDashoffset = 440 - (440 * hour) / 24;
    mm.style.strokeDashoffset = 440 - (440 * minute) / 60;
    ss.style.strokeDashoffset = 440 - (440 * second) / 60;

    hrDot.style.transform = `rotate(${hour * 15}deg)`;
    minDot.style.transform = `rotate(${minute * 6}deg)`;
    secDot.style.transform = `rotate(${second * 6}deg)`;
})
