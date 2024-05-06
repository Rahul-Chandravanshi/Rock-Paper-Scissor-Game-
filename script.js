let a = 0;
let b = 0;
let c = 0;
let points = 0;
let loseP = 0;
let w;
let minSelected;

let screen = document.createElement('div'); 
screen.classList.add('screen-box');
document.querySelector('.mBox').appendChild(screen);

let scoreBoard = document.createElement('div'); 
scoreBoard.classList.add('score-board');
screen.appendChild(scoreBoard);
let para = document.createElement('p');
para.classList.add('Rc');
let LCount = document.createElement('p'); 
LCount.classList.add('Lc');

para.textContent = 'You : ' + points;
LCount.textContent = 'Bot : ' + loseP;
scoreBoard.appendChild(para);
scoreBoard.appendChild(LCount);

let win = document.createElement('img'); 
win.src ='Win.png';
win.classList.add('winM');


let draw = document.createElement('img'); 
draw.src ='Draw.png';
draw.classList.add('winM');


let lose = document.createElement('img'); 
lose.src ='Lose.png';
lose.classList.add('loseM');

let rock = document.createElement('img'); 
rock.src ='rock.png';
rock.classList.add('pic','left-hand-location','left-hand');

let paper = document.createElement('img'); 
paper.src ='paper.png';
paper.classList.add('pic','left-hand-location');

let scissor = document.createElement('img'); 
scissor.src ='scissor.png';
scissor.classList.add('pic','left-hand-location');

const gestures = [rock,paper,scissor];



let rock2 = document.createElement('img'); 

rock2.src = 'rock.png';


rock2.classList.add('picR','right-hand-location','right-hand');

let paper2 = document.createElement('img'); 
paper2.src ='paper.png';
paper2.classList.add('picR','right-hand-location');

let scissor2 = document.createElement('img'); 
scissor2.src ='scissor.png';
scissor2.classList.add('picR','right-hand-location');


const gestures2 = [rock2,paper2,scissor2];


document.querySelector('.game').appendChild(rock);


document.querySelector('.game').appendChild(rock2);

var record = [];
var record2 = [];

function showSign(sign,num) {
	
	document.querySelector('#container').classList.remove('container');
	document.querySelector('#container').classList.add('container2');
	
	record.push(num);
	b = Math.floor(Math.random()*3)
;
	record2.push(b);

c = num;

if (a == 0) {

	
	document.querySelector('.game').removeChild(rock);
	document.querySelector('.game').removeChild(rock2);

}else {
	replaceSign();
};
	a++;

		

		
	
	gestures[num].classList.add('leftHand-push');
	
	gestures2[b].classList.add('rightHand-push');
	
	
result();
	

	
	document.querySelector('.game').appendChild(gestures[num]);

	document.querySelector('.game').appendChild(gestures2[b]);
	
};

	
function replaceSign(){
	document.querySelector('.game').removeChild(gestures[record.slice((record.length - 2),(record.length - 1))]);
	
	document.querySelector('.game').removeChild(gestures2[record2.slice((record2.length - 2),(record2.length - 1))]);

};

function result(){
	console.log(c + " " + b);
	if (c == 0 && b == 2 || c == 1 && b == 0 || c == 2 && b == 1) {
		console.log("You Win");
		showResult();
		points++;
	console.log('Points : ' + points);
	}else if (b == c) {
		console.log("Draw");
		showResult();
		
	} else if(c != 0 && b == 2 || c != 1 && b == 0 || c != 2 && b == 1){
		console.log("You lose");
		loseP++;
		showResult();
		console.log('Loses : ' + loseP);
	}else{
		console.log("Invalid");
		showResult('Invalid');
	};
	setTimeout(function() { 
	para.textContent = 'You : ' + points;
		LCount.textContent = 'Bot : ' + loseP;
	}, 2000);
};

	var resultBox  = document.createElement('div');
	
	function okButtonClick(){
		document.querySelector('#container').classList.add('container');
	document.querySelector('#container').classList.remove('container2');
			drawMatch();
		document.body.removeChild(resultBox);
		winSoundStop();
		loseSoundStop();
	};
function showResult() {
	 resultBox = document.createElement('div');

	resultBox.classList.add('result-box');
	setTimeout(function() {
	document.body.appendChild(resultBox);
	}, 1200);
	
	win.addEventListener('click',okButtonClick);
	draw.addEventListener('click',okButtonClick);
	lose.addEventListener('click',okButtonClick);
	
	
	
	
	if (c == 0 && b == 2 || c == 1 && b == 0 || c == 2 && b == 1) {
		resultBox.appendChild(win);
	
	setTimeout(function() {
	winSoundPlay();
	}, 1200);
		
	}else if (b == c) {
		resultBox.appendChild(draw);
		

	} else if(c == 2 && b == 0 || c == 0 && b == 1 || c == 1 && b == 2){
		resultBox.appendChild(lose);
	
	setTimeout(function() {
	loseSoundPlay();
	}, 1200);
		
	}else{
		
	};
	
};
function drawMatch(){
	
	gestures[0].classList.add('left-hand');
gestures2[0].classList.add('right-hand');
	
	document.querySelector('.game').removeChild(gestures[c]);
	
	document.querySelector('.game').removeChild(gestures2[b]);
	
		gestures[0].classList.add('left-hand');
gestures2[0].classList.add('right-hand');
		
		gestures[0].classList.remove('leftHand-push');
gestures2[0].classList.remove('rightHand-push');
		
		document.querySelector('.game').appendChild(gestures[0]);

	document.querySelector('.game').appendChild(gestures2[0]);
	
	record2.push(0);
	record.push(0);
	
}
function test(){
let startingMinutes = selectTime.value;
timer = document.createElement('div');
timer.classList.add('countdown');
	document.querySelector('.watch').appendChild(timer);
	
	let time = startingMinutes*60;
w = setInterval(updateCountdown,1000);
function updateCountdown(){
	const minutes = Math.floor(time/60);
	let seconds = time%60;
	seconds = seconds < 10 ? '0' + seconds : seconds;
	timer.textContent = `${minutes}:${seconds}`;time--;
	let stop = timer.textContent;
	if (stop == '0:00') {
	
		clearInterval(w);
		messageSoundPlay();
		showEnd();
		
		if (points > loseP) {
			let p = points - loseP;
			if (p > 1) {
		endMessage.innerHTML =  "🌟🌟🌟 <br> You Win by : " + p + ' Points'
	} else {
	endMessage.innerHTML =  "🌟🌟🌟 <br> You Win by : " + p + ' Point'
	};
		
		} else if (points < loseP) {
	let p = loseP - points ;
	if (p > 1) {
		endMessage.innerHTML =  "🌟 <br> You lose by : " + p + ' Points'
	} else {
		endMessage.innerHTML =  "🌟 <br> You lose by : " + p + ' Point'
	};
	
		} else{
		endMessage.innerHTML =  '🌟🌟 <br> Match Draw'		};
	};

};
document.body.removeChild(homePage);
	

	console.log("Test pass");
	
};

function tested() {
	for (var i = 0; i < availableTime.length; i++) {
  document.querySelector('.option'+[i]).classList.remove('visibility');
	
	}
};

var winSound = document.getElementById('win-sound');
function winSoundPlay() {
	winSound.play();
}
function winSoundStop() {
	winSound.pause();
	winSound.currentTime = 0;
}

var loseSound = document.getElementById('lose-sound');
function loseSoundPlay() {
	loseSound.play();
}
function loseSoundStop() {
	loseSound.pause();
	loseSound.currentTime = 0;
}

var messageSound = document.getElementById('message-sound');
function messageSoundPlay() {
	messageSound.play();
}