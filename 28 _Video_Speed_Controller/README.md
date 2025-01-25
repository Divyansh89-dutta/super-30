# 28 Video Speed Controller :

Interactive bar controller that user can control by moving mouse over it.

# Learning :

+ We added mousemove event to container that will have bar showing speed of video.

+ callback function of event mainly do these tasks:

    + Calculation of height to be filled into container

    + Calculation & Setting playbackRate to video

    + Updating text of bar

+ `to.Fixed()` : toFixed(x) -> it round off till x digits after decimal

```javascript

speed.addEventListener('mousemove',(e)=>{
    // e.pageY -> y co-ordinate of mousemove event
    // speed.offsetTop -> bar container's offsetTop
    // speed.offsetHeight -> height of container

    // Calculation of height to be filled
    const y = e.pageY - speed.offsetTop;   // here y -> height to be filled into bar 
    const percent = y / speed.offsetHeight; // percentage height we divide by total height of speed container
    const min = 0.5;
    const max = 4;
    const height = Math.round(percent * 100 ) + '%';   // we get actual height
    speedBar.style.height = height;     // Updating bar's height into speed container

    // Calculation & Setting playbackRate to video
    const playbackRate = percent * (max - min) + min;   // setting playbackRates according to height
    video.playbackRate = playbackRate;

    // Updating text of bar
    // toFixed(x) -> it round off till x digits after decimal
    speedBar.textContent = playbackRate.toFixed(2) + 'x';
});
```