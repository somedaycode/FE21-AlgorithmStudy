function solution(numbers) {
  let trueArr = [];
  numbers = numbers.split("");

  const isPrimeNumber = (number) => {
    if (number === 1) return false;
    if (number % 2 === 0) return false;
    let divideNumber = 3;
    while (number > divideNumber) {
      if (number % divideNumber === 0) return false;
      divideNumber++;
    }
    return true;
  };

  const getPermutation = (numbers, number) => {
    let result = [];
    if (number === 1) return numbers.map((v) => [v].join(""));

    numbers.forEach((v, idx, arr) => {
      const fixer = v;
      const restArr = arr.filter((_, index) => index !== idx);
      const permutationArr = getPermutation(restArr, number - 1);
      const combineFixer = permutationArr.map((v) => [fixer, ...v].join(""));
      result.push(...combineFixer);
    });
    return result;
  };

  let answer = new Set();
  for (let i = 1; i < numbers.length + 1; i++) {
    answer = new Set([
      ...answer,
      ...getPermutation(numbers, i).map((el) => Number(el)),
    ]);
  }

  answer.forEach((el) => {
    if (isPrimeNumber(Number(el)) === true) {
      //console.log(Number(el), isPrimeNumber(Number(el)));
      trueArr.push(el);
    }
  });
  return trueArr.length;
}

console.log(solution("0156"));

