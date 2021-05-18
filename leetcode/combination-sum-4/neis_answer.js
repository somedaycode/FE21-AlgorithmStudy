// 5%
function combinationSum4_2(nums, target) {
  const dp = Array.from({ length: target + 1 }, () => Array(target + 1).fill(0));
  
  for (let i = 0; i < target + 1; i++)
    dp[0][i] = 1;

  for (const num of nums)
    if (num <= target)
      dp[1][num] = 1;
  
  for (let r = 2; r < target + 1; r++) {
    for (let c = 1; c < target + 1; c++) {
      for (const num of nums) {
        if (c - num >= 0 && dp[r - 1][c - num] > 0)
          dp[r][c] += dp[r - 1][c - num];
      }
    }
  }

  let ans = 0;

  for (let i = 1; i < target + 1; i++)
    ans += dp[i][target];

  return ans;
};

function combinationSum4(nums, target) {
  const dp = Array(target + 1).fill(0);
  dp[0] = 1;
  
  for (let i = 1; i < target + 1; i++) {
    for (const num of nums) {
      if (i - num >= 0)
        dp[i] += dp[i - num];
    }
  }

  return dp[target];
};
