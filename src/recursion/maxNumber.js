//Find maximum number in an array recursively

function maxNumber(arr, i = 0) {

    if (arr.length === 0) {
        return i
    }

    let num = arr.pop()
    if (num > i) {
        i = num
    }
    return maxNumber(arr, i)

}