// 92%
var canFinish = function (numCourses, prerequisites) {
  const linked = Array.from({ length: numCourses }, () => []);
  const inDegree = Array.from({ length: numCourses }).fill(0);
  const result = [];
  let q = [];

  for (let [course, pre] of prerequisites) {
    linked[pre].push(course);
    inDegree[course]++;
  }

  for (let i = 0; i < numCourses; i++) {
    if (inDegree[i] === 0) q.push(i);
  }

  while (q.length > 0) {
    const nextQ = [];
    for (let i = 0; i < q.length; i++) {
      for (let course of linked[q[i]]) {
        inDegree[course]--;
        if (inDegree[course] === 0) nextQ.push(course);
      }
      result.push(q[i]);
    }
    q = nextQ;
  }

  if (result.length === numCourses) return true;
  else return false;
};

// 14~20%
// queue를 pop해서 사용
// 읽기는 이게 더 좋지만 속도는 훨씬 느리다.
var canFinish = function (numCourses, prerequisites) {
  const inDegree = Array.from({ length: numCourses }).fill(0);
  const result = [];
  let q = [];

  for (let [course, pre] of prerequisites) {
    inDegree[course]++;
  }

  for (let i = 0; i < numCourses; i++) {
    if (inDegree[i] === 0) q.push(i);
  }

  while (q.length > 0) {
    const poped = q.pop();
    result.push(poped);
    for (const [course, pre] of prerequisites) {
      if (pre === poped) {
        inDegree[course]--;
        if (inDegree[course] === 0) q.push(course);
      }
    }
  }
  return result.length === numCourses;
};
