function solution(expression) {
  let operands = [];
  const ops = [];

  let token = '';
  for (let i = 0; i < expression.length; i++) {
    const ch = expression[i];

    if (ch === '-' || ch === '*' || ch === '+') {
      operands.push(token);
      token = '';
      ops.push(ch);
    } else {
      token += ch;
    }
  }
  operands.push(token);
  operands = operands.map(v => Number(v));

  const ops2 = [...'-+*'];
  ops2.sort();
  let ans = 0;

  do {
    const cpyOperands = Array.from(operands);
    const cpyOps = Array.from(ops);
    
    for (const op of ops2) {
      let i = 0;

      while (i < cpyOps.length){
        if (cpyOps[i] !== op) {
          i++;
          continue;
        }

        const [left, right] = cpyOperands.splice(i, 2);
        const currOp = cpyOps.splice(i, 1)[0];

        if (currOp === '*') cpyOperands.splice(i, 0, left * right);
        else if (currOp === '-') cpyOperands.splice(i, 0, left - right);
        else if (currOp === '+') cpyOperands.splice(i, 0, left + right);
        i = 0;
      }
    }
    
    ans = Math.max(ans, Math.abs(cpyOperands[0]));

  } while (nextPermutaion(ops2));

  return ans;
}

function nextPermutaion(arr) {
  function _swap(i, j) {
    const tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
  }

  let i = arr.length - 2;
  while (i >= 0 && arr[i] >= arr[i + 1]) i--;

  if (i === -1)
    return false;

  let j = arr.length - 1;
  while (arr[i] >= arr[j]) j--;
  _swap(i, j);

  let start = i + 1;
  let end = arr.length - 1;
  while (start < end) _swap(start++, end--);
  return true;
}