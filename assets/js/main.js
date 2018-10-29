/*
	Hyperspace by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$sidebar = $('#sidebar');

	// Breakpoints.
		breakpoints({
			xlarge:   [ '1281px',  '1680px' ],
			large:    [ '981px',   '1280px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ null,      '480px'  ]
		});

	// Hack: Enable IE flexbox workarounds.
		if (browser.name == 'ie')
			$body.addClass('is-ie');

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});
		
		particlesJS("particles-js", {
			"particles": {
			  "number": {
				"value": 80,
				"density": {
				  "enable": true,
				  "value_area": 800
				}
			  },
			  "color": {
				"value": "#ffffff"
			  },
			  "shape": {
				"type": "circle",
				"stroke": {
				  "width": 0,
				  "color": "#000000"
				},
				"polygon": {
				  "nb_sides": 5
				},
				"image": {
				  "src": "img/github.svg",
				  "width": 100,
				  "height": 100
				}
			  },
			  "opacity": {
				"value": 0.5,
				"random": false,
				"anim": {
				  "enable": false,
				  "speed": 1,
				  "opacity_min": 0.1,
				  "sync": false
				}
			  },
			  "size": {
				"value": 3,
				"random": true,
				"anim": {
				  "enable": false,
				  "speed": 40,
				  "size_min": 0.1,
				  "sync": false
				}
			  },
			  "line_linked": {
				"enable": true,
				"distance": 150,
				"color": "#ffffff",
				"opacity": 0.4,
				"width": 1
			  },
			  "move": {
				"enable": true,
				"speed": 6,
				"direction": "none",
				"random": false,
				"straight": false,
				"out_mode": "out",
				"bounce": false,
				"attract": {
				  "enable": false,
				  "rotateX": 600,
				  "rotateY": 1200
				}
			  }
			},
			"interactivity": {
			  "detect_on": "canvas",
			  "events": {
				"onhover": {
				  "enable": true,
				  "mode": "repulse"
				},
				"onclick": {
				  "enable": true,
				  "mode": "push"
				},
				"resize": true
			  },
			  "modes": {
				"grab": {
				  "distance": 400,
				  "line_linked": {
					"opacity": 1
				  }
				},
				"bubble": {
				  "distance": 400,
				  "size": 40,
				  "duration": 2,
				  "opacity": 8,
				  "speed": 3
				},
				"repulse": {
				  "distance": 200,
				  "duration": 0.4
				},
				"push": {
				  "particles_nb": 4
				},
				"remove": {
				  "particles_nb": 2
				}
			  }
			},
			"retina_detect": true
		  });

		  particlesJS("particle-js", {
			"particles": {
			  "number": {
				"value": 355,
				"density": {
				  "enable": true,
				  "value_area": 789.1476416322727
				}
			  },
			  "color": {
				"value": "#ffffff"
			  },
			  "shape": {
				"type": "circle",
				"stroke": {
				  "width": 0,
				  "color": "#000000"
				},
				"polygon": {
				  "nb_sides": 5
				},
				"image": {
				  "src": "img/github.svg",
				  "width": 100,
				  "height": 100
				}
			  },
			  "opacity": {
				"value": 0.48927153781200905,
				"random": false,
				"anim": {
				  "enable": true,
				  "speed": 0.2,
				  "opacity_min": 0,
				  "sync": false
				}
			  },
			  "size": {
				"value": 2,
				"random": true,
				"anim": {
				  "enable": true,
				  "speed": 2,
				  "size_min": 0,
				  "sync": false
				}
			  },
			  "line_linked": {
				"enable": false,
				"distance": 150,
				"color": "#ffffff",
				"opacity": 0.4,
				"width": 1
			  },
			  "move": {
				"enable": true,
				"speed": 0.2,
				"direction": "none",
				"random": true,
				"straight": false,
				"out_mode": "out",
				"bounce": false,
				"attract": {
				  "enable": false,
				  "rotateX": 600,
				  "rotateY": 1200
				}
			  }
			},
			"interactivity": {
			  "detect_on": "canvas",
			  "events": {
				"onhover": {
				  "enable": true,
				  "mode": "bubble"
				},
				"onclick": {
				  "enable": true,
				  "mode": "push"
				},
				"resize": true
			  },
			  "modes": {
				"grab": {
				  "distance": 400,
				  "line_linked": {
					"opacity": 1
				  }
				},
				"bubble": {
				  "distance": 83.91608391608392,
				  "size": 1,
				  "duration": 3,
				  "opacity": 1,
				  "speed": 3
				},
				"repulse": {
				  "distance": 200,
				  "duration": 0.4
				},
				"push": {
				  "particles_nb": 4
				},
				"remove": {
				  "particles_nb": 2
				}
			  }
			},
			"retina_detect": true
		  });

		
	// Forms.

		// Hack: Activate non-input submits.
			$('form').on('click', '.submit', function(event) {

				// Stop propagation, default.
					event.stopPropagation();
					event.preventDefault();

				// Submit form.
					$(this).parents('form').submit();

			});

	// Sidebar.
		if ($sidebar.length > 0) {

			var $sidebar_a = $sidebar.find('a');

			$sidebar_a
				.addClass('scrolly')
				.on('click', function() {

					var $this = $(this);

					// External link? Bail.
						if ($this.attr('href').charAt(0) != '#')
							return;

					// Deactivate all links.
						$sidebar_a.removeClass('active');

					// Activate link *and* lock it (so Scrollex doesn't try to activate other links as we're scrolling to this one's section).
						$this
							.addClass('active')
							.addClass('active-locked');

				})
				.each(function() {

					var	$this = $(this),
						id = $this.attr('href'),
						$section = $(id);

					// No section for this link? Bail.
						if ($section.length < 1)
							return;

					// Scrollex.
						$section.scrollex({
							mode: 'middle',
							top: '-20vh',
							bottom: '-20vh',
							initialize: function() {

								// Deactivate section.
									$section.addClass('inactive');

							},
							enter: function() {

								// Activate section.
									$section.removeClass('inactive');

								// No locked links? Deactivate all links and activate this section's one.
									if ($sidebar_a.filter('.active-locked').length == 0) {

										$sidebar_a.removeClass('active');
										$this.addClass('active');

									}

								// Otherwise, if this section's link is the one that's locked, unlock it.
									else if ($this.hasClass('active-locked'))
										$this.removeClass('active-locked');

							}
						});

				});

		}
		
	// Scrolly.
		$('.scrolly').scrolly({
			speed: 1000,
			offset: function() {

				// If <=large, >small, and sidebar is present, use its height as the offset.
					if (breakpoints.active('<=large')
					&&	!breakpoints.active('<=small')
					&&	$sidebar.length > 0)
						return $sidebar.height();

				return 0;

			}
		});

	// Spotlights.
		$('.spotlights > section')
			.scrollex({
				mode: 'middle',
				top: '-10vh',
				bottom: '-10vh',
				initialize: function() {

					// Deactivate section.
						$(this).addClass('inactive');

				},
				enter: function() {

					// Activate section.
						$(this).removeClass('inactive');

				}
			})
			.each(function() {

				var	$this = $(this),
					$image = $this.find('.image'),
					$img = $image.find('img'),
					x;

				// Assign image.
					$image.css('background-image', 'url(' + $img.attr('src') + ')');

				// Set background position.
					if (x = $img.data('position'))
						$image.css('background-position', x);

				// Hide <img>.
					$img.hide();

			});

	// Features.
		$('.features')
			.scrollex({
				mode: 'middle',
				top: '-20vh',
				bottom: '-20vh',
				initialize: function() {

					// Deactivate section.
						$(this).addClass('inactive');

				},
				enter: function() {

					// Activate section.
						$(this).removeClass('inactive');

				}
			});

})(jQuery);