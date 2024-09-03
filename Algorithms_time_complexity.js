//időkomplexitást mindig a bemeneti érték legnagyobb értéke alapján számítjuk ki


// O(1) konstanst időkomplexitás
// a futási idő nem változik
// Példa: egy elem elérése a tömbben

function getElement(arr,index){
    return arr[index];
}

//O(log n) logaritmikus idő
//a futási idő logaritmikusan nő a bemenet méretének növekedésével
// Példa : bináris keresés egy rendezett tömbben

function binarySearch(arr,target){
    let left = 0; right = arr.length-1;
    while(left <=right){
        const mid = Math.floor((left+right) / 2);
        if(arr[mid] === target){
            return mid
        }
        else if(arr[mid] < target){
            left = mid+1;
        }
        else{
            right = mid-1
        }
    }
return -1
}

//O(n) lineáris idő
// A futási idő egyenesen arányosan nő a bemenet értékével
// Példa : Legnagyobb érték megkeresése egy rendezett tömbben

function FindMax(arr){
    let maxNum = arr[0];
    for(let i = 0;i<arr.length;i++){
        if(arr[i]>maxNum){ maxNum = arr[i]}
    }
    return maxNum
}

//O(n log n) lineáris-logaritmikus idő
// A futási idő n szorozva n logaritmusával aránylik
// Példa : Merge sort

function MergeSort(arr){
    if(arr.length <= 1) return arr;

    const mid = Math.floor(arr.left/2);
    const left = MergeSort(arr.slice(0,mid));
    const right = MergeSort(arr.slice(mid));
     
    return merge(left,right);

}
function merge(left,right){
    let result = [];
    let i = 0; j = 0;

    while (i < left.lenght && j < right.lenght){
        if(left[i]<right[j]){
            result.push(left[i++]);
            }
            else{
                result.push(right[j++])
            }
        }
        return result.concat(left.slice(i)).concat(right.slice(j));
    }

// O(n^2) Kvadratikus idő:
// Futási idő négyzetesen nő a bemenet méretével
// Példa : buborékrendezés

function BubbleSort(arr){
    for(let i = 0;i<arr.lenght-1;i++){
        for(let j = 0;j<arr.length-i-1;j++){
            if(arr[j]>arr[j+1]){
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]];
            }
        }
    }
    return arr
}

//O(2^n) Exponenciális idő
// a futási idő megdupláződik minden egyes további bemeneti elemmel
function Fibonacci(n){
    if(n<=1)return n;
    return Fibonacci(n-1) + Fibonacci(n-2)
}


//O(n!) Faktoriális idő:
// futási idő faktoriálisan nő a bemenet értékével
// Példa : utazó ügynök problémája

function tspBruteForce(distMatrix) {
    const n = distMatrix.length;
    const permutations = getPermutations([...Array(n).keys()]);
    let minPathCost = Infinity;

    for (const perm of permutations) {
        let cost = 0;
        for (let i = 0; i < n; i++) {
            cost += distMatrix[perm[i]][perm[(i + 1) % n]];
        }
        minPathCost = Math.min(minPathCost, cost);
    }

    return minPathCost;
}

function getPermutations(arr) {
    const results = [];
    
    function permute(subArr, permArr = []) {
        if (subArr.length === 0) {
            results.push(permArr);
        } else {
            for (let i = 0; i < subArr.length; i++) {
                const current = subArr.slice();
                const next = current.splice(i, 1);
                permute(current.slice(), permArr.concat(next));
            }
        }
    }
    
    permute(arr);
    return results;
}
