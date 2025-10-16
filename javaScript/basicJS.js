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
console.log(typeof users)


// Transformation Methods


const products = [
  { id: 1, name: "Laptop", price: 1000, inStock: true },
  { id: 2, name: "Mouse", price: 200, inStock: false },
  { id: 3, name: "Keyboard", price: 300, inStock: false },
  { id: 4, name: "Wifi Router", price: 400, inStock: true },
]

// filter method

const availableProducts = products.filter(product => product.inStock)
console.log(availableProducts)


// map 

const names = products.map(product => product.name)
console.log(names)

const prices = products.forEach(product => product.price)
console.log(prices)

// Reduce

const total = products.reduce((finalValue, product) => finalValue + product.price, 500)
console.log(`Total: $${total}`)

// sum = accumulator = 0


// String Interpolation

const school = "Paul's"
console.log(`St. ${school} School`)

// Spread Operator

const arr1 = [ 1, 2, 3 ]
const arr2 = [ 4, 5, 6 ]
// const combinedArray = [ ...arr1, ...arr2]
const combinedArray = arr1.concat(arr2)
console.log(combinedArray)



// ...arr1 = 1, 2, 3


const colors = ["red", "blue", "green"]
colors.forEach(color => {
  console.log(color)
}) 

// for....of

// for(const element of array) {
//   console.log(element)
// }

// Objects

// OOPS - Object Oriented Programming
// Class and Objects
// => Encapsulation
// => Abstraction
// => Inheritance
// => Poylmorphism


function createUser(name, age) {
  return {
    name,
    age,
    isAdult: function() {
      return this.age >= 18
    }
  }
}

const user1 = createUser("Shubham", 29)
const user2 = createUser("navin", 26)
console.log(user2)


// Constructor Function
function User(name, age) {
  this.name = name
  this.age = age
  this.isAdult = function() {
    return this.age >= 18
  }
}


const person1 = new User("Bob", 32)
console.log(person1)
console.log(person1.isAdult())


// Value vs Reference Types


let p = 10;
let q = p // Value copy
console.log(q)
q = 20;
console.log(p)


// References

let obj1 = { item: 30 }
let obj2 = obj1
obj2.item = 40
console.log(obj1.item)

const animal = { name: "Bruno"}
animal.age = 12
animal["home"] = "delhi"
// console.log(animal)

// delete animal.age
// console.log(animal)

// Enumerating Objects
for (let key in animal) {
  console.log(`${key}: ${animal[key]}`)
}


// Built-in Objects
console.log(Math.PI)
console.log(Math.round(4.5))
console.log(Math.random())
console.log(Math.max(1, 5, 3))

// String Methods
const text = "Hello World"
console.log(text.length)
console.log(text.toUpperCase())
console.log(text.includes("World"))
console.log(text.slice(0, 8))

// Template Literals

// Date Object
const now = new Date()
console.log(now)
console.log(now.getFullYear())



// Functions


// Hoisted Behaviour of Function

callMe()

function callMe() {
  // alert("I have called")
}


// variables and functions

// console.log(tellMe)
let tellMe = "asdasdas"

// Temporal Dead Zone


// Arguments Objects & Rest Operator

function sumTraditional() {
  console.log(arguments) // Array like Object
  let total = 0;
  for(let i = 0; i < arguments.length; i++) {
    total += arguments[i]
  }
  return total
}

// total = total + arguments[i]
// total = 0 + 1 = 1
// total = 1 + 2 = 3

console.log(sumTraditional(1, 2, 3, 4))



function sumModern(...numberss) {
  console.log(numberss)
  return numberss.reduce((total, num) => total + num, 0)
}

console.log(sumModern(2, 4, 6, 8))


function intro(name = "Anonymous") {
  console.log(`Hello, My name is ${name}`)
}

intro("Shubham")


// const document = {
//   html : {
//     head: {
//       title: "DOM Website"
//     }
//     body: {
//       div: {
//         h1
//       }
//     }
//   }
// }

// document.html.body.div




