"use strict";

// prettier-ignore
function equalityOperators() {
  console.log(`1. The "==" operator will convert all operand values except "null" and "undefined" to "number" type first before testing the comparison:
  1. (5 == "5");          => ${5 == "5"}
  2. (0 == "");           => ${0 == ""} -> true because Number("") = 0. 
  3. (0 == false);        => ${0 == false} 
  4. (null == false);     => ${null == false} -> False because both "null" and "undefined" are only equal to each other.
  5. (null == undefined); => ${null == undefined} -> True because both "null" and "undefined" are only equal to each other.
  6. (0 == undefined);    => ${0 == undefined} -> False because "undefined" is only equal to "null" or "undefined".
  7. (NaN == NaN);        => ${NaN == NaN} -> False when compared to anything, even itself. 
  `);

  console.log(`2. The "===" operator will not convert operands and perform the comparison immediately:
  1. (5 === "5");   => ${5 === "5"} -> False because 5 is a "number" while "5" is a "string".
  2. (5 === 5n);    => ${5 === 5n} -> False because 0 is a "number" while 5n is a "bigInt".
  3. (0 === false); => ${0 === false}
  `);

  console.log(`3. The ">", "<", ">=", "<=" operators are similar to the "==" operator except that it has no special rules for "null" and "undefined":
  1. (0 >= null);      => ${0 >= null} -> True because "null" converted to a "number" is 0.
  2. (0 <= null);      => ${0 <= null}
  3. (null >= null);   => ${null >= null}
  4. (null <= false);  => ${null <= false}
  5. ("A" > "a");      => ${"A" > "a"} -> False because in ASCII table, "A" is equal to ${"A".charCodeAt()} while "a" is equal to ${"a".charCodeAt()}. 97 is obviously greater than 65.
  6. ("AB" > "AC");    => ${"AB" > "AC"} -> False because we first compare their first letter, "A" and they are equal. We move to the next character and compare "B" and "C" to which "B" is smaller than "C".
  7. ("A" < "AC");     => ${"A" < "AC"} -> True because when we compared "A", they are equal, so we move to the next character, since "A" has no 2nd letter, we compare the length instead and "AC" is longer than "A".
  8. ("a" > "AAAAA");  => ${"a" > "AAAAA"} -> True because when we first compare the first letter, "a" is bigger therefore the comparison stops there even though "AAAAA" is longer in length. 
  `);
}

// prettier-ignore
function logicalOperators() {
  console.log(`4. The "||" operator returns the first truthy value:
  1. (true || false);  => ${true || false}
  2. (5 || false);     => ${5 || false}
  3. (100 || 999);     => ${100 || 999}
  4. ("A" || 2);       => ${"A" || 2}
  5. (null || 2);      => ${null || 2}
  6. (NaN || 2);       => ${NaN || 2}
  7. (undefined || 2); => ${undefined || 2}
  `);

  console.log(`5. The "&&" operator returns either first falsy value OR the last truthy value:
  1. (999 && null);                  => ${999 && null}
  2. (null && true);                 => ${null && true}
  3. (5 && 6 && 0 && 100 && false);  => ${5 && 6 && 0 && 100} -> "0" is the first falsy value. 
  4. (5 && 6 && false && 100 && 0);  => ${5 && 6 && false && 100 && 0} -> False not because it's returning the converted type but because the original type itself is already a "boolean" type value of "false".
  4. ("A" && "ABC" && 999);          => ${"A" && "ABC" && 999} -> "999" is converted to a "boolean" type which is "true" before the evaluation and after evaluation, the original value of 999 is returned as it's the last truthy value.
  `);

  console.log(`6. The "!" and "!!" operator works as expected and the first "!" operator will convert the value to a "boolean" type first then invert it:
  1. (!"Hello");   => ${!"Hello"} -> Boolean("Hello") = true, this is then inverted once. 
  2. (!!"Hello");  => ${!!"Hello"} -> Boolean("Hello") = true, it's then inverted to "false" and back to "true".
  3. (!null);      => ${!null}
  4. (!undefined); => ${!undefined}
  5. (!NaN)        => ${!NaN}
  `);
}

// prettier-ignore
function nullishCoalescingOperator() {
  console.log(`7. The "??" operator returns the first argument if it's not "null" or "undefined", otherwise it returns the second argument:
  1. (1 ?? 2);            => ${1 ?? 2}
  2. (0 ?? 2);            => ${0 ?? 2}
  3. (null ?? 2);         => ${null ?? 2}
  4. (undefined ?? 2);    => ${undefined ?? 2}
  5. (NaN ?? 2);          => ${NaN ?? 2} -> "NaN" is not "null" or "undefined", therefore it returns the first argument, "NaN".
  6. (null ?? null ?? 5); => ${null ?? null ?? 5}
  `);
}

function summaryText() {
  console.log(`Summary:
  - Equality "==" operator will convert operands to "number" type unless it's "null" or "undefined". "null" and "undefined" are only equal to each other and nothing else.
  - Strictly Equality "===" operator will not convert operands and will compare strictly based on type and value. If there is a type mismatch, it is always false. 
    > Other comparison operators like ">", "<", ">=", "=<" will also convert operands to "number" type just like "==" operator has no special treatment for "null" or "undefined" values.

  - Or "||" operator will always return the first truthy value. "null", "NaN", "undefined" are not truthy values. 
  - And "&&" operator will return either the first falsy value or the last truthy value. 
    > These two operators will convert operands to "boolean" type but will always return their original value. 

  - Nullish Coalescing "??" operator is similar to the Or "||" operator except that it returns the first "defined" value rather than the first "truthy" value.
    > For example: (0 ?? 1) returns 0 whereas (0 || 1) returns 1. "0" is a defined but falsy value. 
  `);
}

equalityOperators();
logicalOperators();
nullishCoalescingOperator();
summaryText();
