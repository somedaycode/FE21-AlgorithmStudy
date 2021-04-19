var threeSum = function(nums) {
  nums.sort((a, b) => a - b);
  const ans = [];

  // N^2
  // https://leetcode.com/problems/3sum/discuss/281302/JavaScript-with-lots-of-explanatory-comments!
  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i - 1] === nums[i])
      continue;

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum === 0) {
        ans.push([nums[i], nums[left], nums[right]]);
        
        while (nums[left] === nums[left + 1]) left++;
        while (nums[right - 1] === nums[right]) right--;
        
        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  return ans;
};