var canFinish = function(numCourses, prerequisites) {
  const checked = Array(numCourses).fill(false);
  const parentsList = Array(numCourses).fill(null).map(() => []);
  
  for (const prerequisite of prerequisites)
    parentsList[prerequisite[0]].push(prerequisite[1]);

  return [...Array(numCourses).keys()].every(course => cycleCheck(course, [], checked, parentsList));
};

function cycleCheck(node, visited, checked, parentsList) {
  visited[node] = true;

  for (const parent of parentsList[node]) {
    if (checked[parent]) continue;
    if (visited[parent]) return false;
    if (!cycleCheck(parent, visited, checked, parentsList)) return false;
  }

  checked[node] = true;
  visited[node] = false;
  return true;
}