function solution(s) {
  const r = s
    .match(/{[\d,]+}/gm)
    .sort((a, b) => a.length - b.length)
    .join(',')
    .replace(/[{}]/g, '')
    .split(',');

  return [...new Set(r)].map((n) => Number(n));
}
