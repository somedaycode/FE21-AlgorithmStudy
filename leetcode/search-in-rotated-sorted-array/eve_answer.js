var search = function(nums, target, count = 0) {
    let arr
    if(nums.length === 1) {
        const answer = nums[0] === target ? count : -1
        return answer;
    } else if(nums.length === 2) {
        if(nums[0] === target) return count;
        else if(nums[1] === target) return count + 1;
        else return -1;
    } 
    const mid = parseInt(nums.length/2)
    if(nums[mid] === target) return mid + count;
    const [a, b] = [Math.abs(nums[0] - target), Math.abs(nums[mid - 1] - target)]
    const [c, d] = [Math.abs(nums[mid + 1] - target), Math.abs(nums[nums.length - 1] - target)]
    const min = Math.min(a, b, c, d)
    if(min === a || min === b)  arr = nums.slice(0, mid)
    else if(min === c || min === d) {
        arr = nums.slice(mid+1, nums.length)
        count += mid + 1
    }
    return search(arr, target, count)
};