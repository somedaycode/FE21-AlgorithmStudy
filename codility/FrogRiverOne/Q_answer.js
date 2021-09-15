// 카일 코드 참고
// 처음으로 푼 코드는 퍼포먼스가 80%로 time에서 문제가 생겼다.

function solution(X, A) {
  const leaf = Array(X + 1).fill(false);
  let count = X;

  for (let i = 0; i < A.length; i++) {
    const fall = A[i];
    if (leaf[fall] || leaf[fall] === undefined) continue;

    leaf[fall] = true;
    count--;

    if (count === 0) return i;
  }
  return -1;
}
