
function ascendingQuickSort(array ) {
let arr = [...array];


    let pivot = arr[arr.length - 1];

    let left = [];
    let right = [];

    for(i=0; i< arr.length;i++) {
        
        if(arr[i]< pivot){

            left.push(arr[i])
        }
        else{
            right.push(arr[i])
        }

    }

    return arr = [...quickSort(left),pivot, ...quickSort(right)];

}

function descendingQuickSort (array){
let arr = [...array];

let pivot = arr[arr.length - 1]

let left = []
let right = []

for( i=0; i < arr.length - 1; i++){

    if( arr[i] > pivot){
        right.push(arr[i])
    }
    else{
        left.push(arr[i])
    }

}

return arr = [...descendingQuickSort(right),pivot,...descendingQuickSort(left)]

}

