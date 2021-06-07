var levelOrder = function (root) {
  if (root === null) return [];
  const q = [root];
  const result = [];
  while (q.length) {
    const line = [];
    const topLen = q.length;
    for (let i = 0; i < topLen; i++) {
      const top = q.shift();
      line.push(top.val);
      if (top.left !== null) q.push(top.left);
      if (top.right !== null) q.push(top.right);
    }
    result.push(line);
  }
  return result;
};
