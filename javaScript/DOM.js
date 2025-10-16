const nav = document.getElementById("navSection")
// const nav = document.querySelector("#navSection")
// const listItem = document.querySelector(".headerClass")
// console.log(nav)
// console.log(listItem)


// const paragraphs = document.getElementsByClassName("para")
// console.log(paragraphs)

// const paragraph = document.getElementsByTagName("p")
// console.log(paragraph)
nav.style.backgroundColor = "red"

const spanTag = document.querySelector("span")
spanTag.textContent = "Hello, We are learning...."

const h5Ele = document.createElement("h5")
h5Ele.textContent = "I'm heading 5"
document.body.appendChild(h5Ele)