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
    let stack = []; //1st it: [], 2nd it: [0], 3rd it:[1]

    for (let i = 0; i < arr.length; i++) {

        let current = arr[i]; //1st: 73, 2nd: 74, 3rd: [75]

        while (current > arr[stack.at(-1)] && stack.length > 0) { //1st: stack is empty so doesnt go, 2nd it: 74 > arr[0] which is 73 meaning true and stack has element;75 >arr[1](74)
            let previousIndex = stack.pop(); // 2nd it: previous index = 0; 3rd =1;

            result[previousIndex] = i - previousIndex; //2nd it result[0] = 1 - 0, result= [1,0,0,0,0,0], 3rd it = result[1] = 2 - 1, result = [1,1,0,0,0,0]

        }

        stack.push(i); // we push to stack: [0], and loop goes to 2nd, 2nd it: [1]
    }

    return result;
}