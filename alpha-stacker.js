var alphabet = ["a", "b", "c", "d", "e","f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var first = " ";

function stackLetters() { 
	for (var i = 0; i <= alphabet.length; i++) 
	if ((i + 1) % 3 === 0) {
		first += alphabet[i] + ' ';
	}

else {
	 first += alphabet[i];
	 console.log(first);
}
}

stackLetters(alphabet); 