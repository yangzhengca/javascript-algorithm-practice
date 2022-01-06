// O(n) Linear time complexity
function sumFn (arr){
    let sum = 0;
    for (const number of arr) {
        sum += number;
    }
    return sum;
}

// // O(n)
// function sumFn (arr){
//     return arr.reduce((sum, curNum) => sum + curNum)
// }




// out put result
console.log(sumFn([1, 3, 10]));