var isAnagram = function (s, t) {
  const sObj = {};
  for (const x of s) {
    if (x in sObj) sObj[x]++;
    else sObj[x] = 1;
  }

  for (const x of t) {
    if (x in sObj) sObj[x]--;
    else if (sObj[x] < 0) return false;
    else return false;
  }
  for (const x in sObj) {
    if (sObj[x] !== 0) return false;
  }
  return true;
};
