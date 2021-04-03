/*
앞에서부터 한글자마다 최대 유효한 괄호를 res에 넣어준다. 
res의 max값 출력
*/
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

/*
leetcode의 다른답안

stack에 index를 push한다. 
끊기는 지점을 Set에 index로 따로 저장해 그 외에 값들에어 이어지는 부분을 체크해주는 방법
*/

const longestValidParentheses = (str) => {
  const breakPoints = new Set();
  const stack = [];

  str.split('').forEach((v, idx) => {
    if (v === '(') stack.push(idx);
    if (v === ')') {
      if (stack.length) stack.pop();
      else breakPoints.add(idx); //스택에 없는데 빼려고하면 breakpoint
    }
  });
  //스택에 남아있는 것들 breakPoints에 추가
  stack.forEach((v) => breakPoints.add(v));

  let maxNum = 0;
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (breakPoints.has(i)) count = 0;
    else {
      count++;
      maxNum = maxNum > count ? maxNum : count;
    }
  }

  return maxNum;
};
