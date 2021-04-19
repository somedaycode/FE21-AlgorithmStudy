//양꼬치버젼
var findMin_sheep = function (nums) {
  return Math.min(...nums);
};

//정석버젼
var findMin = function (nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let middle = Math.floor((left + right) / 2);
    if (nums[middle] < nums[right]) right = middle;
    else left = middle + 1;
  }

  return nums[left];
};


var findMin_Kyle = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[i + 1]) return nums[i + 1];
  }
  return nums[0];
};

const nums = [3, 4, 5, 1, 2];
console.log(findMin_Kyle(nums));
