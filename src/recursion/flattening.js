function flattening(arr) {

    let result = []

    for (let item of arr) {
        Array.isArray(item) ? result.push(...flattening(item)) : result.push(item)
    }

    return result;

}