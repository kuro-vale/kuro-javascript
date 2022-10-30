// https://www.codewars.com/kata/5dd462a573ee6d0014ce715b/javascript

function sameCase(a, b) {
    let string = `${a}${b}`
    if (/[A-Z]{2}|[a-z]{2}/.test(string)) {
        return 1
    } else if (/[^A-Za-z]/.test(string)) {
        return -1
    } else {
        return 0
    }
}
