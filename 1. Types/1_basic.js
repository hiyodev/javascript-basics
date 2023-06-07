"use strict";
// This must be at the top, otherwise it is ignored.
// By default, this will be enabled when using classes and modules so we will omit this when writing classes / modules.

// 8 types in JavaScript, 1 - 7 are primitive data types. 8 is a object type.
function theEightTypes() {
  console.log(`1: The 8 basic data types are:
  1. 0 / 1.1 / 0.0    => ${typeof 0}
  2. 1n / 1_1n / 0n   => ${typeof 1n}
  3. "hi" / 'h' / "1" => ${typeof "hi"}
  4. undefined        => ${typeof undefined}
  5. true / false     => ${typeof true}
  6. null             => ${"null"} -> If you do "typeof null" it will return object but it should be "null", generally this is regarded as a "Mistake" in JavaScript. So this type is still "null".
  7. Symbol("someId") => ${typeof Symbol("someId")}
  8. {name: hiyoshi}  => ${typeof { name: "hiyoshi" }}
  `);
}

/* -------------------------------------------------------------------------------------------------------------------------------- */

// Most of the time operators and functions will automatically convert values to the correct type.
function typeConversions() {
  // Strings
  let a = String(100);
  let b = String(null);
  let c = String(false);
  let d = String({ name: "hiyoshi" });
  let e = JSON.stringify({ name: "hiyoshi" });
  let f;
  let g;
  let h;

  console.log(`2: All types can be directly converted to "string" except "object": 
  1. String(100);                         => ${a}:${typeof a}
  2. String(null);                        => ${b}:${typeof b}
  3. String(false);                       => ${c}:${typeof c}
  4. String({ name: "hiyoshi" });         => ${d}:${typeof d} -> it says [object Object] because you cannot convert "object" to "string" directly. Use JSON.stringify instead. 
  5. JSON.stringify({ name: "hiyoshi" }); => ${e}:${typeof e}
  `);

  // Numbers
  a = "6" / "2";
  b = Number("6");
  c = Number("A");
  d = Number("1235n");
  e = Number("     1235 \t \r \n");
  f = Number(null);
  g = Number(false);
  h = Number("");

  console.log(`3: Only well defined and valid numbers can be converted into numbers:
  1. "6" / "2";                   => ${a}:${typeof a}
  2. Number("6");                 => ${b}:${typeof b}
  3. Number("A");                 => ${c}:${typeof c} -> "A" is not a number and no, unlike other languages, we do not get the ASCII value as there's no "char" type in JavaScript. 
  4. Number("1235n");             => ${d}:${typeof d} -> "1235n" is still not a number. "123_5" is also invalid even though it's allowed and valid when directly declaring as a number. 
  5. Number("    1235 \\t \\r \\n"); => ${e}:${typeof e} -> This is OK because whitespaces, tabs, newlines and any other formattings from the start and end are removed. 
  6. Number(null);                => ${f}:${typeof f}
  7. Number(false);               => ${g}:${typeof g}
  8. Number("");                  => ${h}:${typeof h}
  `);

  // Booleans
  a = Boolean(1);
  b = Boolean(5000n);
  c = Boolean("0");
  d = Boolean("A");
  e = Boolean("");
  f = Boolean(undefined);
  g = Boolean(null);
  h = Boolean(NaN);

  console.log(`4: All values except "0", "null", "undefined", "NaN" and "" will be evaluated as "true":
  1. Boolean(1);         => ${a}:${typeof a}
  2. Boolean("5000n");   => ${b}:${typeof b}  
  3. Boolean("0");       => ${c}:${typeof c}
  4. Boolean("A");       => ${d}:${typeof d} 
  5. Boolean("");        => ${e}:${typeof e} -> "" is false because it's empty.
  6. Boolean(undefined); => ${f}:${typeof f} 
  7. Boolean(null);      => ${g}:${typeof g} 
  8. Boolean(NaN);       => ${h}:${typeof h} 
  `);
}

theEightTypes();
typeConversions();
