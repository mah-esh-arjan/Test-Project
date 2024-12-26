function bubbleSort(array){
    
    let temp;
    for( i = 0; i<array.length;i++){
        if(arr[i+1]> arr[i]){
            temp = arr[i];
            arr[i] = arr[i+1];
            arr[i+1] = temp;

        }

    }

return arr;

}

// average and worst case: o(n^2) and best case is o(n)


