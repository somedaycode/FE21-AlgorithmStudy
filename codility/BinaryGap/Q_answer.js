// 투포인터
function solution(N) {
  const binary = N.toString(2);
  let left = 0;
  let right = 0;
  let max = 0;

  while (right <= binary.length) {
    if (binary[left] - binary[right] === 0 && right !== 0) {
      const zeroLen = right - left - 1;
      max = Math.max(max, zeroLen);
      left = right;
    }
    right++;
  }
  return max;
}

// 손이 가는대로 풀었다.
function solution(N) {
  let result = 0;
  const s = decToBi(N);
  const binary = s.split('').map((n) => Number(n));
  if (binary[0] !== 1 && binary[binary.length - 1] !== 1) return result;

  let count = 0;
  let start = false;
  for (const number of binary) {
    if (start === false && number === 1) {
      start = true;
    } else if (start === true && number === 0) {
      count++;
    } else if (start === true && number === 1) {
      result = Math.max(count, result);
      count = 0;
    }
  }
  return result;
}

function decToBi(dec) {
  return dec.toString(2);
}
