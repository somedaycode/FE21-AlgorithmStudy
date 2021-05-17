var coinChange = function (coins, amount) {
  if (amount === 0) return 0;
  const d = [];
  coins.forEach((v) => (d[v] = 1));
  for (let i = 1; i <= amount; i++) {
    if (d[i]) continue;
    let tmp = coins.map((v) => d[i - v]).filter((v) => v !== undefined && v !== -1);
    tmp = tmp.length ? tmp.map((v) => v + 1) : [-1];
    d[i] = Math.min(...tmp);
  }

  return d[amount];
};
