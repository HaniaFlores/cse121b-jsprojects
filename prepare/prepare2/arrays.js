//Activity One
const myArray = ["one", "two", "three"];

const toHtml = myArray.map(function (x) {
    return `<li>${x}</li>`;
});

document.getElementById("myList").innerHTML = toHtml.join("");

//Activity Two
const letters = ["A", "B", "A"];

function convertToGpa(letter) {
    let gpa = 0;
    if (letter === "A") {
        gpa = 4;
    }
    else if(letter === "B") {
        gpa = 3;
    }
    return gpa;
}

const gpaPoints = letters.map(convertToGpa);

//Activity Three
const totalPoints = gpaPoints.reduce((sum, value) => sum + value);

const finalGpa = totalPoints / gpaPoints.length;

//Activity Four
const fruits = ["watermelon", "peach", "apple", "tomato", "grape"];

const newFruits = fruits.filter(fruit => fruit.length > 6);

//Activity Five
const numbers = [12, 34, 21, 54];

const luckNumber = 21;

let luckyIndex = numbers.indexOf(luckNumber);