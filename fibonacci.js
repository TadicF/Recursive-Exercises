console.log(`it's working ay ay captain!`);

// - Fibonacci without Recursion

function fibs(n) {
  let arr = [0, 1];

  for(let i = 0; i < n - 2; i++) {
    arr.push(arr[i] + arr[i + 1]);
  }  
  console.log(arr);
}

fibs(8);

// 0: 1     [0, 1, 1] - First iteration
// 1: 2     [0, 1, 1, 2] - Second iteration
// 2: 3     [0, 1, 1, 2, 3] - Third iteration
// 3: 5     [0, 1, 1, 2, 3, 5] - Fourth iteration
// 4: 8     [0, 1, 1, 2, 3, 5, 8] - Fifth iteration
// 5: 13    [0, 1, 1, 2, 3, 5, 8, 13] - Sixth iteration 


// - Fibonacci with Recursion
function fibsRec(n) {
  if(n === 2) {
    return [0, 1];
  } else {
    let arr = fibsRec(n - 1);
    arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
    return arr;
  }
}

console.log(fibsRec(8));

// fibsRec(8), n = 8, arr = fibsRec(7), arr = [0, 1, 1, 2, 3, 5, 8], arr.push(8 + 5), arr = [0, 1, 1, 2, 3, 5, 8, 13], the last return statement
// fibsRec(7), n = 7, arr = fibsRec(6), arr = [0, 1, 1, 2, 3, 5], arr.push(5 + 3), arr = [0, 1, 1, 2, 3, 5, 8], return arr
// fibsRec(6), n = 6, arr = fibsRec(5), arr = [0, 1, 1, 2, 3], arr.push(3 + 2), arr = [0, 1, 1, 2, 3, 5], return arr
// fibsRec(5), n = 5, arr = fibsRec(4), arr = [0, 1, 1, 2], arr.push(2 + 1), arr = [0, 1, 1, 2, 3], return arr
// fibsRec(4), n = 4, arr = fibsRec(3), arr = [0, 1, 1], arr.push(1 + 1), arr = [0, 1, 1, 2], return arr
// fibsRec(3), n = 3, arr = fibsRec(2), arr = [0, 1], arr.push(0 + 1), arr = [0, 1, 1], return arr;
// fibsRec(2), n = 2, base case reached return [0, 1] to fibsRec(3)