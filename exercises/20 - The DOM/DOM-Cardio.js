/* eslint-disable*/

// Make a div
const div = document.createElement('div');
// add a class of wrapper to it
div.classList.add('wrapper')
// put it into the body
const body = document.querySelector('body')
body.appendChild(div);

// make an unordered list
const list = document.createElement('ul')
// add three list items with the words "one, two three" in them
const listItemOne = document.createElement('li')
listItemOne.textContent = "one"
const listItemTwo = document.createElement('li')
listItemTwo.textContent = "two"
const listItemThree = document.createElement('li')
listItemThree.textContent = "three"
list.append(listItemOne,listItemTwo,listItemThree)
// put that list into the above wrapper
div.appendChild(list)

// create an image
const image = document.createElement('img')
// set the source to an image
image.setAttribute('src', 'https://placehold.it/300')
// set the width to 250
image.style.width = "250px";
// add a class of cute
image.classList.add('cute')
// add an alt of Cute Puppy
image.setAttribute('alt', "Cute Puppy")
// Append that image to the wrapper
div.appendChild(image)

// with HTML string, make a div, with two paragraphs inside of it
// put this div before the unordered list from above
const paragraphDiv = `
    <div>
        <p class="warning">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, ab.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, ab.</p>
    </div>
`

list.insertAdjacentHTML('beforebegin', paragraphDiv)
// add a class to the second paragraph called warning
// remove the first paragraph

// create a function called generatePlayerCard that takes in three arguments: name, age, and height

// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

// make a new div with a class of cards

// Have that function make 4 cards

// append those cards to the div
// put the div into the DOM just before the wrapper element
// Bonus, put a delete Button on each card so when you click it, the whole card is removed

// select all the buttons!
// make out delete function
// loop over them and attach a listener
