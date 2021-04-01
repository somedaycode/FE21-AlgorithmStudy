function solution(n) {
  const numbers = Array.from({ length: n }, (_, i) => i + 1);
  let sum = 0;
  let count = 0;
  for (let i = 0; i < n; i++) {
    sum = 0;
    for (let j = i + 1; j < n; j++) {
      if (sum > n) break;
      sum += numbers[j];
      if (sum + numbers[i] === n) count++;
    }
  }
  const lastNumberCount = 1;
  return count + lastNumberCount;
}
