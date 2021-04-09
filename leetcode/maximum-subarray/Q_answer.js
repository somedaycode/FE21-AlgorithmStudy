// runTime 실패
var maxSubArray = function (nums) {
  let curSum = nums[0];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j <= nums.length; j++) {
      let prev = sum(nums.slice(i, j));
      if (prev > curSum) curSum = prev;
    }
  }
  return curSum;
};

function sum(arr) {
  return arr.reduce((prev, curr) => prev + curr, 0);
}

// answer max값
var maxSubArray = function (nums) {
  let cur = nums[0];
  let max = cur;
  let n;
  for (let i = 1; i < nums.length; i++) {
    n = nums[i];
    cur = Math.max(n, cur + n);
    max = Math.max(max, cur);
  }
  return max;
};
