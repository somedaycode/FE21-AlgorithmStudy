var minRemoveToMakeValid = function (s) {
  const str = s.split('');
  const stack = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ')') {
      if (!stack.length) str[i] = '';
      else stack.pop();
    } else if (str[i] === '(') stack.push(i);
  }
  for (const num of stack) str[num] = '';

  return str.join('');
};
