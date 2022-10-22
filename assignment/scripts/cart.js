console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];
const maxItems = 5;

function addItem(item) {
    if (isFull() === false) {
        basket.push(item);
        return true;
    } else if (isFull() === true) {
        return false;
    }
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
addItem('grapes');


console.log(`Basket is ${basket}`);
console.log('Adding bananas - should say true:', addItem('bananas'));
console.log('Adding tomatoes - should say false:', addItem('tomatoes'));
console.log(`Basket is now ${basket}`);
listItems();
empty();
console.log(`Emptying basket...The basket should now be empty ${basket}`);
console.log(basket);

addItem('juice');
addItem('water');
addItem('milk');
console.log(`Basket is ${basket}`);
console.log('Adding soda - should say true:', addItem('soda'));
console.log(`Basket is now ${basket}`);
console.log(basket);

//Stretch Goals
function isFull() {
    if (basket.length < maxItems) {
        return false;
    } else if (basket.length >= maxItems) {
        return true;
    }
}
console.log('Is basket full:',isFull());
console.log('Adding smoothie - should say true:', addItem('smoothie'));
console.log('Is basket full:',isFull());

function removeItem(item) {
    if (basket.includes(item) === true) {
        let index = basket.indexOf(item);
        let deletedItem = basket.splice(index, 1);
        return deletedItem;
    } else {
        return null;
        //return `Item not in basket. Cannot be removed: ${item}`;
    }
}

console.log(basket);
console.log(removeItem('soup'));
console.log(basket);