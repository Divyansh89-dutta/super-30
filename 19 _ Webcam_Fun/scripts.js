const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');



function getVideo() {
    navigator.mediaDevices.getUserMedia({ video: true, audio: false })
        .then(localMediaStream => {
            console.log(localMediaStream);
            video.srcObject = localMediaStream;
            video.play();
        })
        .catch(error => {
            console.error("OH No video nahi dekhato :(",error);
        });
}

function paintToCanavas(){
    const width = video.videoWidth;
    const height = video.videoHeight;

    canvas.height = height;
    canvas.width = width;

    return setInterval(()=>{
        ctx.drawImage(video,0,0,width,height);

        // take the pixels out
        let pixels = ctx.getImageData(0,0,width,height);
        // edit the pixels
        // pixels = redEffect(pixels);
        // pixels=rgbSplit(pixels);
        pixels=greenScreen(pixels);
        // put them back
        ctx.putImageData(pixels,0,0);


    },16);
}

function takePhoto(){
    // played the sound
    snap.currentTime = 0;
    snap.play();

    // take data out of the canvas 
    const data = canvas.toDataURL('image/jpeg');
    const link = document.createElement('a');
    link.href = data;
    link.setAttribute('download','handsome');
    // link.textContent='Download Image';
    link.innerHTML = `<img src=${data} alt="Handsome man">`;
    strip.insertBefore(link,strip.firstChild);
}

function redEffect(pixels) {
    for( let i=0;i<pixels.data.length;i+=4){
        pixels.data[i+0] =  pixels.data[i+0] + 100;  //r
        pixels.data[i+1] = pixels.data[i+1] - 50 //g
        pixels.data[i+2] = pixels.data[i+2] * 0.5;  //b
    }

    return pixels;
}

function rgbSplit(pixels){
    for( let i=0;i<pixels.data.length;i+=4){
        pixels.data[i - 150] = pixels.data[i + 0] ;  //r
        pixels.data[i + 500] = pixels.data[i + 1] ; //g
        pixels.data[i - 550] = pixels.data[i + 2] ;  //b
    }

    return pixels;
}

function greenScreen(pixels){
    const levels = {};

    document.querySelectorAll('.rgb input').forEach((input)=>{
        levels[input.name] = input.value;
    });

    for(let i=0;i<pixels.data.length;i+=4){
        red = pixels.data[i+0];
        green=pixels.data[i+1];
        blue=pixels.data[i+2];
        aplha=pixels.data[i+3];

        if(red >= levels.rmin && red <= levels.rmax && green>=levels.gmin && green<=levels.gmax && blue>=levels.bmin && blue<=levels.bmax){
            // make it transparent 
            pixels.data[i+3]=0;
        }
    }

    return pixels;
}


getVideo();

video.addEventListener("canplay",paintToCanavas);