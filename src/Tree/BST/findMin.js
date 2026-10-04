function findMin(root){

    while(root.left !== null){
        root = root.left;
    }

    return root.value;
}   