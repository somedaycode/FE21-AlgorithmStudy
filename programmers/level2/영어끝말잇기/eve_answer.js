function solution(n, words) {
    let prev = ''
    let visited = [];
    for(let i = 0; i < words.length; i++) {
        const currWord = words[i];
        if((currWord.length === 1) || (visited.some(v => v === currWord))) return getAnswer(i, n);
        if(prev[prev.length-1] !== currWord[0] && i !== 0) return getAnswer(i, n);
        visited.push(currWord)
        prev = currWord;
    }
    return [0, 0];
}

function getAnswer(i, n) {
    const num = (i + 1) % n;
    return [num === 0 ? n : num, Math.ceil((i + 1)/n)];
}