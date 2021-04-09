/*
큐의 마음을 이해할 수 있었던 문제 
하위 5% 당첨...
*/
const maxSubArray = (nums) => {
  let answer = -100000;
  for (let i = 0; i < nums.length; i++) {
    let maxTmp = -100000;
    let tmp = 0;
    for (let j = i; j < nums.length; j++) {
      tmp += nums[j];
      maxTmp = maxTmp < tmp ? tmp : maxTmp;
    }
    answer = answer < maxTmp ? maxTmp : answer;
  }

  return answer;
};

const k = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

console.log(maxSubArray(k));
