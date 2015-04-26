var user = {}
var responses = []


function question1() {
	var name = prompt ('What is your name?')
	user.name = name

}

question1();

function question2() {
	var firstQuestion = prompt('Does null === ? (Yes or No)')

	if (firstQuestion.toLowerCase() === 'yes') {
		firstQuestion = true
	} else if (firstQuestion.toLowerCase() === 'no') {
		firstQuestion = false
	} else {
		alert('Please answer either Yes or No')
		return question2();
	}
		responses.push(firstQuestion);
}

question2();

function question3() {
	var js = prompt('What is the original name for JavaScript: Java, LiveScript, JavaLive or ScriptyScript?');
	js = js.toLowerCase();
	switch (js) {
		case 'java':
			js = false;
		break;

		case 'livescript':
			js = true;
		break;

		case 'javalive':
			js = false;
		break;

		case 'scriptyscript':
			js = false;
		break;
	}
	responses.push( js );
}

question3();

function question4() {
	var designer = prompt('Who was the designer of JavaScript: John Wright, Steve Jobs, Brendan Eich or David Herman?');
	designer = designer.toLowerCase();
	switch (designer) {
		case 'john wright':
			designer = false;
		break;

		case 'steve jobs':
			designer = false;
		break;

		case 'brendan eich':
			designer = true;
		break;

		case 'david herman':
			designer = false;
		break;

	}
	
	responses.push( designer );
}

question4();

function evaluate( responses ) {

var correctAnswers = []
var wrongAnswers = []

 for (var i = 0; i < responses.length; i++ ){
       if ( responses[i] == true ){ 
       	
       	 correctAnswers.push( responses[i] );

       	} else { wrongAnswers.push( responses[i] ); 
       	} 
 }

showResults( correctAnswers, wrongAnswers );

}



function showResults( correctAnswers, wrongAnswers ) {
	alert('Those are your correct answers:'  + correctAnswers.length )
	alert('Those are your wrong answers:' + wrongAnswers.length )
}


evaluate( responses );