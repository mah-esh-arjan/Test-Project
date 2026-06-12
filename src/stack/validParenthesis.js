/* Valid parentheses
Example 1:

Input: s = "()"

Output: true

Example 2:

Input: s = "()[]{}"
) == found and top === value of map we pop else we push
Output: true

Example 3:

Input: s = "(]"

Output: false

Example 4:

Input: s = "([])"

Output: true

Example 5:

Input: s = "([)]"

Output: false

need a tracker stack.
[] if empty is valid;
use a look up map with all opening bracks with === opposite ;
need peek at top. 
if key === top ) === ) 

*/

function validParenthesis(str){

    let valid = []
    let freqMap = {
        ")" : "(",
        "}" : "{",
        "]" : "[",
    }

    for (let char of str){
        if(freqMap[char] && valid.at(-1) === freqMap[char]){
            valid.pop();
        }
        else{
            valid.push(char);
        }

    }

    return valid.length === 0;

}