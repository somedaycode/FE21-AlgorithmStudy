function solution(numbers, target, idx = 0, sum = 0, sumArr = []) {
  if (idx >= numbers.length) {
    if (sum === target) sumArr.push(sum);
    return;
  }
  solution(numbers, target, idx + 1, sum + numbers[idx], sumArr);
  solution(numbers, target, idx + 1, sum - numbers[idx], sumArr);
  return sumArr.length;
}

console.log(solution([1, 1, 1, 1, 1], 3));
