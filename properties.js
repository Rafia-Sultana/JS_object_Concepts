const bottle = {
    color: 'yellow',
    hold: 'water',
    price: 50,
    isCleaned: true
};
// getting all properties keys names
const keys = Object.keys(bottle);
//console.log(keys);
// getting all properties keys names
const values = Object.values(bottle);
//console.log(values);
//getting pairs of object
const pairs = Object.entries(bottle);
//console.log(pairs);
Object.seal(bottle);
bottle.price = 100;
Object.freeze(bottle)

delete bottle.isCleaned;
console.log(bottle);