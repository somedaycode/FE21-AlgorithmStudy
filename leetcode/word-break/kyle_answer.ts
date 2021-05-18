//discuss dp 코드

function wordBreak(s: string, wordDict: string[]): boolean {
  const dp: boolean[] = new Array(s.length + 1).fill(false);
  dp[0] = true;

  for (let end = 1; end <= s.length; end++) {
    for (let start = 0; start < end; start++) {
      if (dp[start] && wordDict.includes(s.slice(start, end))) {
        dp[end] = true;
      }
    }
  }
  return dp[s.length];
}

//네이스 코드

type bool = boolean | null;

function wordBreak(s: string, wordDict: string[]): boolean {
  const dp: bool[] = new Array(s.length).fill(null);
  const dfs = (idx: number, words: string): boolean => {
    if (words.length === 0) return true;

    let result: boolean = false;

    if (dp[idx] !== null) return false;

    for (const word of wordDict) {
      if (words.slice(0, word.length) === word) {
        result = dfs(idx + word.length, words.slice(word.length));
      }
      if (result) {
        break;
      }
    }
    dp[idx] = true;
    return result;
  };

  let res: boolean = dfs(0, s);
  return res;
}
