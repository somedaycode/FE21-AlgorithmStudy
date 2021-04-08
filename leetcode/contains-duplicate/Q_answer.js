// 이중 for loop
// 5%
var containsDuplicate = function (nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        count++;
      }
      if (count === 2) return true;
    }
    count = 0;
  }
  return false;
};

// Set 사용
// 80% ~
var containsDuplicate = function (nums) {
  const set = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) {
      return true;
    }
    set.add(nums[i]);
  }
  return false;
};
