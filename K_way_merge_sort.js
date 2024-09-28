// Javascript program to merge k 
// sorted arrays of size n each.
let N =  4

// Merge arr1[0..n1-1] and arr2[0..n2-1] into
// arr3[0..n1+n2-1]
function mergeArrays(arr1, arr2, N1, N2, arr3)
{
    let i = 0, j = 0, k = 0;

    // Traverse both array
    while (i < N1 && j < N2)
    {
        
        // Check if current element of first
        // array is smaller than current element
        // of second array. If yes, store first
        // array element and increment first array
        // index. Otherwise do same with second array
        if (arr1[i] < arr2[j])
            arr3[k++] = arr1[i++];
        else
            arr3[k++] = arr2[j++];
    }
    
    // Store remaining elements of first array
    while (i < N1)
        arr3[k++] = arr1[i++];

    // Store remaining elements of second array
    while (j < N2)
        arr3[k++] = arr2[j++];
}

// A utility function to print array elements
function printArray(arr, size)
{
    for(let i = 0; i < size; i++)
        document.write(arr[i] + " ");
}

// This function takes an array of arrays 
// as an argument and all arrays are assumed 
// to be sorted. It merges them together
// and prints the final sorted output.
function mergeKArrays(arr, i, j, output)
{
    
    // If one array is in range
    if (i == j)
    {
        for(let p = 0; p < N; p++)
            output[p] = arr[i][p];
            
        return;
    }
    
    // If only two arrays are left 
    // them merge them
    if (j - i == 1)
    {
        mergeArrays(arr[i], arr[j],
                    N, N, output);
        return;
    }
    
    // Output arrays
    let out1 = new Array(N * (((i + j) / 2) - i + 1))
    let out2 = new Array(N * (j - ((i + j) / 2)));
    
    // Divide the array into halves
    mergeKArrays(arr, i, (i + j) / 2, out1);
    mergeKArrays(arr, (i + j) / 2 + 1, j, out2);
    
    // Merge the output array
    mergeArrays(out1, out2, 
                N * (((i + j) / 2) - i + 1),
                N * (j - ((i + j) / 2)), output);
}

// Driver code

// Change n at the top to change number
// of elements in an array
let arr = [ [ 2, 6, 12, 34 ],
            [ 1, 9, 20, 1000 ],
            [ 23, 34, 90, 2000 ] ];
let K = arr.length;
let output = new Array(N * K);

mergeKArrays(arr, 0, 2, output);

document.write("Merged array is " + "<br>");
printArray(output, N * K);

// This code is contributed by Mayank Tyagi
