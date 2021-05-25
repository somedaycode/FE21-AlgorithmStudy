var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  let left = 0;
  let right = 0;
  const tSet = {};

  for (const str of t) {
    if (tSet[str]) tSet[str]++;
    else tSet[str] = 1;
  }

  while (right < s.length) {
    if (tSet[s[right]]) {
      tSet[s[right]]--;
      right++;
    } else return false;
  }
  return true;
};

var isAnagram = function (s, t) {
  if (s.split('').sort().join('') !== t.split('').sort().join('')) return false;
  return true;
};
