//9퍼..?

var lengthOfLIS = function (nums) {
  const d = [{ num: nums[0], count: 1 }];
  for (let i = 1; i < nums.length; i++) {
    const minNumArr = d.filter((v) => v && v.num < nums[i]).map((v) => v.count);
    d[i] = minNumArr.length
      ? { num: nums[i], count: Math.max(...minNumArr) + 1 }
      : { num: nums[i], count: 1 };
  }
  return Math.max(...d.map((v) => (v ? v.count : 0)));
};
