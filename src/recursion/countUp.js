function countUpTo5(n) {
    n = n + 1
    console.log(n);
    if (n === 5) {
        return;
    }

    countUpTo5(n)

}

countUpTo5(0);

function countUpRange(n, c) {
    console.log(n);

    if (n === c) {
        return
    }

    n = n + 1

    countUpRange(n, c);


}

function countDown(n) { 

    if ( n < 0 ) return; // to avoid negative numbers which will result in infinite loop;

    console.log(n);
    if ( n === 1 )  return;
    countDown(n-1);

}