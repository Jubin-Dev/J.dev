// Your web app's Firebase configuration

AOS.init({
	duration: 800,
	easing: 'slide'
});

(function ($) {

	"use strict";

	$(window).stellar({
		responsive: true,
		parallaxBackgrounds: true,
		parallaxElements: true,
		horizontalScrolling: false,
		hideDistantElements: false,
		scrollProperty: 'scroll'
	});


	var fullHeight = function () {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function () {
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	// loader
	var loader = function () {
		setTimeout(function () {
			if ($('#ftco-loader').length > 0) {
				$('#ftco-loader').removeClass('show');
			}
		}, 1);
	};
	loader();

	// Scrollax
	$.Scrollax();



	// Burger Menu
	var burgerMenu = function () {

		$('body').on('click', '.js-fh5co-nav-toggle', function (event) {

			event.preventDefault();

			if ($('#ftco-nav').is(':visible')) {
				$(this).removeClass('active');
			} else {
				$(this).addClass('active');
			}



		});

	};
	burgerMenu();


	var onePageClick = function () {


		$(document).on('click', '#ftco-nav a[href^="#"]', function (event) {
			event.preventDefault();

			var href = $.attr(this, 'href');

			$('html, body').animate({
				scrollTop: $($.attr(this, 'href')).offset().top - 70
			}, 500, function () {
				// window.location.hash = href;
			});
		});

	};

	onePageClick();


	var carousel = function () {
		$('.home-slider').owlCarousel({
			loop: true,
			autoplay: true,
			margin: 0,
			animateOut: 'fadeOut',
			animateIn: 'fadeIn',
			nav: false,
			autoplayHoverPause: false,
			items: 1,
			navText: ["<span class='ion-md-arrow-back'></span>", "<span class='ion-chevron-right'></span>"],
			responsive: {
				0: {
					items: 1
				},
				600: {
					items: 1
				},
				1000: {
					items: 1
				}
			}
		});
	};
	carousel();

	$('nav .dropdown').hover(function () {
		var $this = $(this);
		// 	 timer;
		// clearTimeout(timer);
		$this.addClass('show');
		$this.find('> a').attr('aria-expanded', true);
		// $this.find('.dropdown-menu').addClass('animated-fast fadeInUp show');
		$this.find('.dropdown-menu').addClass('show');
	}, function () {
		var $this = $(this);
		// timer;
		// timer = setTimeout(function(){
		$this.removeClass('show');
		$this.find('> a').attr('aria-expanded', false);
		// $this.find('.dropdown-menu').removeClass('animated-fast fadeInUp show');
		$this.find('.dropdown-menu').removeClass('show');
		// }, 100);
	});


	$('#dropdown04').on('show.bs.dropdown', function () {
		console.log('show');
	});







	// scroll
	var scrollWindow = function () {
		$(window).scroll(function () {
			var $w = $(this),
				st = $w.scrollTop(),
				navbar = $('.ftco_navbar'),
				sd = $('.js-scroll-wrap');

			if (st > 150) {
				if (!navbar.hasClass('scrolled')) {
					navbar.addClass('scrolled');
				}
			}
			if (st < 150) {
				if (navbar.hasClass('scrolled')) {
					navbar.removeClass('scrolled sleep');
				}
			}
			if (st > 350) {
				if (!navbar.hasClass('awake')) {
					navbar.addClass('awake');
				}

				if (sd.length > 0) {
					sd.addClass('sleep');
				}
			}
			if (st < 350) {
				if (navbar.hasClass('awake')) {
					navbar.removeClass('awake');
					navbar.addClass('sleep');
				}
				if (sd.length > 0) {
					sd.removeClass('sleep');
				}
			}
		});
	};
	scrollWindow();



	var counter = function () {

		$('#section-counter, .hero-wrap, .ftco-counter').waypoint(function (direction) {

			if (direction === 'down' && !$(this.element).hasClass('ftco-animated')) {

				var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
				$('.number').each(function () {
					var $this = $(this),
						num = $this.data('number');
					console.log(num);
					$this.animateNumber(
						{
							number: num,
							numberStep: comma_separator_number_step
						}, 7000
					);
				});

			}

		}, { offset: '95%' });

	}
	counter();


	var contentWayPoint = function () {
		var i = 0;
		$('.ftco-animate').waypoint(function (direction) {

			if (direction === 'down' && !$(this.element).hasClass('ftco-animated')) {

				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function () {

					$('body .ftco-animate.item-animate').each(function (k) {
						var el = $(this);
						setTimeout(function () {
							var effect = el.data('animate-effect');
							if (effect === 'fadeIn') {
								el.addClass('fadeIn ftco-animated');
							} else if (effect === 'fadeInLeft') {
								el.addClass('fadeInLeft ftco-animated');
							} else if (effect === 'fadeInRight') {
								el.addClass('fadeInRight ftco-animated');
							} else {
								el.addClass('fadeInUp ftco-animated');
							}
							el.removeClass('item-animate');
						}, k * 50, 'easeInOutExpo');
					});

				}, 100);

			}

		}, { offset: '95%' });
	};
	contentWayPoint();


	// Back to top button
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			$('.back-to-top').fadeIn('slow');
		} else {
			$('.back-to-top').fadeOut('slow');
		}
	});

	$('.back-to-top').click(function () {
		$('html, body').animate({
			scrollTop: 0
		}, 1500, 'easeInOutExpo');
		return false;
	});


	// // magnific popup
	// $('.image-popup').magnificPopup({
	// 	type: 'image',
	// 	closeOnContentClick: true,
	// 	closeBtnInside: false,
	// 	fixedContentPos: true,
	// 	mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
	// 	gallery: {
	// 		enabled: true,
	// 		navigateByImgClick: true,
	// 		preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
	// 	},
	// 	image: {
	// 		verticalFit: true
	// 	},
	// 	zoom: {
	// 		enabled: true,
	// 		duration: 300 // don't foget to change the duration also in CSS
	// 	}
	// });

	// $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
	// 	disableOn: 700,
	// 	type: 'iframe',
	// 	mainClass: 'mfp-fade',
	// 	removalDelay: 160,
	// 	preloader: false,

	// 	fixedContentPos: false
	// });

	// //Function To Display Popup

	// function divShow() {
	// 	window.open(

	// 	)
	// }

	//CONTACT FORM CONNECTED TO FIREBASE

	var firebaseConfig = {
		apiKey: "AIzaSyCquEs3pAGjoiQWGu0b-uWV_KDJvpaYF2I",
		authDomain: "portfolio-contacts-forms.firebaseapp.com",
		databaseURL: "https://portfolio-contacts-forms.firebaseio.com",
		projectId: "portfolio-contacts-forms",
		storageBucket: "portfolio-contacts-forms.appspot.com",
		messagingSenderId: "187118993828",
		appId: "1:187118993828:web:c91bfaf9ca4d4192bf4131",
		measurementId: "G-Z994CZ6KTB"
	};
	// Initialize Firebase
	firebase.initializeApp(firebaseConfig);
	var firestore = firebase.firestore();
	// var storage = firebase.storage();   // using for get resume stored in firebase storage

	// var pathReference = storage.ref('Resume/JUBIN_RESUME.pdf')	//firebse Storage

	const submitBtn = document.querySelector('#sbmtd');

	var error_message = document.getElementById("error_message");

	var fullName = document.querySelector('#name');
	var fullemail = document.querySelector('#email');
	var fullsubject = document.querySelector('#subject');
	var fullMessage = document.querySelector('#msg');

	// var dowloadButton = document.getElementById('dowloadButton') // by 'get resume' id

	// if (dowloadButton) {
	// 	addEventListener('click', function () {                  // event listner for click the events
	// 		pathReference.getDownloadURL().then(function (url) {
	// console.log("CLICK TO DOWNLOAD")
	// console.log(url)
	// window.open(url,'_blank')  // is for to open event in new tab


	// 	})




	const db = firestore.collection("ContactsData");

	submitBtn.addEventListener('click', submitForm)

	function submitForm(e) {
		e.preventDefault();

		var fullNameInput = fullName.value;
		var fullemailInput = fullemail.value;
		var fullsubjectInput = fullsubject.value;
		var fullmessageInput = fullMessage.value;


		db.doc().set({
			message: fullmessageInput,
			email: fullemailInput,
			subject: fullsubjectInput,
			name: fullNameInput,

		}).then(function () {
			//  show Alert success or not

			document.querySelector('.alert-success').style.display = 'block';
			//  hide alert after 3 sec
			setTimeout(function () {
				document.querySelector('.alert-success').style.display = 'none';
			}, 6000);

			document.querySelector('#form').reset();
		}).catch(function (error) {
			console.log(error);
		});
	}


	// const toggleModal = () => {
	// 	document.querySelector("._modal").classList.toggle(".bg-active");
	// 	document.querySelector("._modal-bg").classList.toggle(".bg-active");
	//  document.querySelector("._modal-close").classList.toggle("bg-diactive");
	// };
	// document.querySelector("#show-modal").addEventListener("click", toggleModal);

	// document.querySelector("._modal-bg").addEventListener("click", toggleModal);

	// document.querySelector("#hiremeform").addEventListener("submit", (e) => {
	// 	e.preventDefault();
	// 	toggleModal();
	// });

	// document.querySelector("._modal-close").addEventListener("click", toggleModal);
	// document.querySelector("._modal-bg").addEventListener("click", toggleModal);

	// var modalBtn = document.querySelector('#show-modal');
	// var modalBg = document.querySelector('._modal-bg');
	// // var modalClose = document.querySelector('._modal-close');




	// 	if(modalBtn){ addEventListener('click', function (){
	// 		modalBg.classList.add('bg-active');

	// 		})
	// 	}

	// if (modalClose){ addEventListener('click', function (){
	// 	modalBg.classList.remove('bg-active');
	// 	console.log("full working")
	// });
	// };

	// const open = document.querySelector('#show-modal');
	// const modal_bg =
	// 	document.querySelector('.modal--bg');
	// const close =
	// 	document.querySelector('.modals-close');

	// if (open) {
	// 	addEventListener('click', function () {
	// 		modal_bg.classList.add('shows');
	// 		console.log("qqq")
	// 	})
	// }
	// if (close) {
	// 	addEventListener('click', function () {
	// 		modal_bg.classList.remove('shows');
	// 	})
	// }

	


})(jQuery);








