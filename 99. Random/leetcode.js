let someArray = [];

for (let i = 0; i < 10; ++i) {
  someArray.push(Math.floor(Math.random() * 100));
}

console.log(someArray);

someArray.sort((a, b) => {
  console.log(a, b);
  return b - a;
});

console.log(someArray);
