var lengthOfLongestSubstring = function (s) {
  let set = new Set();
  let length = 0;
  for (let i = 0; i < s.length; i++) {
    if (set.has(s[i])) {
      for (let v of set) {
        set.delete(v);
        if (v === s[i]) break;
      }
      if (length < set.size) length = set.size;
    }
    set.add(s[i]);
    length = length >= set.size ? length : set.size;
  }
  return length;
};
