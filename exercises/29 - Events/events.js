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

// buyButtons.forEach(btn => {
//   btn.addEventListener('click', buyItem)
// })



// 




// USE THIS TRICKS WHILE LOOPING THROUGH DATA
const handleBuyItem = btn => {
  btn.addEventListener('click', e => {
    console.log("You're going to buy 🔥")

    //grab data-attr from HTML markup
    // convert "String" price to "Number" using parseFloat
    const price = parseFloat(e.target.dataset.price);
    console.log(`Your desire product price is: $${price}`)
    

    // 🔥 prevent Bubbling 
    e.stopPropagation();

  })
}

buyButtons.forEach(handleBuyItem)


// Event for Window Click 🔥
window.addEventListener('click', e => {
  console.log(`YOU CLICKED ON: ${e.target.localName} 🔥`)
})

