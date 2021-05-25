var minWindow = function (s, t) {
  let max = '';
  let lt = 0;
  let rt = 0;
  const obj = {};
  for (const char of t) {
    if (obj[char]) obj[char]++;
    else obj[char] = 1;
  }

  let tmp = '';
  while (lt <= rt && rt < s.length) {
    const char = s[rt];
    tmp += char;

    if (obj[char] !== undefined) obj[char]--;

    if (checkLeft(obj)) {
      while (obj[tmp[0]] === undefined || obj[tmp[0]] + 1 < 1) {
        if (obj[tmp[0]] !== undefined) obj[tmp[0]]++;
        tmp = tmp.slice(1);
        lt++;
      }
      if (max === '') max = tmp;
      else max = max.length > tmp.length ? tmp : max;
      if (obj[s[lt]] !== undefined) obj[s[lt]]++;
      lt++;
      tmp = tmp.slice(1);
    }

    rt++;
  }

  return max;
};

const checkLeft = (obj) => {
  for (const key in obj) {
    if (obj[key] > 0) return false;
  }
  return true;
};

console.log(minWindow('ADOBECODEBANC', 'ABC'));
