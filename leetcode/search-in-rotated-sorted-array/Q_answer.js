// findIndex
var search = function (nums, target) {
  return nums.findIndex((num) => num === target);
};

//binary search
var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    const pivot = Math.floor((left + right) / 2);
    if (nums[pivot] === target) return pivot;
    if (nums[pivot] >= nums[left]) {
      if (nums[left] <= target && nums[pivot] >= target) right = pivot - 1;
      else left = pivot + 1;
    } else {
      if (nums[right] >= target && nums[pivot] <= target) left = pivot + 1;
      else right = pivot - 1;
    }
  }
  return -1;
};
