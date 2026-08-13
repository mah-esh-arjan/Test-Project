/**
 * ["2", "1", "+", "3", "*"]

Evaluate it.

The expression means:

2 1 + 3 *
  ↓
2 + 1 = 3
  ↓
3 * 3 = 9

Expected:

9

 */

function postFix(arr) {

    let stack = []

    let expMap = {
        "*": "*",
        "/": "/",
        "+": "+",
        "-": "-",
    }

    for (let i = 0; i < arr.length; i++) {

        let current = arr[i]

        if (expMap[current]) {
            num2 = Number(stack.pop());
            num1 = Number(stack.pop());
            let result;

            switch (current) {
                case "*":
                    result = num1 * num2
                    break;
                case "/":
                    result = num1 / num2
                    break;
                case "+":
                    result = num1 + num2
                    break;
                case "-":
                    result = num1 - num2
                    break;
            }

            stack.push(result)
        }
        else {
            stack.push(current)
        }

    }
    return stack.at(-1);
}