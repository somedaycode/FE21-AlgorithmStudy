function solution(s) {
  var answer = 0;
  for (let i = 0; i < s.length; i++) {
    const arr = rotate(s, i);
    if (check(arr)) answer++;
  }
  return answer;
}

function rotate(str, n) {
  let arr = str.split("");
  for (let i = 0; i < n; i++) {
    arr.push(arr.shift());
  }
  return arr;
}

function check(arr) {
  let stack = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "(" || arr[i] === "{" || arr[i] === "[") stack.push(arr[i]);
    else if (arr[i] === ")" && stack[stack.length - 1] === "(") stack.pop();
    else if (arr[i] === "}" && stack[stack.length - 1] === "{") stack.pop();
    else if (arr[i] === "]" && stack[stack.length - 1] === "[") stack.pop();
    else return false;
  }
  if (stack.length === 0) return true;
}
