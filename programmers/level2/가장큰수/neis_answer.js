function solution(numbers) {
  let res = numbers.map(v => String(v)).sort((a, b) => {
    return b + a - (a + b);
  }).join('');

  return res[0] === '0' ? '0' : res;
}
