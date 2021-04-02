function solution(numbers) {
  let res = numbers.map(v => String(v)).sort((a, b) => {
    return b + a - (a + b);
  }).join('');

  if (res === Array(numbers.length).fill('0').join(''))
    res = '0';

  return res;
}

// console.log(solution([0, 0, 0]));
// console.log(solution([7, 70, 73])); // => 7, 73, 70
// console.log(solution([6, 0, 100, 10, 2, 0, 7, 70, 63, 73]));
// console.log(solution([6, 100,10, 10, 2, 10]));
// console.log(solution([3, 30, 34, 5, 9]));
// console.log(solution([1, 2, 3, 4]));


const arr = [77, 70, 100, 7, 73];

console.log(arr2.sort((a, b) => {
  console.log(`a: ${a}, b: ${b}`);
  return b-a;
}));