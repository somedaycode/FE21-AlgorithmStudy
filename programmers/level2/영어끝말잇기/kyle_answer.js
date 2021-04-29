function solution(n, words) {
  const check = {};
  let person = 1;
  for (let i = 0; i < words.length; i++) {
    if ((i !== 0 && words[i - 1].slice(-1) !== words[i][0]) || check[words[i]]) {
      return [person, Math.ceil((i + 1) / n)];
    }
    person = person + 1 > n ? 1 : person + 1;
    check[words[i]] = true;
  }

  return [0, 0];
}
