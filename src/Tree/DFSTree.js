//create a Tree
// DFS
class TreeNode {
    constructor(value) {
        this.root = value;
        this.left = null;
        this.right = null;
    }

    //center left right
    preorder(node) {
        if (node === null) {
            return;
        }
        console.log(node.value);

        this.preorder(node.left);
        this.preorder(node.right);
    }

    //left center right
    inorder(node) {
        if (node === null) {
            return;
        }
        this.inorder(node.left);
        console.log(node.value)
        this.inorder(node.right)
    }

    //left center right
    postorder(node) {
        if (node === null){
            return ;
        }
        this.postorder(node.left)
        this.postorder(node.right)
        console.log(node.value);

    }
}


/* 
          15
        /    \
       8      25
      / \    /  \
     4  12  20  30
     */
const root = new TreeNode(15);
root.left = new TreeNode(8);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(12);
root.right = new TreeNode(25)
root.right.left = new TreeNode(20)
root.right.right = new TreeNode(30)
