/*
1차 풀이 
O(N)으로 해결해보라고 했지만 생각이 안나서 일단 정렬로 해결
*/
var longestConsecutive = function (nums) {
  nums.sort((a, b) => a - b);
  const newNums = [...new Set(nums)];
  let answer = 0;
  let tmp = 0;
  for (let i = 0; i < newNums.length; i++) {
    if (i !== 0 && newNums[i - 1] + 1 !== newNums[i]) {
      answer = Math.max(answer, tmp);
      tmp = 1;
    } else {
      tmp++;
    }
  }
  answer = Math.max(answer, tmp);
  return answer;
};

console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]));
