function Node(v, w) {
  this.v = v; //정점
  this.w = w; //걸리는 시간
}
//node: {v:2,w:1} 2번노드로 가는데 1time이 걸린다 같은 객체
//부모와 비교해서 더 작다면 위로 올려주는 방식
const heapInsert = (heap, node) => {
  heap.push(node);
  let currIdx = heap.length - 1;
  let parentIdx = Math.floor(currIdx / 2);
  //현재값(node.w)이 최소 값 (idx 1)이거나 부모가 현재값 보다 클 때 swap진행
  while (currIdx > 1 && heap[parentIdx].w > heap[currIdx].w) {
    [heap[parentIdx], heap[currIdx]] = [heap[currIdx], heap[parentIdx]];
    currIdx = parentIdx;
    parentIdx = Math.floor(currIdx / 2);
  }
};
//자식과 비교해서 계속 내려주는 형태
//반환값: 최소값 node
const heapPop = (heap) => {
  if (heap.length === 2) return heap.pop(); //heap에 null하고 1개만 있다면 return
  const min = heap[1]; //최소값
  heap[1] = heap.pop(); // 맨마지막에 있는애 1번으로 넣고 정렬 시작
  let currIdx = 1;
  let leftIdx = currIdx * 2;
  let rightIdx = currIdx * 2 + 1;
  //왼쪽 없다면 return
  if (!heap[leftIdx]) return min;
  //오른쪽 없다면 왼쪽 하고만 비교하고 return
  if (!heap[rightIdx]) {
    if (heap[leftIdx].w < heap[currIdx].w)
      [heap[currIdx], heap[leftIdx]] = [heap[leftIdx], heap[currIdx]];
    return min;
  }
  //둘다 있을경우 비교
  while (heap[leftIdx].w < heap[currIdx].w || heap[rightIdx].w < heap[currIdx].w) {
    //left먼저 비교하기 때문에 left를 작은 값으로 먼저 만들어 준다.
    if (heap[leftIdx].w > heap[rightIdx].w) {
      [heap[rightIdx], heap[leftIdx]] = [heap[leftIdx], heap[rightIdx]];
    }
    if (heap[leftIdx].w < heap[currIdx].w) {
      [heap[currIdx], heap[leftIdx]] = [heap[leftIdx], heap[currIdx]];
      currIdx = leftIdx;
    } else if (heap[rightIdx].w < heap[currIdx].w) {
      [heap[currIdx], heap[rightIdx]] = [heap[rightIdx], heap[currIdx]];
      currIdx = rightIdx;
    }
    leftIdx = currIdx * 2;
    rightIdx = currIdx * 2 + 1;
    //left or right가 없는 경우 처리 (위에 있는 로직)
    if (!heap[leftIdx]) return min;
    if (!heap[rightIdx]) {
      if (heap[leftIdx].w < heap[currIdx].w)
        [heap[currIdx], heap[leftIdx]] = [heap[leftIdx], heap[currIdx]];
      return min;
    }
  }
  //정렬 완료 후 return
  return min;
};

const makeGraph = (roads) => {
  const graph = {};
  for (const [u, v, w] of roads) {
    //양방향이기 때문에 u한번 v한번씩 진행
    if (graph[u]) graph[u].push(new Node(v, w));
    else graph[u] = [new Node(v, w)];
    if (graph[v]) graph[v].push(new Node(u, w));
    else graph[v] = [new Node(u, w)];
  }
  return graph;
};
const solution = (n, road, k) => {
  const graph = makeGraph(road);
  const time = new Array(n + 1).fill(Infinity); //계산하기 쉽게 0번 인덱스 따로 추가
  time[1] = 0; //시작 지점은 time이 0만큼 걸리기 때문
  const heap = [null, new Node(1, 0)]; // 힙계산 편하게 하기위해 0번 idx null
  while (heap.length > 1) {
    const minNode = heapPop(heap);
    for (const node of graph[minNode.v]) {
      //다익스트라 로직
      if (time[node.v] > time[minNode.v] + node.w) {
        time[node.v] = time[minNode.v] + node.w;
        heapInsert(heap, node);
      }
    }
  }
  time.shift();
  return time.filter((v) => v <= k).length;
};
console.log(
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
  )
);

/*
makeGraph 결과
[[1,2,1],[2,3,3],[5,2,2],[1,4,2],[5,3,1],[5,4,2]]
=>
{
  '1': [ Node { v: 2, w: 1 }, Node { v: 4, w: 2 } ],
  '2': [ Node { v: 1, w: 1 }, Node { v: 3, w: 3 }, Node { v: 5, w: 2 } ],
  '3': [ Node { v: 2, w: 3 }, Node { v: 5, w: 1 } ],
  '4': [ Node { v: 1, w: 2 }, Node { v: 5, w: 2 } ],
  '5': [ Node { v: 2, w: 2 }, Node { v: 3, w: 1 }, Node { v: 4, w: 2 } ]
}
*/
