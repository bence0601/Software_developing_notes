// A lényege, hogy egybevágó intervallumokat tudjunk összevonni
// Tér : O(1) Időkomplexitás: O(n log n)


function mergeOverlap(arr){
  arr.sort((a,b)=> a[0] - b[0])

  let resIdx = 0; // Ez az utoljára merge-lt intervallum indexe

  for(let i = 1; i< arr.length; i++){
    if(arr[resIdx][1] >= arr[i][0]){
      arr[resIdx][1] = Math.max(arr[resIdx][1], arr[i][1])};
    else{
      resIdx++;
      arr[resIdx] = arr[i]
    }
    return resIdx +1;
}
