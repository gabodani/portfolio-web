let[milliseconds,seconds,minutes,hours]=[0,0,0,0];
let time=document.querySelector(".display");
let int=null;
document.getElementById("start").addEventListener("click",()=>{
    if(int!==null){
        clearInterval(int);
    }
    int=setInterval(displayTimer,10);
})
document.getElementById("pause").addEventListener("click",()=>{
    clearInterval(int);
});
document.getElementById("reset").addEventListener("click",()=>{
    clearInterval(int);
    [milliseconds,seconds,minutes,hours]=[0,0,0,0];
    time.innerHTML= "00 : 00 : 00 : 000";
})
function displayTimer(){
    milliseconds+=10
    if(milliseconds==1000){
        milliseconds=0;
        seconds++
    }
    if(seconds==60){
        seconds=0;
        minutes++;
    }
    if(minutes==60){
        minutes=0;
        hours++;
    }
    let h=hours<10 ? "0"+hours:hours;
    let m=minutes<10 ? "0"+minutes:minutes;
    let s=seconds<10 ? "0"+seconds:seconds;
    let mils=milliseconds<10 ? "0"+milliseconds:milliseconds<100?"0"+milliseconds:milliseconds;
    time.innerHTML=`${h}:${m}:${s}:${mils}`
}