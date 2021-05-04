function solution(orders, course) {
  var answer = [];
  const setMenus = {};
  course.forEach((v) => (setMenus[v] = {}));
  const orderArr = orders.map((v) => v.split('').sort());
  orders = orderArr.map((v) => v.join(''));

  for (const num of course) {
    for (const order of orderArr) {
      const combi = combination(order, num);
      combi.forEach((v) => {
        const key = v.join('');
        if (setMenus[num][key]) setMenus[num][key]++;
        else setMenus[num][key] = 1;
      });
    }
  }

  for (const num in setMenus) {
    let arr = Object.entries(setMenus[num])
      .filter((v) => v[1] > 1) //2개이상만 남기기
      .sort((a, b) => b[1] - a[1]) //count순서대로 정렬
      .filter((v, _, oriArr) => v[1] === oriArr[0][1]) //맨 앞에 있는 애의 count와 같으면 max이기 때문에 filter
      .map((v) => v[0]); //setMenu 값만 냅두기

    answer.push(...arr);
  }

  return answer.sort();
}

const combination = (arr, count) => {
  const result = [];
  if (count === 1) return arr.map((v) => [v]);

  arr.forEach((v, idx, originArr) => {
    const fix = v;
    const rest = originArr.slice(idx + 1);
    const combiArr = combination(rest, count - 1);
    const fixCombiArr = combiArr.map((v) => [fix, ...v]);
    result.push(...fixCombiArr);
  });

  return result;
};

solution(['ABCFG', 'AC', 'CDE', 'ACDE', 'BCFG', 'ACDEH'], [2, 3, 4]);
