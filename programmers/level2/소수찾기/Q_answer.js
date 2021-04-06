function solution(numbers) {
  const primeNum = new Set();
  const arr = numbers.split('');
  const numberAssembled = (arr, str) => {
    if (arr.length > 0) {
      for (let i = 0; i < arr.length; i++) {
        const newarr = [...arr];
        newarr.splice(i, 1);
        numberAssembled(newarr, str + arr[i]);
      }
    }
    if (isPrime(Number(str))) primeNum.add(Number(str));
  };
  numberAssembled(arr, '');
  return primeNum.size;
}

const isPrime = (num) => {
  if (num === 1 || num === 0) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};
