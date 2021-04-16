// 실패 - 중복 배열을 제거를 못했다.
var threeSum = function (nums) {
  if (nums.length <= 1) return [];
  const answer = [];
  let k = 2;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      const sum = nums[i] + nums[j] + nums[k];
      if (sum == 0) {
        answer.push([nums[i], nums[j], nums[k]]);
      }
      k++;
    }
  }
  return answer;
};

// leetcode 해설을 봤다.
// https://leetcode.com/problems/3sum/discuss/281302/JavaScript-with-lots-of-explanatory-comments
var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  const ans = [];

  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i - 1] === nums[i]) continue;

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum === 0) {
        ans.push([nums[i], nums[left], nums[right]]);

        while (nums[left] === nums[left + 1]) left++;
        while (nums[right - 1] === nums[right]) right--;

        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  return ans;
};
