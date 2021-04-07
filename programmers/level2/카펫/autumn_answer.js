function solution(brown, yellow) {
  let answer = [];

  const getFactorList = yellow => {
    const factorList = [];
    for (let i = 1; i <= Math.sqrt(yellow); i++) {
      if (yellow % i !== 0) continue;
      factorList.push([i, yellow / i]);
    }
    return factorList;
  };

  getFactorList(yellow)
    .map(pair => pair.map(v => v + 2))
    .forEach(pair => {
      const [height, width] = pair;
      if (width * height - yellow === brown) {
        answer = [width, height];
      }
    });

  return answer;
}
console.log(solution(24, 24));
