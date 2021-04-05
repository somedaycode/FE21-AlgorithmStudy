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

const numbers = [1, 0, 1, 1, 1];
console.log(solution(numbers, 3));
