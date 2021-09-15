function solution(files) {
  const arr = [];
  for (const file of files) {
    const div = file.split(/([\D]+)([\d]{1,5})(.*)/g).filter((s) => s);
    const [head, num, tail] = div;
    arr.push({ head, num, tail, file });
  }

  arr.sort((a, b) => {
    const alower = a.head.toLowerCase();
    const blower = b.head.toLowerCase();
    const aNum = Number(a.num);
    const bNum = Number(b.num);

    if (alower === blower && aNum === bNum) return 0;

    if (alower !== blower) return alower > blower ? 1 : -1;

    return aNum - bNum;
  });

  return arr.map(({ file }) => file);
}
