function solution(N) {
  const binary = N.toString(2);

  let l = binary.indexOf('1');
  let max = 0;

  for (let r = l; r < binary.length; r++) {
    if (binary[r] === '1') {
      const zeros = r - l - 1;
      if (zeros > 0 && max < zeros) max = zeros;
      l = r;
    }
  }
  return max;
}
