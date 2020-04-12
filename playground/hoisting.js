/* eslint-disable */
/* 
  ? HOISTING:-
  ? When variables and functions are decleared/defined,
  ? Our JS compiler took all our variables and function into Upper Lavel.
  ? After that all our actual code goes

  ! IMPORTANT_NEWS:
  ! Hoisting works only in variable decoration and function decoration.
  ! It is't working in Arrow funciton or anyther ways except `function` keyword.
*/




// variable hoisting
let age;
console.log(age);
age = 10;

/* What does this file do? */
sayHi();

/* How does this file do it? */
function sayHi() {
  console.log('hey!');
  console.log(add(10, 2));
}

// ! It won't work. 
// ! Uncought Refference Error: can't access 'add' before initilization.
// const add = (a, b) => a + b;

