var numIslands = function(grid) {
  const dr = [-1, 0, 1, 0];
  const dc = [0, -1, 0, 1];
  const m = grid.length;
  const n = grid[0].length;
  const visited = Array(m).fill().map(() => Array(n).fill(false));
  const stk = [];
  let ans = 0;

  for (let sr = 0; sr < m; sr++) {
    for (let sc = 0; sc < n; sc++) {
      if (grid[sr][sc] === '0' || visited[sr][sc])
        continue;

      ans++;
      stk.push([sr, sc]);

      while (stk.length) {
        const [r, c] = stk.pop();

        visited[r][c] = true;

        for (let i = 0; i < 4; i++) {
          const nextR = r + dr[i];
          const nextC = c + dc[i];

          if (nextR < 0 || nextC < 0 || nextR > m - 1 || nextC > n - 1)
            continue;

          if (grid[nextR][nextC] === '1' && !visited[nextR][nextC])
            stk.push([nextR, nextC]);
        }
      }
    }
  }

  return ans;
};