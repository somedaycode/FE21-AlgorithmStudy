/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

var cloneGraph = function(node) {
  if (!node)
    return null;

  const cloneNodes = Array(101);
  const visited = Array(101).fill(false);

  cloneNodes[1] = { val: 1, neighbors: [] };
  visitNode(node, cloneNodes, visited);

  return cloneNodes[1];
};

function visitNode(node, cloneNodes, visited) {
  if (visited[node.val])
    return;

  visited[node.val] = true;

  for (const adjNode of node.neighbors) {
    if (!cloneNodes[adjNode.val])
      cloneNodes[adjNode.val] = { val: adjNode.val, neighbors: [] };
      
    cloneNodes[node.val].neighbors.push(cloneNodes[adjNode.val]);
    visitNode(adjNode, cloneNodes, visited);
  }
}
