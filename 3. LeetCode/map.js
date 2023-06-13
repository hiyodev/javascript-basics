"use strict";

// 1. Map will remember the original insertion order of the keys.
// 2. Both "object" and "primitive" types can be used as either key or value.
// 3. Even if existing entries are overwritten, they will still maintain the same order.

let someMap = new Map();

for (let i = 0; i < 5; ++i) {
  let key = Math.floor(Math.random() * 1000 + 1); // Intentionally set to [1, 1000] to avoid duplicates
  console.log("Before adding to map:", key, "=>", i);
  someMap.set(key, i);
}

console.table(someMap);

someMap.clear();

// prettier-ignore
for (let i = 0; i < 5; ++i) {
  let key = Math.floor(Math.random() * 25 + 65); // 'A' = 65, [65, 90]
  console.log("Before adding to map:", String.fromCharCode(key), key, "=>", i * key);
  someMap.set(String.fromCharCode(key), i * key);
}

console.table(someMap);
