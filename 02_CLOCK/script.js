
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
