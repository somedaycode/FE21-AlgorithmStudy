function solution(expression) {
	const divide = () => {
		let number = '';
		let arr_s = [];
		let arr_n = [];
		const signal = ['*', '-', '+'];
		const result = expression.split('');
		for (let i = 0; i < result.length; i++) {
			if (!signal.includes(result[i])) number += result[i];
			else {
				arr_s.push(result[i]);
				if (number.length > 0) {
					arr_n.push(number);
					number = '';
				}
			}
			if (i === result.length - 1) arr_n.push(number);
		}
		return [arr_s, arr_n];
	};

	const [arr_s, arr_n] = divide(expression);

	const signalCase = [
		['+', '-', '*'],
		['+', '*', '-'],
		['-', '+', '*'],
		['-', '*', '+'],
		['*', '-', '+'],
		['*', '+', '-'],
	];
	let max = 0;
	for (let i = 0; i < signalCase.length; i++) {
		//여기서 복사를 해야한다. 새로운 i가 올때마다 새로운 카피본 만들기
		//안그러면 arr_n_copy 는 i=0일때 이미 모두처리해서 length=0이기때문
		const arr_s_copy = arr_s.slice();
		const arr_n_copy = arr_n.slice().map((el) => parseInt(el));
		for (let j = 0; j < signalCase[i].length; j++) {
			for (let k = 0; k < arr_s_copy.length; k++) {
				if (signalCase[i][j] === arr_s_copy[k]) {
					if (arr_s_copy[k] === '+') {
						arr_n_copy[k] += arr_n_copy[k + 1];
					}
					if (arr_s_copy[k] === '-') {
						arr_n_copy[k] -= arr_n_copy[k + 1];
					}
					if (arr_s_copy[k] === '*') {
						arr_n_copy[k] *= arr_n_copy[k + 1];
					}
					arr_n_copy.splice(k + 1, 1);
					arr_s_copy.splice(k, 1);
					k--;
				}
			}
		}
		if (Math.abs(arr_n_copy[0]) >= max) max = Math.abs(arr_n_copy[0]);
	}

	return max;
}

const expression = '100-200*300-500+20';
console.log(solution(expression));
