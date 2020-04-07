// a
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        console.log('möp');
        i++
    }
    console.log(i)
}

//b
const DataTypes = ['bla', 5, true];
DataTypes.forEach(function(Data) {
    console.log(typeof Data)
});

for (let Data of DataTypes) {
    console.log(typeof Data)
}

//c
let test = 'Chicken Curry';
let t = 0;
while (test === 'Chicken Curry') {
    t++;
    if (t === 4) {
        test = null;
    }
    console.log(test)
}

