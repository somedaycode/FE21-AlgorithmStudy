function solution(n, words) {
	var answer = [];
	var history = [];
	for (let i = 0; i < words.length; i++) {
		if (history.includes(words[i]))
			return (answer = [(i % n) + 1, Math.ceil((i + 1) / n)]);
		if (
			i > 0 &&
			words[i].substr(0, 1) !== words[i - 1].substr(words[i - 1].length - 1, 1)
		)
			return (answer = [(i % n) + 1, Math.ceil((i + 1) / n)]);
		history.push(words[i]);
	}
	return [0, 0];
}

console.log(
	solution(2, ['hello', 'one', 'even', 'never', 'now', 'world', 'draw']),
);
