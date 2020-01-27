var minDepth = function(root) {
    if (!root) return 0
    let L = minDepth(root.left), R = minDepth(root.right)
    return 1 + (Math.min(L, R) || Math.max(L, R))
};
// 如果跟节点的左子数为空，那就要查看右子树，因为题目要求是到叶子节点
// 如果左右子树都存在，那么查看最小值，如果于一个树不存在，看最大值。
//如果左右都没有可以取0