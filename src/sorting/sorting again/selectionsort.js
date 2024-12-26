function selectionSort (array){
    let arr = [...array];
    let temp;

    for(i=0; i<arr.length;i++)
    {
        let maxIndex = i
        for (j=i+1; j<arr.length;j++){
            if(arr[j]>arr[maxIndex]){
                maxIndex = j;
            }
        
        }
        if ( maxIndex !== i){
             temp = arr[i];
            arr[i] = arr[maxIndex];
            arr[maxIndex] = temp;

        }

    }
    return arr;
}