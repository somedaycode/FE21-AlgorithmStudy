function solution(n, words) {
  let answer = [0, 0];
  let count = 1;
  const wordSet = new Set();
  let p = 1;

  for (let i = 0; i < words.length; i++) {
    if (wordSet.has(words[i])) return [p, count];
    if (i !== 0) {
      if (words[i - 1].slice(-1) !== words[i].slice(0, 1)) return [p, count];
    }
    if (p % n === 0) count++;
    wordSet.add(words[i]);
    p++;
    if (p > n) p = 1;
  }

  return answer;
}
