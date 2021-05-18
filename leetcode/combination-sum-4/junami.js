var combinationSum4 = function (nums, target) {
	return dfsRecursion(nums, target, new Map());
};

const dfsRecursion = (nums, remain, memo) => {
	let count = 0;
	if (remain === 0) return 1;
	if (memo.has(remain)) return memo.get(remain);
	for (let i = 0; i < nums.length; i++) {
		if (remain - nums[i] >= 0) {
			count += dfsRecursion(nums, remain - nums[i], memo);
		}
	}
	memo.set(remain, count);
	return count;
};
