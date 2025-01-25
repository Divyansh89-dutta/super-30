# 1️⃣3️⃣ Slide in on Scroll 🛝

🎠 Images will slide into the view at certain point of view page 💾.


# 📒 My Learning:

## 🤽‍♂️ Debouncing :

+ Decreasing freq of occurance of perticular event is Debouncing. (અહીં અમારી પાસે scroll ઇવેન્ટ છે) .

+ Without debouncing too many scroll event generating, to limit them we use debounce  

+ in other words it improves performance.

### 🎯 Debounce function provided in starter file :

```javascript
function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
}
```

## 🤹‍♂️ Critical condition for slide-in images :

**🪟 Window Property** :

+ **window.scrollY** :  
    + returns the pixels a document has scrolled from the upper left corner of the window
+ **window.innerHeight** : 
   + returns height of current window content area. 

**📸 Image Property** :

+ **img.offsetTop** :
    + returns the top position (in pixels) relative to the parent.

+ **img.height** :
    + return height of element


***
+ ``` (window.scrollY + window.innerHeight) ``` gives bottom pixel of screen view when we scoll web page

+ Because we want the picture to slide in halfway through, we can calculate the number as 

```
(window.scrollY + window.innerHeight) - sliderImage.height / 2

// half way -> (bottom pixel of view - height of image) /2
```
+ bottom of image = top offset + height of image 

```
const imageBottom = sliderImage.offsetTop + sliderImage.height;
```

+ when image's half part > image's offsetTop && image's bottom > scrollY of screen 

```
if(2 condition){
    slide in image
}else{
  no slide
}
```
    


