var maxDepth = function (root, line = 0) {
  if (root === null) return line;
  return Math.max(
    maxDepth(root.right, line + 1),
    maxDepth(root.left, line + 1)
  );
};
