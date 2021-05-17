type bool = boolean | null;

function wordBreak(s: string, wordDict: string[]): bool {
  const dp: bool[] = Array(s.length).fill(null);

  return solution(0, s, dp, wordDict);
};

function solution(idx: number, str: string, dp: bool[], words: string[]): bool {
  if (str.length === 0)
    return true;

  if (dp[idx] !== null)
    return dp[idx];

  let res: bool = false;

  for (const word of words) {
    const slice: string = str.slice(0, word.length);

    // console.log(str, word, slice);

    if (slice === word) {
      if (dp[idx] !== null)
        return dp[idx];
      
      res = solution(idx + word.length, str.slice(word.length), dp, words);
      
      if (res === true)
        break;
    }
  }

  dp[idx] = res;
  return res;
}

