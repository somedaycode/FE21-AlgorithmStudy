// 리팩토링
function solution(A) {
  if (A.length === 0) return 1;
  const toBeSum = Array.from({ length: A.length + 1 }, (_, i) => i + 1).reduce(
    (prev, curr) => prev + curr,
    0
  );
  const currentSum = A.reduce((prev, curr) => prev + curr, 0);
  return toBeSum - currentSum;
}

// 처음
function solution(A) {
  const sorted = A.sort((a, b) => a - b);
  if (sorted[0] !== 1) return 1;
  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i + 1] - sorted[i] > 1) return sorted[i] + 1;
  }
  return sorted[sorted.length - 1] + 1;
}
