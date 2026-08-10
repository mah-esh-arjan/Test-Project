//  \([73, 74, 75, 71, 69, 72]\)
/* 
The Daily Temperatures problem asks you to find how many days you must wait until a warmer temperature occurs for each day in an array; 
if no warmer day exists, you output 0

The end result array is [1, 1, 0, 2, 1, 0].
*/

function diffTemp(arr) {

    let result = []

    for (let i = 0; i < arr.length; i++) {

        let count = 0;

        for (let j = i + 1; j < arr.length - 1; j++) {
            if (arr[j] > arr[i]) {
                count = j - i
                break;
            }

        }
        result.push(count);

    }
    return result;
}

//monotonic stack

function monotonicTemp(arr) {

    let result = new Array(arr.length).fill(0);
    let stack = [];

    for (let i = arr.length - 1; i >= 0; i--) {

        let current = arr[i];

        while (/* ??? */) {
            // pop something
        }

        // if stack isn't empty...
        // calculate the distance

        stack.push(i);
    }

    return result;
}