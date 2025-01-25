
const slider = document.querySelector('.items');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
});

slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
});

slider.addEventListener('mousemove', (e) => {
    if(!isDown) return;
    e.preventDefault();
    let x = e.pageX - slider.offsetLeft;    //x -> currrent position of mouse x coordinate

    let walk = (x - startX)*2;  //walk = current position - previus position

    slider.scrollLeft = scrollLeft - walk; //f the user moves the mouse to the right, the slider should scroll to the left, so 'scrollLeft' is decreased.
});

