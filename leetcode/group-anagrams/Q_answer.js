// MAP
var groupAnagrams = function (strs) {
  const Qmap = new Map();
  for (const str of strs) {
    const mapKey = str.split('').sort().join('');
    if (Qmap.has(mapKey)) {
      const arr = Qmap.get(mapKey);
      arr.push(str);
      Qmap.set(mapKey, arr);
    } else Qmap.set(mapKey, [str]);
  }

  // Array.from(Qmap); 으로도 가능

  const result = [];
  Qmap.forEach((value) => result.push(value));
  return result;
};

// object {}
var groupAnagrams = function (strs) {
  const strSet = {};
  for (const str of strs) {
    const key = str.split('').sort().join('');
    if (key in strSet) strSet[key].push(str);
    else strSet[key] = [str];
  }

  return Object.values(strSet);
};
