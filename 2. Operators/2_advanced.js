"use strict";

// prettier-ignore
function equalityOperator() {
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

equalityOperator();
