"use strict";

// prettier-ignore
function plusOperator() {
  console.log(`1: The "+" operator when either of its left or right operand is a "string", will convert the other operand to a string: 
  1. (2 + "1");      => ${2 + "1"}
  2. ("2" + 1);      => ${"2" + 1}
  3. (2 + 2 + "1")   => ${2 + 2 + "1"}
  4. ("2" + 2 + 1)   => ${"2" + 2 + 1}
  5. (NaN + 2)       => ${NaN + 2} -> NaN because "NaN" has no defined number. 
  6. (undefined + 2) => ${undefined + 2} -> NaN because "undefined" has no numerical representation.
  7. (null + 1)      => ${null + 1} -> It's 1 because "null" is 0, and under-the-hood, it's 0x00 memory. 
  8. (true + 1)      => ${true + 1} -> It's 2 because true is 1, false is 0. 
  `);

  console.log(`2: The "+" operator, used in a unary context, can convert valid values into numbers:
  1. (+"2");        => ${+"2"};
  2. (+"1" + +"2"); => ${+"1" + +"2"} -> This is basically a shorter version of "Number("1") and "Number("2")
  3. ("1" + "2");   => ${"1" + "2"}
  4. (+null)        => ${+null}
  5. (+true)        => ${+true}
  6. (+undefined)   => ${+undefined}
  `);
}

// prettier-ignore
function minusOperator() {
  console.log(`3: The "-" operator, unlike the "+" operator will convert their operands to numbers:
  1. ("4" - "2");         => ${"4" - "2"} 
  2. ("4" - 4);           => ${"4" - 4}
  3. (" \\t  \\n  " - 2);   => ${"\t  \n" - 2} -> When a "string" is converted into a number, all formatting such as tab, whitespace, etc are removed. 
  4. ("?" - 2);           => ${"?" - 2} -> Anything that is not a valid number will be NaN after conversion.
`);
  
  console.log(`4: The "-" operator, used in a unary context, will negate any valid numbers or convert them into a "number" type first before negation:
  1. (-(-100))    => ${-(-100)}
  2. (-null);     => ${-null} -> "null" gets converted into a "number" type which is 0. There's no -0 so it's just 0.
  3. (-true);     => ${-true} -> "true" gets converted into a "number" type which is 1. 1 is a valid number therefore negation gets applied.
  4. (-undefined) => ${-undefined} -> NaN because "undefined" gets converted into a "number" type which is "NaN". 
  5. (-"100")     => ${-"100"}
  `);
}

function assignmentOperator() {
  let a;
  let b;

  console.log(`4: The "=" operator, unlike other languages, in JavaScript, it returns the "assigned" value:
  1. (b = 5)        => ${(b = 5)}
  2. (a = 5) === b; => ${(a = 5) === b}
  3. (b = 6) === a; => ${(b = 6) === a}
  `);
}

function summaryText() {
  console.log(`Summary:
  - Unary "+" will convert anything ( except non-numbers and the "undefined" type ) into a "number". 
  - Unary "-" will negate any valid number. For non-numbers, it will try to convert them into a "number" first before negating. 
    > For Unary operators, anything that cannot be converted to a "number" type results in NaN.

  - ONLY Binary "+" will convert either left or right operand to a "string" type.
  - ALL Binary operators other than "+" will convert any non-number operands to a "number" type before applying the operation. 
    > For Binary operators, anything that cannot be converted to the correct type results in NaN. 
  `);
}

plusOperator();
minusOperator();
assignmentOperator();
summaryText();
