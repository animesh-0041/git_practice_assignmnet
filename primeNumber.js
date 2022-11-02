function primeProblem(prime) {
  let count = 0;
  for (let i = 1; i <= prime; i++) {
    if (prime % i == 0) {
      count++;
    }
  }
  if (count == 2) {
    return true;
  } else {
    return false;
  }
}

let result = primeProblem(5);
if (result == true) {
  console.log("Prime");
} else {
  console.log("Not Prime");
}
