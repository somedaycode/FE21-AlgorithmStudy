function solution(A) {
  const aSet = new Set();
  for (const num of A) {
    if (aSet.has(num)) aSet.delete(num);
    else aSet.add(num);
  }
  return [...aSet][0];
}
