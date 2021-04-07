function solution(brown, yellow) {
  let vert = Math.floor((brown - 4) / 4) + 2;
  let hori = (brown - 2 * vert) / 2 + 2;
  
  while (vert >= 3 && yellow !== (vert - 2) * (hori - 2)) {
    vert--;
    hori++;
  }

  return [hori, vert];
}