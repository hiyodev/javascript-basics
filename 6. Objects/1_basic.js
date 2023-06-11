"use strict";

function basicUsageAndRules() {
  // Reserved keywords are allowed. Spaces and dots, commas, etc are also allowed ONLY if it's within quotation marks.
  let A = {
    name: "Hiyoshi",
    "work occupation": "Software Engineer",
    return: "A",
    for: "B",
    class: "C",
  };

  console.log(`${A.name} works as a ${A["work occupation"]}.`);

  let B = {
    ...A,
  };

  let name = "Hiyoshi";
  let occupation = "Software Engineer";

  let C = {
    name,
    occupation,
  };

  // All non-string property names ( not prop values ) are converted to "string" type
  let D = {
    0: 1,
    2: 5,
  };

  console.log(A);
  console.log(B);
  console.log(C);
  console.log(D);
}

function findingProperty() {
  let someObject = {
    language: "English",
    country: "Singapore",
  };

  console.log("language" in someObject); // True since "language" property name exists
  console.log(someObject.blahblah); // Undefined since "blahblah" property cannot be accessed.
  console.log("blahblah" in someObject); // False since it's not found "IN" 'someObject'.

  // Pitfall with these methods
  let object = {
    blahblah: undefined,
  };

  console.log(object.blahblah); // Undefined so does it mean the property does not exist and it cannot be accessed?
  console.log("blahblah" in object); // True, the property exists, it's just assigned to "undefined".
}

basicUsageAndRules();
findingProperty();
