//  Write a function that takes an array of positive integers and returns the length of the longest chain of consecutive numbers.
//  A chain is defined as a sequence of numbers in the array where each number is exactly one more than the previous number in the sequence, 
// and the sequence can be in any order in the array. Also explain the time complexity and space complexity.
//[100, 4, 200, 1, 3, 2]
// 4

function subsequent(arr) {

    let length = 0;

    for (let i = 0; i < arr.length; i++) {
        let tempLen = arr[i];
        let compareLen = 1;

        while (arr.includes(tempLen + 1)) {
            tempLen += 1;
            compareLen += 1;
        }

        if (compareLen > length) {
            length = compareLen;
        }
    }

    return length;
}