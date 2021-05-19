var lengthOfLongestSubstring = function (s: string): number {
  if (s.length === 0) return 0;
  let result = 0;

  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < s.length; j++) {
      const a: string = s.substr(i, j + 1);

      if (!check(a)) break;

      const max = a.length;
      result = Math.max(max, result);
    }
  }
  return result;
};

function check(str: string): boolean {
  if (str.length === 1) return true;

  const lastStr = str.charAt(str.length - 1);

  for (let i = 0; i < str.length - 1; i++) {
    if (str.charAt(i) === lastStr) return false;
  }

  return true;
}
