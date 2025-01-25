const triggers = document.querySelectorAll('a');

const highlight = document.createElement('span');
highlight.classList.add('highlight');
document.body.append(highlight);

function highlightLink(){
    const linkCoords = this.getBoundingClientRect();
    console.log(linkCoords);

    const coords = {
        width : linkCoords.width,
        height : linkCoords.height,
        // we add scrollX and scrollY to postion highlight div accordingly current scroll (beacause scroll change getBoundingClientReact()'s values like top, right, bottom and left are relative to the viewport and not absolute)
        top : linkCoords.top + window.scrollY,      
        left : linkCoords.left + window.scrollX
    };

    highlight.style.width=`${coords.width}px`;
    highlight.style.height=`${coords.height}px`;

    highlight.style.transform = `translate(${coords.left}px,${coords.top}px)`;
}

triggers.forEach(a => {
    a.addEventListener('mouseenter',highlightLink);
})