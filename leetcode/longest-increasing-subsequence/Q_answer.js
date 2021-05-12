var lengthOfLIS = function (nums) {
  const dp = Array(nums.length).fill(1);
  let answer = 1;

  for (let i = 1; i < dp.length; i++) {
    let max = 0;
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) max = Math.max(max, dp[j]);
    }
    dp[i] = max + 1;
    answer = Math.max(answer, dp[i]);
  }

  return answer;
};
