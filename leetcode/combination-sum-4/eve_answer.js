var combinationSum4 = function (nums, target) {
  const numsSet = new Set(nums);
  let arr = Array(target + 1).fill(0);
  // 자기 자신 값으로 나오는 거에 1.
  for (let i = 0; i < nums.length; i++) {
    arr[nums[i]] = 1;
  }

  for (let i = 2; i < arr.length; i++) {
    for (let j = i - 1; j > 0; j--) {
      if (numsSet.has(i - j)) arr[i] += arr[j];
    }
  }

  return arr[target];
};
