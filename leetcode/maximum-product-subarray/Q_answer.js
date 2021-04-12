var maxProduct = function (nums) {
  let max = nums[0];
  let result = nums[0];
  let min = nums[0];
  let n = null;
  for (let i = 1; i < nums.length; i++) {
    n = nums[i];
    // max값을 저장해주어야함
    const curmax = max;
    max = Math.max(n, min * n, curmax * n);
    min = Math.min(n, min * n, curmax * n);
    result = Math.max(result, max);
  }
  return result;
};
