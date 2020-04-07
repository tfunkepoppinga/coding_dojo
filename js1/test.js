
//a) Variable 1 (string) ist gleich Variable 2 (string)

const color = 'yellow';
const color2 = 'yellow';
if (color === color2) {
    // console.log('sind gleich')
}


//b) Variable 1 (number) ist größer als Variable 2 (number)

const number = 4;
const number2 = 2;
if (number > number2) {
    //console.log('größer')
}


//c) Variable 1 (boolean) ist ungleich Variable 2 (Leerstring)

const boolean = true;
const leerstring = '';
if (boolean !== leerstring) {
    //console.log('ungleich')
}


// d) Variable 1 (number) ist nicht vom selben Typ wie Variable 2 (boolean)

const booleanD = true;
const nummerD = 2;
if (typeof booleanD !== typeof nummerD) {
    //console.log('nicht selber Typ')
}


// e) Variable 1 (number 3) ist gleich Variable 2 (string '3')

const numberE = 3;
const variableE = '3';
if (numberE == variableE) {
    //console.log('gleich')
}


// f) Variable 1 (number 3) ist ungleich Variable 2 (string '3')
// Erstelle eine Switch Anweisung

const numberF = 3;
const variableF = '3';
switch (numberF){
    case !variableF:
        text = 'tuhu'
        break;
    default:
        text = 'bababababababababababababa';


}

// console.log(text)


//h) Setze eine Variable auf den Wert 3 und prüfe auf 3 verschieden Werte (1, 2, 3). Es soll jeweils die Zahl ausgesprochen ausgegeben werden ("eins", "zwei", "drei").
//    Standardmäßig soll "irgendeine Zahl" ausgegeben werden.

const value = 8;
switch (value){
    case 1:
        text = 'eins';
        break;
    case 2:
        text = 'zwei';
        break;
    case 3:
        text = 'drei';
        break;
    default:
        text ="irgendeine Zahl";
}

//console.log(text);


// a)  Schreibe eine for-Schleife, die 10x durchläuft.
//     Beim 5. Durchlauf soll "Möp" ausgegeben werden.

var string = "möp";
var text = "";
var i;
for (i = 0; i < 10; i++) {
    if (i == 4) {
        text += string;
    } else {
        text += i;
    }
 // console.log(text);
}


// for (let i = 0; i < 10; i++) {
//     if (i === 4) {
//         console.log('möp');
//         i++
//     }
//      console.log(i)
// }



// b)  Schreibe jeweils eine for/of und forEach Schleife,
//     die ein Array, welches 3 verschiedene Datentypen beinhaltet, durchläuft.

var variableB = ['string', 1, false];
var x;
// variableB.forEach(myFunction);

// function myFunction(item, index) {
//     console.log(item)
// }

for (x of variableB) {
    console.log(x)
}

// c)  Schreibe eine Schleife, welche "Chicken Curry" so lange ausgibt, wie in der Variable "Chicken Curry" steht.
//     Nach dem 3. Durchlauf wird die Variable geleert.


let food = 'Chicken Curry';
let k = 0;
while (food === 'Chicken Curry') {
    k++;
    if (k === 3) {
        food = '';
    }
     // console.log('while2', k)
}