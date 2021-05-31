var longestPalindrome = function (s) {
  let max = '';

  for (let i = 0; i < s.length; i++) {
    const arr = [max, getStr(s, i, i), getStr(s, i, i + 1)];
    arr.sort((a, b) => b.length - a.length);
    max = arr[0];
  }

  return max;
};

const getStr = (s, lt, rt) => {
  while (s[lt] && s[rt] && s[lt] === s[rt]) {
    lt--;
    rt++;
  }
  return s.slice(lt + 1, rt);
};
