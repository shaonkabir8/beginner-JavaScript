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











