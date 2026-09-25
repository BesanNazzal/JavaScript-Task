let cash=1000
let currentLiabilites=500
console.log("Cash flow ratio : Cash /currentLiabilites = 1000/500 = ",cash/currentLiabilites);
let revenues =1000
let expenses =500
console.log("Net income : revenue - expenses = 1000-500 =  ",revenues-expenses);
let liabilities =1000
let equity=500
console.log("Total assets : liabilites + equity = 1000 + 500 =  ",liabilities+equity);
let profit=1000
let sales =500
console.log("Net income using profit margin : sales * profit  = 1000 * 500 ",sales*profit);
let n1=7
let n2=9
let n3=2
console.log("Average for this number (2,7,9) = ((2+7+9)/3) = ",(n1+n2+n3)/3);
let price=150
let discount=30
console.log("The price after discount with value 30% : price-(price*discount/100) =  ",price-(price*discount/100));
let age =20
console.log("20>18 and 20<30 : " ,age>18 && age<30);
let num1=2
let num2=3
console.log("The Exponential of numbers 2,3 = ",num1**num2);
let number1=10
let number2=4
console.log("The reminder of 10 dived by 4 = " ,number1%number2);
let str="Welcome to Orange"
console.log("string in upper case : ", str.toUpperCase());
console.log("slice the string from 8 index to 10 : ",(str.slice(8,10) ));
console.log("replace welcome to ==> hello from : ",str.replace("Welcome to","hello from") );
console.log("string in lower case : ", str.toLowerCase());
console.log("The length of string = ",str.length);
console.log("replace welcome to orange ==> welcome to 'orange' : ",str.replace("Orange",'"Orange"') );
console.log(" add jordan to string : " , str+"Jordan");
let word ="cactus"
console.log(word[0] + word.slice(1).replaceAll(word[0], "*"));
let array=["coding","Academy","By","Orange"]
let secArr=array
console.log("array : ",array);
console.log(" array after adding jordan : ",secArr.concat("jordan"));
console.log(" array after deleting three element  : ",array.slice(0,2));
console.log(array.unshift("welcome","to"),array);
console.log(array.slice(3,6));
array.splice(0,2)
console.log(array.join(" "));
console.log(array);
console.log(array[0],array[3]);
var fruit = ["banana", "apple", "orange", "watermelon"];

var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

console.log(vegetables);

console.log(vegetables.pop());

console.log(fruit);

console.log(fruit.shift());

console.log("the index of element orange : ", fruit.indexOf("orange"));

let index = fruit.indexOf("orange");

console.log(fruit.push(index));

console.log("the length of vegetable array : ", vegetables.length);

console.log(vegetables.push(vegetables.length));

let food = fruit.concat(vegetables);

console.log(food);
console.log(food.reverse());
console.log(food.join(" "));
console.log("----------------------");

let birthYear = 2000;

let currentYear = new Date().getFullYear(); 
let age1 = currentYear - birthYear; 
console.log("Age:", age1); 
if (age1 > 60)
     { console.log("You may join the seniors’ program."); }
 else if (age1 > 30) 
        { console.log("You are not eligible. You may join other programs."); } 
 else if (age1 >= 18 && age1 <= 30) { console.log("You are eligible. Start your application."); } 
 else { console.log("You may join the kids' program."); }
console.log("-----------------------");
function switchCase(str) {
     let result = ""; 
     for (let i = 0; i < str.length; i++) { 
        if (str[i] === str[i].toUpperCase()) {
             result += str[i].toLowerCase(); } 
             else { result += str[i].toUpperCase(); } } 
             return result; } 
             console.log(switchCase("OrAnGe"));
function camelCase(str) {
     let words = str.split(" "); 
     let result = words[0];
      for (let i = 1; i < words.length; i++) {
         result += words[i][0].toUpperCase() + words[i].slice(1); }
          return result; } 
          console.log(camelCase("Coding Academy by Orange"));

function removeElement(arr, element) {
    let index = arr.indexOf(element);

    if (index !== -1) {
        arr.splice(index, 1);
    }

    return arr;
}


function removeElement(arr, element) {
    let index = arr.indexOf(element);

    if (index !== -1) {
        arr.splice(index, 1);
    }

    return arr;
}

console.log(
    removeElement(["Coding", "Academy", "By", "Orange"], "By")
);


// =====================================================
// 5. Check Odd or Even
// =====================================================

function checkEvenOdd(num) {

    if (num % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

console.log(checkEvenOdd(10));
console.log(checkEvenOdd(7));


// =====================================================
// 6. Check If Variable Is A Number
// =====================================================

function isNumber(value) {

    if (typeof value === "number") {
        return true;
    } else {
        return false;
    }
}

console.log(isNumber(10));
console.log(isNumber("10"));


// =====================================================
// 7. Find Largest Of Two Numbers
// =====================================================

function largest(num1, num2) {

    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}

console.log(largest(10, 20));


// =====================================================
// 8. Triangle Type
// =====================================================

function triangleType(a, b, c) {

    if (a === b && b === c) {
        return "Equilateral";

    } else if (a === b || a === c || b === c) {
        return "Isosceles";

    } else {
        return "Scalene";
    }
}

console.log(triangleType(5, 5, 5));
console.log(triangleType(5, 5, 3));
console.log(triangleType(5, 4, 3));


// =====================================================
// 9. Check If Number Is In Range
// =====================================================

function inRange(num, min, max) {

    if (num >= min && num <= max) {
        return true;
    } else {
        return false;
    }
}

console.log(inRange(15, 10, 20));
console.log(inRange(25, 10, 20));


// =====================================================
// 10. Leap Year
// =====================================================

function isLeapYear(year) {

    if (year % 400 === 0) {
        return true;
    }

    if (year % 4 === 0 && year % 100 !== 0) {
        return true;
    }

    return false;
}

console.log(isLeapYear(2024));
console.log(isLeapYear(2023));


// =====================================================
// LOOPS
// =====================================================


// 1. Even Numbers From 1 To 50 Using FOR Loop

console.log("Even numbers using FOR:");

for (let i = 1; i <= 50; i++) {

    if (i % 2 === 0) {
        console.log(i);
    }
}


// 1. Even Numbers From 1 To 50 Using WHILE Loop

console.log("Even numbers using WHILE:");

let i = 1;

while (i <= 50) {

    if (i % 2 === 0) {
        console.log(i);
    }

    i++;
}


// =====================================================
// 2. Even Numbers Using One FOR Loop
// =====================================================

console.log("Even numbers:");

for (let i = 2; i <= 50; i += 2) {
    console.log(i);
}


// =====================================================
// 3. One Loop For EVEN And One Loop For ODD
// =====================================================

console.log("Even numbers:");

for (let i = 1; i <= 50; i++) {

    if (i % 2 === 0) {
        console.log(i);
    }
}

console.log("Odd numbers:");

for (let i = 1; i <= 50; i++) {

    if (i % 2 !== 0) {
        console.log(i);
    }
}


// =====================================================
// 4. FIZZ BUZZ
// =====================================================

for (let i = 1; i <= 100; i++) {

    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");

    } else if (i % 3 === 0) {
        console.log("Fizz");

    } else if (i % 5 === 0) {
        console.log("Buzz");

    } else {
        console.log(i);
    }
}


// =====================================================
// 5. FIZZ BUZZ FUNCTION
// =====================================================

function fizzBuzz(num) {

    if (num % 3 === 0 && num % 5 === 0) {
        return "FizzBuzz";

    } else if (num % 3 === 0) {
        return "Fizz";

    } else if (num % 5 === 0) {
        return "Buzz";

    } else {
        return num;
    }
}

console.log(fizzBuzz(1));
console.log(fizzBuzz(15));


// =====================================================
// 6. RECURSIVE FIZZ BUZZ
// =====================================================

function fizzBuzzRecursive(num) {

    if (num > 100) {
        return;
    }

    console.log(fizzBuzz(num));

    fizzBuzzRecursive(num + 1);
}

fizzBuzzRecursive(1);


// =====================================================
// 7. BANKNOTES
// =====================================================

function banknotes(amount, notes) {

    let result = [];

    for (let note of notes) {

        while (amount >= note) {

            result.push(note);

            amount = amount - note;
        }
    }

    return result;
}

console.log(
    banknotes(57, [25, 10, 5, 1])
);


// =====================================================
// 8. COUNT CHARACTER
// =====================================================

function countCharacter(str, char) {

    let count = 0;

    str = str.toLowerCase();
    char = char.toLowerCase();

    for (let i = 0; i < str.length; i++) {

        if (str[i] === char) {
            count++;
        }
    }

    return count;
}

console.log(
    countCharacter("Coding Academy by Orange", "o")
);


// =====================================================
// 9.a Print Numbers 0 - 20
// =====================================================

for (let i = 0; i <= 20; i++) {
    console.log(i);
}


// =====================================================
// 9.b Print ODD Numbers 3 - 29
// =====================================================

for (let i = 3; i <= 29; i++) {

    if (i % 2 !== 0) {
        console.log(i);
    }
}


// =====================================================
// 9.c EVEN Numbers 12 Down To -14
// =====================================================

for (let i = 12; i >= -14; i--) {

    if (i % 2 === 0) {
        console.log(i);
    }
}


// =====================================================
// 9.d Multiples Of 3 From 50 Down To 20
// =====================================================

for (let i = 50; i >= 20; i--) {

    if (i % 3 === 0) {
        console.log(i);
    }
}


// =====================================================
// 10. ARRAY AND STRING
// =====================================================

let text = "CodingAcademy";

let arr = [
    7,
    500,
    "KH404",
    "black",
    36
];


// Print Each Element Of Array

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}


// Print String Characters In Reverse

for (let i = text.length - 1; i >= 0; i--) {
    console.log(text[i]);
}


// =====================================================
// 11. SEPARATE EVEN AND ODD ARRAYS
// =====================================================

let numbers = [
    7,
    23,
    18,
    9,
    -13,
    38,
    -10,
    12,
    0,
    124
];

let evens = [];
let odds = [];

for (let i = 0; i < numbers.length; i++) {

    if (numbers[i] % 2 === 0) {
        evens.push(numbers[i]);
    } else {
        odds.push(numbers[i]);
    }
}

console.log("Even numbers:", evens);
console.log("Odd numbers:", odds);


// =====================================================
// 12. CREATE MEALS
// =====================================================

let proteins = [
    "chicken",
    "pork",
    "tofu",
    "beef",
    "fish",
    "beans"
];

let grains = [
    "rice",
    "pasta",
    "corn",
    "potato",
    "quinoa",
    "crackers"
];

let mealVegetables = [
    "peas",
    "green beans",
    "kale",
    "edamame",
    "broccoli",
    "asparagus"
];

let beverages = [
    "juice",
    "milk",
    "water",
    "soy milk",
    "soda",
    "tea"
];

let desserts = [
    "apple",
    "banana",
    "more kale",
    "ice cream",
    "chocolate",
    "kiwi"
];


function createMeals(numberOfMeals) {

    let meals = [];

    for (let i = 0; i < numberOfMeals; i++) {

        let meal =
            proteins[i % proteins.length] + ", " +
            grains[i % grains.length] + ", " +
            vegetables[i % vegetables.length] + ", " +
            beverages[i % beverages.length] + ", " +
            desserts[i % desserts.length];

        meals.push(meal);
    }

    return meals;
}

console.log(createMeals(5));


// =====================================================
// OBJECTS
// =====================================================


// 1. Return Object Properties

function getProperties(obj) {

    return Object.keys(obj);
}

let student = {
    name: "Besan",
    age: 22,
    academy: "Orange"
};

console.log(getProperties(student));


// =====================================================
// 2. Count Object Properties
// =====================================================

function countProperties(obj) {

    return Object.keys(obj).length;
}

console.log(countProperties(student));


// =====================================================
// 3. Merge Two Objects
// =====================================================

function mergeObjects(obj1, obj2) {

    return Object.assign({}, obj1, obj2);
}

let person = {
    name: "Besan",
    age: 22
};

let information = {
    city: "Amman",
    academy: "Orange"
};

console.log(
    mergeObjects(person, information)
);


// =====================================================
// 4. Convert Object Values To Uppercase
// =====================================================

function uppercaseValues(obj) {

    let result = {};

    for (let key in obj) {

        result[key] = obj[key].toUpperCase();
    }

    return result;
}

let data = {
    name: "besan",
    academy: "orange",
    city: "amman"
};

console.log(
    uppercaseValues(data)
);


// =====================================================
// 5. Remove NULL Properties
// =====================================================

function removeNullValues(obj) {

    let result = {};

    for (let key in obj) {

        if (obj[key] !== null) {
            result[key] = obj[key];
        }
    }

    return result;
}

let user = {
    name: "Besan",
    age: null,
    city: "Amman",
    phone: null
};

console.log(
    removeNullValues(user)
);


// =====================================================
// 6. Sort Object Property Names
// =====================================================

function sortedProperties(obj) {

    return Object.keys(obj).sort();
}

let userInfo = {
    name: "Besan",
    city: "Amman",
    age: 22,
    academy: "Orange"
};

console.log(
    sortedProperties(userInfo)
);
console.log("---------------------------------------------------------------------------------------------------------------------------------------------------------------------------");



// =====================================
// JavaScript IF Statement
// =====================================


// =====================================
// 1. Check Age
// =====================================

let age11 = 27;

if (age11 > 18) {
    console.log("You are an adult");
}


// =====================================
// 2. Check Even Number
// =====================================

let num = 4;

if (num % 2 === 0) {
    console.log("The number is even");
}


// =====================================
// 3. Check If Character Is A Letter
// =====================================

let char = "a";

if (
    (char >= "a" && char <= "z") ||
    (char >= "A" && char <= "Z")
) {
    console.log("It's a letter");
}


// =====================================
// 4. Check If Variable Is An Array
// =====================================

let list = [1, 2, 3];

if (Array.isArray(list)) {
    console.log("It's an array");
}


// =====================================
// 5. Check Positive Number
// =====================================

let x = 5;

if (x > 0) {
    console.log("x is a positive number");
}


// =====================================
// 6 - 8
// Not included in the uploaded PDF
// =====================================


// =====================================
// 9. Check Multiple Of 3
// =====================================

let z = 9;

if (z % 3 === 0) {
    console.log("z is a multiple of 3");
}


// =====================================
// 10. Check Password Length
// =====================================

let password = "mypassword123";

if (password.length >= 8) {
    console.log("Your password is strong");
}


// =====================================
// 11. Check Working Age
// =====================================

let age2 = 30;

if (age2 >= 18 && age2 <= 65) {
    console.log("You are of working age");
}


// =====================================
// 12. Check Primary Color
// =====================================

let color = "red";

if (
    color === "red" ||
    color === "green" ||
    color === "blue"
) {
    console.log("color is a primary color");
}


// =====================================
// 13. Check If Input Is A Number
// =====================================

function isNumber(value) {

    if (isNaN(value)) {
        console.log(value + " is not a number");
    } else {
        console.log(value + " is a valid number");
    }
}

isNumber(11);
isNumber("19");
isNumber("xyz");
isNumber("17.5");
isNumber("21F");
















