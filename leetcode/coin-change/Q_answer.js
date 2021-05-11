// discuss를 확인했다.
const coinChange = (coins, amount) => {
  const dp = Array(amount + 1).fill(Infinity);
  dp[0] = 0;
  for (let coin of coins) {
    for (let i = coin; i <= amount; i++) {
      dp[i] = Math.min(dp[i], dp[i - coin] + 1);
    }
  }
  return dp[dp.length - 1] === Infinity ? -1 : dp[dp.length - 1];
};
