function findSubset(nums){
    //start with an empty set
    let subsets = [[]];

    for(let i = 0;i<nums.length;i++){
        const CurrentNumber = nums[i];

        const length = subsets.length;
        for(let j = 0;j<length;j++){
            const newSubSet = subsets[j].slice();
            newSubSet.push(CurrentNumber);
            subsets.push(newSubSet);
        }
    }
    return subsets;
}

const input = [1,3,4]
const allSubsets = findSubset(input)
console.log(JSON.stringify(allSubsets,null,0))