function printPattern(n,current = 1) {

    console.log(current);

    if (n === current) {
        console.log(n);
        return ;
    }

    printPattern(n, current+1);

    console.log(current);

}