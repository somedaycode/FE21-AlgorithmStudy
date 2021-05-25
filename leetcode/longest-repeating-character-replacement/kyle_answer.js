const characterReplacement = (s, k) => {
  const visited = {};
  let lt = 0;
  let rt = 0;
  let maxCharCount = 0;

  while (rt < s.length) {
    const rightChar = s[rt];
    const leftChar = s[lt];

    visited[rightChar] = visited[rightChar] ? visited[rightChar] + 1 : 1;
    if (visited[rightChar] > maxCharCount) maxCharCount = visited[rightChar];

    if (rt - lt + 1 - maxCharCount > k) {
      visited[leftChar]--;
      lt++;
    }
    rt++;
  }
  return rt - lt;
};
