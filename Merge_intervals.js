// A lényege, hogy egybevágó intervallumokat tudjunk összevonni
// Tér : O(1) Időkomplexitás: O(n log n)

function mergeOverlap(arr) {
    // Sort intervals based on start values
    arr.sort((a, b) => a[0] - b[0]);

    let resIdx = 0; // Index of the last merged interval

    for (let i = 1; i < arr.length; i++) {
    
        // If current interval overlaps with the last merged interval
        if (arr[resIdx][1] >= arr[i][0]) {
            arr[resIdx][1] = Math.max(arr[resIdx][1], arr[i][1]);
        } else {
            // Move to the next interval
            resIdx++;
            arr[resIdx] = arr[i];
        }
    }

    // Return the size of the merged intervals
    return resIdx + 1;
}

// Driver Code
const arr = [[6, 8], [1, 9], [2, 4], [4, 7]];

// Get the new size of the array after merging
const newSize = mergeOverlap(arr);

// Print the merged intervals based on the new size
console.log("The Merged Intervals are:");
for (let i = 0; i < newSize; i++) {
    console.log(`[${arr[i][0]}, ${arr[i][1]}]`);
}
