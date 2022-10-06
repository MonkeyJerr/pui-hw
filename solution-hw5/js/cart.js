// roll object
class Roll {
    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
        this.calcPrice = basePrice * packSizeMultiple[packSize].multiple;

        this.element = null;
    }
}

const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const rollType = params.get('roll');


//set that represents the cart
const cartSet = new Set();

function addNewRoll(rollType, rollGlazing, packSize, basePrice) {
    // Create a new roll object
    const newRoll = new Roll(rollType, rollGlazing, packSize, basePrice);
  
    // Add the roll object to the cart set, which keeps track of all
    // the rolls in our application
    cartSet.add(newRoll);
  
    return newRoll;
  }

function createElement(roll) {
    const template = document.querySelector('#cart-template');
    const clone = template.content.cloneNode(true);
    roll.element = clone.querySelector('.cart');

    //add click events for remove button so that it deletes it from cart and also updates total price
    const btnDelete = roll.element.querySelector('.remove-btn');
    btnDelete.addEventListener('click', () => {
    deleteRoll(roll);
    updateCartPrice();
    });

    const cartListElement = document.querySelector('#cart-list');
    cartListElement.prepend(roll.element);
    updateElement(roll);

}

function updateElement(roll) {
    // get the HTML elements that need updating
    const cartImage = roll.element.querySelector('.cart-img');
    const cartName = roll.element.querySelector('.cart-name');
    const cartGlazing = roll.element.querySelector('.cart-glazing');
    const cartPackSize = roll.element.querySelector('.cart-packSize');
    const cartPrice = roll.element.querySelector('.cart-price');

    // copy the roll content over to the corresponding HTML elements
    cartImage.src = 'products/' + rolls[roll.type].imageFile;
    cartName.innerText = roll.type;
    cartGlazing.innerText = roll.glazing;
    cartPackSize.innerText = "Pack Size: " + roll.size;
    cartPrice.innerText = "$ " + roll.calcPrice.toFixed(2);
  }


  function deleteRoll(roll) {
    // remove the notecard DOM object from the UI
    roll.element.remove();
    // remove the actual Notecard object from our set of notecards
    cartSet.delete(roll);
    console.log(cartSet);
  }

  //the four rolls we were asked to add to the cart
  const rollOne = addNewRoll(
    "Original",
    "Sugar Milk",
    1,
    2.49
  );
  const rollTwo = addNewRoll(
    "Walnut",
    "Vanilla Milk",
    12,
    3.49
  );

  const rollThree = addNewRoll(
    "Raisin", "Sugar Milk", 3, 2.99
  );

  const rollFour = addNewRoll(
    "Apple", "Original", 3, 3.49
  );
  
  for (const roll of cartSet) {
    createElement(roll);
  };


//set total price at the beginning based on what's in the cart
let totalPrice = 0;
for (const roll of cartSet) {
    totalPrice += roll.calcPrice;
}
let priceDiv = document.querySelector("#cart-total-num");
priceDiv.innerHTML = "$ " + totalPrice.toFixed(2);

//change total price after removing an item
function updateCartPrice() {
    let totalPrice = 0;
    for (const roll of cartSet) {
        totalPrice += roll.calcPrice;
    }
    let priceDiv = document.querySelector("#cart-total-num");
    priceDiv.innerHTML = "$ " + totalPrice.toFixed(2);
}


