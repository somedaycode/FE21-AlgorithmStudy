/*
양끝에서부터 비교시작
작은 막대 기준으로 사이에 차있는 물 계산
계산 후에는 작은 막대는 이동
*/
const maxArea = (height) => {
  let max = 0;
  let lt = 0;
  let rt = height.length - 1;
  while (lt < rt) {
    const count = rt - lt;
    if (height[lt] <= height[rt]) {
      max = Math.max(max, height[lt] * count);
      lt++;
    } else {
      max = Math.max(max, height[rt] * count);
      rt--;
    }
  }
  return max;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
console.log(maxArea([1, 1]));
console.log(maxArea([4, 3, 2, 1, 4]));
console.log(maxArea([1, 2, 1]));
