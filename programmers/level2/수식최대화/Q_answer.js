function solution(expression) {
  let max = [];
  const [numbers, op] = tokenize(expression);
  const expressionArr = [];
  for (let i = 0; i < numbers.length; i++) {
    expressionArr.push(numbers[i]);
    if (op[i] !== undefined) {
      expressionArr.push(op[i]);
    }
  }

  console.log(expressionArr);

  const priority = [
    ['+', '-', '*'],
    ['+', '*', '-'],
    ['*', '-', '+'],
    ['*', '+', '-'],
    ['-', '+', '*'],
    ['-', '*', '+'],
  ];

  for (let i = 0; i < priority.length; i++) {
    let newArr = expressionArr.slice(0);
    for (let j = 0; j < priority[i].length; j++) {
      for (let k = 0; k < newArr.length; k++) {
        if (priority[i][j] === newArr[k]) {
          const newNumber = calc(newArr[k - 1], newArr[k + 1], newArr[k]);
          newArr = [
            ...newArr.slice(0, k - 1),
            newNumber,
            ...newArr.slice(k + 2),
          ];
          k = 0;
        }
      }
    }
    max.push(Math.abs(newArr[0]));
  }
  return Math.max(...max);
}

const calc = (a, b, op) => {
  if (op === '+') return Number(a) + Number(b);
  if (op === '-') return Number(a) - Number(b);
  if (op === '*') return Number(a) * Number(b);
};

function tokenize(exp) {
  const regExNum = new RegExp('[^0-9]', 'g');
  const regExNotNum = new RegExp('[0-9]', 'g');
  const numbers = exp.split(regExNum);
  const operator = removeSpace(exp.split(regExNotNum));
  return [numbers, operator];
}

function removeSpace(arr) {
  return arr.filter((n) => n !== '');
}

solution('1+1*1');
