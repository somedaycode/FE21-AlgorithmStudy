const longestValidParentheses = (s) => {
  if (s === '') return 0;
  const res = [];
  s.split('').forEach((v, idx, arr) => {
    res.push(getValidNum(arr.slice(idx)));
  });
  return Math.max(...res);
};

//arr시작부터 유효한 괄호가 몇개인지 세어주는 함수
const getValidNum = (arr) => {
  const stack = [];
  let maxCount = 0;
  let tmp = 0;
  for (const x of arr) {
    if (x === '(') stack.push(1);
    if (x === ')') {
      if (!stack.length) return maxCount;
      stack.pop();
      tmp += 2;
    }
    if (!stack.length) {
      maxCount += tmp;
      tmp = 0;
    }
  }
  return maxCount;
};
