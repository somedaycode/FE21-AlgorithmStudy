class Heap {
  constructor(compareFn) {
    this.compare = compareFn ? compareFn : ((a, b) => b - a);
    this.heap = [];
  }

  push(v) {
    this.heap.push(v);
    
    let curr = this.heap.length - 1;
    let parent = this._getParentIdx(curr);

    while (parent !== null && this.compare(this.heap[parent], this.heap[curr]) > 0) {
      this._swap(curr, parent);
      curr = parent;
      parent = this._getParentIdx(curr);
    }
  }

  top() {
    return this.heap[0];
  }

  pop() {
    if (this.heap.length === 1)
      return this.heap.pop();
      
    const res = this.heap[0];
    this.heap[0] = this.heap.pop();

    let curr = 0;
    let [left, right] = this._getChilds(curr);

    while (left) {
      let target = left;

      if (right && this.compare(this.heap[target], this.heap[right]) > 0)
        target = right;
      
      if (this.compare(this.heap[curr], this.heap[target]) > 0) {
        this._swap(curr, target);
        curr = target;
        [left, right] = this._getChilds(curr);
        continue;
      }

      break;
    }

    return res;
  }

  empty() { return !this.heap.length; }

  _getParentIdx(currIdx) {
    const res = Math.floor((currIdx - 1) / 2);
    return res < 0 ? null : res;
  }

  _getChilds(currIdx) {
    const left = Math.floor(currIdx * 2 + 1);
    const right = left + 1;

    if (left >= this.heap.length) return [null, null];
    if (right >= this.heap.length) return [left, null];
    return [left, right];
  }

  _swap(i, j) {
    const tmp = this.heap[i];
    this.heap[i] = this.heap[j];
    this.heap[j] = tmp;
  }
}

function dijkstra(start, dists) {
  const n = dists.length;
  const visited = Array(n).fill(false);
  const res = Array(n).fill(Number.POSITIVE_INFINITY);

  const minHeap = new Heap((a, b) => a[1] - b[1]);
  minHeap.push([start, 0]);

  while (!minHeap.empty()) {
    const [curr, dist] = minHeap.pop();

    if (visited[curr]) continue;

    visited[curr] = true;
    const nextDists = dists[curr];

    for (let next = 0; next < n; next++) {
      if (next === start || visited[next]) continue;

      const nextDist = dist + nextDists[next];

      if (res[next] > nextDist) {
        res[next] = nextDist;
        minHeap.push([next, nextDist]);
      }
    }
  }
  
  return res;
}

function solution(N, road, K) {
  const dists = Array(N).fill().map(() => Array(N).fill(Number.POSITIVE_INFINITY));

  for (let i = 0; i < road.length; i++) {
    const [start, end, dist] = road[i];
    dists[start - 1][end - 1] = Math.min(dists[start - 1][end - 1], dist);
    dists[end - 1][start - 1] = dists[start - 1][end - 1];
  }

  for (let i = 0; i < N; i++)
    dists[i][i] = 0;

  return dijkstra(0, dists).filter(v => v <= K).length;
}
