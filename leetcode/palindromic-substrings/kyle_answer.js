/*
어제와 똑같은 풀이
*/
var countSubstrings = function (s) {
  const answer = [];
  const getStr = (lt, rt) => {
    while (lt >= 0 && rt < s.length && s[lt] === s[rt]) {
      answer.push(s.slice(lt, rt + 1));
      lt--;
      rt++;
    }
  };

  for (let i = 0; i < s.length; i++) {
    getStr(i, i);
    getStr(i, i + 1);
  }
  return answer.length;
};

console.log(countSubstrings('aaa'));
