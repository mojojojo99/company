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

 function submitForm(){
     var radios = document.getElementsByName("fields[rating]");
     for (var i = 0, len = radios.length; i < len; i++) {
          if (radios[i].checked) {
              return true;
          }
     }
	$(".apparent-message").css('display', 'block');
    return false;
 }

function phoneMask() { 
    var num = $(this).val().replace(/\D/g,''); 
    $(this).val(num.substring(0,4) + ' ' + num.substring(4,8)); 
}
$('[type="tel"]').keyup(phoneMask);