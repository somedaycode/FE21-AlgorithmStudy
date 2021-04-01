function solution(n, defI = 1, isFirst = true) {
    let answer = 0;
    let sum = 0;
    for(let i = defI; i <= Math.ceil(n/2); i++) {
        sum += i;
        if(sum === n) answer++;
        else if(sum > n) break;
    }
    if(defI < n/2 - 1) answer += solution(n, defI + 1, false);
    if(isFirst) answer++;
    return answer;
}