var maxArea = function(height) {
  let ans = -1;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    const min = Math.min(height[left], height[right]);
    ans = Math.max(ans, (right - left) * min);

    if (height[left] < height[right]) {
      while (height[left + 1] <= min) left++;
      left++;
    } else if (height[left] > height[right]) {
      while (height[right - 1] <= min) right--;
      right--;
    } else {
      left++;
      right--;
    }
  }

  return ans;
};