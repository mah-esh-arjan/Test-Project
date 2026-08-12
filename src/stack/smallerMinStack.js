/*
Example
[10, 6, 8, 4, 3]

10 → next is 6 (smaller) → remove 10
6  → next is 8 (not smaller) → keep
8  → next is 4 (smaller) → remove 8
4  → next is 3 (smaller) → remove 4
3  → nothing after it → keep
Expected result:

[6, 3]
 */


function removeElements(arr) {

    let stack = [];

    for (let i = 0; i < arr.length; i++) {

        let current = arr[i]

        if (current < stack.at(-1)) {
            stack.pop()
            stack.push(current)

        }
        else {
            stack.push(current)
        }

    }

    return stack;
}