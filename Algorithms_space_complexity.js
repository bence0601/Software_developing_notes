// O(n) konstans tár komplexitás
//fix számú változó használata

function AddTwoNumbers(a,b){
    return a+b
}

//O(n) Lineáris tár
// A memóriahasználat lineárisan nő a bemenet méretével
// Példa : N elemű tömb tárolása

function CreateList(n){
    return new Array(n).fill(0);
}

//O(n^2) Kvadratikus tár
//A memóriahasználat négyzetesen nő a bemenet mértékével
// Példa : 2D mátrix tárolása, ahol mindkét dimenzió 'n' arányos

function CreateMatrix(n){
    const matrix = [];
    for(let i = 0;i<n;i++){
        matrix.push(new Array(n).fill(0));
    }
    return matrix;
}

//O(2^n) Exponenciális tár
// Példa : N méretű halmaz összes részhalmazának tárolása

function GenerateSubSets(n){
    const subsets = [[]];
    for(const elem of n){
        const newSubsets  = subsets.map(subset => subset.concat(elem))
        subsets.push(...newSubsets)
    }
    return subsets
}


