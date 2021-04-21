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
