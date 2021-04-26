var pacificAtlantic = function(heights) {
  const dr = [-1, 0, 1, 0];
  const dc = [0, 1, 0, -1];
  const m = heights.length;
  const n = heights[0].length;

  const result = Array(m).fill(null).map(() => Array(n).fill(null).map(() => [false, false]));
  
  for (let sr = 0; sr < m; sr++)
    for (let sc = 0; sc < n; sc++) {
      if (sr !== 0 && sc !== 0 && sr !== m - 1 && sc !== n - 1)
        continue;

      const visited = Array(m).fill(null).map(() => Array(n).fill(null).map(() => false));
      const stk = [[sr, sc]];

      while (stk.length) {
        const [r, c] = stk.pop();
        visited[r][c] = true;

        if (sr === 0 || sc === 0) result[r][c][0] = true;
        if (sr === m - 1 || sc === n - 1) result[r][c][1] = true;

        for (let i = 0; i < 4; i++) {
          const nextR = r + dr[i];
          const nextC = c + dc[i];

          if (nextR < 0 || nextC < 0 || nextR > m - 1 || nextC > n - 1)
            continue;

          if (heights[r][c] <= heights[nextR][nextC] && !visited[nextR][nextC])
            stk.push([nextR, nextC]);
        }
      }
    }

  const answer = [];

  for (let r = 0; r < m; r++)
    for (let c = 0; c < n; c++)
      if (result[r][c].every(v => v))
        answer.push([r, c]);
  
  return answer;
};