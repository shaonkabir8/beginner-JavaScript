// const age = 100;

// function go() {
//   const myAge = 200;
//   const hair = 'blonde';
//   console.log(age);
//   console.log(myAge);
//   console.log(hair);
// }

// go();
/* eslint-disable*/

for(let i = 0; i < 10; i++) {
  console.log(`index is: ${i}`)
}

// isCool function for better understanding of `JavaScript Scopping`
const isCool = name => {
  
  // Check person is cool or not!
  console.log(`✈ CHECKING..... ${name} is Cool or Not!`)
  
  if(name === 'Shaon') {
    // ! if we use `let` variable instead of `var`, It'll show a RefferenceError...
    // ! Because `let` is `Block` Scoped. 
    // ! to solve this problem, we'll have to define `let` variable in upper label [outside of `if` Block]
    // ! Easies option is to use `var`
    // ! Because it is `function scoped` not `Block scoped`.
    var cool = 'Cool 🔥';
    var message = "✔ Yesss! "
  } else {
    // ! if NOT COOL, update informations
    cool = "Not Cool 😶"
    message = "No"
  }
  
  // global statement for both Logic.. (if cool or not!) 
  console.log(`${message}! ${name} is ${cool}`);
  return cool;
}

isCool('Shaon')


/* 
  🔥 Lexical Scoping

  In JavaScript, A function will execute the variables, methods where It is Defined not Called!



*/

// 🔥 Clear the previous console... 
console.clear()


const dogName = `Flufykings`;

// This function will only print the dog name.
// It'll execute dogName as 'Flufykings'
// Because this function is defined here and currently `Flufykings` is available as dogName variable.
function printDogName() {
  console.log(`Dog name is : ${dogName}`);
}

// ! What's going on here!
// ! In this function, a new variable is defined named 'dogName'.
// ! This variable is totally different scoped. It isn't updating the previous variables value.
// ! After that, `printDogName` function will be executed with It's(printDogName) value.
// ! Beause, printDogName function is just called here not Defined!! it's main point.
function updateDogName() {
  const dogName = 'Marry Popins';
  printDogName();
}

updateDogName()



// Refference: Beginner JavaScript (Class- 17) of @wesbos


