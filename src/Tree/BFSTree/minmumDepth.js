function minDepth(root) {

    let queue = [root];
    let count = 0;
    while (queue.length > 0) {
        let level = queue.length;
        count += 1

        for (let i = 0; i < level; i++) {

            let node = queue.shift();

            if (node.left === null && node.right === null) {
                return count;
            }

            if (node.left !== null) {
                queue.push(node.left);
            }

            if (node.right !== null) {
                queue.push(node.right);
            }
        }
    }
}