var findMin = nums => {
    if(nums.length === 1) return nums[0]
    if(nums.length === 2) return nums[0] > nums[1] ? nums[1] : nums[0]  
    const mid = parseInt(nums.length/2)
    let arr = nums[mid] > nums[nums.length-1] ? nums.slice(mid+1, nums.length) : nums.slice(0, mid+1)
    return findMin(arr)
}