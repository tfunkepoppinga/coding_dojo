//Javascript has week/dynamic typing

//null
const nix = null;
//kinda weird
//console.log("typ nix", typeof nix);

//undefined
let auchNix;
//console.log("typ auchNix", typeof auchNix);
//console.log("typ garnix", typeof garnix);

//number
const eineZahl = 1;
const aucheineZahl = 1.1;
//console.log("typ eineZahl", typeof eineZahl);

//console.log(3 + 4 * 5); // => 3 + 20

const hierkommtAuchEineZahlRaus = parseInt("7.76", 10);
const hierauch = parseFloat("9.976", 10);

//console.log(hierkommtAuchEineZahlRaus);

//Don't do this at home
//console.log("wtf?", "7" + "7");
//console.log("wtf?", "7" * "7");
//console.log("wtf?", "7" / "7");
//console.log("wtf?", "7" - "7");

//That's the way, we like it
//console.log("wtf!", hierkommtAuchEineZahlRaus + hierkommtAuchEineZahlRaus);
//console.log("wtf!", hierkommtAuchEineZahlRaus * hierkommtAuchEineZahlRaus);
//console.log("wtf!", hierkommtAuchEineZahlRaus / hierkommtAuchEineZahlRaus);
//console.log("wtf!", hierkommtAuchEineZahlRaus - hierkommtAuchEineZahlRaus);

/********** try out basic arithmetic operations **********/

let calculation = 1.3 * 2.6;
//console.log(calculation);

/********** try out Math-Object **********/
//See also https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Math/
//Example
//console.log(Math.round(calculation));

//round down by using the Math-Object
//round up using the Math-Object
//generate a random number

//String
const eineZeichenkette = "Hallo Welt!"
//console.log(eineZeichenkette.length);

/********** try out string methods **********/
// See also https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/String
//find blank characters within the string
//console.log(eineZeichenkette.search(" "));
//replace the exclamation mark with a question mark
//console.log(eineZeichenkette.replace("!", "?"));
//find the index of the character 'o' within the string "Hallo Welt!"
//console.log(eineZeichenkette.indexOf("o"));



//Array
const arrayCollection = [];
//console.log(arrayCollection.length);

const colors = ["yellow", "green", "brown", 5, true];
//console.log(colors[0]);
//console.log(colors[1]);

//console.log(arrayCollection);

/********** try out array methods **********/
//See also https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Array

//add element "Peter" into array const names = ["Paul", "Mary"];
//remove first element form array const names = ["Peter", "Paul", "Mary"];
const names = ["Peter", "Paul", "Mary", "Hans"];
//console.log(names.indexOf("Mary"));
//console.log(name, names);


//Object
const objectCollection = {};

const user = {
    firstname: "John",
    lastname: "Doe"
}
//console.log(user.firstname);
//console.log(user["firstname"]);


/********** try out ojbject methods **********/
//See also https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Object

//output of object values
//output of object keys
//add entry age = 36 into user object