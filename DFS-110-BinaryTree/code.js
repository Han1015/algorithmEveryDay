var isBalanced = function(root) {
    const height=(root)=>{
        if (!root) return 0;
        return 1 + Math.max(height(root.left), height(root.right));
    }
    if (!root) return true;
    let letDep = height(root.left);
    let rigDep = height(root.right);
    return Math.abs(letDep-rigDep)<=1 && isBalanced(root.left) && isBalanced(root.right);
};