function insertionBST(root, target) {

    if (root === null) {
        return new TreeNode(target);
    }

    if (root.value > target) {
        root.left = insertionBST(root.left, target)
    }
    else {
        root.right = insertionBST(root.right, target)
    }

    return root;

}