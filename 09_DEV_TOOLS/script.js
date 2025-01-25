const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 },{ name: 'Harsh' , age: 10}, { name : 'Dev', age : 12}];

    function makeGreen() {
      const p = document.querySelector('p');
      p.style.color = '#BADA55';
      p.style.fontSize = '50px';
    }

    // Regular
    console.log("Hello this is console.log");

    // Interpolated
    console.log('Hello I am a 😎cool boy and very loving 💝 and caring family %s','💩' );

    // Styled
    console.log('%c I have awesome text.','font-size:20px;background:red;text-shadow:5px 5px 0 blue');

    // warning!
    console.warn("OH noo...!! this is warning msg.")

    // Error :|
    console.error('Get Shit done..!');

    // Info
    console.info('This is ubuntu OS.');

    // Testing
    const p=document.querySelector('p');

    // clearing
    // console.clear();

    // Viewing DOM Elements
    console.log(p);
    console.dir(p);

    // Grouping together
        dogs.forEach(dog=>{
        // console.group(`${dog.name}`);
        console.groupCollapsed(`${dog.name}`);
        console.log(`My name is ${dog.name}`);
        console.log(`MY age is ${dog.age}`);
        console.groupEnd(`${dog.name}`);
    });

    // counting
    console.count('Oza');
    console.count('Oza');
    console.count('Github');
    console.count('India');
    console.count('India');
    console.count('Oza');
    console.count('India');
    console.count('Github');
    console.count('Github');
    console.count('Github');
    console.count('Oza');
    console.count('India');

    // timing
    console.time('fetching');
    fetch('https://api.github.com/users/ozaharsh95').then(data=>data.json()).then(data=>{
        console.timeEnd('fetching');
        console.table(data);
    });

    
