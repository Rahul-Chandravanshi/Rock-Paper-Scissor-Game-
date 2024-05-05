 let h;
 /*let thumbNail = document.createElement('img');
 thumbNail.src = 'thumbnail.png';
 thumbNail.classList.add('thumb-nail');*/
 
let homePage = document.createElement('div');
homePage.classList.add('home-page');
document.body.appendChild(homePage);
let homeBox = document.createElement('div');
homeBox.classList.add('home-box');

homePage.appendChild(homeBox);
let selectTime = document.createElement('ul');
selectTime.classList.add('select-time');
homeBox.appendChild(selectTime);
//thumbNail.appendChild(selectTime);

const availableTime = ['Select ',1,2,5];

selectTime.addEventListener('click',tested)
for (var i = 0; i < availableTime.length; i++){
	
	
	
	h = document.createElement('li');

	h.value = availableTime[i];
	h.innerHTML = availableTime[i] + ' Min';
	h.classList.add('visibility');
	h.classList.add('option'+[i]);
	h.classList.add('option');
	selectTime.appendChild(h);
	
	
};
	document.querySelector('.option1').addEventListener('click',function() {
	selectTime.value = availableTime[1];
		
	})
	document.querySelector('.option1').addEventListener('click',test)
	
	document.querySelector('.option2').addEventListener('click',function() {
		selectTime.value = availableTime[2];
	})
	document.querySelector('.option2').addEventListener('click',test)
	
	document.querySelector('.option3').addEventListener('click',function() {
		selectTime.value = availableTime[3];
	})
	document.querySelector('.option3').addEventListener('click',test)