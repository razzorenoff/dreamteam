let isMobile = {
	Android: function() {return navigator.userAgent.match(/Android/i);},
	BlackBerry: function() {return navigator.userAgent.match(/BlackBerry/i);},
	iOS: function() {return navigator.userAgent.match(/iPhone|iPad|iPod/i);},
	Opera: function() {return navigator.userAgent.match(/Opera Mini/i);},
	Windows: function() {return navigator.userAgent.match(/IEMobile/i);},
	any: function() {return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());}
};
		let body=document.querySelector('body');
if(isMobile.any()){
		body.classList.add('touch');
		let link=document.querySelectorAll('.link');
	for(i=0; i<link.length; i++){
			let thisLink=link[i].previousElementSibling;
			let subMenu=link[i].nextElementSibling;
			let thislink=link[i];

			thisLink.classList.add('menu');
		link[i].addEventListener('click', function(){
			subMenu.classList.toggle('open');
			thislink.classList.toggle('active');
		});
	}
}else{
	body.classList.add('mouse');
}

$(document).ready(function () {
	$('.header__burger').click(function (event) {
		$('.header__burger,.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});