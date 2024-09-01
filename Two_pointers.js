// Olyan esetekben használjuk, amikor lineáris adatszerkezeteken belül kell valamilyen feltétel alapján összehasonlítani


//feladat : keressünk a tömbben két olyan számot, amelyikeket összeadva megkapjuk a target számot
function twoSum(numbers, target) {

    // Inicializálunk egy objektumot a számok tárolására
    const numMap = {};

    // Végigmegyünk a tömbön
    for (let i = 0; i < numbers.length; i++) {
        const currentNumber = numbers[i];
        const complement = target - currentNumber;

        // Ha a szükséges pár megtalálható a map-ben
        if (numMap[complement] !== undefined) {
            return [complement, currentNumber];
        }

        // Tároljuk az aktuális számot a map-ben
        numMap[currentNumber] = i;
    }

    // Ha nincs találat, térjünk vissza null értékkel
    return null;
}

// Példa használat
const numbers = [1, 2, 9, 3, 8, 5, 3, 4, 6, 1];
const target = 4;
const result = twoSum(numbers, target);
console.log(result);  // Kimenet: [3, 1]
