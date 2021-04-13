var findMin = function(nums) {
  if (nums.length === 1) return nums[0];
  
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < nums[(i - 1 + nums.length) % nums.length])
      return nums[i];
  }
};