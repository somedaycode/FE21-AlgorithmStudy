function solution(s) {
  var answer = 0;
  let arr = s.split("");
  for (let i = 0; i < s.length; i++) {
    if (check(arr)) answer++;
    arr.push(arr.shift());
  }
  return answer;
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
