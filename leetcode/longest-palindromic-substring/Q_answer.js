// time limit exceeded

var longestPalindrome = function (s) {
  if (s.length === 1) return s[0];

  let palin = s[0];
  for (let i = 0; i < s.length; i++) {
    const c = check(s, s[i], i);
    if (palin.length < c.length) palin = c;
  }
  return palin;
};

function check(s, str, i) {
  let result = '';
  let p = str;
  for (let j = i + 1; j < s.length; j++) {
    p += s[j];
    if (p[0] !== p[p.length - 1]) continue;
    const splitP = p.split('');
    if (splitP.join('') === splitP.reverse().join('')) result = p;
  }
  return result;
}

// Expand around Center
var longestPalindrome = function (s) {
  let result = s[0];
  let max = '';

  for (let i = 0; i < s.length; i++) {
    const odd = eac(s, i, i);
    const even = eac(s, i, i + 1);
    max = odd.length > even.length ? odd : even;
    result = result.length > max.length ? result : max;
  }

  return result;
};

function eac(s, l, r) {
  while (l >= 0 && r < s.length && s[l] === s[r]) {
    l--;
    r++;
  }
  return s.slice(l + 1, r);
}

// "bb"
longestPalindrome('bb');
