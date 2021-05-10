var climbStairs = function (n) {
  const d = [];
  d[1] = 1;
  d[2] = 2;
  d[3] = 3;

  for (let i = 3; i <= n; i++) {
    d[i] = d[i - 1] + d[i - 2];
  }
  return d[n];
};

/*
d(n) = d(n-1)+d(n-2)

*/
