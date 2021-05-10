function solution(s) {
  let answer = 0;
  let arr = s.split('');
  for (let i = 0; i < s.length; i++) {
    if (check(arr)) answer++;
    arr.push(arr.shift());
  }
  return answer;
}
function check(arr) {
  const stack = [];
  for (const x of arr) {
    if (x === '(' || x === '{' || x === '[') stack.push(x);
    else {
      if (stack.length === 0) return false;
      if (
        (x === ')' && stack[stack.length - 1] === '(') ||
        (x === '}' && stack[stack.length - 1] === '{') ||
        (x === ']' && stack[stack.length - 1] === '[')
      ) {
        stack.pop();
      }
    }
  }
  return stack.length === 0;
}
