$(function(){

// scrollReveal
	window.sr = ScrollReveal({
		reset: true,
		scale:1,
		duration: 800,
		viewFactor: 0.2
	});

	// index
		sr.reveal('#index .intro', {
		});
		sr.reveal('#index .intro .num span', {
			origin:'top',
			distance:'30px',
			delay:300,
			viewFactor: 0.5
		});
		sr.reveal('#index .intro h1', {
			duration: 1000,
			distance:'50px',
			delay:300,
			viewFactor: 0.5
		});
		sr.reveal('#index .intro .author span', {
			duration: 1100,
			delay:300,
			viewFactor: 0.5
		});
	// about
		sr.reveal('#about h2 span', {
			origin:'top',
			distance:'30px'
		});
		sr.reveal('#about .container', {
			duration: 1000,
			distance:'50px',
			delay:300
		});
	// page
		sr.reveal('.banner h1', {
			origin:'top',
			distance:'50px'
		});
		sr.reveal('.banner img', {
			reset: false,
			distance:'50px',
			delay:100
		});
		sr.reveal('.reveal_left', {
			duration: 1000,
			origin:'left',
			distance:'50px'
		});
		sr.reveal('.reveal_right', {
			duration: 1000,
			origin:'right',
			distance:'50px'
		});
		sr.reveal('.reveal_bottom', {
			reset: false,
			duration: 1000,
			distance:'50px'
		});
		sr.reveal('.reveal_list', {
			reset: false,
			duration: 1000,
			distance:'50px'
		},300);
})