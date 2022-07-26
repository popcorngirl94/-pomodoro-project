const pomodoroTab = document.getElementById("pomodoro")
const shortBreakTab = document.getElementById("shortBreak")
const longBreakTab = document.getElementById("longBreak")

const pomodoroTabContent = document.getElementById("pomodoro-content")
const shortBreakTabContent = document.getElementById("shortbreak-content")
const longBreakTabContent = document.getElementById("longbreak-content")

pomodoroTab.addEventListener("click",function(){
    //console.log("pomodoro clicked");
    shortBreakTab.classList.remove("active");
    longBreakTab.classList.remove("active");
    pomodoroTab.classList.add("active");

    shortBreakTabContent.classList.remove("active");
    longBreakTabContent.classList.remove("active");
    pomodoroTabContent.classList.add("active");
} );


shortBreakTab.addEventListener("click",function(){
    shortBreakTab.classList.add("active");
    longBreakTab.classList.remove("active");
    pomodoroTab.classList.remove("active");

    shortBreakTabContent.classList.add("active");
    longBreakTabContent.classList.remove("active");
    pomodoroTabContent.classList.remove("active");

} );


longBreakTab.addEventListener("click",function(){
    shortBreakTab.classList.remove("active");
    longBreakTab.classList.add("active");
    pomodoroTab.classList.remove("active");

    shortBreakTabContent.classList.remove("active");
    longBreakTabContent.classList.add("active");
    pomodoroTabContent.classList.remove("active");
} );

//setInterval(function(){console.log(new Date().toISOString())},1000)

//console.log(Date.now());
function timer(seconds){
    const now = Date.now();
    const then = now+(seconds*1000);
    
    const timerinterval= setInterval(function(){
        const secondsleft = Math.round((then - Date.now())/1000);
               //console.log(secondsleft);
              displayTime(secondsleft, pomodoroTime);
              displayTime(secondsleft, shortBreakTime);
              displayTime(secondsleft, longBreakTime);
        

        if(secondsleft < 1){
            clearInterval(timerinterval);
            return;

        }
    },1000)

};
function displayTime(seconds, element){
    const minute =Math.floor( seconds/60);
    const second = seconds%60;
    console.log({minute,second});
    element.innerText = minute+":"+second;
}

const pomodoroTime = document.getElementById("pomodoroTime");
const shortBreakTime = document.getElementById("shortBreakTime");
const longBreakTime = document.getElementById("longBreakTime");

const pomodoroButton = document.getElementById("pomodoroButton");
const shortBreakButton = document.getElementById("shortBreakButton");
const longBreakButton = document.getElementById("longBreakButton");

pomodoroButton.addEventListener("click",function(){
const pomodoroTotalTime = 1500;
timer(pomodoroTotalTime);
})

shortBreakButton.addEventListener("click",function(){
    const shortBreakTotalTime = 300;
    timer(shortBreakTotalTime);
    })
    
    longBreakButton.addEventListener("click",function(){
const longBreakTotalTime = 900;
timer(longBreakTotalTime);
})

