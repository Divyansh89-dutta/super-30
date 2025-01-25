const nav = document.querySelector('.top');
const background = document.querySelector('.dropdownBackground');
const liess = document.querySelectorAll('.cool > li');

console.log(nav,background,liess);

function handleEnter(){
    console.log('Enter');
    
    this.classList.add('trigger-enter');    // display : block
    setTimeout(()=>{
        if(this.classList.contains('trigger-enter')){
            this.classList.add('trigger-enter-active');     // opacity :1
        }
    },150);
    background.classList.add('open');  // enables opacity:1 of div's background

    const dropdown = this.querySelector('.dropdown');   // getting exact same dropsown where event is triggered
    
    const dropdownCoords = dropdown.getBoundingClientRect(); // getting coordinates of dropdown
    console.log(dropdown);
    const navCoords = nav.getBoundingClientRect(); // getting coordinates of nav
    
    const coords = {
        height : dropdownCoords.height,
        width : dropdownCoords.width,
        top : dropdownCoords.top - navCoords.top,
        left : dropdownCoords.left - navCoords.left
    }

    // height and width of displayed div-> same as dropdown
    // top and left position -> dropdown - nav  
    //( jo nav ni uper koi element hoy to div ne display karavama locho padato to jate try kari joi lo )
    //(practical vastu chhe savvv)

    background.style.width = coords.width +'px';
    background.style.height = coords.height + 'px';
    background.style.left = coords.left + 'px';
    background.style.top = coords.top + 'px'; 
}

function handleLeave(){
    console.log('Leave');
    // jetalu badhu add karyu tu badhu remove remove remove.........
    this.classList.remove('trigger-enter');
    this.classList.remove('trigger-enter-active');
    background.classList.remove('open');
}

liess.forEach((li)=>{
    li.addEventListener('mouseenter',handleEnter);
    li.addEventListener('mouseleave',handleLeave);
});