"use strict";

// For built-in objects like arrays, sets, maps.
function forOfLoop() {
  let someArray = [1, 2, 3, 4, 5];
  let someSet = new Set(["A", "B", "C", "C", "C"]);
  let someMap = new Map([
    ["name", "hiyoshi"],
    ["occupation", "SWE"],
  ]);

  for (const element of someArray) {
    console.log(element);
  }

  for (const set of someSet) {
    console.log(set);
  }

  for (const [key, value] of someMap) {
    console.log(`Key: ${key}, Value: ${value}`);
  }
}

// For custom objects but you can use it for arrays as well
function forInLoop() {
  let someObj = { name: "Hiyoshi", occupation: "SWE" };
  let someArray = [5, 6, 7, 8, 9];

  for (const key in someObj) {
    console.log(`Property: ${key}, Value: ${someObj[key]}`);
  }

  for (const index in someArray) {
    console.log(`Index: ${index}, Value: ${someArray[index]}`);
  }
}

forOfLoop();
forInLoop();
