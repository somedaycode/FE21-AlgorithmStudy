/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  let sum = nums.reduce((prev, curr) => prev + curr, 0);
  let pivot = 0;
  let left = 0;

  for (let i = 0; i < nums.length; i++) {
    if (left === sum - nums[pivot]) return pivot;
    sum -= nums[pivot];
    left += nums[pivot];
    pivot++;
  }
  return -1;
};
