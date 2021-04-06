function solution(numbers) {
  const answer = new Set();
  const visited = [];
  findPrime('', visited, answer, numbers); // N! * logN
  return answer.size;
}

function findPrime(prevSum, visited, answer, numbers) {
  if (visited.length === numbers.length)
    return 0;

  for (let i = 0; i < numbers.length; i++) {
    if (visited.find(v => v === i) !== undefined)
      continue;

    const sum = prevSum + numbers[i];

    if (!answer.has(Number(sum)) && isPrime(Number(sum))) // logN
      answer.add(Number(sum));

    visited.push(i);
    findPrime(sum, visited, answer, numbers);
    visited.pop();
  }
}

function isPrime(number) {
  if (number === 2) return 1;
  if (number <= 1 || number % 2 === 0) return 0;

  for (let i = 3; i <= Math.sqrt(number); i += 2)
    if (number % i === 0) return 0;

  return 1;
}