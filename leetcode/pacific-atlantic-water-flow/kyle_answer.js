/*
1차시도 모든 경우 DFS
visited도 계속 바꿔주고 해서 오래걸린다. 
*/
const pacificAtlantic = (heights) => {
  const answer = [];
  const m = heights.length;
  const n = m ? heights[0].length : 0;

  let visited = new Array(m).fill().map((v) => new Array(n).fill(false));

  const dfs = ([row, col], prev, check) => {
    if (check.p && check.a) return;
    if (row < 0 || col < 0) {
      check.p = true;
      return;
    }
    if (row > m - 1 || col > n - 1) {
      check.a = true;
      return;
    }
    if (prev < heights[row][col] || visited[row][col]) return;

    visited[row][col] = true;
    const currValue = heights[row][col];
    dfs([row + 1, col], currValue, check);
    dfs([row - 1, col], currValue, check);
    dfs([row, col + 1], currValue, check);
    dfs([row, col - 1], currValue, check);
  };

  for (let row = 0; row < m; row++) {
    for (let col = 0; col < n; col++) {
      visited = new Array(m).fill().map((v) => new Array(n).fill(false));
      const check = { a: false, p: false };
      dfs([row, col], heights[row][col], check);
      if (check.a && check.p) answer.push([row, col]);
    }
  }

  return answer;
};

/*
2차시도 

네이스처럼 끝부분만 체크하는 경우
*/

const pacificAtlantic1 = (heights) => {
  const answer = [];
  const m = heights.length;
  const n = m ? heights[0].length : 0;
  const pacific = new Array(m).fill().map((v) => new Array(n).fill(false));
  const atlantic = new Array(m).fill().map((v) => new Array(n).fill(false));

  const dfs = ([row, col], prev, ocean) => {
    if (row < 0 || col < 0 || row > m - 1 || col > n - 1) return;
    if (heights[row][col] < prev) return;
    if (ocean[row][col]) return;
    ocean[row][col] = true;

    dfs([row + 1, col], heights[row][col], ocean);
    dfs([row - 1, col], heights[row][col], ocean);
    dfs([row, col + 1], heights[row][col], ocean);
    dfs([row, col - 1], heights[row][col], ocean);
  };

  for (let i = 0; i < m; i++) {
    dfs([i, 0], heights[i][0], pacific);
    dfs([i, n - 1], heights[i][n - 1], atlantic);
  }

  for (let i = 0; i < n; i++) {
    dfs([0, i], heights[0][i], pacific);
    dfs([m - 1, i], heights[m - 1][i], atlantic);
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (pacific[i][j] && atlantic[i][j]) answer.push([i, j]);
    }
  }
  return answer;
};

/*
BFS완전 탐색으로 해보자
*/

const pacificAtlantic3 = (heights) => {
  const answer = [];
  const m = heights.length;
  const n = m ? heights[0].length : 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (BFS(heights, i, j, m, n)) answer.push([i, j]);
    }
  }
  return answer;
};

const BFS = (matrix, i, j, row, col) => {
  let visited = new Array(row).fill().map((v) => new Array(col).fill(false));

  let pacific = false;
  let atlantic = false;

  const dx = [0, 0, 1, -1];
  const dy = [1, -1, 0, 0];
  const q = [[i, j]];
  visited[i][j] = true;

  while (q.length) {
    if (pacific && atlantic) return true;
    const [x, y] = q.shift();
    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx < 0 || ny < 0) pacific = true;
      else if (nx >= row || ny >= col) atlantic = true;
      else if (!visited[nx][ny] && matrix[x][y] >= matrix[nx][ny]) {
        visited[nx][ny] = true;
        q.push([nx, ny]);
      }
    }
  }
  return pacific && atlantic;
};

/*
BFS를 이용해 위의 풀이로 풀어보자. 
*/

const pacificAtlantic5 = (heights) => {
  const answer = [];
  const m = heights.length;
  const n = m ? heights[0].length : 0;

  const pacific = new Array(m).fill().map((v) => new Array(n).fill(false));
  const atlantic = new Array(m).fill().map((v) => new Array(n).fill(false));

  const dx = [1, -1, 0, 0];
  const dy = [0, 0, 1, -1];
  const bfs = (i, j, ocean) => {
    const q = [[i, j]];
    ocean[i][j] = true;
    while (q.length) {
      const [x, y] = q.shift();
      for (let i = 0; i < 4; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];

        if (nx < 0 || ny < 0 || nx > m - 1 || ny > n - 1) continue;
        if (heights[x][y] > heights[nx][ny]) continue;
        if (ocean[nx][ny]) continue;

        q.push([nx, ny]);
        ocean[nx][ny] = true;
      }
    }
  };

  for (let i = 0; i < m; i++) {
    bfs(i, 0, pacific);
    bfs(i, n - 1, atlantic);
  }
  for (let j = 0; j < n; j++) {
    bfs(0, j, pacific);
    bfs(m - 1, j, atlantic);
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (pacific[i][j] && atlantic[i][j]) answer.push([i, j]);
    }
  }
  return answer;
};
