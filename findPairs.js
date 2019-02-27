findPairs=(arr, target)=>{
    let result = []; 
    let unique = [...new Set(arr)]
    let nums = unique.sort()
    for (var i = 0; i < nums.length; i++) {
        for (var j = nums.length- 1; j > i; j--) {
            if (nums[j] - nums[i] === target) {
                result.push([nums[j],nums[i]]);
            }
        }
    }
    return result;
}
console.log(findPairs([4,3,2,1,2,2,1,4], 1));