//소수 찾기
/*
1. 시작점 기준으로 0으로 시작하는건 걸러주고 시작 값 넣고 go함수 실행
2. 그 숫자 뒤로 모든 경우 다 넣어주기
*/
function solution(numbers) {
  const answer = new Set();
  const arr = numbers.split('');
  const go = (array, sum) => {
    if (!array.length) {
      if (!answer.has(sum) && isPrime(sum)) answer.add(sum);
      return;
    }
    for (let i = 0; i < array.length; i++) {
      const restArr = array.filter((_, idx) => idx !== i);
      go(restArr, sum + array[i]);
      go(restArr, sum);
    }
  };
  for (let i = 0; i < arr.length; i++) {
    const startNum = arr[i];
    if (startNum === '0') continue;
    const restArr = arr.filter((_, idx) => idx !== i);
    go(restArr, startNum);
  }
  console.log(answer);
  return answer.size;
}

const isPrime = (str) => {
  if (str === '1') return false;
  const num = parseInt(str);
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
};

console.log(solution('17'));
console.log(solution('011'));
console.log(solution('013'));
