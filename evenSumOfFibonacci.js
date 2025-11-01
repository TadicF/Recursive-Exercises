function evenSumOfFibonacci(a, b, limit) {
  if(b >= limit) {
    return 0;
  } else {
    let next = a + b;
    let sum = evenSumOfFibonacci(b, next, limit);
    if(next % 2 === 0) {
      sum += next;
    }
    return sum;
  }
}

console.log(evenSumOfFibonacci(1, 2, 4000000));