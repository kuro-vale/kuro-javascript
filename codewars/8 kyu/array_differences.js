//  https://www.codewars.com/kata/5b73fe9fb3d9776fbf00009e/javascript

function sumOfDifferences(arr) {
    if (arr.length === 0) return 0;
    return Math.max(...arr) - Math.min(...arr)
}

console.log(sumOfDifferences([1, 2, 10]))
