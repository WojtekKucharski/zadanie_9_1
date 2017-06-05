function getTriangleArea(a, h) {

var a =  prompt('podaj podstawę trójkąta');
var	h =  prompt('podaj wysokość trójkąta');

if ( (a <= 0) || (h <= 0) ) { 
	return result = alert ('Błąd: Wartość musi być większa od zera');
}

var	triangleArea = a * h / 2;

alert('Pole trójkąta o podstawie: ' + a + ' i wysokości: ' + h + ' jest równe: ' + triangleArea);
console.log('Triangle field with base a: ' + a + ' and height h: ' + h + ' is equal to: ' + triangleArea);

}