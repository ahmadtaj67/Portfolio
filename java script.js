// Variables
let name = "Ahmad";
let age = 20;

// Data Types
const isStudent = true; // Boolean
const skills = ["HTML", "CSS", "JavaScript"]; // Array
const profile = { name: name, age: age }; // Object

// Arithmetic Operators
const a = 10;
const b = 5;
const sum = a + b; // 15

// Logical Operators
const isAdult = age >= 18; // true

// Comparison Operators
console.log("Is Ahmad an adult?", isAdult); // true

// Conditional Statements
if (isStudent) {
    console.log(`${name} is a student.`);
} else {
    console.log(`${name} is not a student.`);
}

// Switch Statement
let skillLevel = "intermediate";
switch (skillLevel) {
    case "beginner":
        console.log("Just starting out.");
        break;
    case "intermediate":
        console.log("Gaining some experience.");
        break;
    case "advanced":
        console.log("Expert level.");
        break;
    default:
        console.log("Skill level unknown.");
}

// Loops
for (let i = 0; i < skills.length; i++) {
    console.log(`Skill ${i + 1}: ${skills[i]}`);
}

// Functions
function greetUser(userName) {
    return `Hello, ${userName}!`;
}
console.log(greetUser(name)); // Hello, Ahmad!

// Arrays and Array Methods
skills.push("Python"); // Add a new skill
console.log(skills); // ["HTML", "CSS", "JavaScript", "Python"]

// Built-in Objects
const date = new Date();
console.log("Current date:", date);

// Strings and String Methods
const message = "Welcome to my portfolio!";
console.log(message.toUpperCase()); // WELCOME TO MY PORTFOLIO!

// Filter function
const filteredSkills = skills.filter(skill => skill.includes("Java"));
console.log("Filtered Skills:", filteredSkills); // ["JavaScript"]

// Map function
const skillLengths = skills.map(skill => skill.length);
console.log("Skill lengths:", skillLengths); // [4, 3, 10, 6]

// Error Handling in JS
try {
    console.log(undeclaredVariable); // This will throw an error
} catch (error) {
    console.error("An error occurred:", error.message);
}

// Classes
class Developer {
    constructor(name) {
        this.name = name;
    }
    introduce() {
        return `Hi, I'm ${this.name}, a web developer.`;
    }
}
const ahmad = new Developer(name);
console.log(ahmad.introduce()); // Hi, I'm Ahmad, a web developer.

// Template Literals
const introduction = `My name is ${ahmad.name} and I am ${age} years old.`;
console.log(introduction); // My name is Ahmad and I am 20 years old.

// Spread Operator
const newSkills = [...skills, "React"];
console.log("All Skills:", newSkills); // ["HTML", "CSS", "JavaScript", "Python", "React"]

// Rest Operator
function displaySkills(...skills) {
    console.log("Skills:", skills);
}
displaySkills(...skills); // Skills: ["HTML", "CSS", "JavaScript", "Python"]