var maxDepth = function (root, max = 1, depth = 1) {
  if (!root) return 0;

  if (root.children.length > 0) {
    depth++;
    if (max <= depth) max = depth;
    for (let i = 0; i < root.children.length; i++) {
      const d = maxDepth(root.children[i], max, depth);
      if (max <= d) max = d;
    }
  }
  return max;
};
