/*1.	Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
1a.	Programmatically subtract the value of the first element in the array from the value in the last element of the array 
•	Do not use numbers to reference the last element, find it programmatically, 
•	ages[7] – ages[0] is not allowed!*/
/*1b.	Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).*/


const ages = [3, 9, 23, 64, 2, 8, 28, 93];

let lastMinusFirst = ages.pop() - ages.shift();
console.log(lastMinusFirst);

/*3.	How do you access the last element of any array?            ages.pop()*/

/* 4.	How do you access the first element of any array?           ages.shift()*/


/* 1c.	Use a loop to iterate through the array and calculate the average age. */

const ages1 = [3, 9, 23, 64, 2, 8, 28, 93];
let sumOfAges = 0;

for (var age of ages1) {
    sumOfAges += age;
}
let average1 = sumOfAges/ages1.length;
console.log(average1);
console.log(sumOfAges);

/* OR */

let sumOfAges1 = 0;

for ( let i = 0; i < ages1.length; i++) {
    sumOfAges1 += ages1[i];
}
let average2 = sumOfAges1/ages1.length;
console.log(average2);


/* 5.	Create a new array called nameLengths. Write a loop to iterate over the previously 
created names array and add the length of each name to the nameLengths array.
For example:

namesArray = ["Kelly", "Sam", "Kate"] //given this array
nameLengths = [5, 3, 4] //create this new array */

const nameLength = [];
namesArray = ["Kelly", "Sam", "Kate"];

for (let name of namesArray) {
    nameLength.push(name.length);
}
console.log(nameLength);

/* 6.	Write a loop to iterate over the nameLengths array and 
calculate the sum of all the elements in the array. */

let sumOfNameLength = 0;

for (let length of nameLength) {
    sumOfNameLength += length;
}
console.log(sumOfNameLength);

/* 7.	Write a function that takes two parameters, word and n, as arguments and 
returns the word concatenated to itself n number of times. 
(i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).*/


function multipleWord(word, n) {
    let newWord = '';

    for (let i = 0; i < n; i++) {
        newWord += word;
    }
    return newWord
}

console.log(multipleWord('Hello', 3));

/* 8.	Write a function that takes two parameters, firstName and lastName, and returns a full name.
•	The full name should be the first and the last name separated by a space. */

function fullName(name, lastName)  { 
    return (name + " " + lastName);
}

console.log(fullName("Farhod", "Ibragimov"));

/* 9.	Write a function that takes an array of numbers and returns true if 
the sum of all the numbers in the array is greater than 100. */

sampleArray = [25, 100]
function sumOfArray(array) {
    let arraySum = 0;
    for (let value of array) {
        arraySum += value;
    }
    if (arraySum > 100) {
        return true;
    } else {
        return false;
    }
}

console.log(sumOfArray(sampleArray));
/* console.log(arraySum); ======> will not work because arraySum is {scope} variable; */

/* 10.	Write a function that takes an array of numbers 
and returns the average of all the elements in the array */

function averageOfArray (array) {
    let totalOfArray = 0;
    for (let value of array) {
        totalOfArray += value;
    }
    return totalOfArray / array.length;
}

console.log(averageOfArray(ages1));

/* 11.	Write a function that takes two arrays of numbers and 
returns true if the average of the elements in the first array is greater 
than the average of the elements in the second array. */

let arr1 = [25, 50];
let arr2 = [12, 20];
function compareArrays (array1, array2) {
    let arraysSumAverage = (arr) => {
        let totalOfArray = 0;
        for (let value of arr) {
            totalOfArray += value;
    } 
    return totalOfArray / arr.length;}

    if (arraysSumAverage(array1) > arraysSumAverage(array2)) {
        return true;
    } else {
        return false;
    }
}
console.log(compareArrays(arr1, arr2));

/* 12.	Write a function called willBuyDrink that takes a boolean isHotOutside, 
and a number moneyInPocket, and returns true if 
it is hot outside and if moneyInPocket is greater than 10.50. */ 

let param1 = true;
let param2 = 11;

function willBuyDrink (isHotOutside, moneyInPocket) {
    if (isHotOutside && moneyInPocket > 10.50) {
        return true;
    } else {
        return false;
    }
}

console.log(willBuyDrink(param1, param2));

/* 13.	Create a function of your own that solves a problem. 
•	In comments, write what the function does and why you created it. */

/* This function creates new array of friends name shorter 
or equal to four letters and excludes "number" strings */

let friends = ["Ilya", "Ricky", "6589", "Sam", "Ralph", "Tina", "654",  "7894"];
function friend(arrOfFriends){
    var myFriends = [];
    let isNumeric = () => { return (/^-?\d+$/.test(arrOfFriends[i]));}
    for (i = 0; i< arrOfFriends.length; i++) {
      if (arrOfFriends[i].length <= 4 && isNumeric(arrOfFriends[i]) !== true )  {
        myFriends.push(arrOfFriends[i]);
      }
    }
    return myFriends;
}
console.log(friend(friends))



















