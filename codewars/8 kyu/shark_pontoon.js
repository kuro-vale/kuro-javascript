// https://www.codewars.com/kata/57e921d8b36340f1fd000059

function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin) {
    if (dolphin) {
        sharkSpeed /= 2
    }
    let sharkEatTime = sharkDistance / sharkSpeed
    let safeTime = pontoonDistance / youSpeed

    return sharkEatTime < safeTime ? "Shark Bait!" : "Alive!"
}
