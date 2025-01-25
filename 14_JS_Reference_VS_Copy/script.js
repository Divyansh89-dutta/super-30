
//concept 1

// start with strings, numbers and booleans

/*
let n1 = 100;
let n2 = n1;
console.log(n1,n2); // 100 100
n1 = 101;
console.log(n1,n2); // 101 100
    
    
let name1 = 'Oza';
let name2 = 'Harsh';
console.log(name1,name2); // Oza Harsh
name1 = 'Change';
console.log(name1,name2); // Change Harsh
*/


//concept 2

// Let's say we have an array

const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

// and we want to make a copy of it.

const copy_of_players = players; //just reference to players not copy

// console.log(players,copy_of_players); 
//(4) ['Wes', 'Sarah', 'Ryan', 'Poppy'] (4) ['Wes', 'Sarah', 'Ryan', 'Poppy'] 
// You might think we can just do something like this:

copy_of_players[2] = 'Rohit';

// however what happens when we update that array?

// console.log(players,copy_of_players);
//(4) ['Wes', 'Sarah', 'Rohit', 'Poppy'] (4) ['Wes', 'Sarah', 'Rohit', 'Poppy']

// now here is the problem!

// oh no - we have edited the original array too!

// Why? It's because that is an array reference, not an array copy. They both point to the same array!


//concept 3

// So, how do we fix this? We take a copy instead!

// one way
const arr3 = players.slice();
arr3[0] = 'zero';
console.log(arr3);
console.log(players);
// ['zero', 'Sarah', 'Rohit', 'Poppy']
// ['Wes', 'Sarah', 'Rohit', 'Poppy']

// or create a new array and concat the old one in
const arr4 = [].concat(players);
arr4[0]='four';
console.log(arr4);
console.log(players); 
// ['four', 'Sarah', 'Rohit', 'Poppy']
// ['Wes', 'Sarah', 'Rohit', 'Poppy']


// or use the new ES6 Spread
const arr5 = [...players];
arr5[0] = 'spread one';
console.log(arr5);
console.log(players);
// ['spread one', 'Sarah', 'Rohit', 'Poppy'] 
// ['Wes', 'Sarah', 'Rohit', 'Poppy']
// 2nd method
const arr6 = Array.from(players);

// now when we update it, the original one isn't changed

// The same thing goes for objects, let's say we have a person object

// with Objects
    const person = {
      name: 'Wes Bos',
      age: 80
    };

// and think we make a copy:
const captain = person;
captain.number = 100;

console.log(captain);
console.log(person);  
// {name: 'Wes Bos', age: 80, number: 100} {name: 'Wes Bos', age: 80, number: 100}

// how do we take a copy instead?
const captain2 = Object.assign({},person,{number:110, status : 'Single',height : 2});
console.log(captain2);

 
// We will hopefully soon see the object ...spread
const captain3 = {...person};

// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.

const wes = {
    name : 'Harsh',
    age : 200,
    social : {
        insta : 'ozaharsh.95',
        linkedin : 'ozaharsh'
    }
}

console.clear();

const dev = Object.assign({},wes);

console.log(dev.social);
dev.social.insta = 'hearthacker420';
console.log(dev.social);
console.log(wes.social);

// Object.assign -> only go to 1 level deep

// if you have to clone every level we have this method

// bad for performance

const dev2 = JSON.parse(JSON.stringify(wes));
dev2.social.insta = 'nonono';
console.log(dev2.social);
console.log(wes.social);