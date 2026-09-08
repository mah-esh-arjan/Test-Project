function reverseString(str) {

    if (str.length === 1) {
        return str;
    }

    let rerverse = reverseString(str.slice(1, str.length)) + str[0]

    return rerverse;

}