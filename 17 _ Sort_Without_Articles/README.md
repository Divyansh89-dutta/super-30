
# 1️⃣7️⃣ Sort Without Articles 🌟:

📶 Sorting bands names such as articles like 'a', 'an' or 'the' should be neglected 🪸.

# 🎒 My Learning:

## 🎯 Using regex filter to compare band names :

 ```javascript
 function strip(bandName) {
    return bandName.replace(/^(a |the |an )/i, '').trim();
}
```
+ replace method search for a , the, an and replace with '' to avoid them while comparing.

## 🎀 sort() used on array :

+ here i love the concept of data filtering before sorting ❤️.

```javascript

const sortedBands = bands.sort((a,b)=>{
    if(strip(a) > strip(b)){
        return 1;
    }else{
        return -1;
    }
});
```
##  🎊 Displaying sorted array :

```javascript
const ul = document.querySelector("ul");

sortedBands.forEach((name)=>{
    ul.innerHTML+=`<li>${name}</li>`;
});
```





# Reference :
+ [How to Use Regular Expressions in JavaScript – Tutorial for Beginners](https://www.freecodecamp.org/news/regular-expressions-for-beginners/)
+ [My notes on regex](https://github.com/ozaharsh95/JS_IS_LOVE/tree/main/1_Regex_freecodecamp)

