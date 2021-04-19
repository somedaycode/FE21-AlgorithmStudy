/*
1차시도 : 3중 for문 시간 초과

2차시도 : 2sum을 먼저 생각한 뒤에 해결
중복은 set으로 해결
*/
const threeSum = (nums) => {
  nums.sort((a, b) => a - b);
  const answer = [];
  for (let i = 0; i < nums.length; i++) {
    const target = nums[i] * -1;
    const twoSums = twoSum(nums, i + 1, target);
    const threeSums = twoSums.map((v) => [nums[i], ...v]);
    answer.push(...threeSums);
    while (nums[i] === nums[i + 1]) i++;
  }
  return answer;
};

const twoSum = (arr, start, target) => {
  const check = new Set();
  let end = arr.length - 1;
  const res = [];
  while (start < end) {
    const sum = arr[start] + arr[end];
    if (sum === target) {
      if (check.has('' + arr[start] + arr[end])) {
        start++;
        continue;
      }
      res.push([arr[start], arr[end]]);
      start++;
      check.add('' + arr[start] + arr[end]);
    } else if (sum > target) {
      end--;
    } else {
      start++;
    }
  }
  return res;
};

console.log(threeSum([-2, 0, 1, 1, 2]));
