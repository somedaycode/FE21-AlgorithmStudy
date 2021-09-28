var generateParenthesis = function (n) {
  const answer = [];
  function dfs(left, right, strs) {
    if (left === 0 && right === 0) return answer.push(strs);
    if (left > 0) dfs(left - 1, right, strs + '(');

    // 닫아야 될 숫자는 항상 열린 것 보다 많아야한다.
    if (right > left) dfs(left, right - 1, strs + ')');
  }

  dfs(n, n, '');
  return answer;
};
