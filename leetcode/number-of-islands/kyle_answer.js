const numIslands = (grid) => {
  let answer = 0;
  const row = grid.length;
  const col = row ? grid[0].length : 0;

  const checked = new Array(row).fill().map((v) => new Array(col).fill(false));
  const visited = new Array(row).fill().map((v) => new Array(col).fill(false));

  const dx = [1, -1, 0, 0];
  const dy = [0, 0, 1, -1];

  const bfs = (i, j) => {
    const q = [[i, j]];
    visited[i][j] = true;

    while (q.length) {
      const [x, y] = q.shift();

      for (let i = 0; i < 4; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];

        if (nx < 0 || ny < 0 || nx >= row || ny >= col) continue;
        if (visited[nx][ny]) continue;
        if (grid[nx][ny] === '1') {
          checked[nx][ny] = true;
          visited[nx][ny] = true;
          q.push([nx, ny]);
        }
      }
    }
  };

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (!visited[i][j] && grid[i][j] === '1' && !checked[i][j]) {
        answer++;
        bfs(i, j);
      }
    }
  }
  return answer;
};
