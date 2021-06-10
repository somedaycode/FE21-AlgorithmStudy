/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var deepestLeavesSum = function (root) {
  let level = 1;
  let visited = [{ node: root, level }];
  let allNodes = [{ node: root, level }];

  while (visited.length) {
    let popped = visited.shift();

    if (popped.node.left) {
      visited.push({ node: popped.node.left, level: popped.level + 1 });
      allNodes.push({ node: popped.node.left, level: popped.level + 1 });
    }

    if (popped.node.right) {
      visited.push({ node: popped.node.right, level: popped.level + 1 });
      allNodes.push({ node: popped.node.right, level: popped.level + 1 });
    }
  }

  const maxLevel = allNodes[allNodes.length - 1].level;
  const answer = allNodes
    .filter((node) => node.level === maxLevel)
    .reduce((prev, acc, idx, arr) => prev + arr[idx].node.val, 0);

  return answer;
};
