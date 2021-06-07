if(document.querySelector('body.profiles')) {
	var doctolibchecker = setInterval(checkDoctolib, 10)
	map = document.querySelector('.dl-profile-doctor-place-map')
	map.parentElement.removeChild(map)
	window.scrollTo(0, 500);
}

function checkDoctolib() {
	var warning = document.querySelector('.booking-message-warning')
	if (warning) {
		if(warning.innerHTML.indexOf("Bitte versuchen Sie es erneut zu einem späteren Zeitpunkt.") != -1) {
			clearInterval(doctolibchecker)
			location.reload()
		}
	}
	if(document.querySelector('.availabilities-message button')) {
		document.querySelector('.availabilities-message button').click()
	}
	if(document.querySelector('.availabilities-slot')) {
		
		clearInterval(doctolibchecker)
		document.querySelector('.availabilities-slot').click()
		try {
			var myAudio = new Audio(chrome.runtime.getURL("alert.mp3"))
			myAudio.play()
		} catch(e) {
			alert("found")
		}
	}
}
