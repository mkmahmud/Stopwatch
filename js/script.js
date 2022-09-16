// init interval
let startInterval ;
    // init milisecond 
    let i = 0;
// Mili Second 
const miliSecond = (passVal) => {
    //    Select Dom milisecond 
const milisec = document.getElementById('milisecond');

    // check start or stop or Reset
                 
        if(passVal === 'start'){
            startInterval = setInterval(function() {
            milisec.innerText = i+1;
            i = i+1;
            // Update Second
                if(i === 100){
                second();
                i = 0;
                }
            },10);
        }else if(passVal == 'stop'){
            // stop Interval
            i = parseInt(milisec.innerText)
            clearInterval(startInterval);
        }

}

    // Second
 let iSec = 0;

const second = () => {
    const secondDom = document.getElementById('second');
    secondDom.innerText = iSec + 1;
    iSec = iSec +1; 
    // Update Minute
        if(iSec === 60){
            minute();
            iSec = 0;
        }
}

     
// Minute
iMin = 59;
const minute = () => {
const miniuteDom = document.getElementById('miniute');
miniuteDom.innerText = iMin + 1;
iMin = iMin + 1;
    if(iMin === 60){
        hour()
        iMin = 0;
    }
}

// Hour 
iHour = 0;
const hour = ()=>{
    const hourDom = document.getElementById('hour');
    hourDom.innerText = iHour + 1
    iHour = iHour + 1;
}

    

    const buttons = document.querySelector('.buttons');
    buttons.addEventListener('click', function(e){
        if(e.target.value === 'start'){
            miliSecond('start');
        }else if(e.target.value == 'stop'){
            miliSecond('stop');
        }
        // console.log(e.target.value)
    });


    