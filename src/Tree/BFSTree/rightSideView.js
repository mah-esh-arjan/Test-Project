//[10, 18, 20, 19]

function rightSide(root) {

    let queue = [root]

    let rightMost = []

    while (queue.length > 0) {

        let level = queue.length;


        for (let i = 0; i < level; i++) {


            let node = queue.shift();

            if (i === level - 1) {

                rightMost.push(node.value);
            }
            if (node.right !== null) {
                queue.push(node.right);
            }

            if (node.left !== null) {
                queue.push(node.left);
            }
        }


    }

    return rightMost;
}