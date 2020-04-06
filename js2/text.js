// a)
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        console.log('möp');
        i++
    }
    console.log(i)
}

// b)
const myDataTypes = ['woohoo', 7, true];
myDataTypes.forEach(function(myData) {
    console.log(typeof myData)
});

for (let myData of myDataTypes) {
    console.log(typeof myData)
}

// c)
let food = 'Chicken Curry';
let k = 0;
while (food === 'Chicken Curry') {
    k++;
    if (k === 4) {
        food = null;
    }
    console.log(food)
}