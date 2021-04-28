// n log n
var longestConsecutive = function (nums) {
  if (nums.length === 1) return 1;
  const sorted = nums.sort((a, b) => b - a);
  let max = 0;
  let count = 0;

  for (let i = 0; i < sorted.length; i++) {
    if (count === 0) count = 1;
    if (sorted[i - 1] - sorted[i] === 1) {
      count++;
    } else if (sorted[i - 1] - sorted[i] > 1) count = 0;

    if (max <= count) max = count;
  }

  return max;
};
