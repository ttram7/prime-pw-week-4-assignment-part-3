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

function listItems() {
    for (let i = 0; i < basket.length; i++) {
        console.log(`Ingredient ${[i+1]}: ${basket[i]}`);
    }
}

function empty() {
    basket = [];
    return basket;
}

function isFull() {
    if (basket.length < maxItems) {
        return false;
    } else if (basket.length >= maxItems) {
        return true;
    }
}

function removeItem(item) {
    if (basket.includes(item) === true) {
        let index = basket.indexOf(item);
        let deletedItem = basket.splice(index, 1);
        return deletedItem;
    } else {
        return null;
    }
}

console.log('-----Testing addItem-----')
console.log(`Basket is ${basket}`);
console.log('Adding bananas - should say true:', addItem('bananas'));
console.log('Adding tomatoes - should say true:', addItem('tomatoes'));
console.log('Adding oranges - should say true:', addItem('oranges'));
console.log('Adding apples - should say true:', addItem('apples'));
console.log('Adding lemons - should say true:', addItem('lemons'));
console.log('Adding grapes - should say false:', addItem('grapes'));
console.log(`Basket is now ${basket}`);

console.log('-----Testing listItems-----')
listItems();

console.log('-----Testing empty-----')
console.log('Emptying basket...The basket should now be empty', empty());
console.log(`Basket is now ${basket}`);

console.log('-----Testing isFull-----')
console.log('Adding juice - should say true:',addItem('juice'));
console.log('Adding water - should say true:',addItem('water'));
console.log('Adding milk - should say true:',addItem('milk'));
console.log('Adding soda - should say true:', addItem('soda'));
console.log(`Basket is now ${basket}`);
console.log('Is basket full:',isFull());
console.log('Adding smoothie - should say true:', addItem('smoothie'));
console.log(`Basket is now ${basket}`);
console.log('Is basket full:',isFull());

console.log('-----Testing removeItem-----')
console.log(`Removing item: ${removeItem('water')}`);
console.log(`Basket is now ${basket}`);
console.log(`Removing item: ${removeItem('soup')}`);
