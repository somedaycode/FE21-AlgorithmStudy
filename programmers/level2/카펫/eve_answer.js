function solution(brown, yellow) {
    let [n, w, h] = [brown + yellow, 0, 0];
    for(let i = 3; i <= Math.sqrt(n); i++) {
        if(n % i === 0) {
            [w, h] = [n/i, i];
            if(2*w + (h-2)*2 === brown) break;
        }
    }
    return [w, h];
}