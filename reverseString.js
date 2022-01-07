// const reverseString = (str) => {
//   let arr = [];
//   for (let i = str.length - 1; i >= 0; i--) {
//     arr.push(str[i]);
//   }
//   return arr.join('')
// };


// const reverseString = (str) => {
//     let arr = str.split('')
//     arr.reverse()
//     str = arr.join('')
//     return str
// }


const reverseString = (str) => {
    let str2= '';
    for (let char of str) {
        str2 = char + str2;
    }
    return str2;
}
 

console.log(reverseString('apple'))