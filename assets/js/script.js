
  function accordeon() {
      var accordeon = new Audio();
      accordeon.src = "assets/sound/accordeon.mp3";
      accordeon.play();
      
  }
  function accordeon2() {
      var accordeon2 = new Audio();
      accordeon2.src = "assets/sound/accordeon2.wav";
      accordeon2.play();
  }

  function openModal() {
      document.getElementById("modal").style.display = "block";
  }
  function closeModal() {
      document.getElementById("modal").style.display = "none";
  }

  var radio = document.getElementsByTagName("radio");
  while (radio[0].value == 'non') {
    var inputName = document.getElementById('inputName');
    var inputMail = document.getElementById('inputMail');
    inputName.style.display = "none";
    inputMail.style.display = "none";
  }
inputName.style.display = "block";
inputMail.style.display = "block";
  
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
	if (e.target.classList.contains('pg-active')) return;

	featured.style.backgroundImage = e.target.style.backgroundImage;

	for (var i = 0; i < galerieObjet.length; i++) {
		if (galerieObjet[i].classList.contains('pg-active'))
			galerieObjet[i].classList.remove('pg-active');
	}

	e.target.classList.add('pg-active');
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

	leftInterval = setInterval(function () {
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
		left = left - objetWidth;

		var last = galerie.children[galerie.children.length - 1];
		galerie.removeChild(last);
		galerie.style.left = left + '%';
		galerie.insertBefore(last, galerie.children[0]);
	}

	left = left || 0;

	leftInterval = setInterval(function () {
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
	var pageName = document.getElementsByTagName('body');
	
	if (pageName[0].classList.contains('gite2p1')) {
		var images = [
			'./assets/img/gite2p1/gite2p1.jpg',
			'./assets/img/gite2p1/chambre.jpg',
			'./assets/img/gite2p1/cuisine.jpg',
			'./assets/img/gite2p1/sdb.jpg',
			'./assets/img/gite2p1/sejour.jpg'
		];
	} else if (pageName[0].classList.contains('gite2p2')) {
		var images = [
			'./assets/img/gite2p2/gite2p2.jpg',
			'./assets/img/gite2p2/chambre.jpg',
			'./assets/img/gite2p2/cuisine.jpg',
			'./assets/img/gite2p2/sdb.jpg',
			'./assets/img/gite2p2/sejour.jpg'
		];
	}else if (pageName[0].classList.contains('gite2p3')) {
		var images = [
			'./assets/img/gite2p3/gite2p3.jpg',
			'./assets/img/gite2p3/chambre.jpg',
			'./assets/img/gite2p3/cuisine.jpg',
			'./assets/img/gite2p3/sdb.jpg',
			'./assets/img/gite2p3/sejour.jpg'
		];
	}else if (pageName[0].classList.contains('gite4p1')) {
		var images = [
			'./assets/img/gite4p1/gite4p1.jpg',
			'./assets/img/gite4p1/chambre1.jpg',
			'./assets/img/gite4p1/chambre2.jpg',
			'./assets/img/gite4p1/cuisine.jpg',
			'./assets/img/gite4p1/sdb.jpg',
			'./assets/img/gite4p1/sdb2.jpg',
			'./assets/img/gite4p1/sejour.jpg'
		];
	}else if (pageName[0].classList.contains('gite4p2')) {
		var images = [
			'./assets/img/gite4p2/gite4p2.jpg',
			'./assets/img/gite4p2/chambre1.jpg',
			'./assets/img/gite4p2/chambre2.jpg',
			'./assets/img/gite4p2/cuisine.jpg',
			'./assets/img/gite4p2/sdb.jpg',
			'./assets/img/gite4p2/sejour.jpg'
		];
	}else if (pageName[0].classList.contains('gite6p')) {
		var images = [
			'./assets/img/gite6p/gite6.jpg',
			'./assets/img/gite6p/chambre1.jpg',
			'./assets/img/gite6p/chambre2.jpg',
			'./assets/img/gite6p/chambre3.jpg',
			'./assets/img/gite6p/cuisine.jpg',
			'./assets/img/gite6p/cuisine2.jpg', 
			'./assets/img/gite6p/cuisine3.jpg',
			'./assets/img/gite6p/hangar.jpg',
			'./assets/img/gite6p/piscine.jpg',
			'./assets/img/gite6p/sdb.jpg',
			'./assets/img/gite6p/sdb2.jpg',
			'./assets/img/gite6p/sejour.jpg',
			'./assets/img/gite6p/sejour2.jpg'
		];
	}
	//initialisation 
	featured.style.backgroundImage = 'url(' + images[0] + ')';

	//modif img et addListener
	for (var i = 0; i < galerieObjet.length; i++) {
		galerieObjet[i].style.backgroundImage = 'url(' + images[i] + ')';
		galerieObjet[i].addEventListener('click', selectObjet);
	}
})();

