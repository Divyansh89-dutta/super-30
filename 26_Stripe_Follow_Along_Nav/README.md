# 26 Stripe Follow Along Nav

When we hover over the links the navbar with dropdown will be displayed and disapear when we move out.

# Learning :

## [1] Adding Eventlisterners :

+ we add mouseenter and mouseleave event listeners to links.

```javascript

liess.forEach((li)=>{
    li.addEventListener('mouseenter',handleEnter);
    li.addEventListener('mouseleave',handleLeave);
});

```
## [2] When we hover over link :

+ `handleEnter` will be executed 

+ in css wes separately mentioned transition for display property and opacity. for that they both properties are in two different class. Bcoz It creates better effect separatly. 

```css
.trigger-enter .dropdown {
    display: block;
}

.trigger-enter-active .dropdown {
    opacity: 1;
}
```

+ `display` is not animatable CSS properties , when we do display:block, div immedietly appears for smooth transtion we animate opacity.

+ here we've used setTimeout to add opacity related class. when we do diplay block it immeidetly appears(still have opacity:0) but  after 150ms opacity:1.

```javascript

    this.classList.add('trigger-enter');    // display : block
    setTimeout(()=>{
        if(this.classList.contains('trigger-enter')){
            this.classList.add('trigger-enter-active');     // opacity :1
        }
    },150);
    background.classList.add('open');  // enables opacity:1 of div's background
```
+ Now we get exact same dropwon as we hover on link and then getting coordinates of dropdown and nav.

+ setting div's position and height :

|(Dimentions)|||
|-----|----|---|
|height and width |->| same as dropdown|
|**(position)**|||
|top and left   |  -> |dropdown position - nav's position|

+ because div has absoulte postion which relative to parent element. so we have to take care of them

+ Be practical if dont get it blaaa blaa blaa , once remove minus step and add title above nav bar see output :).

```javascript

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
```
## [3] When we move out from link :

+ remove all classes added while hovering...

```javascript

function handleLeave(){
    console.log('Leave');
    // jetalu badhu add karyu tu badhu remove remove remove.........
    this.classList.remove('trigger-enter');
    this.classList.remove('trigger-enter-active');
    background.classList.remove('open');
}
```


# References :

+ [Freecodecamp article on absolute position](https://www.freecodecamp.org/news/how-to-use-the-position-property-in-css-to-align-elements-d8f49c403a26/)