function solution(orders, course) {
  orders = orders.map(v => [...v]);

  for (const order of orders)
    order.sort();
  
  const hashMaps = {};
  
  for (const size of course) {
    hashMaps[size] = {};

    for (const order of orders) {
      if (order.length < size)
        continue;

      const combi = Array(size).fill(1);
      combi.push(...Array(order.length - size).fill(0));
      combi.sort((a, b) => a - b);
      const currHashMap = hashMaps[size];

      do {
        let setMenu = '';

        for (let i = 0; i < order.length; i++) {
          if (!combi[i])
            continue;
          
          setMenu += order[i];
        }

        currHashMap[setMenu] = currHashMap[setMenu] ? currHashMap[setMenu] + 1 : 1;
      } while (nextPermutation(combi));
    }
  }

  const ans = [];
  for (const hashMap of Object.values(hashMaps)) {
    const arr = Object.entries(hashMap);

    if (arr.length === 0)
      continue;

    arr.sort((a, b) => b[1] - a[1]);
    
    const max = arr[0][1];

    if (max < 2)
      continue;

    ans.push(arr[0][0])

    for (let i = 1; i < arr.length; i++) {
      const curr = arr[i];

      if (curr[1] !== max) 
        break;

      ans.push(curr[0]);
    }
  }

  ans.sort();
  return ans;
}

function nextPermutation(arr) {
  function _swap(i, j) {
    const tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
  }

  let i = arr.length - 2;
  while (i >= 0 && arr[i] >= arr[i + 1]) i--;

  if (i === -1)
    return false;

  let j = arr.length - 1;
  while (arr[i] >= arr[j]) j--;
  _swap(i, j);

  let start = i + 1;
  let end = arr.length - 1;
  while (start < end) _swap(start++, end--);
  return true;
}
