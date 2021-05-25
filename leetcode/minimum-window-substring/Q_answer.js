var minWindow = function (s, t) {
  let left = 0;
  let right = 0;
  const tSet = {};
  let result = '';

  for (let str of t) {
    if (tSet[str] >= 1) tSet[str]++;
    else tSet[str] = 1;
  }

  while (right <= s.length) {
    let str = '';
    while (check(tSet)) {
      str = s.slice(left, right);
      if (result.length === 0) result = str;
      else if (result.length > str.length) result = str;
      tSet[s[left]]++;
      left++;
    }
    if (s[right] in tSet) {
      tSet[s[right]]--;
      right++;
    } else right++;
  }
  return result;
};

function check(tSet) {
  for (let key in tSet) {
    if (tSet[key] > 0) return false;
  }
  return true;
}
