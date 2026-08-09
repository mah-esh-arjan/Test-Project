/* 
recap
*/
function decreasingMonotonic(arr) {

    let stack = [];

    for (let i = 0; i < arr.length; i++) {

        let current = arr[i];

        while ( stack.length !== 0 && current > stack[stack.length-1] ){
                   stack.pop()

        }

        stack.push(current)

    }

    return stack;
}