function solution(s) {
  let answer = 0;

  for (let i = 0; i < s.length; i++) {
    if (isValid(rotate(s, i)))
      answer++;
  }
  
  return answer;
}

function rotate(str, cnt) {
  return str.slice(cnt) + str.slice(0, cnt);
}

function isValid(str) {
  const stk = [];
  
  for (const ch of str) {
    if (isLeft(ch)) {
      stk.push(ch);
      continue;
    }

    if (stk.length === 0 || stk.pop() !== getLeft(ch))
      return false;
  }

  return stk.length === 0 ? true : false;
}

function isLeft(ch) {
  if (ch === '[' || ch === '(' || ch === '{') return true;
  return false;
}

function getLeft(right) {
  if (right === ']') return '[';
  if (right === ')') return '(';
  if (right === '}') return '{';
  return null;
}
