// for문의 i 범위 조건을 처음에 i < A.length;로 해서 83% 나옴.

// 문제에서 '비어있지 않은..!!' 부분으로 나눈다고 했었음
// splits this tape into two non-empty parts
// : A[0], A[1], ..., A[P − 1] and A[P], A[P + 1], ..., A[N − 1].
// 그러니까 i < A.length - 1까지만 돌아야됨

// 100%, O(N)
function solution(A) {
  let right = A.reduce((a, b) => a + b);
  let left = 0;
  let result = null;
  for (let i = 0; i < A.length - 1; i++) {
    left += A[i];
    right -= A[i];
    const diff = Math.abs(left - right);
    if (result === null) result = diff;
    else if (result > diff) result = diff;
  }
  return result;
}
