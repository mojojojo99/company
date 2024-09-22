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
		function AutoRotate() {
		   var allElements = document.getElementsByClassName('control_comments');
		   pagenum = 1;
		   count = 0;
		   for (var i = 0, n = allElements.length; i < n; i++) {
			   var myfor = allElements[i].getAttribute('for');
			   if ((myfor !== null)) {
				   count ++;
				   var radio = document.getElementById(myfor);
			   		if (radio.checked) {
						pagenum = parseInt(myfor.substring(8), 10);
					}
			   }
		   }

		   if (pagenum == allElements.length) {
			   pagenum = 1;
		   } else {
			   pagenum++;
		   }
	
		   for (var i = 0, n = allElements.length; i < n; i++) {
			   var myfor = allElements[i].getAttribute('for');
			   if ((myfor !== null) && (myfor == ('slide_2_' + pagenum))) {
				   var radio = document.getElementById(myfor);
				   radio.checked = true;
				   break;
			   }
		   }
		}

		var timer = setInterval(AutoRotate, 3000);
		$( "body" ).data("timer", timer);

		function radioclickcallback() {
			clearInterval(timer);
			timer = setInterval(AutoRotate, 3000);
		}

		$( ".radio_comments" ).click( radioclickcallback );
	});

 function submitForm(event){
     var radios = document.getElementsByName("fields[rating]");
     for (var i = 0, len = radios.length; i < len; i++) {
          if (radios[i].checked) {
			event.preventDefault();
			alert("true");
            return true;
          }
     }
	$(".apparent-message").css('display', 'block');
    return false;
 }

function phoneMask() { 
    var num = $(this).val().replace(/\D/g,''); 
	if (num.length <= 4) {
		return;
	}
    $(this).val(num.substring(0,4) + ' ' + num.substring(4,8)); 
}
$('[type="tel"]').keyup(phoneMask);
