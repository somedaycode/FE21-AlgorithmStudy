function solution(A, K) {
  K %= A.length;
  if (K === 0) return A;
  const back = A.slice(0, A.length - K);
  const front = A.slice(A.length - K);
  return [...front, ...back];
}
