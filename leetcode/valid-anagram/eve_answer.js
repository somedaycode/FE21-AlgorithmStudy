var isAnagram = function (s, t) {
  let sMap = getMap(s);
  let tMap = getMap(t);
  for (let key of sMap.keys()) {
    if (tMap.has(key) && tMap.get(key) === sMap.get(key)) tMap.delete(key);
    else return false;
  }
  if (tMap.size !== 0) return false;
  else return true;
};

const getMap = (str) => {
  let map = new Map();
  for (let char of str) {
    if (map.has(char)) map.set(char, map.get(char) + 1);
    else map.set(char, 1);
  }
  return map;
};
