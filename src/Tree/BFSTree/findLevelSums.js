/* Level 0 → 10              = 10
Level 1 → 5 + 18          = 23
Level 2 → 2 + 7 + 20      = 29
Level 3 → 6 + 19          = 25*/

function findLevelSums(root) {

    let sumArr = []
    let queue = [root]

    while (queue.length > 0) {
        let level = queue.length;
        let sum = 0;

        for (let i = 0; i < level; i++) {

            let root = queue.shift();

            sum += root.value;

            if (root.right !== null) {
                queue.push(root.right);
            }

            if (root.left !== null) {
                queue.push(root.left);
            }

        }
        sumArr.push(sum);

    }

    return sumArr;
    


}
