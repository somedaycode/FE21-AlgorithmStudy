function solution(A, K) {
  if (A.length === 0) return A;
  for (let i = 0; i < K; i++) {
    const pop = A.pop();
    A.unshift(pop);
  }
  return A;
}
