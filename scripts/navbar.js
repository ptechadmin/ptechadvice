var prevScrollpos = window.pageYOffset;
	window.onscroll = function() {
		var currentScrollPos = window.pageYOffset;
			
			  
	if(navigator.userAgent.match(/(iPhone|iPod|iPad)/i)) {
		if (prevScrollpos > currentScrollPos) {
				document.getElementById("nav").style.top = "0";
			  } else {
				document.getElementById("nav").style.top = "0";
			  }
			  prevScrollpos = currentScrollPos;
	}else {
		if (prevScrollpos > currentScrollPos) {
				document.getElementById("nav").style.top = "0";
			  } else {
				document.getElementById("nav").style.top = "-80px";
			  }
			  prevScrollpos = currentScrollPos;
		
		
		
	}
} 