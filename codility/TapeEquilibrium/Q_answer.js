function solution(A) {
  let min = Infinity;
  for (let i = 1; i < A.length; i++) {
    const left = A.slice(0, i).reduce((prev, curr) => prev + curr, 0);
    const right = A.slice(i).reduce((prev, curr) => prev + curr, 0);
    const answer = Math.abs(left - right);
    min = Math.min(min, answer);
  }
  return min;
}
