$(document).ready(function(){
		$("#toilets").click(function() {
			window.location.href = "toilets";
 	    });
		$("#about").click(function() {
			window.location.href = "about";
 	    });
		$("#fridges").click(function() {
			window.location.href = "fridges";
 	    });
		$("#contact").click(function() {
			window.location.href = "contact";
 	    });
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
	});