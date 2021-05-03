function solution(w, h) {
  //무조건 h가 큰 형태로 변경
  if (w > h) [w, h] = [h, w];
  const gcd = getGcd(w, h);

  const unitWidth = w / gcd;
  const unitHeight = h / gcd;

  const deleteBlockInUnit = unitWidth + unitHeight - 1;
  const totalDeleteBlock = deleteBlockInUnit * gcd;

  return w * h - totalDeleteBlock;
}

const getGcd = (a, b) => {
  if (b > a) [a, b] = [b, a];
  let gcd;
  for (let i = 1; i <= a; i++) {
    if (a % i === 0 && b % i === 0) gcd = i;
  }
  return gcd;
};
