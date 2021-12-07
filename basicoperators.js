let currentYear =2021;
let age = currentYear - 1971;
console.log("age: ", age)

let a = 3;
let b = 8;

let total = a + b;
let totalValue = 5+8;
console.log(total, totalValue)
/*
let x = 3*5;
console.log(x)*/

let y = 8/4;
console.log(y)

let exponent = 2**3;
console.log(exponent)

let mod = 10 / 3 ;
console.log(mod)



// increment, decrement bir artirma ve bir azaltma islemi yapar//
// `--` 1 azaltir
// `++` 1 artirir


let ab = 3;
let xy = --ab; // bu satirda ab =2 // azalt sonra ata
console.log(ab, xy)   // bu satirda ab = 2


let abc = 3;
let xyz = abc-- // bu satirda abc = 3 //ilk once ata sonra azalt
console.log(xyz, abc)


// decrement artirma

let dec = 5;
let assg = ++dec;
console.log(dec, assg)


let dec2 = 5;
let assg2 = dec2++
console.log(assg2, dec2)

//string consetanation   string ile birlestirme
/*
const firstName = "Jeff";
const surName = "Bezos";
console.log(firstName + " " +surName)
*/

//Asssigment Operator
/*
let val = true;
let x = 2

x = x + 5
console.log("x = " + x)

x += 5
console.log("x = " +x)

let g= 16;
g /= 2;
console.log("g =" + g)

 g *=4;
console.log("g ="+ g)

// x = x+ g

x +=g
console.log("x", x)
*/

//Comparison Operators

/*< kucuk
> buyuk
<= kucuk esit 
>= buyukesit */

let ageAhmet =50;
let ageUtku =28; // this gives boolen value dogru/yanlis
console.log(ageAhmet > ageUtku)
console.log(ageAhmet < ageUtku)
console.log(ageAhmet == 50) // == anlami esit mi?
console.log(ageUtku != 28) // != degil mi
console.log("1", ageAhmet =="50" ) // yzi  da gelse number da gelse bizim icin ayni
console.log("2", ageAhmet ==="50" ) // dta type olarak stringini kontrol ediyoruz
console.log("2", ageAhmet !=="50" ) // data type 50 ye esit degil mi degil


// Template Literal

let frstName = "Jeff"
let scnName = "Bezos"
let work = "Amazon"

let sentence = " He is " + frstName + "  " + scnName + " and He is faunder of" + work + ". ";
console.log(sentence)

let betterSentence = `He is ${frstName} ${scnName}, and He is founder of ${work}.`
console.log(betterSentence)

console.log(" I want to write this \n\
on new line")
console.log(" I want to write this \n\
on new line")