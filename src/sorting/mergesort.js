

function mergeSort(array){
let arr = [...array];

const mid = Math.floor(arr.length / 2 );
const left = arr.slice(0,mid);
const right = arr.slice(mid);

    const sortedLeft = mergeSort(left);
    const sortedRight = mergeSort(right);

    return merge(sortedLeft,sortedRight)

}

function merge(left,right){
    let result = [];
    let i =0;
    let j = 0;

    while(i<left.length && j<right.length){

        if(arr[i] < arr[j]){

            result.push(arr.left[i]);
            i++
        }
        else{
            result.push(arr.right[j]);
            j++
        }

    }
    return( result.concat(left.slice[i],right.slice[j]));
}