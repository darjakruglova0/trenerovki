function plus() {
	var num1, num2,result;
	num1 = document.getElementById('n1').value;//считывает введенное число в строку ввода
	num1 = parseInt(num1);//приобразовывает в целое число

	num2 = document.getElementById('n2').value;
	num2 = parseInt(num2);//приобразовывает в целое число

	result = num1 + num2;
	document.getElementById('out').innerHTML = result;
}
function minus() {
	var num1, num2, result;
	num1 = document.getElementById('n1').value;//считывает введенное число в строку ввода
	num1 = parseInt(num1);//приобразовывает в целое число

	num2 = document.getElementById('n2').value;
	num2 = parseInt(num2);//приобразовывает в целое число

	result = num1 - num2;
	document.getElementById('out').innerHTML = result;
}
function umnog() {
	var num1, num2, result;
	num1 = document.getElementById('n1').value;//считывает введенное число в строку ввода
	num1 = parseInt(num1);//приобразовывает в целое число

	num2 = document.getElementById('n2').value;
	num2 = parseInt(num2);//приобразовывает в целое число

	result = num1 * num2;
	document.getElementById('out').innerHTML = result;
}
// JavaScript source code
