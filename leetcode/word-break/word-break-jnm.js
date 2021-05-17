function solution1(s, wordDict) {
	const cache = new Map();
	const walk = (i) => {
		if (cache.has(i)) return cache.get(i);

		if (i > s.length - 1) return true;
		let isMatched = false;
		for (let word of wordDict) {
			const length = word.length;
			if (s.slice(i, i + length) === word) {
				const nextMatched = walk(i + length);
				if (nextMatched) {
					isMatched = true;
					break;
				}
			}
		}
		cache.set(i, isMatched);
		return isMatched;
	};
	return walk(0);
}
const s = 'aaaaaaa';

const wordDict = ['aaa', 'aaaa'];
console.log(solution1(s, wordDict));

//오답
function solution(s, wordDict) {
	let answer = true;
	let result = [];
	let p1 = 0;
	let strToArr = s.split('');
	let str = '';
	while (p1 < strToArr.length) {
		str += s[p1++];
		if (wordDict.includes(str)) str = '';
	}
	if (str.length > 0) answer = false;
	return answer;
}
