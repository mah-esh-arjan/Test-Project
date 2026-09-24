function searchBST(root, target) {

    if(root === null ){
        return;
    }

    if(target === root.value){
        return root.value;
    }

    if(target > root.value){
        return searchBST(root.right,target)
    }
    else{
        return searchBST(root.left,target);
    }

}