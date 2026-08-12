/**
 * Next problem

Given:

[1, 2, 3, 4, 5]

Reverse the array using a stack.

Expected:

[5, 4, 3, 2, 1]

You've already worked with stacks enough that this should be straightforward.
 * 
 */

function reverseArray(arr) {

    let stack = []

    for (let i = 0; i < arr.length; i++) {
        let temp = arr.at(arr.length- 1 - i);
        stack.push(temp);

    }

    return stack;
}