var longestConsecutive = function(nums) {
    let answer = 0;
    let arr = [...new Set(nums)]
    let parent = Array.from({length:arr.length}).map((_,i) => i)
    
    for(let i = 0; i < arr.length; i++) {
        for(let j = i+1; j < arr.length; j++) {
            parent = unionParent(parent, i, j, arr[i], arr[j])
        }
    }
    const res = parent.reduce((acc, curr) => { 
        acc[curr] = (acc[curr] || 0)+1; 
        return acc;
    }, {});
    for(let key in res) {
        answer = res[key] > answer ? res[key] : answer
    }
    return answer;
};

const unionParent = (parent, i, j, a, b) => {
    if(Math.abs(a - b) !== 1) return parent;
    if(a < b) return editParent(i, j)
    else return editParent(j, i)
}

const editParent = (i, j) => {
    const p = getParent(parent, i);
    parent = parent.map(v => v === parent[j] ? p : v)
    parent[j] = p
    return parent;
}

const getParent = (parent = [], n) => {
    if(parent[n] === n) return n;
    return parent[n] = getParent(parent, parent[n])
}