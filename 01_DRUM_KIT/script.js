

const keys=document.querySelectorAll(".key-block");

keys.forEach(key=>{
    key.addEventListener("transitionend",function(e){
        if(e.propertyName!=='transform'){
            return;
        }
        console.log(this);
        if(this.classList.contains("playing")){
            this.classList.remove("playing");
         
        }
    });
});

window.addEventListener("keydown",(e)=>{
    // console.log(e.keyCode);
    const audio=document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key=document.querySelector(`.key-block[data-key="${e.keyCode}"]`)
    // console.log(audio);
    if(!audio){
        return;
        //stop function
    }
    audio.curretTime=0;
    audio.play();
    console.log('baja');
    
    key.classList.add('playing');

});



