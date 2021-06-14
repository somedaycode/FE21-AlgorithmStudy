var buildTree = function (preorder, inorder) {
  const idx = {
    num: 0,
  };

  function dfs(inorder, idx) {
    if (inorder.length === 0) return null;

    const root = new TreeNode(preorder[idx.num]);
    const rootIdx = inorder.findIndex((num) => num === root.val);

    const left = inorder.slice(0, rootIdx);
    const right = inorder.slice(rootIdx + 1);

    idx.num = idx.num + 1;
    root.left = dfs(left, idx);
    root.right = dfs(right, idx);

    return root;
  }
  const tree = dfs(inorder, idx);
  return tree;
};
