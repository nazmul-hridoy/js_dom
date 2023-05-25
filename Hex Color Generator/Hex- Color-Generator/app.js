
function generateColor(){

	const hexCode = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
	let color = '#';
	
	for (let value = 0; value < 6; value++){
		let num = Math.round(Math.random() * 15);
		// console.log(num);
		let num_2 = hexCode[num];
		color = color + num_2;
		// console.log(color);
	}
	document.getElementById('container').style.backgroundColor = color;
	document.getElementById('output').innerHTML = color;
	document.getElementById('output').style.color = color;
}
	

