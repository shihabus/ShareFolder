// ================================================
// This functions is used to find the pairs,
// which a difference equal to a traget value.
// ================================================

// It takes two arguments, thee array and the target value
findPairs=(arr, target)=>{
    let result = []; //to store the final result
    let unique = [...new Set(arr)]  //removing repeated array elements
    let array = unique.sort()  //ascend sort of array
    for (let i = 0; i < array.length; i++) {
        for (let j = array.length- 1; j > i; j--) {
            if (array[j] - array[i] === target) {
                result.push([array[j],array[i]]);  //pushing the pair which meets the condition
            }
        }
    }
    return result;
}
