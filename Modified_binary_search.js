// Alap binary search
// FONTOS: Csak sorrenben lévő arrayen működik
// time complexity = O(log n)



function BinarySearch(arr, numToFind){
    let low = 0
    let high = arr.length-1;
    let mid;

    while(high>=low){
        mid = low + Math.floor((high-low)/2);


        //ha a keresett elem pont az array közepe
        if(arr[mid] === numToFind){
            return mid;
        }

        if(arr[mid]>numToFind){
            high = mid - 1;
        }
        else{
            low = mid + 1;
        }
    }
    return -1

}

let array = [2,3,4,5,6,7,8,9,10]
let x = 10;
console.log("alap binary search eredménye : "+BinarySearch(array,x))



// A modifiied binary search több problémánál is használható.
// Akármilyen keresést kell végezni, a binary search a leggyorsabb, viszont alapból csak sorrendben lévő arrayeken működik
