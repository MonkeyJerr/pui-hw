const original_cinnamon_roll_price = 2.49;

const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const rollType = params.get('roll');

const headerElement = document.getElementById("detail-title");
headerElement.innerText = rollType + " " + 'Cinnamon Roll';

const rollImage = document.querySelector('#roll-img');
rollImage.src = 'products/' + rolls[rollType].imageFile;



/* creating objects for each option in the dropdown */
const keep_original = {
    name: "Keep Original",
    value: "0",
    price_change: 0
};

const sugar_milk = {
    name: "Sugar Milk",
    value: "0",
    price_change: 0
};

const vanilla_milk = {
    name: "Vanilla Milk",
    value: "+0.50",
    price_change: .50
};

const double_chocolate = {
    name: "Double Chocolate",
    value: "+1.50",
    price_change: 1.50
};

const pack_size1 = {
    name: "1",
    price_multiple: 1
};

const pack_size3 = {
    name: "3",
    value: "*3",
    price_multiple: 3
};

const pack_size6 = {
    name: "6",
    value: "*5",
    price_multiple: 5
};

const pack_size12 = {
    name: "12",
    value: "*10",
    price_multiple: 10
};

/* arrays to loop through so you can add each object to dropdown */
const glazing_options = [keep_original, sugar_milk, vanilla_milk, double_chocolate];
const packing_options = [pack_size1, pack_size3, pack_size6, pack_size12]


/* get the dropdown from DOM */
let glazing_dropdown = document.getElementById("glazing-dropdown");


/* create an option element and then add each object to dropdown */
for (let i = 0; i < glazing_options.length; i++) {
    let glaze_option = document.createElement("option");
    glaze_option.text = glazing_options[i].name;
    glaze_option.value = glazing_options[i].value;
    glazing_dropdown.add(glaze_option);
}

let packing_dropdown = document.getElementById("packing-dropdown");
for (let i = 0; i < packing_options.length; i++) {
    let pack_option = document.createElement("option");
    pack_option.text = packing_options[i].name;
    pack_option.value = packing_options[i].value;
    packing_dropdown.add(pack_option);
}

detail_price = document.getElementById("detailsPrice");
detail_price.innerHTML = "$ " + rolls[rollType].basePrice;

/* update price by getting the object the user is selecting */
function updateDetailPrice() {
    let price;
    let glazing_selected = glazing_dropdown.selectedIndex;
    let pack_selected = packing_dropdown.selectedIndex;
    price = (rolls[rollType].basePrice + glazing_options[glazing_selected].price_change) * packing_options[pack_selected].price_multiple;
    detail_price.innerHTML = "$ " + price.toFixed(2);
}

const cart = [];
//take JSON objects stored in localstorage
//parse the stored cart so you can get inidividual objects
//add each object from parsed cart into array
if (localStorage.getItem('storedCart') != null) {
    let storedCartItem = localStorage.getItem('storedCart');
    let parsedCart = JSON.parse(storedCartItem);
    for (key in parsedCart) {
        let item = parsedCart[key];
        cart.push(item);
    }
}
class Roll {
    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
    }
}

function addToCart() {
    let glazing_selected = glazing_dropdown.selectedIndex;
    let pack_selected = packing_dropdown.selectedIndex;
    const newRoll = new Roll(rollType, glazing_options[glazing_selected].name, packing_options[pack_selected].name, rolls[rollType].basePrice);
    cart.push(newRoll);
    let cartArrayString = JSON.stringify(cart);
    localStorage.setItem('storedCart', cartArrayString);
    console.log(localStorage.getItem('storedCart'));

}





