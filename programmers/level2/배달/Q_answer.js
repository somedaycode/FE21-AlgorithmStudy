function solution(N, road, K) {
  let count = 0;
  const inf = Infinity;

  const graph = Array.from(Array(N), () => Array(N).fill(inf));

  for (let i = 0; i < graph.length; i++) {
    graph[i][i] = 0;
  }

  for (let i = 0; i < road.length; i++) {
    const cur = road[i][0];
    const end = road[i][1];
    const exp = road[i][2];
    graph[cur - 1][end - 1] = exp;
    graph[end - 1][cur - 1] = exp;

    // 방향이 두개일때 작은 것만 업데이트
  }

  let visited = Array(N).fill(false);
  let direction = Array(N).fill(Infinity);
  direction[0] = 0;

  function getSmallIndex() {
    let min = Infinity;
    let idx = 0;
    for (let i = 0; i < N; i++) {
      if (direction[i] < min && !visited[i]) {
        min = direction[i];
        idx = i;
      }
    }
    return idx;
  }

  function dijkstra(start) {
    for (let i = 0; i < N; i++) {
      direction[i] = graph[start][i];
    }

    visited[start] = true;

    for (let i = 0; i < N; i++) {
      let current = getSmallIndex();
      visited[current] = true;

      for (let j = 0; j < N; j++) {
        if (!visited[j]) {
          if (direction[current] + graph[current][j] < direction[j]) {
            direction[j] = direction[current] + graph[current][j];
          }
        }
      }
    }
  }

  dijkstra(0);
  for (let i = 0; i < N; i++) {
    console.log(direction[i]);
    if (direction[i] <= K) count++;
  }
  return count;
}

//4
solution(
  5,
  [
    [1, 2, 1],
    [2, 3, 3],
    [5, 2, 2],
    [1, 4, 2],
    [5, 3, 1],
    [5, 4, 2],
  ],
  3
);
