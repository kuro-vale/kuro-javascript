//  https://www.codewars.com/kata/5bb0c58f484fcd170700063d/javascript

function pillars(numPill, dist, width) {
    dist *= 100
    if (numPill === 1) return 0
    return dist * (numPill - 1) + width * (numPill - 2)
}

console.log(pillars(2, 20, 10))
