const scoreBoard = document.querySelector('.score');
const holes = document.querySelectorAll('.hole');
const moles = document.querySelectorAll('.mole');
let lastHole;
let timeOutFlag = false;
let score = 0;


function randomTime(min,max){
    return Math.floor(Math.random() * (max - min) + min);
}

function randomHole(holes){
    const index = Math.floor(Math.random()*holes.length);
    
    // if hole's index is repeated we call recursive untill we get unique index
    if(index===lastHole){
        return randomHole(holes);
    }
    lastHole = index;

    return holes[index];
}

function popup(){
    const time = randomTime(200,1000);          // geting random time
    const hole = randomHole(holes);             // getting a random hole
    hole.classList.add('up');                   // pop up mole from hole    
    setTimeout(()=>{
        hole.classList.remove('up');            // after that random time mole get back to hole
        if (!timeOutFlag) {
            // popup runs till game is over 
            popup();                            
        }
    },time);
}

function startGame(){
    scoreBoard.textContent = 0;     // seting deafault score
    timeOutFlag = false;
    popup();
    // here after 5sec game over ....
    setTimeout(()=>{
        timeOutFlag = true;
    },5000);

}

function bonkMole(e){
    if(!e.isTrusted) return;                    
    this.parentNode.classList.remove('up');     // remove mole if we hit 
    score++;                                    // when hit happen -> score++
    scoreBoard.textContent = score;             // score updated to DOM
}

moles.forEach((mole)=>{
    mole.addEventListener('click',bonkMole);
});