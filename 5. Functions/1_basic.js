"use strict";

const someVar = "Main Scope";

function standardFunction() {
  // console.log(someVar); // You cannot do this IF you have the *same *variable *declared in this scope! Compiler will assume it's a mistake.

  const someVar = "Function Scope"; // <-- You have a *local *var *here

  // local variable in any scope will shadow the same name variable outside the scope.
  console.log(someVar);

  {
    const someVar = "Scope within Function Scope";
    console.log(someVar);
  }
}

function functionWithParameters(first, second, third) {
  console.log("3 parameter function:", first, second, third);
}

function overloadFunction(first) {
  console.log("1 parameter function:", first);
}

function overloadFunction(first, second) {
  console.log("2 parameter function:", first, second);
}

function defaultParameterFunction(first = 1, second = 2) {
  console.log("default parameter function:", first, second);
}

standardFunction();

// prettier-ignore
console.log(`\nMissing parameters are just "undefined", these functions will still run.`);
functionWithParameters(1, 2, 3);
functionWithParameters(1, 2);
functionWithParameters(1);
functionWithParameters();

// prettier-ignore
console.log(`\nJavaScript does not support function / method overloading, it will simply pick the latest function definition and run that.`);
overloadFunction(1);
overloadFunction(1, 2);

// prettier-ignore
console.log(`\nSame as other languages, default function parameters will work as expected.`);
defaultParameterFunction();
defaultParameterFunction("A");
