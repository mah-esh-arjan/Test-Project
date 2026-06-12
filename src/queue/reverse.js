/* 
k = 3
1, 10, 3, 5

so k being window is the max allowed average.
loop through the array.
make a array of averages.
make  a stream as well.
we are going check the length and if it exceeds we shift the first element out
then we push the current index to the stream.
calc out the average : loop through the arr each element = sum.
now  average = sum / stream.length;
push the average;
*/

function averageStream (arr,k ){

    let stream = []
    let average = []
    let sum = 0;


    for (let i = 0 ; i < arr.length ; i ++){
    
    let removed;
    if(stream.length >= k) {
        removed = stream.shift();
    }
    
    stream.push(arr[i]);
    if(removed !== undefined){
        sum -= removed
    }
    sum += arr[i];

    let avg = sum / stream.length;

    average.push(avg);
    }
    return average;

}