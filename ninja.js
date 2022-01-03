/*
var counter = 10;
do {
	console.log( counter++ );
}

while( counter < 10 );
*/

/*
for ( var i = 1; i < 10; i++) {
	console.log(i);
}
*/

var car = {
	brand: 'VW',
	model: 'Gol',
	year: 2020
};

for( var prop in car ) {
	console.log( car[prop] );
}

console.log('doors in car?', 'doors' in car );

