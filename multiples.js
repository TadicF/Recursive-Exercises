// Multiples of 3 and 5

function multiples(n) {
  if(n < 3) {
    return 0;
  } 
  else {
    let sum = multiples(n-1);
    if((n - 1) % 3 === 0 || (n - 1) % 5 === 0) {
      sum += n - 1;
    }
    return sum;
  }
}

console.log(multiples(1000));

// multiples(1000) > multiples(999) ... multiples(2) returns 0, multiples(3) sum = 0 if(...) it's true so now sum += 3, sum = 3 and return sum to multiples(4), 
// multiples(4), sum = 3, returns 3 because if statement is not true; multiples(5), sum = 3, if statement true, sum += 5, return sum = 8,