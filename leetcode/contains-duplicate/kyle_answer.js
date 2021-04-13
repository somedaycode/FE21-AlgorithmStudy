const containsDuplicate = (nums) => {
  const check = new Set();
  for (let x of nums) {
    if (check.has(x)) return true;
    check.add(x);
  }
  return false;
};
