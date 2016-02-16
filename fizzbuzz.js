for (var count = 1; count < 101; count++) {

	if (count % 3 == 0 && count % 5 == 0) {
		document.write("fizzbuzz<br/>");
	}
	else if ( count % 3 == 0) {
		document.write("fizz<br/>");
	}
	else if (count % 5 == 0) {
		document.write("buzz<br/>");
	}
	else {
		document.write(count + '<br/>');
	}
}
