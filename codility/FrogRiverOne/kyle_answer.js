function solution(goal, arr) {
  const check = new Array(goal + 1).fill(false);
  let cnt = goal;
  for (let i = 0; i < arr.length; i++) {
    const leaf = arr[i];
    if (check[leaf] || check[leaf] === undefined) continue;

    check[leaf] = true;
    cnt--;

    if (cnt === 0) return i;
  }
  return -1;
}
