// increment/decrement
let x = 2;
x++;
console.log(x);
x = x + 1;
// console.log(x);
x--;
//console.log(x);

// simple condition
const color = 'red';
const color2 = 'red';
if (color === color2) {
    // console.log('colors are equal');
}

// multiple condition
let text = '';
switch (new Date().getDay()) {
    case 5:
        text = 'Freitag';
        break;
    case 0:
    case 6:
        text = "Wochenende";
        break;
    default:
        text = "Leider nicht Freitag oder Wochenende";
}
// console.log(text);

// for loop 5x
for (let i = 0; i < 5; i++) {
    // console.log(i);
}

// for loop durch ein Array
const myPets = ['hund', 'katze', 'maus'];
for (let i = 0; i < myPets.length; i++) {
    // console.log('forArr', myPets[i]);
}

// es6
for (let myPet of myPets) {
    // console.log('forArr short', myPet);
}

// foreach
myPets.forEach(function(myPet) {
    //console.log('forEach', myPet);
});
// ES6
//myPets.forEach(myPet => console.log('forEach short', myPet));


// while
let j = 0;
while (j < 5) {
    j++;
    // console.log('while', j);
}

let pet = 'maulwurf';
let k = 0;
while (pet === 'maulwurf') {
    k++;
    if (k === 5) {
        pet = 'hund';
    }
    // console.log('while2', k)
}