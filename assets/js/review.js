$(document).ready(function(){
		pagenum = 1;
		function AutoRotate() {
		   var myele = null;
		   var allElements = document.getElementsByTagName('label');
		   for (var i = 0, n = allElements.length; i < n; i++) {
			   var myfor = allElements[i].getAttribute('for');
			   if ((myfor !== null) && (myfor == ('slide_2_' + pagenum))) {
				   var radio = document.getElementById(myfor);
				   radio.checked = true;
				   break;
			   }
		   }
		   if (pagenum == allElements.length) {
			   pagenum = 1;
		   } else {
			   pagenum++;
		   }
		}
		setInterval(AutoRotate, 2000);
		const elements = document.querySelectorAll('.hover-effect');

		elements.forEach((element) => {
		  // Add touchstart event listener
		  element.addEventListener('touchstart', () => {
		    element.classList.add('touch-hover-effect');
		  });
	  
		  element.addEventListener('touchend', () => {
		    // Remove touch effect
		    element.classList.remove('touch-hover-effect');
		  });
		});
	});