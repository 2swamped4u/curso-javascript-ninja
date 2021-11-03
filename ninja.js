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

/*function myFunction() {
	function sum() {
		return 1 + 2;
	}
	console.log(sum());
	console.log(sum());
}

console.log( myFunction() );
*/

function myFunction() {
	var number1 = 10;
	var number2 = 10;
	function sum() {
	return number1 + number2;

	}
	if( sum() === 20){
		return 'equal to 20';
	}
	return 'no change ';
}

console.log( myFunction() );