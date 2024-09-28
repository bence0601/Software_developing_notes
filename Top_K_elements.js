// Például : Egy bemeneti tömbben, találjuk meg a 2 leggyakrabban előforduló elemet, ha valamelyikből megegyeznek a key-ek(tehát maga a szám) akkor a nagyobb értékűt vegyük elő

function TopFrequentElement(arr,K){
    let mp = new Map();

    for(let i = 0;i<arr.length;i++){
        if(mp.has(arr[i])){
            mp.set(arr[i],mp.get(arr[i])+1)
        }
        else{
            mp.set(arr[i],1)
        }
    }
    let list = [...mp];

    list.sort((a, b) => {
        if (a[1] == b[1])
            return b[0] - a[0];
        else
            return b[1] - a[1];
    })

    console.log(K + " numbers with most occurrences are: ");
    for (let i = 0; i < K; i++)
       console.log(list[i][0] + " ");

}
TopFrequentElement([1,2,3,4,4,5,4,3,6,2],2)