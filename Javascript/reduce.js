// The reduce mthode is javascript

const numbers = [1, 2, 3, 4, 5];
const initialValue = 0;
console.log(
  numbers.reduce((acc, elt) => {
    return acc + elt;
  }, initialValue)
);
