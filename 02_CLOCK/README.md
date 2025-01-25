# 2️⃣  CSS + JS Clock 🕰️

A analog clock using simple css + js .

# 📒 My Learning:

### ✏️ 1. Date Object

```javascript

const date = new Date(); 
// return -> Mon Jul 31 2023 17:23:20 GMT+0530 (India Standard Time)

const seconds = now.getSeconds();
const mins = now.getMinutes();
const hour = now.getHours();
```



### ✏️ 2. Degree calculation

    12 hours -> 360 deg

    x hour   ->  ?

    for x hour we need (x*360)/12 deg

    suppose we have 3:15:00

    we need to move hour hand further for 15min , b/w two hour here 3 and 4 we have 30deg .

    so for 60min -> 30deg
           15min ->  ?


    for hour hand -> ((hour/12)*360) + ((min/60)*30) + 90

    we've add 90 degree extra because initially all hands are lying horizontaly (pointing to 9).


### ✏️ 3. Remove transition animation at degree 90 

* Solution from: [guahsu](https://github.com/guahsu/JavaScript30/tree/master/02_JS-and-CSS-Clock)

```javascript
// at second 59, the second pointer should rotate 444 deg
console.log(secondsDegrees = ((59 / 60) * 360) + 90)  // 444

// however, at second 0, it should rotate 90 deg
console.log(secondsDegrees = ((0 / 60) * 360) + 90)  // 90
```
This creates a weird animation where the pointer turns "backward" to meet the 90 degree. It doesn't move forward like normal pointers.

To solve this,If the degree is 90, set transition to `0s`.
```javascript
 if(secondsDegrees===90){
        secondHand.style.transition="all 0s";
    }else{
        secondHand.style.transition=" all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1)";
    }

    if(minsDegrees===90){
        minsHand.style.transition="all 0s";
    }else{
        minsHand.style.transition=" all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1)";
    }

    if(hourDegrees===90){
        hourHand.style.transition="all 0s";
    }else{
        hourHand.style.transition=" all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1)";
    }

```
# 🎯 My Code

```javascript
const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
    const now = new Date();

    const seconds = now.getSeconds();
    const mins = now.getMinutes();
    const hour = now.getHours();

    const secondsDegrees = ((seconds / 60) * 360) + 90;
    const minsDegrees = ((mins / 60) * 360) + ((seconds / 60) * 6) + 90;
    const hourDegrees = ((hour / 12) * 360) + ((mins / 60) * 30) + 90;

    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;

    if (secondsDegrees === 90) {
        secondHand.style.transition = "all 0s";
    } else {
        secondHand.style.transition = " all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1)";
    }

    if (minsDegrees === 90) {
        minsHand.style.transition = "all 0s";
    } else {
        minsHand.style.transition = " all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1)";
    }

    if (hourDegrees === 90) {
        hourHand.style.transition = "all 0s";
    } else {
        hourHand.style.transition = " all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1)";
    }


}

setInterval(setDate, 1000);
```
# 🌈 ShortNote:

+ `Date()` object [ getHours(),getSeconds(),getMinutes()]
+ `transform:rotate(90deg)` -> for positioning hands to vertical
+ Degree calculation for secondHand,minsHand and hourHand
+ Removing reverse transition effect at edge degrees
