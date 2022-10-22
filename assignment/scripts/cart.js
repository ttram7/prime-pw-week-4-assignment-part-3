console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];

function addItem(item) {
    basket.push(item);
    return true;
}

function listItems(){
    for (let i = 0; i < basket.length; i++) {
        console.log(`Ingredient ${[i+1]}:`,basket[i]);
    }
}

function empty() {
    basket = [];
}

addItem('apples');
addItem('lemons');
addItem('oranges');

console.log(`Basket is ${basket}`);
console.log('Adding tomatoes - should say true:', addItem('tomatoes'));
console.log(`Basket is now ${basket}`);
console.log(listItems());
empty();
console.log(`The basket should now be empty ${basket}`);
console.log(basket);

addItem('juice');
addItem('water');
addItem('milk');
console.log(`Basket is ${basket}`);
console.log('Adding soda - should say true:', addItem('soda'));
console.log(`Basket is now ${basket}`);
console.log(basket);

//Stretch Goals
