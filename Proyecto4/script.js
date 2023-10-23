const deg = 6;
const horas = document.querySelector('.hora');
const minutos = document.querySelector('.minuto');
const segundos = document.querySelector('.segundo');

setInterval(()=>{
    let tiempo = new Date();
    let hr = tiempo.getHours()*30;
    let min = tiempo.getMinutes()*deg;
    let seg = tiempo.getSeconds()*deg;

    horas.style.transform = `rotate(${(hr)+(min/12)}deg)`;
    minutos.style.transform = `rotate(${min}deg)`; 
    segundos.style.transform = `rotate(${seg}deg)`;
})

function calculateTime(){
    let time = new Date()

    let hour = time.getHours();
    let minute = time.getMinutes();
    let second = time.getSeconds();

    switch (hour) {
        case 13:
            hours = 1
            break;
        case 14:
            hours = 2
            break;
        case 15:
            hours = 3
            break;
        case 16:
            hours = 4
            break;
        case 17:
            hours = 5
            break;
        case 18:
            hours = 6
            break;
        case 19:
            hours = 7
            break;
        case 20:
            hours = 8
            break;
        case 21:
            hours = 9
            break;
        case 22:
            hours = 10
            break;
        case 23:
            hours = 11
            break;
        case 24:
            hours = 12
            break;
        default:
            break;
    }



    hours = hours < 10 ? "0" + hours : hours
    minute = minute < 10 ? "0" + minute : minute
    second = second < 10 ? "0" + second : second

    let clockDisplay

    if(hour > 13 && hour < 24){
        clockDisplay = `${hours} : ${minute} : ${second} PM`;
    }else{
        clockDisplay = `${hours} : ${minute} : ${second} AM`;
    }

     
    let digitalClock = document.querySelector(".reloj2")
    digitalClock.innerHTML = clockDisplay;

}

setInterval(calculateTime, 1000)

