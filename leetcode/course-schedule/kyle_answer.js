//1차시도

var canFinish = function (numCourses, prerequisites) {
  const graph = {};
  const visited = new Set();

  for (const [to, from] of prerequisites) {
    if (graph[from]) graph[from].push(to);
    else graph[from] = [to];
  }

  const go = (num) => {
    if (visited.has(num)) return false;
    if (!graph[num]) return true;

    visited.add(num);

    for (const x of graph[num]) {
      if (!go(x)) return false;
    }

    visited.delete(num);

    return true;
  };

  for (const key in graph) {
    if (!go(key)) return false;
  }

  return true;
};

// check 추가

var canFinish = function (numCourses, prerequisites) {
  const graph = {};
  const visited = new Set();
  const checked = new Set();

  for (const [to, from] of prerequisites) {
    if (graph[from]) graph[from].push(to);
    else graph[from] = [to];
  }

  const go = (num) => {
    if (checked.has(num)) return true;
    if (visited.has(num)) return false;
    if (!graph[num]) return true;
    visited.add(num);

    for (const x of graph[num]) {
      if (!go(x)) return false;
    }

    checked.add(num);
    visited.delete(num);

    return true;
  };

  for (const key in graph) {
    if (!go(key)) return false;
  }

  return true;
};
