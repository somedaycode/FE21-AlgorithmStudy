/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  // for문 돈다
  // i번째 요소만 제외하고 필터한 새로운 배열
  // reduce로 곱해나간다

  const answer = [];
  for (let i = 0; i < nums.length; i++) {
    const result = nums
      .filter((_, idx) => idx !== i)
      .reduce((prev, curr) => prev * curr);
    answer.push(result);
  }
  return answer;
};
