// ez a leggyorsabb sort típus

// Quicksort algoritmus, ahol a pivot az első és utolsó elem átlaga
function quickSort(arr) {
    if (arr.length <= 1) {
      return arr;
    }
  
    // Pivot kiválasztása (első és utolsó elem átlaga)
    const median = getMedian(arr);
  
    const less = [];
    const greater = [];
    const equal = [];
  
    // Elemek elosztása a pivot alapján
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < median) {
        less.push(arr[i]);
      } else if (arr[i] > median) {
        greater.push(arr[i]);
      } else {
        equal.push(arr[i]);
      }
    }
  
    // Rekurzív rendezés a két részre
    return [...quickSort(less), ...equal, ...quickSort(greater)];
  }
  
  // Pivot kiválasztása az első és utolsó elem átlaga alapján
  function getMedian(arr) {
    return Math.floor((arr[0] + arr[arr.length - 1]) / 2);
  }
  
  // Példa használatra
  const arr = [9, 3, 7, 1, 4, 8, 2, 5, 6];
  const sortedArr = quickSort(arr);
  console.log(sortedArr);

