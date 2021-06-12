// 테스트 케이스 11번 실패
function solution(s) {
  if (s.length !== 4 && s.length !== 6) return false;
  if (/\s/g.test(s)) return false;
  return !Number.isNaN(Number(s));
}

// 테스트 케이스 11번 실패
function solution(s) {
  const len = s.length;
  if (len === 4 || len === 6) {
    return !isNaN(s);
  }
  return false;
}

// 위 함수들이 통과하지 못한 이유는 소수점('0.01'), 지수표현('1e22')가 true를 반환하기 떄문인 듯!

// 통과
function solution(s) {
  const len = s.length;
  if (len === 4 || len === 6) {
    return s.split('').every((c) => !isNaN(c));
  }
  return false;
}
