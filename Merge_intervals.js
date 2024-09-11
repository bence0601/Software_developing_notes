// A lényege, hogy egybevágó intervallumokat tudjunk összevonni
// Tér : O(1) Időkomplexitás: O(n log n)

function mergeOverlap(arr) {
  // Sort the intervals based on the starting value
  arr.sort((a, b) => a[0] - b[0]);

  // Initialize the result array with the first interval
  let result = [arr[0]];

  for (let i = 1; i < arr.length; i++) {
    // Get the last interval in the result array
    let lastInterval = result[result.length - 1];

    // Check if the current interval overlaps with the last interval in the result
    if (lastInterval[1] >= arr[i][0]) {
      // Merge the intervals by updating the end time
      lastInterval[1] = Math.max(lastInterval[1], arr[i][1]);
    } else {
      // No overlap, add the current interval to the result
      result.push(arr[i]);
    }
  }

  return result;
}
