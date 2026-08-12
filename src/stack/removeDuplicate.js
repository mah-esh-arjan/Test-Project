/*
"abbaca"
"ca"
*/

function removeDuplicates(arr){

    let stack = [];
    
    for(let i =0 ; i< arr.length ; i++){
        if( arr[i] === stack.at(-1)){
            stack.pop()
        }
        else{
            stack.push(arr[i]);
        }

    }
    return stack;
}