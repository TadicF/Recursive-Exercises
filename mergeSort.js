function mergeSort(arr) {
  if(arr.length <= 1) {
    return arr;
  } else {
    return arr.slice(0, arr.length / 2);
  }
}

console.log(mergeSort([1,2,3,4,5,6]));
