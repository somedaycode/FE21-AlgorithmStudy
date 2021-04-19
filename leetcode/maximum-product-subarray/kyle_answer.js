/*
와.. 끔찍하다
 */
const maxProduct = (nums) => {
  if (nums.length === 1) return nums[0];
  let zeroFlag = false;
  const newNums = [];
  let tmp = [];
  for (const num of nums) {
    if (num === 0) {
      if (tmp.length) newNums.push(tmp);
      tmp = [];
      zeroFlag = true;
    } else {
      tmp.push(num);
    }
  }
  if (tmp.length) newNums.push(tmp);
  const maxArr = newNums.map(getMaxNum);

  return zeroFlag ? Math.max(0, ...maxArr) : Math.max(...maxArr);
};

const getMaxNum = (arr) => {
  if (arr.length === 1) return arr[0];
  const countMinus = arr.reduce((acc, cur) => (cur < 0 ? acc + 1 : acc), 0);
  const totalMultiple = arr.reduce((acc, cur) => acc * cur);
  if (countMinus % 2 === 0) return totalMultiple;
  const [firstMinusIdx, lastMinusIdx] = getMinusIdx(arr);
  let beforeFirstMinus = arr.slice(0, firstMinusIdx + 1).reduce((acc, cur) => acc * cur, 1);
  let afterLastMinus = arr.slice(lastMinusIdx).reduce((acc, cur) => acc * cur, 1);
  return Math.max(totalMultiple / beforeFirstMinus, totalMultiple / afterLastMinus);
};
const getMinusIdx = (arr) => {
  const idx = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) idx.push(i);
  }
  return [idx[0], idx.pop()];
};

console.log(maxProduct([3, 4, -1, -2, -3, 5, 6]));
console.log(maxProduct([3, -1, 4]));
