/*
countdownVariants(3);

3
2
1
1
2
3
*/

function countdownVariants(n) {


    console.log(n);
    if (n === 1) {
        console.log(n);
        return;
    }

    countdownVariants(n - 1);
    console.log(n);

}