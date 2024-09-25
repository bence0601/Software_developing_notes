// 1. Mindig az utolsó elérhető helyre kell beilleszteni az adatot
// Min-heap : Az aktuálisan beillesztett adatot hasonlítjuk a parent adathoz, ha kisebb mint a parent, akkor kicseréljük őket. Addig folytatjuk amig a root-nodehoz érünk
// Max-heap : Ugyanez a folyamat, csak akkor cserélünk, ha az aktuális adat nagyobb mint a parent

// Találjuk meg a számok mediánját 2 heap segítségével

class MedianFinder{
    constructor(){
        this.maxHeap = [];
        this.minHeap = [];
    }

    addNumber(number){
        //Hozzáadjuk a számot a maximum heaphez(ebben a kisebb számok lesznek, a maximum heap arra utal, hogy a legnagyobb szám lesz a heap root-nodeja)

        this.maxHeap.push(number);
        this.maxHeap.sort((a,b)=> b-a);
        
        //Második lépés, áthelyezés a minimum heapbe
        if(this.maxHeap.length>this.minHeap.length+1){ // ez azért kell,hogy a 
            this.minHeap.push(this.maxHeap.shift());
            this.minHeap.sort((a,b)=>a-b); // Rendezés, hogy a legkisebb elem legyen elől
        }
    }

    findMedian(){
        if(this.maxHeap.length>this.minHeap.length){
            return this.maxHeap[0];// A maxheap legnagyobb eleme
        }
        else{
            return(this.maxHeap[0] + this.minHeap[0]) / 2 //Átlag a két heap csúcsából
        }
    }
}
const medianFinder = new MedianFinder();
medianFinder.addNumber(1);
medianFinder.addNumber(2);
console.log(medianFinder.findMedian()); // 1.5
