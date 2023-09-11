/**
 * reverse function does a reverse of provided sentence string.
 *
 * @param {string} sentence
 * @returns {string}
 *
 */
function reverse(sentence) {
	const wordsArray = sentence.split(" ");
	const reversedArray = wordsArray.reverse();
	return reversedArray.join(" ");
}

export default reverse;
