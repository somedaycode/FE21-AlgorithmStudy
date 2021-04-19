const findMin = (nums) => Math.min(...nums);

const findMin = (nums) => {
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] > nums[i + 1]) return nums[i + 1];
  }
  return nums[0];
};

console.log(findMin([3, 4, 5, 1, 2]));
