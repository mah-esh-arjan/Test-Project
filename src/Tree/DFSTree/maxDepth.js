function maxDfs(root, count = 0) {

    count += 1;

    if (root.left === null && root.right === null) {
        return count;
    }


    let left = 0;
    let right = 0;

    if (root.left !== null) {

        left = maxDfs(root.left, count);
    }

    if (root.right !== null) {
        right = maxDfs(root.right, count);

    }

    return left > right ? left : right;

}
