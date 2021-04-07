/*
카펫

1. yellow 약수 찾는다. (a,b)쌍
2. a * 2 + b * 2 + 4 === brown 이면 출력
*/
function solution(brown, yellow) {
  for (let i = 0; i <= Math.sqrt(yellow); i++) {
    if (yellow % i === 0) {
      let [a, b] = [i, yellow / i];
      if (a * 2 + b * 2 + 4 === brown) {
        if (a < b) [a, b] = [b, a];
        return [a + 2, b + 2];
      }
    }
  }
}
