//Source : What is Event bubbling and Event Capturing in JavaScript ? - GeeksforGeeks
//I understand better than video through this blog <3.


// Bubbling (Propogation)
// example 1


// const grandParent = document.querySelector('.GrandParent');
// const parent = document.querySelector('.parent');
// const child = document.querySelector('.child');

/*
document.querySelector('body').addEventListener('click',(e)=>{
    console.log('body');
},false);
grandParent.addEventListener("click",(e)=>{
    console.log("GrandParent");
},false);

parent.addEventListener("click",(e)=>{
    console.log("parent");
},false);

child.addEventListener("click",(e)=>{
    console.log("child");
},false);
*/

/*
OUTOUTS AND OBSERVATION :


When we click on child 

child 
parent
GrandParent
body

when we click on parent
 
parent
GrandParent
body

when we click on grandparent

GrandParent
body

when we click on body

body

*/

/*
EVENT BUBBLING OR PROPOGATION

SO BASICALLY WHEN WE HAVE SAME EVENT LISTENER ATTACHED TO CHILD AND ANESTORS,
WHEN WE CLICK ON CHILD THEN FROM INSIDE TO OUTSIDE ALL EVENT LISTENER'S FUNCTION TRIGGERED.

PROPOGATION MOVES -> INSIDE TO OUTSIDE

CLICKED ON 
ELEMENTS                   OUTPUTS

CHILD                      CHILD -> PARENT -> GRANDPARENT -> BODY
PARENT                     PARENT -> GRANDPARENT -> BODY
GRANDPARENT                GRANDPARENT -> BODY
BODY                       BODY

*/


// EVENT CAPTURING 
// EXAMPLE 2


/*
const grandParent = document.querySelector('.GrandParent');
const parent = document.querySelector('.parent');
const child = document.querySelector('.child');


document.querySelector('body').addEventListener('click',(e)=>{
    console.log('body');
},true);
grandParent.addEventListener("click",(e)=>{
    console.log("GrandParent");
},true);

parent.addEventListener("click",(e)=>{
    console.log("parent");
},true);

child.addEventListener("click",(e)=>{
    console.log("child");
},true);
*/

/*
OUTPUTS:

CLICKED ON ELEMENT                      O/P

BODY                                    BODY
GRANDPARENT                             BODY -> GRANDPARENT
PARENT                                  BODY -> GRANDPARENT -> PARENT
CHILD                                   BODY -> GRANDPARENT -> PARENT -> CHILD

*/

/*
    EVENT CAPTURING MA FLOW OUTER MOST PARENT THI CHILD TARAF HOY(FLOW WILL BE FROM ANESTORS TO CHILD)

    FLOW -> OUTER TO INNER
*/


// Example 3
// BUBBLING + CAPTURING

/*
const grandParent = document.querySelector('.GrandParent');
const parent = document.querySelector('.parent');
const child = document.querySelector('.child');


document.querySelector('body').addEventListener('click',(e)=>{
    console.log('body');
},false);
grandParent.addEventListener("click",(e)=>{
    console.log("GrandParent");
},false);

parent.addEventListener("click",(e)=>{
    console.log("parent");
},false);

child.addEventListener("click",(e)=>{
    console.log("child");
},false);

document.querySelector('body').addEventListener('click',(e)=>{
    console.log('body');
},true);
grandParent.addEventListener("click",(e)=>{
    console.log("GrandParent");
},true);

parent.addEventListener("click",(e)=>{
    console.log("parent");
},true);

child.addEventListener("click",(e)=>{
    console.log("child");
},true);
*/

// output :

/*
WHEN WE CLICKED ON CHILD 

body
GrandParent
parent
child
child
parent
GrandParent
body

*/

/*
First capturing occur : from body to child  :  body -> grandparent -> parent -> child
then bubbling occure  : from child to body  :  child -> parent -> grandparent -> body
*/


// CONCEPT OF stopPropogation()

// if we apply stopPropogation() to any element 

// if 3 rd parameter is false or not mentioned
// stopPropogation() prevents bubbling from that element to parent

// if 3rd parameter is true
// stopPropogation() prevents capturing from that element to child

//eg4
//preventing in bubbling

/*
const grandParent = document.querySelector('.GrandParent');
const parent = document.querySelector('.parent');
const child = document.querySelector('.child');

document.querySelector('body').addEventListener('click',(e)=>{
    console.log('body');
},false);

grandParent.addEventListener("click",(e)=>{
    e.stopPropagation();            // prevent bubbling from grandparent to body
    console.log("GrandParent");
},false);

parent.addEventListener("click",(e)=>{
    e.stopPropagation();       // prevents bubbling from parent to grandparent
    console.log("parent");
},false);

child.addEventListener("click",(e)=>{
    console.log("child");
},false);
*/

//eg5
//preventing in capturing
/*
const grandParent = document.querySelector('.GrandParent');
const parent = document.querySelector('.parent');
const child = document.querySelector('.child');

document.querySelector('body').addEventListener('click',(e)=>{
    console.log('body');
},true);

grandParent.addEventListener("click",(e)=>{
    e.stopPropagation();            // prevent capturing from grandparent to parent
    console.log("GrandParent");
},true);

parent.addEventListener("click",(e)=>{
    e.stopPropagation();       // prevents capturing from parent to child
    console.log("parent");
},true);

child.addEventListener("click",(e)=>{
    console.log("child");
},true);
*/