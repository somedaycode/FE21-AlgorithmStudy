var countSubstrings = function (s) {
  let max = 0;

  for (let i = 0; i < s.length; i++) {
    check(s, i, i);
    check(s, i, i + 1);
  }

  function check(str, left, right) {
    while (left >= 0 && right < str.length && str[left] === str[right]) {
      max++;
      left--;
      right++;
    }
  }
  return max;
};
