function recursiveSum (arr){

    if (arr.length === 0) {
        return 0 ;
    }

    return arr[0] + recursiveSum(arr.slice(1))
}