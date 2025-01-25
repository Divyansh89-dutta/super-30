# 24 Sticky Nav :

+ Scroll event is attached to window , when nav is hit to top of page , nav will be sticky to top and logo will slide.

# Learning :

## Callback function :

+ condition for nav kyare sticky thase ?

+ page jumping

+ adding 'fixed-nav' to body.

```javascript

window.addEventListener('scroll', function () {
    // topOfNav -> distance b/w body and nav
    // scrollY -> how much page scolled vertically
    
    // While scrolling image will disapear and nav will go to top
    
    if (topOfNav <= window.scrollY) {
        // apade jyare navbar uper ave tya sudhi scroll kari nakhie tyre ''fixed-nav' vado class add karavano..
        document.body.style.paddingTop = nav.offsetHeight + 'px';  // jo aa add na karie to jyare position:fixed thay tyare content jump kare, jyare nav ne fixed assign kariye tyare te document ma space na roke te na karane content are uper move kare.
        //  so aa rokava mate apade body ne padding api daie chhie 
        // padding == nav bar ni height (kem ke etali j height sudhi jump karase)
        document.body.classList.add('fixed-nav');
    } else {
        document.body.style.paddingTop = 0;
        document.body.classList.remove('fixed-nav');
    }
});
```

## Transitioning with max-width to slide logo:

+ Here , one li isnot visible to page till navbar fixed

+ wes exlpained here by demonstarting changing max-width to width to following both classes.

+ rest is practical...

```css
li.logo {
    max-width: 0;
    overflow: hidden;
    background: white;
    transition: all 0.5s;
    font-weight: 700;
    font-size: 30px;
}

body.fixed-nav li.logo {
    max-width: 500px;
}
```