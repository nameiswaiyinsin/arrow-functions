/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function
// function addTwoNumbers(a, b) {
//     // Code block
//     return a + b;
// }
// let sum = addTwoNumbers(3, 5);
// console.log(sum);

// Arrow Function With Parameters
const addTwoNumbers = (a, b) => {
    // Code block
    return a + b;
}
let sum = addTwoNumbers(3, 5);
console.log(sum);


// Single Line Arrow Function With Parameters
// const addTwoNumbers2 = (a, b) => (a + b); also valid
const addTwoNumbers2 = (a, b) => a + b;
let sum2 = addTwoNumbers2(2, 4);
console.log(sum2);

// Implicit Returns
const saySomething = message => console.log(message);
saySomething('Hello there!!');

const sayHello = () => console.log('hello');
sayHello();

// Returning Multiple Lines
const returnMultipleLines = () => (
    `<p>
      This is multiline string!
    </p>`
)
console.log(returnMultipleLines());




// Example 1:

let students = [
    {
        name: 'John',
        subjects: ['maths', 'english', 'cad'],
        teacher: { maths: 'Harry', english: 'Joan', cad: 'Paul' },
        results: { maths: 90, english: 75, cad: 87 },
    },
    {
        name: 'Emily',
        subjects: ['science', 'maths', 'english', 'art'],
        teacher: { science: 'Iris', maths: 'Harry', english: 'Joan', art: 'Simon' },
        results: { science: 93, maths: 95, english: 80, art: 95 },
    },
    {
        name: 'Adam',
        subjects: ['science', 'maths', 'art'],
        teacher: { science: 'Iris', maths: 'Harry', art: 'Simon' },
        results: { science: 63, maths: 79, art: 95 },
    }
];

const averagePoints = (arr, subject) => {
    let total_points = 0;
    let count_subjects = 0;
    for (let el of arr) {
        if (subject in el.results) {
            total_points += el.results[subject]
            count_subjects ++
        }
    }
    return total_points / count_subjects;
};
let averageMarks = averagePoints(students, 'english');
console.log(averageMarks)