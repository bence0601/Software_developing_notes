//akkor hasznos, ha ugy akarunk sortolni, hogy nem foglalunk le ehhez több helyet, 
// FONTOS: Csak akkor működik, ha a kezdeti lista minden eleme eltérő
// MÉG FONTOSABB: Csak abban az esetben működik, ha a legnagyobb elem az arrayben maximum akkora, mint maga az array hossza

function cyclicSort(nums) {
    let i = 0;
    
    while (i < nums.length) {
        const correctIndex = nums[i] - 1;  // Mivel az elemek 1-től n-ig terjednek
        if (nums[i] !== nums[correctIndex]) {
            // Ha az elem nincs a helyén, cseréljük a helyére
            [nums[i], nums[correctIndex]] = [nums[correctIndex], nums[i]];
        } else {
            // Ha az elem már a helyén van, lépjünk a következőre
            i++;
        }
    }
    
    return nums;
}
const nums = [3,6,4,2,1,4,5]
console.log(cyclicSort(nums))