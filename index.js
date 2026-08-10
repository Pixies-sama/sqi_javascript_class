// const { use } = require("react");

// alert("Hello Hassan");

// COMMENT IN JAVASCRIPT

// ASSIGNMENT one 
// UNDERSTAND AND STUDY ALL THE DATATYPES 
// number 
// string 
// array 
// Object
// undefined 
// null

// ASSIGNMENT TWO 
// Diiferentiate between git and github

//  5th august 2026
// Data type explained 
//  Primitive datatype and non-primitive datatypes 
// -Primitive datatype are datatype that takes only one value  number,string
// -non-primitive datatype takes more than one inputs e.g 

// NUMBER
let number = 10;
console.log(10);
console.log(25);

// STRING
console.log("My name is Hassan Omoloye");
console.log('What is your name?');

// ARRAY
let users = ['HASSAN', ',SHOLA', 'SHAYO', 'DUNNI'];
let moreUsers = ['PIXIES', 'SAMA']
console.log(users, moreUsers);

// OBJECTS : takes properties and methods or values 
let person = {
     name: "Hassan",
     age:20,
     student: true,
     occupation: "Student",
}
console.log(person);


// syntac error and not logical error 
// to debug 
// to restrun


// Variable - is a container used to store values(s)/data

// CASING
// CARMEL CASING commonly used in javascript
let myAgeIs = 10;
// SNAKE CASING 
let my_age_is = 10;
// PASCAL CASING used in java
let MyAgeIs = 10;


// Assignment 
// List the rules guiding variable declaration
/* 
All JavaScript variables must be identified with unique names.
These unique names are called identifiers.
Identifiers can be short names (like x and y) or more descriptive names (age, sum, totalVolume).

The general rules for constructing names for variables (unique identifiers) are:

Names can contain letters, digits, underscores, and dollar signs.
Names must begin with a letter
Names can also begin with $ and _ (but we will not use it in this tutorial)
Names are case sensitive (y and Y are different variables)
Reserved words (like JavaScript keywords) cannot be used as names
*/

// what is the difference between let,const and var variable keyword
/*
The var keyword is used in all JavaScript code from 1995 to 2015.

The let and const keywords were added to JavaScript in 2015.

If you want a general rule: always declare variables with const.

If you think the value of the variable can change, use let.
*/