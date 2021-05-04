function solution(orders, course) {
  var answer = [];

  for (let i = 0; i < course.length; i++) {
    const result = [];
    for (let j = 0; j < orders.length; j++) {
      let arr = [];
      arr.push(...combination(orders[j], course[i]));
      arr = arr.map((str) => str.split("").sort().join(""));
      result.push(...arr);
    }
    const numsObj = result.reduce((accu, curr) => {
      accu[curr] = (accu[curr] || 0) + 1;
      return accu;
    }, {});

    let nums = [];
    for (let key in numsObj) {
      nums.push(numsObj[key]);
    }
    const max = Math.max(...nums);

    for (let key in numsObj) {
      if (numsObj[key] === max && numsObj[key] >= 2) answer.push(key);
    }
  }
  return answer.sort();
}

function combination(str, selectNum) {
  const result = [];
  if (selectNum === 1) return str.split("");
  for (let i = 0; i < str.length; i++) {
    const fixed = str[i];
    const rest = str.substring(i + 1);
    const combinationArr = combination(rest, selectNum - 1);
    const combineFix = combinationArr.map((v) => fixed + v);
    result.push(...combineFix);
  }
  return result;
}
