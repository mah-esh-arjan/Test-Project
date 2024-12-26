array = [ 6 ,3 ,5 ,8]


//  j= 0 ; i= 1 ; a[1] > a[0]; 6 > 2 ; a[0]= 2; a[1] = 6; 2nd iteration: 0 < 2 ; a[2] > a[0] => 7 > 6 ( a[0]=> 7; a[1] = 6; ) a[1] =6 ; a[2]= 6

function ascendingInsertionSort (array) {
let arr = [...array]

for (i= 1; i< arr.length; i++){
    let temp = arr[i];
    
    let j = i-1;

    while (j>= 0 && temp < arr[j]) { 
        arr[j+1] = a[j];
        j = j-1;
    }
    arr[j+1] = temp;  //we assign j+1 instead of j because we decremented j in the while loop 

}

    return arr;
}


//[5,6] 
function descendingInsertionSort (array) {
let arr= [...array]

for (i = 1; i< arr.length; i++){
 let temp = arr[i];

 let j = i-1;

 while (j >=0 && temp > arr[j] ){
    arr[j+1] = arr[j];
    j--
 }

 arr[j+1] = temp;

}
return arr;

}


// worst case and average : o(n^2) best  is: (o(n))