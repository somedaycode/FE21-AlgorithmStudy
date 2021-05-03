/*
1. 부호 순열로 모든 경우
2. expression token으로 [100,'+',200] 형태로 변환
3. answer에 계산한 값 넣어서 max구하기
*/

function solution(expression) {
  var answer = [];
  const sign = ['+', '-', '*'];
  const signType = permutation(sign, sign.length);
  const tokened = token(expression);
  for (const signs of signType) {
    answer.push(...calculate(tokened, signs));
  }
  return Math.max(...answer.map((v) => Math.abs(v)));
}

const calculate = (arr, signs) => {
  for (const sign of signs) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === sign) {
        arr = [...arr.slice(0, i - 1), calc(arr[i - 1], arr[i + 1], sign), ...arr.slice(i + 2)];
        i -= 2;
      }
    }
  }
  return arr;
};

const calc = (a, b, sign) => {
  if (sign === '*') return a * b;
  else if (sign === '+') return a + b;
  else if (sign === '-') return a - b;
};

const token = (expression) => {
  const arr = [];
  let tmp = '';
  for (let i = 0; i < expression.length; i++) {
    if (isNaN(parseInt(expression[i]))) {
      arr.push(tmp * 1);
      arr.push(expression[i]);
      tmp = '';
    } else {
      tmp += expression[i];
    }
  }
  arr.push(tmp * 1);
  return arr;
};

const permutation = (arr, count) => {
  const result = [];
  if (count === 1) return arr.map((v) => [v]);

  arr.forEach((v, idx, origin) => {
    const fix = v;
    const rest = origin.filter((val, i) => i !== idx);
    const newArr = permutation(rest, count - 1);
    const mix = newArr.map((v) => [fix, ...v]);
    result.push(...mix);
  });

  return result;
};
