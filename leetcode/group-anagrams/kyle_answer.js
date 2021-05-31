var groupAnagrams = function (strs) {
  const answer = {};
  for (const str of strs) {
    const key = str.split('').sort().join('');
    if (key in answer) answer[key].push(str);
    else answer[key] = [str];
  }

  return Object.values(answer);
};

console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));
