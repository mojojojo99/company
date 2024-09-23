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
		   var allElements = document.getElementsByClassName('control_comments');
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

		var timer = setInterval(AutoRotate, 7000);
		$( "body" ).data("timer", timer);

		function radioclickcallback() {
			clearInterval(timer);
			timer = setInterval(AutoRotate, 7000);
		}

		$( ".radio_comments" ).click( radioclickcallback );

	// Get the modal
	var modal = document.getElementById("myModal");
		
	// Get the button that opens the modal
	var btn = document.getElementById("myBtn");
		
	// Get the <span> element that closes the modal
	var span = document.getElementById("closemodal");
		
	// When the user clicks on the button, open the modal
	btn.onclick = function() {
	  modal.style.display = "block";
	}
	
	// When the user clicks on <span> (x), close the modal
	span.onclick = function() {
	  modal.style.display = "none";
	}
	
	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
	  if (event.target == modal) {
	    modal.style.display = "none";
	  }
	}
		
	let touchstartX = 0
	let touchendX = 0
	function checkDirection() {
	  console.log(touchstartX, touchendX)
	  if (touchendX + 30 < touchstartX) pagenum++;
	  if (touchendX - 30 > touchstartX) pagenum--;

	  var allElements = document.getElementsByClassName('control_comments');

	  console.log(pagenum)

	  if (pagenum > allElements.length) {
		   pagenum = 1;
	  } 
	  if (pagenum < 0) {
		   pagenum = allElements.length;
	  }
	  clearInterval(timer);
	  for (var i = 0, n = allElements.length; i < n; i++) {
		   var myfor = allElements[i].getAttribute('for');
		   if ((myfor !== null) && (myfor == ('slide_2_' + pagenum))) {
			    var radio = document.getElementById(myfor);
			    radio.checked = true;
			    break;
		   }
	  }
	
	}

	document.getElementById("testimonial_slider").addEventListener('touchstart', e => {
	  touchstartX = e.changedTouches[0].screenX
	})

	document.getElementById("testimonial_slider").addEventListener('touchend', e => {
	  touchendX = e.changedTouches[0].screenX
	  checkDirection()
	})
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
