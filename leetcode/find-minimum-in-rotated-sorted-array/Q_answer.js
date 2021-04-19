var findMin = function (nums) {
  return Math.min(...nums);
};

//binary search
var findMin = function (nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const pivot = Math.floor((left + right) / 2);
    if (nums[pivot] < nums[right]) right = pivot;
    else left = pivot + 1;
  }

  return nums[left];
};
