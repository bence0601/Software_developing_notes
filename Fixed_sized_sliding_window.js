// Substringek/Subarray-ek vizsgálatára való
// Példafeladat : arr = [ 1,2,3,4,1,5,6] k = 3
// a) k hosszúságú subarrayek minden maximuma? b) k hosszúságú subarray minden összege


//a)

function maximumkeresés(arr,k){
    let Qi = []; // ez az array indexeket tárol
    let i; // globálisan kell létrehozni,mert egy másik ciklusban is használjuk majd
    let n = arr.length;
    for(i = 0;i<k;i++){
        while((Qi.length!=0) && arr[i] >= arr[Qi[Qi.length-1]]){ // első k elem közül kikeressük a legnagyobbat
            Qi.pop();
        }
        Qi.push(i)
    }
    for(i;i<n;i++){
        console.log(arr[Qi[0]]); //kiíratja az aktuális k elemben lévő legnagyobb elemet

        while((Qi.length != 0) && Qi[0] <= i-k){ // kiszedi azokat az elemeket, amik már kiesnek a k elemből álló ablakból, ugye megnézi, hogy van-e most eltárolva index, 
            Qi.shift();                          // és ha igen, akkor kivonja az indexből az elemszámot, így meglesz, hogy a Qi-ben eltárolt index kívül esik-e az ablakból
        }
        while((Qi.length!=0)&& arr[i]>= arr[Qi[Qi.length-1]]){
            Qi.pop();
        }
        Qi.push(i)
    }
    console.log(arr[Qi[0]])
}

// maximumkeresés([1,2,3,4,1,5,6],3)

// b) K hosszúságú subarray minden összege

function SumKeresés(arr,k){
    n = arr.length
    if(k>n) { return null} 
    window_sum = 0 // ugye ez az aktuális window összege
    for(let i = 0;i<k;i++){ // első k elem összege
        window_sum+=arr[i]
    }
    console.log(window_sum)
    for(let i = k;i<n;i++){ //kivonjuk azt az elemet a részhalmazból, ami már kívül esik, és hozzáadjuk a következőt
        window_sum = window_sum - arr[i-k] + arr[i]
        console.log(window_sum)
    }
}
SumKeresés([1,2,3,4,5,6],3)