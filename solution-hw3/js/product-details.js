const original_cinnamon_roll_price = 2.49;

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

const glazing_options = [keep_original, sugar_milk, vanilla_milk, double_chocolate];
const packing_options = [pack_size1, pack_size3, pack_size6, pack_size12]


let glazing_dropdown = document.getElementById("glazing-dropdown");
console.log(glazing_dropdown);

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

function updateDetailPrice() {
    let price;
    let glazing_selected = glazing_dropdown.selectedIndex;
    let pack_selected = packing_dropdown.selectedIndex;
    price = (original_cinnamon_roll_price + glazing_options[glazing_selected].price_change) * packing_options[pack_selected].price_multiple;
    console.log(packing_options[pack_selected].price_change);
    detail_price = document.getElementById("detailsPrice");
    detail_price.innerHTML = price.toFixed(2);
}
