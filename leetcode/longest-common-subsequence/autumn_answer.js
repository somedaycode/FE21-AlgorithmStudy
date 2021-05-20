/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
  const [row, col] = [text1.length + 1, text2.length + 1];
  const matrix = Array.from({ length: row }, () => new Array(col).fill(0));

  for (let i = 1; i < row; i++) {
    for (let j = 1; j < col; j++) {
      if (text1[i - 1] === text2[j - 1]) {
        matrix[i][j] = matrix[i - 1][j - 1] + 1;
      } else {
        matrix[i][j] =
          matrix[i][j - 1] >= matrix[i - 1][j]
            ? matrix[i][j - 1]
            : matrix[i - 1][j];
      }
    }
  }

  return matrix[row - 1][col - 1];
};

longestCommonSubsequence('abcde', 'ace');
longestCommonSubsequence('abc', 'def');
