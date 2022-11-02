
function primeProblem(prime) {
  let count = 0;
  for (let j = 1; j <= prime; j++) {
    if (prime % j == 0) {
      count++;

    }
  }
  if (factor == 2) {
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
