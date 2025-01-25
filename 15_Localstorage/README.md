
# 1️⃣5️⃣ LocalStorage 🫙:

🍔 In this Bombay Vadapav Restaurant app, user can add item in list and marked when it cooked or ready. By refereshing page list of items will not clear as well as checks of lists 📜.

# 📒 My Learning:

## 📝event.preventDefault() :

+ In js, events actions can be canceled. `preventDefault()` method is used to stop a cancelable event from executing.

+ To check any event is cancelable or not , `event.cancelable` property is used. `true` or `false` two values.

+ The defaultly browser clear the form and send data to server when we click submit. to prevent this we've used e.preventDefault().

## 📝 'submit' event >> 'click' event for form submitting :

+ User can submit form using enter or pressing submit so listing to submit event is better than click event.

## 📝 HTMLFormElement: reset() method :

+ clear inputs and restores a form element's default values.

## 📝 checked attribute :

+ if checked attribute is present in element (checkbox or radio), when page load that element is selected/checked.

+ here ternary operator is used to mark element checked.

```javascript
<li>
    <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''}>
    <label for="item${i}" class="item${i}">${plate.text}</label>
</li>
```

## 📝 LocalStorage ans SessionStorage:

+ Data is stored in localstorage are available after tab closed or browser closed.

+ Data is available only for a session or until tab or browser closed. 

+ data is stored in string format. (key-value pair)

### Insert data :

```javascript
let data = 'Harsh Oza';
let key = 'name';
localStorage.setItem(key,data);
```

### Update data :

```javascript
localStorage.setItem(key,'Good bwoi');
```

### Read data :


```javascript
let data = localStorage.getItem(key);
```

### Delete data :

```javascript
localStorage.removeItem(key);
```

### Clear localstorage :

```javascript
localStorage.clear();
```




## 📍 Data storing in localStorage :

Here , we stored data in object, then all objects are stored in array. array is stored in localstorage.but local storage stores in string format only. `JSON.stringify()` we used to convert to string.

+ To store object data to localStorage :
  
```javascript
    
    const item = {
        text :text,
        done: false
    };
    
    localStorage.setItem('items', JSON.stringify(items));
    // data jo string na hoy to browser toString() use kare je object mate nahi kam karato
    // object to string
    // JSON.stringify(obj)
    
}

```

+ To get data from localstorage as object :

```javascript

let item = JSON.parse(localStorage.getItem(key));

```


## 📍 My code solution for checking checkboxes are cheked or not ? :

```javascript

const checkboxes = itemsList.querySelectorAll("[type=checkbox]");    // selected all checkboxes (live list)

checkboxes.forEach(checkbox => {
    // iterate over each checkbox to add change state eventlistener
    checkbox.addEventListener("change", function () {
        checkFlag = false;
        if (this.checked) {
            // if checkbox is checked
            checkFlag = true;
        }
        // getting data from localstorage
        const data = JSON.parse(localStorage.getItem('items'));
        // updating checked value in data correspondence to checkbox
        data.forEach(d => {
            const label = itemsList.querySelector(`.${this.id}`);
            if (d.text == label.innerHTML) {
                if (checkFlag) {
                    // if checkbox is checked
                    d.done = true;
                } else {
                    // if checkbox unchecked
                    d.done = false;
                }
            }
        });
        // stroed updated data to localstorage
        localStorage.setItem('items', JSON.stringify(data));

    });
});
```