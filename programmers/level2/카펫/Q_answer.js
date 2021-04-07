function solution(brown, yellow) {
  const sum = brown + yellow;
  for (let i = 2; i < Math.floor(sum / 2); i++) {
    const remainder = Math.floor(sum / i);
    if (i < remainder) continue;
    if (yellow === (i - 2) * (remainder - 2)) {
      return [i, remainder];
    }
  }
}
