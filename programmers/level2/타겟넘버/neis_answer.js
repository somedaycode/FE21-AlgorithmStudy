function solution(numbers, target) {
  return targetNumber(0, 0, numbers, target);
}

function targetNumber(idx, sum, numbers, target) {
  if (idx === numbers.length)
    return sum === target ? 1 : 0;

  return targetNumber(idx + 1, sum + numbers[idx], numbers, target) + targetNumber(idx + 1, sum - numbers[idx], numbers, target);
}