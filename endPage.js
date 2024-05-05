let endPage = document.createElement('div');
//console.log('endPage is alive');
endPage.classList.add('end-page');
let endBox = document.createElement('div');
endBox.classList.add('end-box');

endPage.appendChild(endBox);
let endDiv = document.createElement('div');
endDiv.classList.add('end-div');
endBox.appendChild(endDiv);

let endMessage = document.createElement('div');
endMessage.classList.add('end-message');
endDiv.appendChild(endMessage);

let buttonBox = document.createElement('div');
buttonBox.classList.add('button-box');
endDiv.appendChild(buttonBox);

let replayButton = document.createElement('button');
replayButton.classList.add('replay-button');
replayButton.textContent = 'Replay';
buttonBox.appendChild(replayButton);

replayButton.addEventListener('click',function(){
	window.location.reload();
});

let moreGame = document.createElement('button');
moreGame.classList.add('more-game');
moreGame.textContent = 'More Games';
buttonBox.appendChild(moreGame);

moreGame.addEventListener('click',function(){
window.location.href = 'https://rahul-chandravanshi.github.io/Free/'
;
});

let popUp = document.createElement('div');
popUp.classList.add('pop-up');

setTimeout(function () {
	endBox.appendChild(popUp);
	typeWriter();
}, 8500);


let character = document.createElement('img');
character.src = 'character.png';
character.classList.add('character');
popUp.appendChild(character);



let popUpText = document.createElement('p');
popUpText.innerHTML = 'I hope you appreciate our work. <br>';
popUpText.classList.add('popUp-text');
popUp.appendChild(popUpText);

function showEnd() {
	
	console.log('function is working');
	document.body.appendChild(endPage);
	console.log('Test complete');
	
	

};

let instagram = document.createElement('a');
instagram.href = 'https://www.instagram.com/rahul.chandravanshi_0';
instagram.classList.add('instaGram')
instagram.textContent = 'Instagram';

let youTube = document.createElement('a');
youTube.href = 'https://youtube.com/@Rahul.chandravanshi_0';
youTube.classList.add('youtube')
youTube.textContent = 'YouTube';

popUp.appendChild(instagram);
popUp.appendChild(youTube);


const text = "Show some love 💕";
let index = 0;

function typeWriter() {
  if(index < text.length){
    popUpText.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, 200); // Adjust typing speed here
  }
}


