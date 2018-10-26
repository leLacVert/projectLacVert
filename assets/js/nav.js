/*
var unroll=document.getElementsByClassName('unroll');

for(var i=0;i<unroll.length;i++){
	
	unroll[i].addEventListener('click',function(){
		
		var liHeight = this.offsetHeight;
		
		for(var i=0;i<unroll.length;i++){
			unroll[i].style.height='50px';
		}
		
		if(liHeight==50){
			this.style.height='300px';
		}
	},false); 
};
-----------------------------------------*/
function toggleClass() {
  var drop = document.getElementsByClassName('nav_up');
  for (var i = 0; i < drop.length; i++) {
    var drops = drop[i];
  }
  if (drops.classList.contains('nav_down')) {
    drops.classList.remove('nav_down');
  } else {
    drops.classList.add('nav_down');
  }
}

var link = document.getElementsByClassName('link_click');
for (var i = 0; i < link.length; i++) {
  var links = link[i];
  links.addEventListener('click', function () {
    toggleClass();
  },
  false
  );
}