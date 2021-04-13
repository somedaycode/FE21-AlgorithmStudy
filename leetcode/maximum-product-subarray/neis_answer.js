// O(n^2)
// Time: faster than 5%, Space: faster than 99%
var maxProduct1 = function(nums) {
  let max = nums[0];

  for (let i = 1; i < nums.length; i++) {
    let product = 1;

    for (let j = i; j >= 0; j--) {
      product = product * nums[j];
      max = Math.max(max, product);
    }
  }

  return max;
};

// O(n)
// Time: faster than 45%, Space: faster than 60%
var maxProduct2 = function(nums) {
  let max = nums[0];
  let min = nums[0];
  let ans = nums[0];
  
  for (let i = 1; i < nums.length; i++) {
    const tmp_max = max;
    max = Math.max(nums[i], min * nums[i], tmp_max * nums[i]);
    min = Math.min(nums[i], min * nums[i], tmp_max * nums[i]);
    ans = Math.max(ans, max);
  }

  return ans;
}