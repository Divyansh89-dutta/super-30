
# 1️⃣6️⃣ Mouse move shadow 🤹‍♂️:

🚣🏻‍♂️ Mouse moves as text shadow moves.

# 🎒 My Learning:

## 🎯 `contenteditable` in HTML :

+ જેવુ નામ એવુ કામ . we can edit content on web page by mentioning this attribute.

## ⛳️  Element properties :

+ **offsetWidth** and **offsetHeight** : the height and width of the element itself.

+ **offsetLeft**, **offsetTop** : distance between the element and its offsetParent (closest parent element)

## 🎯 Event properties :

+ **offsetX** ans **offsetY** :  the offsetX and offsetY (which is properties of the MouseEvent itself) is showing the X/Y coordinate of the mouse pointer between that event and the padding edge of the target node.

## ⛳️  if condition :

- If the element that is the _current target_ of the event differs
      from the event's _originating target_, increment the values of the two previously declared
      variables by the distance between the originating target and the current target on the
      x & y axis.

```JavaScript
if (e.currentTarget !== e.target) {
    x += e.target.offsetLeft
    y += e.target.offsetTop
}

```
+ it was bouncer to me so move on to next topics.....😅

<div class="tenor-gif-embed" data-postid="21400741" data-share-method="host" data-aspect-ratio="0.8" data-width="100%"><a href="https://tenor.com/view/cricket-bouncer-josh-hazlewood-australia-ashes-gif-21400741">Cricket Bouncer GIF</a>from <a href="https://tenor.com/search/cricket-gifs">Cricket GIFs</a></div> <script type="text/javascript" async src="https://tenor.com/embed.js"></script>

