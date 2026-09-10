/* 
const arr = [
    "apple",
    "banana",
    "apple",
    "orange",
    "banana",
    "apple",
    "mango"
];

Write a function that returns the first element that appears more than once.

Expected result:

"apple"
*/

function firstDuplicate (arr) {

    map = {}

    for( let item of arr){
        if(map[item]){
            return item
        }
        else{
            map[item] = true;
        }
    }
     return 'No duplicates found'
}