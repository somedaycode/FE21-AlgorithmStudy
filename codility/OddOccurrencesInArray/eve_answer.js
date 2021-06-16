function solution(A) {
  let mySet = new Set();
  for (let i = 0; i < A.length; i++) {
    if (mySet.has(A[i])) mySet.delete(A[i]);
    else mySet.add(A[i]);
  }
  return [...mySet][0];
}
