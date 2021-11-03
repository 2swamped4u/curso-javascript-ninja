
/*function myFunction() {
	var number1 = 1;
	var number2 = 2;
	var sum = undefined;
	return sum();
	sum = function sum() {

		...
	}

}*/

//----------
function myFunction() {

	var number1 = 1;
	var number2 = 2;
	return sum();
	function sum() {
		return number1 + number2;
	}
}

console.log( myFunction() );

