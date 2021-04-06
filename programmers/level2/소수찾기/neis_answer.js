function solution(numbers) {
  const checked = new Set();
  const visited = [];
  return findPrime('', visited, checked, numbers);
}

function findPrime(prevSum, visited, checked, numbers) {
  if (visited.length === numbers.length)
    return 0;

  let result = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (visited.find(v => v === i) !== undefined)
      continue;

    const sum = prevSum + numbers[i];

    if (!checked.has(Number(sum))) {
      result += isPrime(Number(sum));
      checked.add(Number(sum));
    }

    visited.push(i);
    result += findPrime(sum, visited, checked, numbers);
    visited.pop();
  }
  
  return result;
}

function isPrime(number) {
  if (number === 2) return 1;
  if (number <= 1 || number % 2 === 0) return 0;

  for (let i = 3; i <= Math.sqrt(number); i += 2)
    if (number % i === 0) return 0;

  return 1;
}