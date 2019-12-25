
const helper = (preorder, indexPre, inorder, leftIn, rightIn) => {
    if (indexPre > preorder.length - 1 || leftIn > rightIn) {
        return null
    }
    
    let root = new TreeNode(preorder[indexPre]);
    
    //index of current root in inorder array
    //这个indexOfRoot是root在inorder里面的位置，
    //重点是：它所在的位置，表明了左边的元素个数，也就是左子树元素的个数
    let indexOfRoot = inorder.indexOf(root.val);
    
    //new index of next root of the right subtree in preorder array 
    let nextRightRootIndex = indexPre + indexOfRoot - leftIn + 1;
    
    root.left = helper(preorder, indexPre + 1, inorder, leftIn, indexOfRoot - 1)
    root.right = helper(preorder, nextRightRootIndex, inorder, indexOfRoot + 1, rightIn)
    
    return root
}
var buildTree = function(preorder, inorder) {
    return helper(preorder, 0, inorder, 0, inorder.length-1);
};

