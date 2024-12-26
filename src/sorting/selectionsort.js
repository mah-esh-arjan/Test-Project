array = [5,3,1,2]

// 5 < 3? flase ; j++ ; 3 < 1; false; 1 < 2?; true ; min = arr[2]#1; temp = arr[3]#2; a[3] = 1; ar[2] = 2; arr[1] 

function selection(array) {

    let arr = [...array];
    let temp;

    for (let i = 0; i < arr.length ; i++){
        let maxIndex = i ;

        for (let j = i+1; j< arr.length; j++){

            if(arr[j] > arr[maxIndex]){
                maxIndex = j ;
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






function ascendingSelection (array) {
    let arr = [...array];
    let temp;

    for ( let i = 0 ; i< arr.length; i++){
        let minIndex = i;

        for ( let j = i+1; j<arr.length; j++){
            if(arr[j] < arr[minIndex]){
                minIndex = j;
            }
        }

        if(minIndex !== i) {
            temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    
    }
    return arr;
}