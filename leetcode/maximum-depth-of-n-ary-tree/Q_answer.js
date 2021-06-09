// BFS
var maxDepth = function (root) {
  if (root === null) return 0;
  let max = 0;
  let node = [root];
  while (node.length) {
    const topLen = node.length;
    for (let i = 0; i < topLen; i++) {
      const top = node.shift();
      for (const child of top.children) node.push(child);
    }
    max++;
  }
  return max;
};

// DFS
var maxDepth = function (root, line = 0) {
  if (root === null) return line;
  line = line + 1;
  let max = line;
  for (let i = 0; i < root.children.length; i++) {
    max = Math.max(max, maxDepth(root.children[i], line));
  }
  return max;
};

// discuss DFS 좀 더 깔끔한 답안
var maxDepth = function (root) {
  if (!root) return 0;
  let max = 0;
  for (let child of root.children) {
    max = Math.max(max, maxDepth(child));
  }
  return max + 1;
};
