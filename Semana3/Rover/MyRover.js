var Rover = {
	position: [0,0],
	direction: prompt('direction').toUpperCase()
}

function goForward(rover) {

	switch(Rover.direction){
		case 'N':
			Rover.position[0]++
			break;
		case 'E':
			Rover.position[1]++
			break;
		case 'S':
			Rover.position[0]--
			break;
		case 'W':
			Rover.position[1]--
			break;
	}
}

goForward();


function goBack(rover) {
	switch(Rover.direction){
		case 'N':
			Rover.position[0]--
			break;
		case 'E':
			Rover.position[1]--
			break;
		case 'S':
			Rover.position[0]++
			break;
		case 'W':
			Rover.position[1]++
			break;

	}
}

goBack();



function goLeft(rover) {
	switch(Rover.direction){
		case 'N':
			Rover.position[0]++
			break;
		case 'E':
			Rover.position[1]--
			break;
		case 'S':
			Rover.position[0]--
			break;
		case 'W':
			Rover.position[1]++
			break;

	}
}

goLeft();

function goRight(rover) {
	switch(Rover.direction){
		case 'N':
			Rover.position[0]--
			break;
		case 'E':
			Rover.position[1]++
			break;
		case 'S':
			Rover.position[0]++
			break;
		case 'W':
			Rover.position[1]--
			break;

	}
}

goRight();

console.log(Rover.direction);
console.log(Rover.position);