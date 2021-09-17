function solution(enroll, referral, seller, amount) {
  const orders = {};

  for (let i = 0; i < enroll.length; i++) {
    const e = enroll[i];
    const r = referral[i];
    orders[e] = { r, total: 0 };
  }

  for (let i = 0; i < seller.length; i++) {
    const PRICE = 100;
    const s = seller[i];
    const p = amount[i] * PRICE;
    distribute(s, p, orders);
  }

  return Object.values(orders).map(({ total }) => total);
}

// 더 몫을 나눌 필요가 없을 때는 early return을 해준다.
function distribute(name, price, orders) {
  const share = Math.floor(price * 0.1);
  const mine = share !== 0 ? price - share : price;

  if (orders[name]['r'] === '-' || share === 0) {
    orders[name]['total'] += mine;
    return;
  }

  orders[name]['total'] += mine;
  distribute(orders[name]['r'], share, orders);
}
