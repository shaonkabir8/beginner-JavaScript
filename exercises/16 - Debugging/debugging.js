/* eslint-disable no-unused-expressions */
/* eslint-disable prettier/prettier */
const people = [{
    name: 'Wes',
    cool: true,
    country: 'Canada'
  },
  {
    name: 'Scott',
    cool: true,
    country: 'Merica'
  },
  {
    name: 'Snickers',
    cool: false,
    country: 'Dog Country'
  },
];

people.forEach((person) => {

  // make a group for our all console statements
  console.groupCollapsed(`${person.name}`);

  console.log(`Name : ${person.name}`)
  console.log(`Country : ${person.country}`)
  person.cool ? console.info(`Cool : ${person.cool}`) : console.error(`Cool : ${person.cool}`);

  console.groupEnd(`${person.name}`)
});


// Console Methods

// create a group for all our console statements
// group console
  // console.groupCollapsed
  // console.group
  // console.groundEnd


// Callstack

// Grabbing Elements

// Breakpoints

// Scope

// Network Requests

// Break On Attribute

// Some Setup Code

function doctorize(name) {
  return `Dr. ${name}`;
}

function greet(name) {
  doesntExist();
  return `Hello ${name}`;
}

function go() {
  const name = doctorize(greet('Wes'));
  console.log(name);
}

const button = document.querySelector('.bigger');
button.addEventListener('click', function (e) {
  const newFontSize =
    parseFloat(getComputedStyle(e.currentTarget).fontSize) + 1;
  e.currentTarget.style.fontSize = `${newFontSize}px`;
});

// A Dad joke fetch
async function fetchDadJoke() {
  const res = await fetch('https://icanhazdadjoke.com/', {
    headers: {
      Accept: 'text/plain',
    },
  });
  const joke = await res.text();
  console.log(joke);
  return joke;
}