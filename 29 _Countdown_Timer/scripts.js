let countdown;             // variable for setInterval
let secondsLeft;           // variable for left seconds
const timeDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const btns = document.querySelectorAll('[data-time');
const audio = document.querySelector('audio');
const audio1 = document.querySelector('.clickaudio');
const audio2 = document.querySelector('.ding');

function timer(seconds){
    if(!seconds) return;        // input validation
    clearInterval(countdown);   // it clears interval if any interval was running before calling new one.
    reset();            // it reset UI to default mode before starting timer

    const now = Date.now();                 // Date.now() returns no of miliseconds represting the current time.
    const then = now + seconds * 1000;      // we calculate the ending time corresponding milisecods.
    displayTimeLeft(seconds);
    displayEndTime(then);
    countdown = setInterval(()=>{
        secondsLeft = Math.round((then - Date.now()) / 1000);  // calculation of left seconds

        if(secondsLeft < 0){
            // if left seconds are over, we clear interval
            audio.play();         // Play alarm sound when timer over.
            clearInterval(countdown);
            alert('Time is up....!!!');
            return;
        }
        console.log(secondsLeft);
        displayTimeLeft(secondsLeft); // callback inside setInterval execute after N miliseconds. here we have 1000 miliseconds so callback execute after 1 sec. if we set timer of 5 sec,we show countdown from 4 to 0,to prevent them we call displayTimeLeft() function to above setInterval.
    },1000);
    
}

function displayTimeLeft(seconds){
    const minutes = Math.floor(seconds / 60);
    const reminderSeconds = seconds % 60;
    // here wes added '0' before onedigit seconds.[0-9].
    // if we have to display 1 min 2 sec.
    // Normally -> 1:2
    // correct way -> 1:02
    const display = `${minutes}:${reminderSeconds < 10 ? '0' : ''}${reminderSeconds}`;
    // we can set title using js like this.
    document.title = display;
    timeDisplay.textContent = display;
}

function displayEndTime(timestamp){
    const end = new Date(timestamp);
    const hour = end.getHours();
    const minutes = end.getMinutes();
    // here we corrected time format to 12 hour format.
    // if (hours > 12) hours -12
    endTime.textContent = `We will back... at ${hour > 12 ? hour - 12 : hour}:${minutes < 10 ? '0' : ''}${minutes}`;
}

function startTimer(){
    audio1.play();
    const seconds = parseInt(this.dataset.time);
    timer(seconds);
}

btns.forEach((btn)=>{
    btn.addEventListener('click',startTimer);
});

// We can select elements directly using their name attribute
// document."name_attribute_value"
document.customForm.addEventListener('submit',function(e){
    audio2.play();
    e.preventDefault();
    const mins = this.minutes.value;
    console.log(mins);
    timer(mins*60);
    this.reset();
})

const stopButton = document.querySelector('.stopbtn');
const restartButton = document.querySelector('.resetbtn');

stopButton.addEventListener('click',function(){
    
    audio1.play();
    
    if(this.dataset.flag === 'true'){
        console.log('played');
        this.dataset.flag = false;
        this.textContent = 'Stop';
        if(timeDisplay.textContent !== '00:00'){
            timer(secondsLeft);
        }
        return;
    }

    if(this.dataset.flag === 'false'){
        console.log('stopeed');
        clearInterval(countdown);
        this.dataset.flag = true;
        this.textContent ='Play';
        return;
    }
});

function reset(){
    audio1.play();

    timeDisplay.textContent = '00:00';
    endTime.textContent = 'Click buttons or enter the minutes to start timer..';
    stopButton.dataset.flag = false;
    document.title='';
    stopButton.textContent = 'Stop';
    audio.pause();
    audio.currentTime = 0;
}
restartButton.addEventListener('click',reset);