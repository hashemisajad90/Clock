


function date1(){
    let date2 = new Date();

    let hour = date2.getHours();
    let minet = date2.getMinutes();
    let second = date2.getSeconds();
   
    document.querySelector("#houres").innerHTML = (`0`+ hour + ` :`).slice(-4);
    document.querySelector("#minets").innerHTML = (`0` + minet + ` :`).slice(-4);
    document.querySelector("#seconds").innerHTML = (`0` + second).slice(-2);

    let clockDeg = 360;
    let hourDeg = 12;
    let allHour = clockDeg / hourDeg;
    let fHour = allHour * hour +( minet / 2);
    document.querySelector("#hour1").style.transform = `rotate(${fHour}deg)`;
    let minetDeg = 60;
    let allMinet = clockDeg / minetDeg;
    let fMinet = allMinet * minet;
    document.querySelector("#hour2").style.transform = `rotate(${fMinet}deg)`;
    let secondDeg = 60;
    let allSecond = clockDeg / secondDeg;
    let fSecond = allSecond * second;
    document.querySelector("#hour3").style.transform = `rotate(${fSecond}deg)`;
}
date1();
setInterval(date1 , 1000);


