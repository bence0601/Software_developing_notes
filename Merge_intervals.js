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

  let arr = [[6,8],[1,9],[2,4],[4,7]];
  let size = mergeOverlap(arr)
  console.log("The merged intervals are: ")
  for(let i = 0;i<size;i++){
    console.log(`[${arr[i][0]}, ${arr[i][1]}]`);
}
