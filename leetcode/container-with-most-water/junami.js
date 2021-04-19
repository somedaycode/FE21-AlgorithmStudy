var maxArea1 = function (height) {
  height.unshift(0);
  let new_water = 0;
  let prev_water = 0;
  for (let i = 1; i < height.length; i++) {
    for (let j = i + 1; j < height.length; j++) {
      const smaller = Math.min(height[i], height[j]);
      new_water = smaller * (j - i);
      prev_water = Math.max(new_water, prev_water);
    }
  }
  return prev_water;
};
//runtimeError

var maxArea2 = function (height) {
  let h1 = 0;
  let h2 = height.length - 1;
  let curr_w = 0;

  while (h1 < h2) {
    const new_w = Math.min(height[h1], height[h2]) * (h2 - h1);
    if (new_w > curr_w) curr_w = new_w;
    height[h1] <= height[h2] ? h1++ : h2--;
  }
  return curr_w;
};

// const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
const height = [2, 3, 4, 5, 18, 17, 6];
console.log(maxArea2(height));
