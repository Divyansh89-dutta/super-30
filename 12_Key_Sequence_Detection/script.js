
const pressedList=[];

const secret="oza";

window.addEventListener('keyup',(e)=>{
    pressedList.push(e.key);
    if(pressedList.length>secret.length){
        pressedList.shift();
    }
    if(pressedList.join('').includes(secret)){
        console.log('DING DING!');
        cornify_add();
    };
});