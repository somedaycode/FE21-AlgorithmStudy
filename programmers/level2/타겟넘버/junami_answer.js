function solution(numbers, target) {
  var answer = 0;
  const resolution = (numbers, index) => {
    if (index > numbers.length - 1) {
      const sum = numbers.reduce((acc, curr) => acc + curr, 0);
      if (sum === target) answer++;
    } else {
      numbers[index] *= 1;
      resolution(numbers, index + 1);

      numbers[index] *= -1;
      resolution(numbers, index + 1);
    }
  };
  resolution(numbers, 0);
  return answer;
}

console.log(solution([1, 2, 3], 2));
