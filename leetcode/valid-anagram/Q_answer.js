var isAnagram = function (s, t) {
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
  return check(tSet);
};

function check(tSet) {
  for (const key in tSet) {
    if (tSet[key] > 0) return false;
  }
  return true;
}
