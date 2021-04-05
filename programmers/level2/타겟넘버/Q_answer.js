function solution(numbers, target) {
  let answer = 0;

  function dfs(numbers, target, idx = 0, sum = 0) {
    if (idx === numbers.length) {
      if (sum === target) answer++;
      return;
    }
    const plus = sum + numbers[idx];
    const minus = sum - numbers[idx];
    idx += 1;
    dfs(numbers, target, idx, plus);
    dfs(numbers, target, idx, minus);
  }
  dfs(numbers, target);
  return answer;
}

const numbers = [1, 1, 1, 1, 1];
const target = 3;

solution(numbers, target);
