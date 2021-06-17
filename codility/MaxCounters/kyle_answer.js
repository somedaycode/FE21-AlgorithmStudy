//1차시도 계속해서 타입초가 77% (처음 new Array대신 map으로 했을 때는 66%)
function solution(n, arr) {
  let res = new Array(n).fill(0);
  let max = 0;

  for (const idx of arr) {
    if (idx <= n) {
      res[idx - 1]++;
      max = Math.max(max, res[idx - 1]);
    } else {
      res = new Array(n).fill(max);
    }
  }
  return res;
}

//2차시도
//allMax일 때마다 res를 업데이트 해주는 것이 아닌 마지막에 최종적으로 업데이트

function solution(n, arr) {
  let res = new Array(n).fill(0);
  let max = 0;
  let allMax = 0;

  for (const idx of arr) {
    if (idx <= n) {
      if (res[idx - 1] < allMax) res[idx - 1] = allMax + 1;
      else res[idx - 1]++;
      max = Math.max(max, res[idx - 1]);
    } else allMax = max;
  }

  res = res.map((v) => {
    if (v < allMax) return allMax;
    else return v;
  });

  return res;
}
