
# 1️⃣8️⃣ Adding Up Times with Reduce 🛠:

The webpage contains many 'li' which contains data-time. we have to calculate each time from li in the format of hour,min,seconds.

# 🎒 My Learning:

## 🎯 Using map method we extract time from each node and reduce method help to calculate total time :

```javascript
let timeNodes = document.querySelectorAll('[data-time');

timeNodes = [...timeNodes]; // converting nodelist to array 

const seconds = timeNodes.map(node => node.dataset.time)     // grabing data
.map(timeCode => {
    let [mins,secs]=timeCode.split(':').map((str)=>parseFloat(str)); // grabing min:sec

    return (mins*60) + secs;    // returning total seconds for each 'li'
})
.reduce((total,vidSeconds)=>{
    return total + vidSeconds; // add all of them 
})

let secondsLeft = seconds;    // total seconds

const hours = Math.floor(secondsLeft / 3600);     // 1 hr = 60*60 sec
secondsLeft = secondsLeft % 3600;                 // seconds left after hour

const mins = Math.floor(secondsLeft / 60);        // 1 min = 60 sec
secondsLeft = secondsLeft % 60;                   // seconds left after min

console.log(hours,mins,secondsLeft);              // hour , min , seconds
```
