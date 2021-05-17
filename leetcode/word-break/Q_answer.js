// DP
var wordBreak = function (s, wordDict) {
  const set = new Set(wordDict);
  const dp = Array(s.length + 1).fill(false);
  dp[0] = true;

  for (let i = 1; i <= s.length; i++) {
    for (let j = 0; j < i; j++) {
      const word = s.slice(j, i);
      if (dp[j] === true && set.has(word)) {
        dp[i] = true;
        break;
      }
    }
  }
  return dp[s.length];
};

// Time Limit Exceeded
var wordBreak = function (s, wordDict) {
  const set = new Set(wordDict);
  return wordBreakRecur(s, set, 0);
};

function wordBreakRecur(s, set, start) {
  if (start === s.length) return true;

  for (let end = start + 1; end <= s.length; end++) {
    if (set.has(s.substring(start, end)) && wordBreakRecur(s, set, end)) {
      return true;
    }
  }
  return false;
}
