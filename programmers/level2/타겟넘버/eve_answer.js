function solution(numbers, target) {
    return resolution(numbers, target, 0, 0, true) + resolution(numbers, target, 0, 0, false)
}
function resolution(numbers, target, sum, i, isPlus) {
    isPlus ? sum += numbers[i] : sum -= numbers[i]
    if(i === numbers.length-1) return (sum === target) ? 1 : 0;    
    return resolution(numbers, target, sum, i + 1, true) + resolution(numbers, target, sum, i + 1, false)
}