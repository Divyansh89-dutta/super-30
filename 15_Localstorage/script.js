const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items'))||[];


function addItem(e) {
    e.preventDefault();

    const text = (this.querySelector('[name=item]')).value;
    
    const item = {
        text :text,
        done: false
    };
    
    items.push(item);
    
    populateList(items, itemsList);
    
    localStorage.setItem('items', JSON.stringify(items));
    // data jo string na hoy to browser toString() use kare je object mate nahi kam karato
    // object to string
    // JSON.stringify(obj)
    
    this.reset();
}

function populateList(plates = [], plateList) {
    plateList.innerHTML = plates.map((plate, i) => {
        return `
        <li>
            <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''}>
            <label for="item${i}" class="item${i}">${plate.text}</label>
        </li>
        `;
    }).join('');
}

addItems.addEventListener('submit', addItem);


//localstorage -> object
populateList(items, itemsList);



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