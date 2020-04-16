/* eslint-disable */

const butts = document.querySelector('.butts');
const coolButton = document.querySelector('.cool');


function handleClick() {
  console.log("BUTTON IS CLICKED ! 🔥")
}

// Arrow function for remove listerner test
const hurray = () => console.log("🔥 HURRAY!!")


butts.addEventListener('click', handleClick);

coolButton.addEventListener('click', hurray)


// Dealing with MULTIPLE ITEMS
const buyButtons = document.querySelectorAll('.buy');

const buyItem = () => {
  console.log("BUY ITEM 🔥 ")
}

buyButtons.forEach(btn => {
  btn.addEventListener('click', buyItem)
})