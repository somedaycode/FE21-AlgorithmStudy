var deepestLeavesSum = function (root) {
  const lineMax = getLineMax(root);
  const numberSet = new Set();

  function getNum(root, num, numberSet) {
    if (root === null) return;
    if (num === lineMax) return numberSet.add(root.val);

    const currentLine = num + 1;
    getNum(root.left, currentLine, numberSet);
    getNum(root.right, currentLine, numberSet);
  }
  getNum(root, 1, numberSet);

  let sum = 0;
  for (const num of numberSet) {
    sum += num;
  }

  return sum;
};

function getLineMax(root) {
  if (root === null) return 0;
  let max = 0;
  max = Math.max(getLineMax(root.left), getLineMax(root.right));

  return max + 1;
}
