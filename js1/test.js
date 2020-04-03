
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

//console.log(text)


//h) Setze eine Variable auf den Wert 3 und prüfe auf 3 verschieden Werte (1, 2, 3). Es soll jeweils die Zahl ausgesprochen ausgegeben werden ("eins", "zwei", "drei").
//    Standardmäßig soll "irgendeine Zahl" ausgegeben werden.

const value = 3;
switch (value){
    case 1:
        text = 'blablabla';
        break;
    case 2:
        text = 'blabla';
        break;
    case 3:
        text = 'blah';
        break;
    default:
        text = 'bababababababababababababa';
}

//console.log(text)
