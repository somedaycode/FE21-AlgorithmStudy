var productExceptSelf = function(nums) {
    let answer = new Array(nums.length).fill(0);
    let zeroIdx = nums.indexOf(0)
    let lastZeroIdx = nums.lastIndexOf(0)
    if(zeroIdx === -1) {
        var n = nums.reduce((res, v) => res * v)
        return nums.map(v => n/v)   
    } 
    else if(zeroIdx === lastZeroIdx) {
        nums.splice(zeroIdx, 1);
        var n = nums.reduce((res, v) => res * v)
        answer[zeroIdx] = n;
    }
    return answer;
};