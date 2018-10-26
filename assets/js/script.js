var galerie = document.querySelector('.pg-galerie');
var galerieObjet = document.querySelectorAll('.pg-galerie-objet');
var numOfItems = galerie.children.length;
var objetWidth = 23; // pourcent comme en css

var featured = document.querySelector('.pg-featured-objet');

var leftBtn = document.querySelector('.pg-move-btn.pg-left');
var rightBtn = document.querySelector('.pg-move-btn.pg-right');
var leftInterval;
var rightInterval;

var scrollRate = 0.2;
var left;

function selectObjet(e) {
	if (e.target.classList.contains('active')) return;
	
	featured.style.backgroundImage = e.target.style.backgroundImage;
	
	for (var i = 0; i < galerieObjet.length; i++) {
		if (galerieObjet[i].classList.contains('active'))
			galerieObjet[i].classList.remove('active');
	}
	
	e.target.classList.add('active');
}

function galerieWrapLeft() {
	var first = galerie.children[0];
	galerie.removeChild(first);
	galerie.style.left = -objetWidth + '%';
	galerie.appendChild(first);
	galerie.style.left = '0%';
}

function galerieWrapRight() {
	var last = galerie.children[galerie.children.length - 1];
	galerie.removeChild(last);
	galerie.insertBefore(last, galerie.children[0]);
	galerie.style.left = '-23%';
}

function moveLeft() {
	left = left || 0;

	leftInterval = setInterval(function() {
		galerie.style.left = left + '%';

		if (left > -objetWidth) {
			left -= scrollRate;
		} else {
			left = 0;
			galerieWrapLeft();
		}
	}, 1);
}

function moveRight() {
	//etre sure qu'il y a un élément a d
	if (left > -objetWidth && left < 0) {
		left = left  - objetWidth;
		
		var last = galerie.children[galerie.children.length - 1];
		galerie.removeChild(last);
		galerie.style.left = left + '%';
		galerie.insertBefore(last, galerie.children[0]);	
	}
	
	left = left || 0;

	leftInterval = setInterval(function() {
		galerie.style.left = left + '%';

		if (left < 0) {
			left += scrollRate;
		} else {
			left = -objetWidth;
			galerieWrapRight();
		}
	}, 1);
}

function stopMouvement() {
	clearInterval(leftInterval);
	clearInterval(rightInterval);
}

leftBtn.addEventListener('mouseenter', moveLeft);
leftBtn.addEventListener('mouseleave', stopMouvement);
rightBtn.addEventListener('mouseenter', moveRight);
rightBtn.addEventListener('mouseleave', stopMouvement);


//Start
(function init() {
	var images = [
		'./assets/img/gite2p1/gite2p1.jpg',
		'./assets/img/gite2p1/chambre.jpg',
		'./assets/img/gite2p1/cuisine.jpg',
		'./assets/img/gite2p1/sdb.jpg',
		'./assets/img/gite2p1/sejour.jpg'
	];
	
	//initialisation 
	featured.style.backgroundImage = 'url(' + images[0] + ')';
	
	//modif img et addListener
	for (var i = 0; i < galerieObjet.length; i++) {
		galerieObjet[i].style.backgroundImage = 'url(' + images[i] + ')';
		galerieObjet[i].addEventListener('click', selectObjet);
	}
})();