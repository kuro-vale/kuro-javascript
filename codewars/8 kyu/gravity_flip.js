// https://www.codewars.com/kata/5f70c883e10f9e0001c89673/javascript

const flip = (d, a) => {
    if (d === 'L') {
        return a.sort((a, b) => b - a)
    } else if (d === 'R') {
        return a.sort((a, b) => a - b)
    } else {
        console.log("Please enter a valid direction ('L' or 'R')")
        return a
    }
}
