var isBalanced = function (root) {
  if (!root) return true;

  let check = true;
  function dfs(node) {
    if (!node) return 0; // 비었을 경우 리턴
    if (!check) return; // check가 false 얼리리턴

    const leftNode = dfs(node.left);
    const rightNode = dfs(node.right);
    const diff = Math.abs(leftNode - rightNode);
    if (diff > 1) return (check = false); // 균형 이진 트리가 아닐 경우 check를 false
    return Math.max(leftNode, rightNode) + 1; // 높이 체크
  }

  dfs(root);
  return check;
};
