function maximumRecursive(arr, max = null) {
    if (arr.length === 0 && max === null) {
        return null;
    }
    if (arr.length === 0) {
        return max;
    }

    if (max === null) {
        max = arr[0];
    }
    if (arr[0] > max) {
        max = arr[0]
    }

    return maximumRecursive(arr.slice(1), max)

}