var search = function(nums, target) {
  return binary(0, nums.length -1, nums, target);
};

function binary(left, right, nums, target) {
  if (left > right)
      return -1;
  
  const mid = Math.floor((left + right) / 2);
  const toLeft = () => binary(left, mid - 1, nums, target);
  const toRight = () => binary(mid + 1, right, nums, target);
  
  if (nums[mid] === target)
      return mid;

  if (nums[left] <= nums[right]) {
    if (target < nums[mid])
      return toLeft();
    else
      return toRight();
  }
  
  if (nums[left] <= nums[mid]) {
    if (target >= nums[left] && target < nums[mid])
      return toLeft();
    else
      return toRight();
  }

  if (nums[mid] <= nums[right]) {
    if (target <= nums[right] && target > nums[mid])
      return toRight();
    else
      return toLeft();
  }

  return 'not reached';
}