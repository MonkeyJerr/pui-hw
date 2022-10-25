function getItem() {
    const item = localStorage.getItem('storedCart');
    return item;
};

console.log(getItem());