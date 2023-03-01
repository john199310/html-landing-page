(function($) {
	"use strict";

	// ______________ PAGE LOADING
	$(window).on("load", function(e) {
		$("#global-loader").fadeOut("slow");
	})

	//Color-Theme
	$(document).on("click", "a[data-theme]", function() {
		$("head link#theme").attr("href", $(this).data("theme"));
		$(this).toggleClass('active').siblings().removeClass('active');
	});


	// FAQ Accordion
	$(document).on("click", '[data-bs-toggle="collapse"]', function() {
		$(this).toggleClass('active').siblings().removeClass('active');
	});

	// ______________Full screen
	$(document).on("click", ".fullscreen-button", function toggleFullScreen() {
	  $('.fullscreen-button').addClass('fullscreen-button');
		if ((document.fullScreenElement !== undefined && document.fullScreenElement === null) || (document.msFullscreenElement !== undefined && document.msFullscreenElement === null) || (document.mozFullScreen !== undefined && !document.mozFullScreen) || (document.webkitIsFullScreen !== undefined && !document.webkitIsFullScreen)) {
			if (document.documentElement.requestFullScreen) {
				document.documentElement.requestFullScreen();
			} else if (document.documentElement.mozRequestFullScreen) {
				document.documentElement.mozRequestFullScreen();
			} else if (document.documentElement.webkitRequestFullScreen) {
				document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
			} else if (document.documentElement.msRequestFullscreen) {
				document.documentElement.msRequestFullscreen();
			}
		} else {
		 $('html').removeClass('fullscreen-button');
			if (document.cancelFullScreen) {
				document.cancelFullScreen();
			} else if (document.mozCancelFullScreen) {
				document.mozCancelFullScreen();
			} else if (document.webkitCancelFullScreen) {
				document.webkitCancelFullScreen();
			} else if (document.msExitFullscreen) {
				document.msExitFullscreen();
			}
		}
	})

	// ______________ BACK TO TOP BUTTON
	$(window).on("scroll", function(e) {
		if ($(this).scrollTop() > 0) {
			$('#back-to-top').fadeIn('slow');
		} else {
			$('#back-to-top').fadeOut('slow');
		}
	});
	$(document).on("click", "#back-to-top", function(e) {
		$("html").animate({
			scrollTop: 0
		}, 0);
		return false;
	});


	// ______________ COVER IMAGE
	$(".cover-image").each(function() {
		var attr = $(this).attr('data-bs-image-src');
		if (typeof attr !== typeof undefined && attr !== false) {
			$(this).css('background', 'url(' + attr + ') center center');
		}
	});

	// ______________Quantity Cart Increase & Descrease
	$(function () {
		$('.add').on('click',function(){
			var $qty=$(this).closest('div').find('.qty');
			var currentVal = parseInt($qty.val());
			if (!isNaN(currentVal)) {
				$qty.val(currentVal + 1);
			}
		});
		$('.minus').on('click',function(){
			var $qty=$(this).closest('div').find('.qty');
			var currentVal = parseInt($qty.val());
			if (!isNaN(currentVal) && currentVal > 0) {
				$qty.val(currentVal - 1);
			}
		});
	});

	// ______________Chart-circle
	if ($('.chart-circle').length) {
		$('.chart-circle').each(function() {
			let $this = $(this);
			$this.circleProgress({
				fill: {
					color: $this.attr('data-bs-color')
				},
				size: $this.height(),
				startAngle: -Math.PI / 4 * 2,
				emptyFill: 'rgba(119, 119, 142, 0.2)',
				lineCap: 'round'
			});
		});
	}

	// __________MODAL
	// showing modal with effect
	$('.modal-effect').on('click', function(e) {
		e.preventDefault();
		var effect = $(this).attr('data-bs-effect');
		$('#modaldemo8').addClass(effect);
	});
	// hide modal with effect
	$('#modaldemo8').on('hidden.bs.modal', function(e) {
		$(this).removeClass(function(index, className) {
			return (className.match(/(^|\s)effect-\S+/g) || []).join(' ');
		});
	});

	// ______________ CARD
	const DIV_CARD = 'div.card';

	// ___________TOOLTIP
	var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
	var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
		return new bootstrap.Tooltip(tooltipTriggerEl)
	})

	// __________POPOVER
	var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
	var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
	return new bootstrap.Popover(popoverTriggerEl)
	})

	// ______________ FUNCTION FOR REMOVE CARD
	$(document).on('click', '[data-bs-toggle="card-remove"]', function(e) {
		let $card = $(this).closest(DIV_CARD);
		$card.remove();
		e.preventDefault();
		return false;
	});


	// ______________ FUNCTIONS FOR COLLAPSED CARD
	$(document).on('click', '[data-bs-toggle="card-collapse"]', function(e) {
		let $card = $(this).closest(DIV_CARD);
		$card.toggleClass('card-collapsed');
		e.preventDefault();
		return false;
	});

	// ______________ CARD FULL SCREEN
	$(document).on('click', '[data-bs-toggle="card-fullscreen"]', function(e) {
		let $card = $(this).closest(DIV_CARD);
		$card.toggleClass('card-fullscreen').removeClass('card-collapsed');
		e.preventDefault();
		return false;
	});


	//Input file-browser
	$(document).on('change', '.file-browserinput', function() {
		var input = $(this),
		numFiles = input.get(0).files ? input.get(0).files.length : 1,
		label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
	input.trigger('fileselect', [numFiles, label]);
	});// We can watch for our custom `fileselect` event like this

	//______File Upload
	$('.file-browserinput').on('fileselect', function(event, numFiles, label) {
			var input = $(this).parents('.input-group').find(':text'),
			log = numFiles > 1 ? numFiles + ' files selected' : label;
			if( input.length ) {
				input.val(log);
			} else {
				if( log ) alert(log);
			}
	});

	function replay() {
		let replayButtom = document.querySelectorAll('.reply a')
		// Creating Div
		let Div = document.createElement('div')
		Div.setAttribute('class', "comment mt-5 d-grid")
		// creating textarea
		let textArea = document.createElement('textarea')
		textArea.setAttribute('class', "form-control")
		textArea.setAttribute('rows', "5")
		textArea.innerText = "Your Comment";
		// creating Cancel buttons
		let cancelButton = document.createElement('button');
		cancelButton.setAttribute('class', "btn btn-danger");
		cancelButton.innerText = "Cancel";
	
		let buttonDiv = document.createElement('div')
		buttonDiv.setAttribute('class', "btn-list ms-auto mt-2")
	
		// Creating submit button
		let submitButton = document.createElement('button');
		submitButton.setAttribute('class', "btn btn-success ms-3");
		submitButton.innerText = "Submit";
	
		// appending text are to div
		Div.append(textArea)
		Div.append(buttonDiv);
		buttonDiv.append(cancelButton);
		buttonDiv.append(submitButton);
	
		replayButtom.forEach((element, index) => {
	
			element.addEventListener('click', () => {
				let replay = $(element).parent()
				replay.append(Div)
	
				cancelButton.addEventListener('click', () => {
					Div.remove()
				})
			})
		})
	
	
	}
	replay()



	// ______________ SWITCHER-toggle ______________//

	$('.layout-setting').on("click", function(e) {
		if (!(document.querySelector('body').classList.contains('dark-mode'))) {
			$('body').addClass('dark-mode');
			$('body').removeClass('light-mode');
			$('body').removeClass('transparent-mode');
            
            $('body')?.removeClass('color-menu');
            $('body')?.removeClass('gradient-menu');
            $('body')?.removeClass('light-menu');
            $('body')?.removeClass('color-header');
            $('body')?.removeClass('gradient-header');
            $('body')?.removeClass('light-header');

            $('#myonoffswitch10').prop('checked', true);
            $('#myonoffswitch14').prop('checked', true);

			localStorage.setItem('darkMode', true);
			localStorage.removeItem('lightMode');
			localStorage.removeItem('transparentMode');
            $('#myonoffswitch7').prop('checked', true);

		} else {
			$('body').removeClass('dark-mode');
			$('body').addClass('light-mode');
            $('#myonoffswitch8').prop('checked', true);
            $('#myonoffswitch12').prop('checked', true);
            
            $('body')?.removeClass('color-menu');
            $('body')?.removeClass('gradient-menu');
            $('body')?.removeClass('dark-menu');
            $('body')?.removeClass('color-header');
            $('body')?.removeClass('gradient-header');
            $('body')?.removeClass('dark-header');

			localStorage.setItem('lightMode', true);
			localStorage.removeItem('transparentMode');
			localStorage.removeItem('darkMode');
            $('#myonoffswitch6').prop('checked', true);
		}
	});

	$(document).on("click", "a[data-sidetheme]", function() {
		$("head link#sidemenu-theme").attr("href", $(this).data("sidetheme"));
	});

	/*Theme-layout*/

    /*Light Theme Start*/
    $(document).on("click", '#myonoffswitch6', function () {
        if (this.checked) {
            $('body').addClass('light-mode');
            $('#myonoffswitch8').prop('checked', true);
            $('#myonoffswitch12').prop('checked', true);
            $('body').removeClass('transparent-mode');
            $('body').removeClass('dark-mode');
            
            $('body')?.removeClass('color-menu');
            $('body')?.removeClass('gradient-menu');
            $('body')?.removeClass('dark-menu');
            $('body')?.removeClass('color-header');
            $('body')?.removeClass('gradient-header');
            $('body')?.removeClass('dark-header');

            // remove dark theme properties	
            localStorage.removeItem('darkPrimary')

            // remove light theme properties
            localStorage.removeItem('primaryColor')
            localStorage.removeItem('primaryHoverColor')
            localStorage.removeItem('primaryBorderColor')
            document.querySelector('html').style.removeProperty('--primary-bg-color', localStorage.darkPrimary);
            document.querySelector('html').style.removeProperty('--primary-bg-hover', localStorage.darkPrimary);
            document.querySelector('html').style.removeProperty('--primary-bg-border', localStorage.darkPrimary);
            document.querySelector('html').style.removeProperty('--dark-primary', localStorage.darkPrimary);

            // removing dark theme properties
            localStorage.removeItem('darkPrimary')
            localStorage.removeItem('transparentBgColor');
            localStorage.removeItem('transparentThemeColor');
            localStorage.removeItem('transparentPrimary');
            localStorage.removeItem('darkprimaryTransparent');


            $('#myonoffswitch6').prop('checked', true);
            $('#myonoffswitch7').prop('checked', false);
            $('#myonoffswitchTransparent').prop('checked', false);
            localStorage.removeItem('transparentBgImgPrimary');
            localStorage.removeItem('transparentBgImgprimaryTransparent');

            checkOptions();
            const root = document.querySelector(':root');
            root.style = "";
            names()
        } else {
            $('body').removeClass('light-mode');
            localStorage.removeItem("light-mode");
        }
        localStorageBackup();
    });
    /*Light Theme End*/

    /*Dark Theme Start*/
    $(document).on("click", '#myonoffswitch7', function () {
        if (this.checked) {
            $('body').addClass('dark-mode');

            $('#myonoffswitch10').prop('checked', true);
            $('#myonoffswitch14').prop('checked', true);
            $('body').removeClass('light-mode');
            $('body').removeClass('transparent-mode');
            
            $('body')?.removeClass('color-menu');
            $('body')?.removeClass('gradient-menu');
            $('body')?.removeClass('light-menu');
            $('body')?.removeClass('color-header');
            $('body')?.removeClass('gradient-header');
            $('body')?.removeClass('light-header');

            // remove light theme properties
            localStorage.removeItem('primaryColor')
            localStorage.removeItem('primaryHoverColor')
            localStorage.removeItem('primaryBorderColor')
            localStorage.removeItem('darkPrimary')
            document.querySelector('html').style.removeProperty('--primary-bg-color', localStorage.darkPrimary);
            document.querySelector('html').style.removeProperty('--primary-bg-hover', localStorage.darkPrimary);
            document.querySelector('html').style.removeProperty('--primary-bg-border', localStorage.darkPrimary);
            document.querySelector('html').style.removeProperty('--dark-primary', localStorage.darkPrimary);

            // removing light theme data 
            localStorage.removeItem('primaryColor')
            localStorage.removeItem('primaryHoverColor')
            localStorage.removeItem('primaryBorderColor')
            localStorage.removeItem('primaryTransparent');

            $('#myonoffswitch6').prop('checked', false);
            $('#myonoffswitch7').prop('checked', true);
            $('#myonoffswitchTransparent').prop('checked', false);
            //
            checkOptions();

            localStorage.removeItem('transparentBgColor');
            localStorage.removeItem('transparentThemeColor');
            localStorage.removeItem('transparentPrimary');
            localStorage.removeItem('transparentBgImgPrimary');
            localStorage.removeItem('transparentBgImgprimaryTransparent');
            const root = document.querySelector(':root');
            root.style = "";
            names()
        } else {
            $('body').removeClass('dark-mode');
            localStorage.removeItem("dark-mode");
        }
        localStorageBackup()
    });
    /*Dark Theme End*/

	/*Transparent Theme Start*/
	$(document).on("click", '#myonoffswitchTransparent', function () {
		if (this.checked) {
			$('body').addClass('transparent-mode');
			$('#myonoffswitch8').prop('checked', false);
			$('#myonoffswitch10').prop('checked', false);
			$('#myonoffswitch12').prop('checked', false);
			$('#myonoffswitch14').prop('checked', false);
			$('body').removeClass('dark-mode');
			$('body').removeClass('light-mode');
			transparentStyle();

			// remove light theme properties
			localStorage.removeItem('primaryColor')
			localStorage.removeItem('primaryHoverColor')
			localStorage.removeItem('primaryBorderColor')

			// removing light theme data 
			localStorage.removeItem('darkPrimary');
			localStorage.removeItem('primaryColor')
			localStorage.removeItem('primaryHoverColor')
			localStorage.removeItem('primaryBorderColor')
			localStorage.removeItem('primaryTransparent');
			localStorage.removeItem('transparentPrimary');
			localStorage.removeItem('darkprimaryTransparent');
			localStorage.removeItem('transparentBgImgPrimary');
			localStorage.removeItem('transparentBgImgprimaryTransparent');

			$('#myonoffswitch7').prop('checked', false);
			$('#myonoffswitch6').prop('checked', false);
			$('#myonoffswitchTransparent').prop('checked', true);
			//
			checkOptions();

			const root = document.querySelector(':root');
			root.style = "";
			names()
		} else {
			$('body').removeClass('transparent-mode');
			localStorage.removeItem("transparent-mode");
		}
		localStorageBackup()
		$('body').removeClass('bg-img1');
		$('body').removeClass('bg-img2');
		$('body').removeClass('bg-img3');
		$('body').removeClass('bg-img4');
	});
	/*Transparent Theme End*/

	$(document).ready(function () {
		let bodyTransparent = $('body').hasClass('transparent-mode');
		if (bodyTransparent) {
			transparentStyle();
		}
	})

	/*Transparent Bg-Image Style Start*/

	$(document).on("click", '#bgimage1', function () {
		$('body').addClass('bg-img1');
		$('body').removeClass('bg-img2');
		$('body').removeClass('bg-img3');
		$('body').removeClass('bg-img4');
		transparentStyle();

		document.querySelector('body').classList.add('transparent-mode');
		document.querySelector('body').classList.remove('light-mode');
		document.querySelector('body').classList.remove('dark-mode');

		$('#myonoffswitch7').prop('checked', false);
		$('#myonoffswitch6').prop('checked', false);
		$('#myonoffswitchTransparent').prop('checked', true);

		checkOptions();
	})

	$(document).on("click", '#bgimage2', function () {
		transparentStyle();
		$('body').addClass('bg-img2');
		$('body').removeClass('bg-img1');
		$('body').removeClass('bg-img3');
		$('body').removeClass('bg-img4');

		document.querySelector('body').classList.add('transparent-mode');
		document.querySelector('body').classList.remove('light-mode');
		document.querySelector('body').classList.remove('dark-mode');

		$('#myonoffswitch7').prop('checked', false);
		$('#myonoffswitch6').prop('checked', false);
		$('#myonoffswitchTransparent').prop('checked', true);

		checkOptions();
	})

	$(document).on("click", '#bgimage3', function () {
		$('body').addClass('bg-img3');
		$('body').removeClass('bg-img1');
		$('body').removeClass('bg-img2');
		$('body').removeClass('bg-img4');
		transparentStyle();

		document.querySelector('body').classList.add('transparent-mode');
		document.querySelector('body').classList.remove('light-mode');
		document.querySelector('body').classList.remove('dark-mode');

		$('#myonoffswitch7').prop('checked', false);
		$('#myonoffswitch6').prop('checked', false);
		$('#myonoffswitchTransparent').prop('checked', true);

		checkOptions();
	})

	$(document).on("click", '#bgimage4', function () {
		$('body').addClass('bg-img4');
		$('body').removeClass('bg-img1');
		$('body').removeClass('bg-img2');
		$('body').removeClass('bg-img3');
		transparentStyle();

		document.querySelector('body').classList.add('transparent-mode');
		document.querySelector('body').classList.remove('light-mode');
		document.querySelector('body').classList.remove('dark-mode');
		$('#myonoffswitch7').prop('checked', false);
		$('#myonoffswitch6').prop('checked', false);
		$('#myonoffswitchTransparent').prop('checked', true);

		checkOptions();
	})

	/*Transparent Bg-Image Style End*/

	/*Light Header Start*/
    $(document).on("click", '#myonoffswitch8', function () {
        if (this.checked) {
            $('body').addClass('light-header');
            $('body').removeClass('color-header');
            $('body').removeClass('dark-header');
            $('body').removeClass('gradient-header');
        } else {
            $('body').removeClass('light-header');
        }
    });
    /*Light Header End*/

    /*Color Header Start*/
    $(document).on("click", '#myonoffswitch9', function () {
        if (this.checked) {
            $('body').addClass('color-header');
            $('body').removeClass('light-header');
            $('body').removeClass('dark-header');
            $('body').removeClass('gradient-header');
        } else {
            $('body').removeClass('color-header');
        }
    });
    /*Color Header End*/

    /*Dark Header Start*/
    $(document).on("click", '#myonoffswitch10', function () {
        if (this.checked) {
            $('body').addClass('dark-header');
            $('body').removeClass('color-header');
            $('body').removeClass('light-header');
            $('body').removeClass('gradient-header');
        } else {
            $('body').removeClass('dark-header');
        }
    });
    /*Dark Header End*/

    /*Gradient Header Start*/
    $(document).on("click", '#myonoffswitch11', function () {
        if (this.checked) {
            $('body').addClass('gradient-header');
            $('body').removeClass('color-header');
            $('body').removeClass('light-header');
            $('body').removeClass('dark-header');
        } else {
            $('body').removeClass('gradient-header');
        }
    });
    /*Dark Header End*/

	/*Light LeftMenu Start*/
    $(document).on("click", '#myonoffswitch12', function () {
        if (this.checked) {
            $('body').addClass('light-menu');
            $('body').removeClass('color-menu');
            $('body').removeClass('dark-menu');
            $('body').removeClass('gradient-menu');
        } else {
            $('body').removeClass('light-menu');
        }
    });
    /*Light LeftMenu End*/

    /*Color LeftMenu Start*/
    $(document).on("click", '#myonoffswitch13', function () {
        if (this.checked) {
            $('body').addClass('color-menu');
            $('body').removeClass('light-menu');
            $('body').removeClass('dark-menu');
            $('body').removeClass('gradient-menu');
        } else {
            $('body').removeClass('color-menu');
        }
    });
    /*Color LeftMenu End*/

    /*Dark LeftMenu Start*/
    $(document).on("click", '#myonoffswitch14', function () {
        if (this.checked) {
            $('body').addClass('dark-menu');
            $('body').removeClass('color-menu');
            $('body').removeClass('light-menu');
            $('body').removeClass('gradient-menu');
        } else {
            $('body').removeClass('dark-menu');
        }
    });
    /*Dark LeftMenu End*/

    /*Gradient LeftMenu Start*/
    $(document).on("click", '#myonoffswitch15', function () {
        if (this.checked) {
            $('body').addClass('gradient-menu');
            $('body').removeClass('color-menu');
            $('body').removeClass('light-menu');
            $('body').removeClass('dark-menu');
        } else {
            $('body').removeClass('gradient-menu');
        }
    });
    /*Gradient LeftMenu End*/

	/*Full Width Layout Start*/
    $('#myonoffswitch16').click(function () {
        if (this.checked) {
            $('body').addClass('layout-fullwidth');
            $('body').removeClass('layout-boxed');
			responsive();
			checkHoriMenu();
        } else {
            $('body').removeClass('layout-fullwidth');
        }
    });
    /*Full Width Layout End*/

    /*Boxed Layout Start*/
    $('#myonoffswitch17').click(function () {
        if (this.checked) {
            $('body').addClass('layout-boxed');
            $('body').removeClass('layout-fullwidth');
			responsive();
			checkHoriMenu();
        } else {
            $('body').removeClass('layout-boxed');
        }
    });
    /*Boxed Layout End*/

    /*Header-Position Styles Start*/
    $('#myonoffswitch18').click(function () {
        if (this.checked) {
            $('body').addClass('fixed-layout');
            $('body').removeClass('scrollable-layout');
        } else {
            $('body').removeClass('fixed-layout');
        }
    });
    $('#myonoffswitch19').click(function () {
        if (this.checked) {
            $('body').addClass('scrollable-layout');
            $('body').removeClass('fixed-layout');
        } else {
            $('body').removeClass('scrollable-layout');
        }
    });
    /*Header-Position Styles End*/

	/*Default Sidemenu Start*/
    $(document).on("click", '#myonoffswitch20', function () {
        if (this.checked) {
            $('body').addClass('default-menu');
            $('body').removeClass('sidenav-toggled');
            hovermenu();
            $('body').removeClass('icontext-menu');
            $('body').removeClass('icon-overlay');
            $('body').removeClass('closed-leftmenu');
            $('body').removeClass('hover-submenu');
            $('body').removeClass('hover-submenu1');
        } else {
            $('body').removeClass('default-menu');
        }
    });
    /*Default Sidemenu End*/

    /*Icon Overlay Sidemenu Start*/
    $('#myonoffswitch21').click(function () {
        if (this.checked) {
            $('body').addClass('icon-overlay');
            hovermenu();
            $('body').addClass('sidenav-toggled');
            $('body').removeClass('default-menu');
            $('body').removeClass('icontext-menu');
            $('body').removeClass('hover-submenu1');
            $('body').removeClass('closed-leftmenu');
            $('body').removeClass('hover-submenu');
        } else {
            $('body').removeClass('icon-overlay');
            $('body').removeClass('sidenav-toggled');
        }
    });
    /*Icon Overlay Sidemenu End*/

    /*Icon Text Sidemenu Start*/
    $('#myonoffswitch22').click(function () {
        if (this.checked) {
            $('body').addClass('icontext-menu');
            icontext();
            $('body').addClass('sidenav-toggled');
            $('body').removeClass('icon-overlay');
            $('body').removeClass('default-menu');
            $('body').removeClass('hover-submenu1');
            $('body').removeClass('closed-leftmenu');
            $('body').removeClass('hover-submenu');
        } else {
            $('body').removeClass('icontext-menu');
            $('body').removeClass('sidenav-toggled');
        }
    });
    /*Icon Text Sidemenu End*/

    /*Closed Sidemenu Start*/
    $('#myonoffswitch23').click(function () {
        if (this.checked) {
            $('body').addClass('closed-leftmenu');
            $('body').addClass('sidenav-toggled');
            $('body').removeClass('default-menu');
            $('body').removeClass('hover-submenu1');
            $('body').removeClass('hover-submenu');
            $('body').removeClass('icon-overlay');
            $('body').removeClass('icontext-menu');

        } else {
            $('body').removeClass('closed-leftmenu');
            $('body').removeClass('sidenav-toggled');
            $('body').addClass('default-menu');
        }
    });
    /*Closed Sidemenu End*/

    /*Hover Submenu Start*/
    $('#myonoffswitch24').click(function () {
        if (this.checked) {
            $('body').addClass('hover-submenu');
            hovermenu();
            $('body').addClass('sidenav-toggled');
            $('body').removeClass('hover-submenu1');
            $('body').removeClass('default-menu');
            $('body').removeClass('closed-leftmenu');
            $('body').removeClass('icon-overlay');
            $('body').removeClass('icontext-menu');
            $('.app-sidebar').removeClass('sidemenu-scroll');
        } else {
            $('body').removeClass('hover-submenu');
            $('body').removeClass('sidenav-toggled');
        }
    });
    /*Hover Submenu End*/

    /*Hover Submenu Style 1 Start*/
    $('#myonoffswitch25').click(function () {
        if (this.checked) {
            $('body').addClass('hover-submenu1');
            hovermenu();
            $('body').addClass('sidenav-toggled');
            $('body').removeClass('hover-submenu');
            $('body').removeClass('default-menu');
            $('body').removeClass('closed-leftmenu');
            $('body').removeClass('icon-overlay');
            $('body').removeClass('icontext-menu');
            $('.app-sidebar').removeClass('sidemenu-scroll');
        } else {
            $('body').removeClass('hover-submenu1');
            $('body').removeClass('sidenav-toggled');
        }
    });
    /*Hover Submenu Style 1 End*/

	

	//*********  RTL **********//

	$('#myonoffswitch5').click(function () {
		if (this.checked) {
			$('body').addClass('rtl');
			
			$('#slide-left').removeClass('d-none');
			$('#slide-right').removeClass('d-none');
			$("html[lang=en]").attr("dir", "rtl");
			$('body').removeClass('ltr');
			localStorage.setItem("rtl", "True");
			$("head link#style").attr("href", $(this));
			(document.getElementById("style").setAttribute("href", "../assets/plugins/bootstrap/css/bootstrap.rtl.min.css"));
			var carousel = $('.owl-carousel');
			$.each(carousel, function (index, element) {
				// element == this
				var carouselData = $(element).data('owl.carousel');
				carouselData.settings.rtl = true; //don't know if both are necessary
				carouselData.options.rtl = true;
				$(element).trigger('refresh.owl.carousel');
			});
		} else {
			$('body').removeClass('rtl');
			$('body').addClass('ltr');
			localStorage.setItem("rtl", "false");
			$("head link#style").attr("href", $(this));
			(document.getElementById("style").setAttribute("href", "../assets/plugins/bootstrap/css/bootstrap.min.css"));
		}
	});
	
	$('#myonoffswitch4').click(function () {
		if (this.checked) {
			$('body').addClass('ltr');
			
			$('#slide-left').removeClass('d-none');
			$('#slide-right').removeClass('d-none');
			$("html[lang=en]").attr("dir", "ltr");
			$('body').removeClass('rtl');
			localStorage.setItem("ltr", "True");
			$("head link#style").attr("href", $(this));
			(document.getElementById("style").setAttribute("href", "../assets/plugins/bootstrap/css/bootstrap.min.css"));
			var carousel = $('.owl-carousel');
			$.each(carousel, function (index, element) {
				// element == this
				var carouselData = $(element).data('owl.carousel');
				carouselData.settings.rtl = false; //don't know if both are necessary
				carouselData.options.rtl = false;
				$(element).trigger('refresh.owl.carousel');
			});
		} else {
			$('body').removeClass('ltr');
			$('body').addClass('rtl');
			localStorage.setItem("ltr", "false");
			$("head link#style").attr("href", $(this));
			(document.getElementById("style").setAttribute("href", "../assets/plugins/bootstrap/css/bootstrap.rtl.min.css"));
		}
	});

	$('#myonoffswitch1').click(function () {
		if (this.checked) {
            ActiveSubmenu();
			$('body').removeClass('horizontal');
			$('body').removeClass('horizontal-hover');
			$(".main-content").removeClass("hor-content");
			$(".main-content").addClass("app-content");
			$(".main-container").removeClass("container");
			$(".main-container").addClass("container-fluid");
			$(".app-header").removeClass("hor-header");
			$(".hor-header").addClass("app-header");
			$(".app-sidebar").removeClass("horizontal-main")
			$(".main-sidemenu").removeClass("container")
			$('#slide-left').removeClass('d-none');
			$('#slide-right').removeClass('d-none');
			$('body').addClass('sidebar-mini');
			localStorage.setItem("sidebar-mini", "True");
			responsive();
			if(!(document.querySelector('.icontext-menu')!== null)){
				hovermenu();
			}
		} else {
			$('body').removeClass('sidebar-mini');
			localStorage.setItem("sidebar-mini", "False");
		}
	});

	$('#myonoffswitch2').click(function () {
		if (this.checked) {
			ActiveSubmenu();
			if(window.innerWidth>=992){
				let li = document.querySelectorAll('.side-menu li')
				li.forEach((e, i) => {
					e.classList.remove('is-expanded')
				})
				var animationSpeed = 300;
				// first level
				var parent = $("[data-bs-toggle='sub-slide']").parents('ul');
				var ul = parent.find('ul:visible').slideUp(animationSpeed);
				ul.removeClass('open');
				var parent1 = $("[data-bs-toggle='sub-slide2']").parents('ul');
				var ul1 = parent1.find('ul:visible').slideUp(animationSpeed);
				ul1.removeClass('open');
			}
			$('body').addClass('horizontal');
			$(".main-content").addClass("hor-content");
			$(".main-content").removeClass("app-content");
			$(".main-container").addClass("container");
			$(".main-container").removeClass("container-fluid");
			$(".app-header").addClass("hor-header");
			$(".hor-header").removeClass("app-header");
			$(".app-sidebar").addClass("horizontal-main")
			$(".main-sidemenu").addClass("container")
			$('body').removeClass('sidebar-mini');
			$('body').removeClass('sidenav-toggled');
			$('body').removeClass('horizontal-hover');
			$('body').removeClass('default-menu');
			$('body').removeClass('icontext-menu');
			$('body').removeClass('icon-overlay');
			$('body').removeClass('closed-leftmenu');
			$('body').removeClass('hover-submenu');
			$('body').removeClass('hover-submenu1');
			$("body").removeClass("sidenav-toggled");
			localStorage.setItem("horizantal", "True");
			$('#slide-left').removeClass('d-none');
			$('#slide-right').removeClass('d-none');
			document.querySelector('.horizontal .side-menu').style.flexWrap = 'nowrap'
			// $('#slide-left').addClass('d-none');
			// $('#slide-right').addClass('d-none');
			// document.querySelector('.horizontal .side-menu').style.flexWrap = 'wrap'
			checkHoriMenu();
			responsive();
		} else {
			$('body').removeClass('horizontal');
			localStorage.setItem("horizontal", "False");
		}
	});

	$(document).ready(function () {
		let bodyhorizontal = $('body').hasClass('horizontal');
		if (bodyhorizontal) {
			ActiveSubmenu();
			if(window.innerWidth>=992){
				let li = document.querySelectorAll('.side-menu li')
				li.forEach((e, i) => {
					e.classList.remove('is-expanded')
				})
				var animationSpeed = 300;
				// first level
				var parent = $("[data-bs-toggle='sub-slide']").parents('ul');
				var ul = parent.find('ul:visible').slideUp(animationSpeed);
				ul.removeClass('open');
				var parent1 = $("[data-bs-toggle='sub-slide2']").parents('ul');
				var ul1 = parent1.find('ul:visible').slideUp(animationSpeed);
				ul1.removeClass('open');
			}
			$('body').addClass('horizontal');
			$(".main-content").addClass("hor-content");
			$(".main-content").removeClass("app-content");
			$(".main-container").addClass("container");
			$(".main-container").removeClass("container-fluid");
			$(".app-header").addClass("hor-header");
			$(".hor-header").removeClass("app-header");
			$(".app-sidebar").addClass("horizontal-main")
			$(".main-sidemenu").addClass("container")
			$('body').removeClass('sidebar-mini');
			$('body').removeClass('sidenav-toggled');
			$('body').removeClass('horizontal-hover');
			$('body').removeClass('default-menu');
			$('body').removeClass('icontext-menu');
			$('body').removeClass('icon-overlay');
			$('body').removeClass('closed-leftmenu');
			$('body').removeClass('hover-submenu');
			$('body').removeClass('hover-submenu1');
			localStorage.setItem("horizantal", "True");
			// // To enable no-wrap horizontal style
			$('#slide-left').removeClass('d-none');
			$('#slide-right').removeClass('d-none');
			document.querySelector('.horizontal .side-menu').style.flexWrap = 'nowrap'
			// To enable wrap horizontal style
			// $('#slide-left').addClass('d-none');
			// $('#slide-right').addClass('d-none');
			// document.querySelector('.horizontal .side-menu').style.flexWrap = 'wrap'
			checkHoriMenu();
			responsive();
		} else {
		}
	});

	$(document).ready(function () {
		let bodyhorizontalHover = $('body').hasClass('horizontal-hover');
		if (bodyhorizontalHover) {
			if(window.innerWidth>=992){
				let li = document.querySelectorAll('.side-menu li')
				li.forEach((e, i) => {
					e.classList.remove('is-expanded')
				})
				var animationSpeed = 300;
				// first level
				var parent = $("[data-bs-toggle='sub-slide']").parents('ul');
				var ul = parent.find('ul:visible').slideUp(animationSpeed);
				ul.removeClass('open');
				var parent1 = $("[data-bs-toggle='sub-slide2']").parents('ul');
				var ul1 = parent1.find('ul:visible').slideUp(animationSpeed);
				ul1.removeClass('open');
			}
			$('body').addClass('horizontal-hover');
			$('body').addClass('horizontal');
			// $('#slide-left').addClass('d-none');
			// $('#slide-right').addClass('d-none');
			// document.querySelector('.horizontal .side-menu').style.flexWrap = 'wrap'
			$('#slide-left').addClass('d-none');
			$('#slide-right').addClass('d-none');
			document.querySelector('.horizontal .side-menu').style.flexWrap = 'wrap'
			$(".main-content").addClass("hor-content");
			$(".main-content").removeClass("app-content");
			$(".main-container").addClass("container");
			$(".main-container").removeClass("container-fluid");
			$(".app-header").addClass("hor-header");
			$(".app-header").removeClass("app-header");
			$(".app-sidebar").addClass("horizontal-main")
			$(".main-sidemenu").addClass("container")
			$('body').removeClass('sidebar-mini');
			$('body').removeClass('sidenav-toggled');
			$('body').removeClass('default-menu');
			$('body').removeClass('icontext-menu');
			$('body').removeClass('icon-overlay');
			$('body').removeClass('closed-leftmenu');
			$('body').removeClass('hover-submenu');
			$('body').removeClass('hover-submenu1');
			checkHoriMenu();
			responsive();
		}
	});

	$('#myonoffswitch111').click(function () {
		if (this.checked) {

			if(window.innerWidth>=992){
				let li = document.querySelectorAll('.side-menu li')
				li.forEach((e, i) => {
					e.classList.remove('is-expanded')
				})
				var animationSpeed = 300;
				// first level
				var parent = $("[data-bs-toggle='sub-slide']").parents('ul');
				var ul = parent.find('ul:visible').slideUp(animationSpeed);
				ul.removeClass('open');
				var parent1 = $("[data-bs-toggle='sub-slide2']").parents('ul');
				var ul1 = parent1.find('ul:visible').slideUp(animationSpeed);
				ul1.removeClass('open');
			}
			
			$('body').addClass('horizontal-hover');
			$('body').addClass('horizontal');
			// $('#slide-left').addClass('d-none');
			// $('#slide-right').addClass('d-none');
			// document.querySelector('.horizontal .side-menu').style.flexWrap = 'wrap'
			document.querySelector('.horizontal .side-menu').style.flexWrap = 'nowrap';
			$('#slide-left').removeClass('d-none');
			$('#slide-right').removeClass('d-none');
			$(".main-content").addClass("hor-content");
			$(".main-content").removeClass("app-content");
			$(".main-container").addClass("container");
			$(".main-container").removeClass("container-fluid");
			$(".app-header").addClass("hor-header");
			$(".app-header").removeClass("app-header");
			$(".app-sidebar").addClass("horizontal-main")
			$(".main-sidemenu").addClass("container")
			$('body').removeClass('sidebar-mini');
			$('body').removeClass('sidenav-toggled');
			$('body').removeClass('default-menu');
			$('body').removeClass('icontext-menu');
			$('body').removeClass('icon-overlay');
			$('body').removeClass('closed-leftmenu');
			$('body').removeClass('hover-submenu');
			$('body').removeClass('hover-submenu1');
			// HorizontalHovermenu();
			checkHoriMenu();
			responsive();
	
		} else {
			$('body').removeClass('horizontal-hover');
			localStorage.setItem("horizontal-hover", "False");
		}
	
	});

})(jQuery);

function checkOptions() {

	// light header 
	if (document.querySelector('body').classList.contains('light-header')) {
		$('#myonoffswitch8').prop('checked', true);
	}
	// color header 
	if (document.querySelector('body').classList.contains('color-header')) {
		$('#myonoffswitch9').prop('checked', true);
	}
	// gradient header 
	if (document.querySelector('body').classList.contains('gradient-header')) {
		$('#myonoffswitch10').prop('checked', true);
	}
	// dark header 
	if (document.querySelector('body').classList.contains('dark-header')) {
		$('#myonoffswitch11').prop('checked', true);
	}

	// light menu
	if (document.querySelector('body').classList.contains('light-menu')) {
		$('#myonoffswitch12').prop('checked', true);
	}
	// color menu
	if (document.querySelector('body').classList.contains('color-menu')) {
		$('#myonoffswitch13').prop('checked', true);
	}
	// gradient menu
	if (document.querySelector('body').classList.contains('gradient-menu')) {
		$('#myonoffswitch14').prop('checked', true);
	}
	// dark menu
	if (document.querySelector('body').classList.contains('dark-menu')) {
		$('#myonoffswitch15').prop('checked', true);
	}
}

function resetData() {
	$('#myonoffswitch3').prop('checked', true);
	$('#myonoffswitch6').prop('checked', true);
	$('#myonoffswitch1').prop('checked', true);
	$('#myonoffswitch8').prop('checked', true);
	$('#myonoffswitch10').prop('checked', false);
	$('#myonoffswitch9').prop('checked', false);
	$('#myonoffswitch11').prop('checked', false);
	$('#myonoffswitch12').prop('checked', true);
	$('#myonoffswitch13').prop('checked', false);
	$('#myonoffswitch14').prop('checked', false);
	$('#myonoffswitch15').prop('checked', false);
	$('#myonoffswitch16').prop('checked', true);
	$('#myonoffswitch17').prop('checked', false);
	$('#myonoffswitch18').prop('checked', true);
	$('body')?.removeClass('bg-img4');
	$('body')?.removeClass('bg-img1');
	$('body')?.removeClass('bg-img2');
	$('body')?.removeClass('bg-img3');
	$('body')?.removeClass('transparent-mode');
	$('body')?.removeClass('dark-mode');
	$('body')?.removeClass('dark-menu');
	$('body')?.removeClass('color-menu');
	$('body')?.removeClass('gradient-menu');
	$('body')?.removeClass('dark-header');
	$('body')?.removeClass('color-header');
	$('body')?.removeClass('gradient-header');
	$('body')?.removeClass('layout-boxed');
	$('body')?.removeClass('icontext-menu');
	$('body')?.removeClass('icon-overlay');
	$('body')?.removeClass('closed-leftmenu');
	$('body')?.removeClass('hover-submenu');
	$('body')?.removeClass('hover-submenu1');
	$('body')?.removeClass('sidenav-toggled');
	$('body')?.removeClass('scrollable-layout');
	names();
}

function transparentStyle() {
	$('body').removeClass('light-menu');
	$('body').removeClass('dark-menu');
	$('body').removeClass('color-menu');
	$('body').removeClass('gradient-menu');
	$('body').removeClass('light-header');
	$('body').removeClass('color-header');
	$('body').removeClass('dark-header'); 
	$('body').removeClass('gradient-header');
}
