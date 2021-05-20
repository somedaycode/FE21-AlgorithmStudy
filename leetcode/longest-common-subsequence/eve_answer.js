var longestCommonSubsequence = function (text1, text2) {
  let dp = [];
  const n = text1.length;
  const m = text2.length;

  for (let i = 0; i <= n; i++) {
    dp[i] = Array(m + 1).fill(0);
  }
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (text1[i - 1] !== text2[j - 1]) {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      } else {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      }
    }
  }
  return dp[n][m];
};
