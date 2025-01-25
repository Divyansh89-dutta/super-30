const hero = document.querySelector('.hero');

const text = hero.querySelector('h1');

const walk = 500;

function shadow(e){
    const width = hero.offsetWidth;        // element ni width = offsetwidth
    const height = hero.offsetHeight;      // element ni height = offsetHeight

    // console.log(width,height);
    let x = e.offsetX;    
    let y = e.offsetY;
    // the offsetX and offsetY (which is properties of the MouseEvent itself) is showing the X/Y coordinate of the mouse pointer between that event and the padding edge of the target node.

    console.log(x,y);

    // this -> jeni par event listner set karelu hoy e
    // e.target -> jyathi event trigger thay tya batave
    if(this !==  e.target){
        //offsetLeft, offsetTop: distance between the element and its offsetParent (closest parent element)
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
    }

    const xWalk = Math.round((x / width * walk)-(walk/2));

    const yWalk = Math.round((y / height * walk)-(walk / 2));

    text.style.textShadow = `
        ${xWalk}px ${yWalk}px 0 rgb(255,0,255,0.7),
        ${xWalk * -1}px ${yWalk}px 0 rgb(0,255,255,0.7),
        ${yWalk}px ${xWalk * -1}px 0 rgb(0,255,0,0.7),
        ${yWalk * -1 }px ${xWalk}px 0 rgb(0,0,255,0.7)
    `;


}

hero.addEventListener('mousemove',shadow);