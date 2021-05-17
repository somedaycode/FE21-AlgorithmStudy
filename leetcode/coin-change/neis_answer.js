var coinChange = function(coins, amount) {
  const dp = Array(amount + 1).fill(-1);
  dp[0] = 0;

  for (const coin of coins)
    dp[coin] = 1;

  for (let i = 1; i <= amount; i++) {
    for (const coin of coins) {
      const currAmount = i - coin;

      if (currAmount < 0 || dp[currAmount] === -1)
        continue;

      if (dp[i] === -1)
        dp[i] = dp[currAmount] + 1;
      else
        dp[i] = Math.min(dp[i], dp[currAmount] + 1);
    }
  }

  return dp[amount];
};

console.log(coinChange([1, 2, 5], 11));
// console.log(coinChange([186,419,83,408], 6249));