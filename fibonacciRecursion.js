const fibonacci = (i) => {
  if (i == 0) return 0;
  else if (i == 1) return 1;
  return fibonacci(i - 1) + fibonacci(i - 2);
};

for (let i = 0; i < 4; i++) {
  console.log(fibonacci(i));
}
