function solution(n, words) {
  let player = 0;
  let turn = 0;
  const set = new Set();
  
  for (let i = 0; i < words.length; i++, player = (player + 1) % n) {
    if (i % n === 0)
      turn++;

    if (set.has(words[i]))
      return [player + 1, turn];

    if (i > 0 && words[i - 1][words[i - 1].length - 1] !== words[i][0])
      return [player + 1, turn];

    set.add(words[i]);
  }

  return [0, 0];
}