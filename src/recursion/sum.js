function sum(n) {
    if (n === 0) {
        return 0;
    }

    n = n + sum(n - 1);

    return n; 
}