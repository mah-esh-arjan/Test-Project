/* [4, 5, 2, 25] 
[5, 25, 25, -1]
*/

// Brute force (o N^2 )
function nextGreater(arr) {

    let result = []
    let count = arr.length
    for (let i = 0; i < arr.length; i++) {
        let found = false;
        for (let j = i + 1; j < count; j++) {
            if (arr[j] > arr[i]) {
                result.push(arr[j]);
                found = true;
                break;
            }
        }
        if (!found) {
            result.push(-1);
        }
    }
    return result;
}

// Now with monotonic stack
function nextGreater(arr) {

    let result = []; // what is this code, what does it do, why is it needed,
    let stack = [] //Monotonic stack
    for (let i = arr.length -1 ; i >= 0; i--) { // since length is 4 loop break;s
   
        let current = arr[i];

        if(stack.length === 0){
            result.unshift(-1); // 1st iteration: result is [-1]
            stack.push(current); // stack is 25
            break; // first iteration is done
        }
        
        while(stack.length > 0 ){
            if(current > stack.at(-1)){  //2nd iteration : since 25 > 2 this is ignored, 3rd iteration: since 5 is greater that 2 pop works, we pop 2 and move one. 5 isnt greater than 25 goes to else. 4th iteration 4 isnt greater than 5,we go to else
            stack.pop()
            } 
            else{
                result.push(stack.at(-1)) //2nd iteration result becomes: [-1,25], 3rd iteration top is [25] so its pushed meaning result becomes:[-1,25,25],4th iteration we push the top of stack which is 5 and it becomes: [-1,25,25,5]
                stack.push(current) //2nd iteration we push so 2 to stack  so it becomes [25,2], 3rd iteration we push [25,5], 4th iteration we push 4 to stack: [25,5,4]
                break; //2nd iteration, we finish the while loop and break it 
            }
        }

    }

    return result.reverse() //result at the end is  [-1,25,25,5] so we reverse it ;

}