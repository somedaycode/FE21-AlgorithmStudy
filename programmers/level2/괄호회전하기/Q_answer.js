function solution(s) {
  let answer = 0;
  let arr = s.split('');
  for (let i = 0; i < arr.length; i++) {
    if (check(arr)) answer++;
    arr.push(arr.shift());
  }
  return answer;
}

function check(arr) {
  const b = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '{' || arr[i] === '[' || arr[i] === '(') b.push(arr[i]);
    else if (arr[i] === ')' && b[b.length - 1] === '(') b.pop();
    else if (arr[i] === ']' && b[b.length - 1] === '[') b.pop();
    else if (arr[i] === '}' && b[b.length - 1] === '{') b.pop();
    else return false;
  }
  if (b.length === 0) return true;
}
