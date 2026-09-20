function findBreadthMax(root) {

    let queue = [root];
    let result = [];

    while (queue.length > 0) {
        let max = 0;
        let levelSize = queue.length;


        for (let i = 0; i < levelSize; i++) {
            let node = queue.shift();

            if (node.value > max) {
                max = node.value;
            }

            if (node.left !== null) {
                queue.push(node.left);
            }

            if (node.right !== null) {
                queue.push(node.right);
            }

        }
        result.push(max);
    }

    return result;

}