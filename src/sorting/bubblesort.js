arr = [5,3,1,2]
// length =4; && 3 

// a[0]=5 ; a[1] = 3 ;  5>3 a[1] =5, a[0]=3 ; a[1] = 5; temArr[2] = 1;  tempArr[2] = 5 ; tempArr[1] = 1; tempArr[0] = 3; 4 < 5 //wrong X gives = [3,1,2,5] which only puts largest at last

// 2nd itertation : arr[0] = 5; arr[1] =3 ; arr[1] =5 ; arr[0] = 3; 5 > 1; arr[2] =5; arr[1] = 1; etc... ; [0] = 3 [1]= 1; [1] =3 ;0 = [1] ; [2]=3 ; [1] = 2; [1,2,3,5]
function descendingBubblesort (array) {

    let arr = [...array]
    let temp;

    for (i= 0 ; i<arr.length; i++){

        for (j = 0 ; j < arr.length -1 ; j++){
            if(arr[j+1] > arr[j] ){
                temp = arr[j];
                arr[j] = arr[j +1];
                arr[j +1] = temp;
            }

        }
    }
    return arr;

}

function ascendingBubblesort (array) {
 let arr = [...array];
 let temp;

 for ( i = 0 ; i< arr.length; i++){

    for ( j =0 ; j<arr.length -1 ; j++){
        if(arr[j+1]< arr[j]){
            temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;

        }

    }

 }
 return arr;
}

