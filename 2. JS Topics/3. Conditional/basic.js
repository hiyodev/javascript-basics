"use strict";

// prettier-ignore
function switchStatement() {
  let someValue = 3;

  // Switch statements uses stricly equality "===" operator. 
  switch (someValue) {
    case "3": // No match since this "3" is a "string" type.
      console.log(`Matched with string, "3"...`);
      break;
    case 3: // Match since someValue is a "number" type and so is the value "3" here.
      console.log("Matched with number, 3...");
      break;
    default:
      console.log("No match found!");
  }
}

//
function ternaryChaining() {
  console.log(1 ? (2 ? "first path" : "second path") : "third path");
  console.log(1 ? (0 ? "first path" : "second path") : "third path");
  console.log(0 ? (2 ? "first path" : "second path") : "third path\n");
}

function summaryText() {
  console.log(`Summary:
  - Switch statements will use strictly equal operator "===" so take note of the type differences. 
  `);
}

switchStatement();
ternaryChaining();
summaryText();
