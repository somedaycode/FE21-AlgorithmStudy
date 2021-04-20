var cloneGraph = function (node) {
  if (!node) return null;
  const answer = {};
  const visited = new Set();
  const startNode = new Node(node.val, []);

  answer[node.val] = startNode;

  const go = (originNode, newNode) => {
    if (visited.has(originNode.val)) return;
    visited.add(newNode.val);
    for (const x of originNode.neighbors) {
      if (answer[x.val]) newNode.neighbors.push(answer[x.val]);
      else {
        const copyNode = new Node(x.val, []);
        answer[x.val] = copyNode;
        newNode.neighbors.push(copyNode);
        go(x, copyNode);
      }
    }
  };

  go(node, startNode);

  return startNode;
};
