/* global $, alert, console*/

/* ---------------------------------------

Template Name: Mortale 
Description: Responsive HTML5 / CSS3 OnePage Portfolio-Resume Template
Version: 1.0
Author: Ahmed Beheiry

=>  Table of Content  <=

1 - Loading Page
2 - Hide Nav menu after clicking on a link
3 - Move to section onclick on navbar link
4 - Launch To Top Button when scroll
5 - Go To Top onclick on toTop Button
6 - Start Skills bars animation in About-Me Section 
7 - Start numbers animate at My Progress Section 
8 - Start Owl Carousel in Testimonials Section 
9 - Start Owl Carousel in Clients Section

--------------------------------------- */

(function($) {

	"use strict";

	/* ---------------------------------------------------
		1 - Loading Page
	----------------------------------------------------- */	
	$(window).on("load", function() {
		var loadingPage = $(".loading-page");
		loadingPage.delay(1000).fadeOut(2000).remove();
	});

	/* ---------------------------------------------------
		2 - Hide Nav menu after clicking on a link 
	----------------------------------------------------- */
	$(".nav a").on("click", function() {
		$("#navbar-collaps").collapse("hide");
	});

	/* ---------------------------------------------------------
		3 - Move to section onclick on navbar link 
	----------------------------------------------------- */
	$("a.scroll-link").on("click", function(e) {
		e.preventDefault();
		var target = $($(this).attr("href"));
		if (target) {
			$("html, body").animate({
				scrollTop: target.offset().top
			}, 1000);
		}
	});

	/* ---------------------------------------------------
		4 - Launch To Top Button when scroll 
	----------------------------------------------------- */
	var toTopButton = $("#to-top");
	$(window).on("scroll", function() {
		if ($(this).scrollTop() > 400) {
			toTopButton.addClass("appeared");
		} else {
			toTopButton.removeClass("appeared");
		}
	});

	/* ---------------------------------------------------
		5 - Go To Top onclick on toTop Button
	----------------------------------------------------- */
	toTopButton.on("click", function() {
	$("html, body").animate({
			scrollTop: 0
		}, 1500);
	});

	/* ---------------------------------------------------
		6 - Start Skills bars animation in About-Me Section 
	----------------------------------------------------- */
	$(window).on("scroll", function() {
		var bar = $("#skills .progress-bar"),
				barPos,	
				windowBtm = $(window).scrollTop() + $(window).height();
		bar.each(function () {
			barPos = $(this).offset().top;
			if(barPos <= windowBtm - 50) {
				$(this).css("width", function() {
					return $(this).attr("data-width");
				});
				$(this).children(".percent").css({
					'-webkit-transform': 'scale(1)',
					'-moz-transform': 'scale(1)',
					'-ms-transform': 'scale(1)',
					'-o-transform': 'scale(1)',
					'transform': 'scale(1)'
				});
			}
		});
	});

	/* ---------------------------------------------------
		7 - Start numbers animate at My Progress Section 
	----------------------------------------------------- */
	$("#progress .progress-fact").appear(function() {
		$(".timer").countTo();
	}, {accX: 0, accY: -150});

	$(document).ready(function() {
		/* ---------------------------------------------------
			8 - Start Owl Carousel in Testimonials Section 
		----------------------------------------------------- */
		$("#testimonials .owl-carousel").owlCarousel({
			animateOut: "slideOutDown",
			animateIn: "slideInUp",
			items: 1,
			margin:30,
			stagePadding:30,
			smartSpeed: 450,
			loop: true,
			autoplay: true,
			autoplayTimeout: 3000,
			autoplayHoverPause: true,
			nav: true,
			navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
			dots: true,
			dotsEach: true
		});

		/* ---------------------------------------------------
			9 - Start Owl Carousel in Clients Section 
		----------------------------------------------------- */
		$("#clients .owl-carousel").owlCarousel({
			loop: true,
			responsiveClass: true,
			margin: 30,
			stagePadding:30,
			nav: false,
			dots: false,
			dotsEach: false,
			autoplay: true,
			autoplayTimeout: 1500,
			autoplayHoverPause: true,
			responsive: {
				0: { items: 1	},
				480: { items: 3 },
				768: { items: 4 },
				1000: { items: 6 }
			}
		});
	});
})(jQuery);