function mergeSort(arr) {
  if(arr.length <= 1) {
    return arr;
  } else {
     let left = mergeSort(arr.slice(0, arr.length / 2));
     let right = mergeSort(arr.slice(arr.length / 2));
     
     let i = 0;
     while(left.length && right.length) { // left = [3], right = [], arr [3,2,1]
      if(left[0] < right[0]) { 
        arr[i] = left[0];
        left.shift();
      } else {
        arr[i] = right[0]; // arr = [1,2,1]
        right.shift();
      }
      i++;
    }

    if(left.length) {
      while(left.length) {
        arr[i] = left[0];
        left.shift();
        i++;
      }
    } else if(right.length) {
      while(right.length) {
        arr[i] = right[0];
        right.shift();
        i++;
      }
    }
    
    return arr;
  }
}

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));











function conceptMergeSort(arr) {
  let origArr = arr;
  let left = [];
  let right = [];
}