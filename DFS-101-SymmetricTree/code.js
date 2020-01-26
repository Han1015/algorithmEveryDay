var isSymmetric = function(root) {
    var sameTree = (leftNode, rightNode)=>{
        if (!leftNode && !rightNode) return true;
        if (!leftNode || !rightNode) return false;
        if (leftNode.val === rightNode.val && sameTree(leftNode.left, rightNode.right) && sameTree(leftNode.right, rightNode.left)){
            return true;
        }
        return false;
    }
    return root === null || sameTree(root.left, root.right);
};