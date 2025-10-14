// var firstName = "Shubham"; // Function-Scoped, Hoisted, Redeclared, Reassigned
// let age = 29;  // Blocked-Scoped, reassigned
// const isIndian = true // Blocked-Scoped, not-assigned

// console.log(name)
// console.log(age)
// console.log(isIndian)

// keyword - Reserved Word.
// User Defined - Literals.

console.log(firstName) // Scope of Variable is being considered.
 var firstName = "aman"
 var firstName = "Shruti"

function myFunction() {
  // var firstName = "Cuvette"
  console.log(firstName)
}

{
  let a = 10
  a = 34;
  const b = 12;
  console.log(a)
  console.log(b)
}

// console.log(a)


// ES6 JavaScript - 2015

console.log(firstName)

myFunction()

// Global Scope - Variables/Functions not Inside in any function.
// Local Scope - Variables/Functions Inside in any function.
// ReferenceError - a is not defined.
// TypeError - a is not defined.


let vehicle = "Tata Nexon"
vehicle = 1623823;
vehicle = true


// Object

const person = {
  name: "Kishore",
  age: 23,
  isStudent: false,
  greet: function() {
    return `Hello, I'm ${this.name}`
  }
}

console.log(person.name)
console.log(person.greet())

const fruits = ["apple", "banana", "grapes", "melon"]
console.log(fruits[2])
console.log(fruits.push("strawberry")) // total length of array
console.log(fruits)

// Function

// Regular Function
// function add(a, b) {
//   return a + b
// }


// Function Expression
// const add = function(a,b) {
//   return a + b
// }

// Arrow Function
const add = (a, b) => a + b

console.log(add(2, 3))

let x = 20
console.log(typeof x)


console.log(parseInt("34"))
console.log(parseInt("3413px"))



const temp = 38

if(temp > 30) {
  console.log("Its Hot")
} else if(temp >= 20) {
  console.log("Weather is good")
} else {
  console.log("Its Cold")
}


// Ternary Operator

const message = temp > 30 ? "hot" : "cool"
console.log(message)


// Loops

for(let i = 0; i < 5; i++) {
  console.log("Iteration", i)
}


// Array Methods

// 1. Array Manipulation

let numbers = [1, 2, 3]

// Adding Elements

// numbers.push(4) // [ 1, 2, 3, 4]
// numbers.unshift(0) // [ 0, 1, 2, 3, 4]
// numbers.splice(2, 0, 1.5) // [ 0, 1, 1.5, 2, 3, 4]
// console.log(numbers)

// Removing Elements

// numbers.pop()
// console.log(numbers)
// numbers.shift()
// console.log(numbers)
// numbers.splice(1, 1)
// console.log(numbers)


// Emptying an Array

// numbers = []
numbers.length = 0
console.log(numbers)

// Finding Elements from an Array

const primitives = [10, 20, 30, 40, 20]
console.log(primitives.indexOf(20))
console.log(primitives.lastIndexOf(20))
console.log(primitives.includes(30))

// References

const users = [
  {id: 1, name: "ab"},
  {id: 2, name: "abc"},
  {id: 3, name: "abcd"},
  {id: 4, name: "abcd"},
  {id: 5, name: "abcd"},
  {id: 6, name: "abcd"},
  {id: 7, name: "abcd"},
  {id: 8, name: "abcd"},
]

const mySpecialRequirement = users.find(user => user.id === 2)
console.log(mySpecialRequirement) 

const mySpecialRequirementIndex = users.findIndex(user => user.name === "abcd")
console.log(mySpecialRequirementIndex) 





