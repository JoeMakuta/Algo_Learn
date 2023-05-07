
// The function SumDigits takes a number an return the sum of the digits are available in the number.

const SumDigits = (num) => {
  if (num == 0) return 0;
  return (num % 10) + SumDigits(parseInt(num / 10));
};

console.log(SumDigits(23555));
