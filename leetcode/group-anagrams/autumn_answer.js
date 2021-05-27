/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const answer = [];
  const sorted = strs.map((s) => s.split('').sort().join(''));

  let i = 0;
  let comparedStr = sorted[i];

  while (i !== -1) {
    let group = [];

    for (let j = i; j < strs.length; j++) {
      if (comparedStr === sorted[j]) {
        group.push(strs[j]);
        sorted[j] = null;
      }
    }

    i = sorted.findIndex((v) => v !== null);
    comparedStr = sorted[i];
    answer.push(group);
    group = [];
  }

  return answer;
};

groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']);
