/* 🧠 HashMap — Easy
 ITS REWIND TIME EVERYBODY.
Given an array:

[4, 2, 7, 2, 9, 4, 2]

Return the frequency of each number.

Expected result:

{
    4: 2,
    2: 3,
    7: 1,
    9: 1
}
*/

function frequency(arr) {
    let freqMap = {}

    for (let item of arr) {
        if (freqMap[item]) { 
            freqMap[item] += 1; 
        }
        else {
             freqMap[item] = 1;
        }
    }

    return freqMap;
}