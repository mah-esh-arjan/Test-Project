function findMaxBfs(root) {

    let max = 0;
    let queue = [root];

    while (queue.length > 0) {
        let node = queue.shift();

        if (max < node.value) {
            max = node.value;
        }

        if (node.left !== null) {
            queue.push(node.left);
        }

        if (node.right !== null) {
            queue.push(node.right);
        }

    }

    return max;

}