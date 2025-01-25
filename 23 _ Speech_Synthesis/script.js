
const msg = new SpeechSynthesisUtterance();
let voices = [];
const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector('#speak');
const stopButton = document.querySelector('#stop');

msg.text = document.querySelector('[name="text"]').value;

function populateVoices() {
    voices = this.getVoices(); // getVoices() return the currently available list of voices on system (diff system have diff built in voices)
    console.log(voices);
    voicesDropdown.innerHTML = voices.map(voice =>`<option value="${voice.name}">${voice.name}(${voice.lang}) </option>`).join('');// we add voices to dropdown menu
}

function setVoice(){
    console.log(this.value);
    msg.voice = voices.find( voice => voice.name === this.value);
    toggle();
}

function toggle(startOver = true){
    speechSynthesis.cancel();
    if(startOver){
        speechSynthesis.speak(msg);
    }
}

function setOption() {
    msg[this.name] = this.value;
    toggle();
}

populateVoices(); // call on page load
speechSynthesis.addEventListener('voiceschanged',populateVoices);

voicesDropdown.addEventListener("change",setVoice);

options.forEach(option => option.addEventListener('change',setOption));

speakButton.addEventListener('click',toggle);

stopButton.addEventListener('click',function(){
    toggle(false); 
});