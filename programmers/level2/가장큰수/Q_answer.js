function solution(numbers) {
  const answer = numbers
    .map((number) => String(number))
    .sort((a, b) => b + a - (a + b));
  if (answer[0] === '0') return '0';
  return answer.join('');
}
