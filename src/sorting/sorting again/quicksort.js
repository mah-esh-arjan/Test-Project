// divide and conquer with last element as pivot
function quickSort(array){
    let arr = [...array]
    let pivot = arr[arr.length-1]

    for (i=0; i< arr.length; i++){
    let left = [];
    let right = [];

    if(arr[i]<pivot){
        left.push(arr[i])
    }
    else{
        right.push(arr[i])
    }

    }

    return arr = [...left,pivot,...right];

}
// time compplexity best and average case : o(nlogn) whil worst case  : o(n^2)