/* get our elements */

const player = document.querySelector('.player');
const video = player.querySelector('video');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');
const backbtn = document.querySelector('.pachhad');
const forwardbtn = document.querySelector('.agad')
const fullscreenbtn = document.querySelector('.fullscreen');


/* build function */

function togglePlay(){
    if(video.paused){
        video.play();
    }else{
        video.pause();
    }
}

function updateButton(){
    
    if(this.paused){
        toggle.textContent='►';
    }else{
        toggle.textContent='❚ ❚';
    }
}

function skip(){
    video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate(){
    // console.log(this.name,this.value);
    video[this.name]=this.value;
}

function handleprogress(){
    const percent = (video.currentTime/video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e){
    console.log(e);
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
}

function toggleFullscreen() {
	if(video.requestFullScreen){
		video.requestFullScreen();
	} else if(video.webkitRequestFullScreen){
		video.webkitRequestFullScreen();
	} else if(video.mozRequestFullScreen){
		video.mozRequestFullScreen();
	}
}

/* hook up the event listeners */

video.addEventListener('click',togglePlay);
video.addEventListener('play',updateButton);
video.addEventListener('pause',updateButton);
video.addEventListener('timeupdate',handleprogress);


toggle.addEventListener('click',togglePlay);

skipButtons.forEach((btn)=>{
    btn.addEventListener('click',skip);
});

ranges.forEach((range)=>{
    range.addEventListener('change',handleRangeUpdate);
});

ranges.forEach((range)=>{
    range.addEventListener('mousemove',handleRangeUpdate);
});

let mouseDown = false;
progress.addEventListener('click',scrub);
progress.addEventListener('mousemove',(e)=>{
    if(mouseDown){
        scrub(e);
    }
});
progress.addEventListener('mousedown',()=>mouseDown=true);
progress.addEventListener('mouseup',()=>mouseDown=false);

window.addEventListener('keyup',(e)=>{
    if(e.key==' '){
        togglePlay();
    }
    if(e.key=='ArrowLeft'){
        video.currentTime += parseFloat(backbtn.dataset.skip);
    }
    if(e.key=='ArrowRight'){
        video.currentTime += parseFloat(forwardbtn.dataset.skip);
    }
    if(e.key=='f'){
        toggleFullscreen();
    }
});

fullscreenbtn.addEventListener("click",toggleFullscreen);