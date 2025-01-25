const nav = document.querySelector('#main');
const topOfNav = nav.offsetTop;

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