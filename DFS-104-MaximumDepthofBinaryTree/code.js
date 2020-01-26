var maxDepth = function(root) {
    if (!root) return 0;
    let res = 0;
    var goDown = (tree, height)=>{
        if (!tree) return;
        if (tree.left === null && tree.right === null){
            if (height > res){
                res = height;
            }
        }
        goDown(tree.left, height+1);
        goDown(tree.right, height+1);
    }
    goDown(root, 1);
    return res;
};