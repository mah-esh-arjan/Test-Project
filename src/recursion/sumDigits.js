/* 
sumDigits(1234) // 10
sumDigits(567)  // 18
sumDigits(9)    // 9
sumDigits(100)  // 1
*/


function sumDigits(n) {

    if(n === n % 10) {
        return n;
    }

    return n % 10 + sumDigits(Math.floor(n / 10));

}