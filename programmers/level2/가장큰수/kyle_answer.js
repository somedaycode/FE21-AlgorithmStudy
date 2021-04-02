const solution = (arr) => {
  arr = arr.map((v) => v + '').sort((a, b) => compare(a, b));
  const answer = arr.join('');
  if (answer * 1 === 0) return '0';
  return answer;
};

const compare = (a, b, idx = 0) => {
  let checkA = a[idx];
  let checkB = b[idx];
  if (!checkA && !checkB) return b[b.length - 1] - a[a.length - 1];
  if (!a[idx]) checkA = a[0];
  if (!b[idx]) checkB = b[0];
  if (checkB - checkA !== 0) return checkB - checkA;
  return compare(a, b, idx + 1);
};
