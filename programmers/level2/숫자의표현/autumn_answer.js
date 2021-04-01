function solution(n) {
  let count = 1;
  const nArray = [];
  
  for(let i = 1; i <= n; i++) {
    nArray.push(i);    
  }
  
  while(nArray.length >= n / 2) {
    const copied = [...nArray];
    copied.reduce((prev, curr, i, arr) => {
      if(prev >= n) {
        copied.splice(i + 1)
        if(prev === n) count++
      }
      return prev + curr
    }, 0)
    nArray.shift();
  }
  
  return count;
}

console.log(solution(15));