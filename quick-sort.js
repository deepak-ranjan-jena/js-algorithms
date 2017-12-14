/*
* JavaScript array sort algorithm using quick sort
* Step1 - Find a pivot element from middle of the array
* Step2- Set the left(lesser than pivot) and right(greater than pivot) arrays
* Step3 - Continue step2 until the arrays are sorted 
*/
let inputArray = [4, 2, 2, 6, 5, 3, 9, 0, -1, -2, -2];
((unsortedInput) => {
  
  /*
  * Quicksort method takes 3 args.
  * first - input array
  * second - left position to start the index (default value is 0)
  * thirs - right position to start the index (default value is array length)
  */
   var quickSort = (arr, left, right) => {
    // initialize the variables
    let len = arr.length,
        index;
    if(len > 1) {
      left = (left == undefined)? 0: left;
      right = (right == undefined)? len - 1: right;
      
      index = partition(arr, left, right);
      
      // call to sort the left and right array
      if(left < index -1)
        quickSort(arr, left, index - 1);
      if(index < right)
        quickSort(arr, index, right);
    }    
    // return the result
    return arr;    
  };
  
  /*
  * Patrition method swap the array element based on pivot value
  */
  var partition = (arr, left, right) => {
    let pivot = arr[Math.floor((right + left) / 2)],
        leftIndex = left,
        rightIndex = right;
    
    while(leftIndex <= rightIndex) {
      
      while(arr[leftIndex] < pivot)
        leftIndex++;
      while(arr[rightIndex] > pivot)
        rightIndex--;
      
      if(leftIndex <= rightIndex) {
        swapElement(arr, leftIndex, rightIndex);
        leftIndex++;
        rightIndex--;
      }
    }
    
    return leftIndex;
  }
  
  // Swap array element  
  var swapElement = (arr, fromIndex, toIndex) => {
    let temp = arr[fromIndex];
    arr[fromIndex] = arr[toIndex];
    arr[toIndex] = temp;
  }  
  
  // call the quick sort method to get sorted output
  const result = quickSort(unsortedInput);
  console.log(result);
  
})(inputArray);
