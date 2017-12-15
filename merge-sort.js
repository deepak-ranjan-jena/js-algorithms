/*
* Javascript array sorting using merge sort
*/
/*
* Javascript array sorting using merge sort
*/
let inputArray = [9, 4, 5, 7, 2, 4, 1, 0, -2, -1];
((input) => {
  
  var mergeArray = (leftArray, rightArray) => {
      let result  = [],
          i      = 0,
          j      = 0;
          
      while (i < leftArray.length && j < rightArray.length){
          if (leftArray[i] < rightArray[j]){
              result.push(leftArray[i++]);
          } else {
              result.push(rightArray[j++]);
          }
      }

      return result.concat(leftArray.slice(i)).concat(rightArray.slice(j));
  }  
  
  var mergeSort = (arr) => {

    // return the array incase length less than 2
    if (arr.length < 2) {
          return arr;
    }

    var middle = Math.floor(arr.length / 2);

    return mergeArray(mergeSort(arr.slice(0, middle)), mergeSort(arr.slice(middle)));
    
    /*
    * for in-place sorting
    var params = mergeArray(mergeSort(items.slice(0, middle)), mergeSort(items.slice(middle)));
    params.unshift(0, items.length);
    items.splice.apply(items, params);
    return items;    
    */
    
  }
  
  // call the mergesort to sort the input array
  const result = mergeSort(input);
  console.log(result);
  
})(inputArray);
