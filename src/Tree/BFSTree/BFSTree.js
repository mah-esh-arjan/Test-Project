/*
            10
           /  \
          5    18
         / \     \
        2   7     20
           /     /
          6     19


        //   [10, 5, 18, 2, 7, 20, 6, 19]
        1st iteration root object itself store. 10 tree;
        take first element which is 10,
        result push node value = 10,
        we push 5 tree, 18 tree ,
        1st iteration results : result[10] queuep[5tree,18 tree ]

        2nd iteration 
        result[10,5]
        queue[18 tree,5.left tree, 5.right tree ]

        3rd iteration
        result[10,5,18]
        [2tree, 7tree, 18.left tree, 18. right tree]
          */

function bfs(root) {

    let queue = [root]
    let result = []

    while (queue.length > 0) {
        let node = queue.shift();

        result.push(node.value);

        if (node.left !== null) {
            queue.push(node.left);
        }

        if (node.right !== null) {
            queue.push(node.right)
        }

    }

    return result;
}

