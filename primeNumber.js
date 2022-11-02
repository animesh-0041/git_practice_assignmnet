function primeNumber(num) {
  let factor = 0;
  for (let i = 1; i <= num; i++) {
    if (num % i == 0) {
      factor++;
    }
  }
  if (factor == 2) {
    return true;
  } else {
    return false;
  }
}

let result = primeNumber(5);
if (result == true) {
  console.log("Prime");
} else {
  console.log("Not Prime");
}
