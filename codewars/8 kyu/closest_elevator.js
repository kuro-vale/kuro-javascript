// https://www.codewars.com/kata/5c374b346a5d0f77af500a5a/javascript

function elevator(left, right, call){ 
  let left_distance = Math.abs(left - call)
  let right_distance = Math.abs(right - call)
  if (left_distance < right_distance) {
    return "left"
  } else {
    return "right"
  }
}
