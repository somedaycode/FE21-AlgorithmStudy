//javascript
var combinationSum4 = function (nums, target) {
  const dp = new Array(target + 1).fill(0);
  const numList = new Set(nums);
  for (const num of nums) {
    dp[num] = 1;
  }

  for (let i = 1; i <= target; i++) {
    for (let j = i; j >= 1; j--) {
      if (numList.has(i - j)) dp[i] += dp[j];
    }
  }

  return dp[target];
};

//typescript
function combinationSum4(nums: number[], target: number): number {
  const dp: number[] = new Array(target + 1).fill(0);
  const numList = new Set<number>(nums);
  for (const num of nums) {
    dp[num] = 1;
  }

  for (let i = 1; i <= target; i++) {
    for (let j = i; j >= 1; j--) {
      if (numList.has(i - j)) dp[i] += dp[j];
    }
  }
  return dp[target];
}

console.log(combinationSum4([1, 2, 3], 4));
