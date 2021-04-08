// var containsDuplicate = function (nums) {
//   const includeArr = nums.reduce((acc, curr) => {
//     if (!acc.includes(curr)) acc.push(curr);
//     return acc;
//   }, []);
//   return includeArr.length === nums.length ? false : true;
// };
// const nums = [1, 2, 3, 1];
// console.log(containsDuplicate(nums));

var containsDuplicate = function (nums) {
  const set = new Set(nums);
  console.log(set);
  return nums.length === set.size ? false : true;
};

const nums = [1, 2, 3, 1];
console.log(containsDuplicate(nums));
