function combination(arr, selectNum) {
  const result = [];
  if (selectNum === 1) return arr.map(v => [v]);
  arr.forEach((v, idx, arr) => {
    const fixed = v;
    const restArr = arr.slice(idx + 1);
    const combinationArr = combination(restArr, selectNum - 1);
    const combineFix = combinationArr.map(v => [fixed, ...v]);
    result.push(...combineFix);
  });
  return result;
}

function solution(orders, course) {
  const combinationArr = [];

  const aaa = orders
    .map(menu => [...menu]) //
    .map(arr => arr.sort())
    .map(arr => {
      course.forEach(count => {
        arr.length >= count && combinationArr.push(combination(arr, count));
      });
    });

  console.log('combinationArr', combinationArr);

  const combiStr = [];
  const bbb = combinationArr.map(arr => {
    arr.map(splitedCombination => combiStr.push(splitedCombination.join('')));
  });
  console.log('combiStr', combiStr);

  const compared = [];
  const final = [];
  const count = {};
  combiStr.forEach((str, i) => {
    count[str] = (count[str] || 0) + 1;
    if (!compared.includes(str)) compared.push(str);
    else if (!final.includes(str)) final.push(str);
  });

  console.log('count', count);

  const realFinal = final.sort();
  console.log(realFinal);

  let answer = [];
  course.forEach(courseCount => {
    let maxCount = 0;
    realFinal.forEach(str => {
      if (str.length === courseCount) {
        if (count[str] > maxCount) {
          answer = answer.filter(v => v.length !== courseCount);
          answer.push(str);
          maxCount = count[str];
        } else if (count[str] === maxCount) {
          answer.push(str);
        }
      }
    });
  });
  console.log('answer', answer.sort());

  return answer.sort();
}

solution(['ABCFG', 'AC', 'CDE', 'ACDE', 'FGBC', 'EHACD'], [2, 3, 4]);
// solution(['XYZ', 'XWY', 'WXA'], [2, 3, 4]);
