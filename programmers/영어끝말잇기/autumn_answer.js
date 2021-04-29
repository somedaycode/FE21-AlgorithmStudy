function solution(n, words) {
  const set = new Set();
  let turn = 1;

  for (let i = 0; i < words.length; i++) {
    const [prevWord, currWord] = [words[i - 1], words[i]];
    if (i > 0 && i % n === 0) turn++;
    if (i > 0 && prevWord[prevWord.length - 1] !== currWord[0]) {
      return [(i % n) + 1, turn];
    }

    if (set.has(words[i])) {
      return [(i % n) + 1, turn];
    }
    set.add(words[i]);
  }
  return [0, 0];
}

// 옛날에 푼 거 👇

function solution(n, words) {
  const existSameWord = (words) => {
    const set = new Set();
    for (let i = 0; i < words.length; i++) {
      if (set.has(words[i])) return words[i];
      !set.has(words[i]) && set.add(words[i]);
    }
    return false;
  };

  const verifyWordChain = (words) => {
    for (let i = 1; i < words.length; i++) {
      const prevWord = words[i - 1];
      const currWord = words[i];
      if (currWord.length === 1) return i;
      if (prevWord[prevWord.length - 1] !== currWord[0]) return i;
    }
    return true;
  };

  const getTurn = (idx) => {
    // 사람들 중 몇번째 순서인지
    return (idx + 1) % n === 0 ? n : (idx + 1) % n;
  };

  const getNthTurn = (idx) => {
    // 내 차례가 몇번 돌아왔는지
    return Math.ceil((idx + 1) / n);
  };

  // 탈락자 없는 조건 먼저 걸어주기
  if (existSameWord(words) === false && verifyWordChain(words) === true)
    return [0, 0];

  if (existSameWord(words) !== false) {
    // 같은 단어가 있다는 뜻!
    const repeatedWord = existSameWord(words);
    const idxOfRepeated = words.lastIndexOf(repeatedWord);
    return [getTurn(idxOfRepeated), getNthTurn(idxOfRepeated)];
  }

  if (verifyWordChain(words) !== true) {
    // 끝말잇기를 틀리게 한 사람 존재
    const idxOfWrongWord = verifyWordChain(words);
    return [getTurn(idxOfWrongWord), getNthTurn(idxOfWrongWord)];
  }
}
