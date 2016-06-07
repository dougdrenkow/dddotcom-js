/* J A V A S C R I P T
 * For DouglasDrenkow.com
 *
 * jquery-1.11.2.min.js ALSO CALLED, FROM FOOT OF WEB PAGES
 *
 * PRELOAD IMAGES, called for common images on each page (ex. logo).
 * HEADER POSITIONING, to allow for length of navMenu.
 * DYNAMIC HEADER POSITIONING, if window is resized during visit.
 * ul.navMenu UP-AND-DOWN.
 * EVERY ul.navMenu UP IF DOCUMENT IS CLICKED ON ANY ELEMENT WHOSE IMMEDIATE PARENT DOES NOT HAVE THE CLASS OF .navMenuTrigger.
 * slideDiv UP-AND-DOWN, as for accordionBox of Selected Clients.
 * SCROLL DOWN TO ANCHOR.
 * SCROLL UP TO TOP.
 * HORIZONTAL SCROLLER.
 *
 * Copyright 2015 Douglas Drenkow. All Rights Reserved.
 */

$(document).ready(function() {

	"use strict"; /* for security */
	
	/* PRELOAD IMAGES, called for common images on each page (ex. logo) -- hence, not used in this document, as DW error says.*/
		
	function preload(arrayOfImages) {
		$(arrayOfImages).each(function(){
			$('<img/>')[0].src = this;
		});
	}
	
	/* HEADER POSITIONING, to allow for length of navMenu */
		
	var windowHeightPx = $(window).height();
	
	var windowHeightRem = windowHeightPx/16;
	
	if (windowHeightRem <= 32) {
		
		$("#header").removeClass("headerFixed");
		
		$("#header").addClass("headerRelative");
	
	} else {
		
		$("#header").removeClass("headerRelative");
		
		$("#header").addClass("headerFixed");
		
	}
	
 	/* DYNAMIC HEADER POSITIONING, if window is resized during visit */
 	
	$(window).resize(function(){
        
		windowHeightPx = $(window).height(); /* vars declared globally above */
		
		windowHeightRem = windowHeightPx/16;
		
		if (windowHeightRem <= 32) {
			
			$("#header").removeClass("headerFixed");
			
			$("#header").addClass("headerRelative");
		
		} else {
			
			$("#header").removeClass("headerRelative");
			
			$("#header").addClass("headerFixed");
			
		}
    
	});

	/* ul.navMenu UP-AND-DOWN */
			
	$("h5.navMenuTrigger").click(function(){
		
		if ($(this).hasClass("selected")) {
			
			if($(this).parent().next().hasClass("slidDown")) {
			
				$(this).parent().next().slideUp();
				
				$(this).parent().next().removeClass("slidDown");
				
			} else {
			
				$("ul.navMenu").slideUp();
				
				$("ul.navMenu").removeClass("slidDown");
				
				$(this).parent().next().slideDown();
				
				$(this).parent().next().addClass("slidDown");
				
			}
					
		} else {
			
			$("h5.navMenuTrigger").removeClass("selected");
			
			$(this).addClass("selected");

			$("ul.navMenu").slideUp();
			
			$("ul.navMenu").removeClass("slidDown");
			
			$(this).parent().next().slideDown();
			
			$(this).parent().next().addClass("slidDown");
			
		}
			
	});
				
	/* EVERY ul.navMenu UP AND EVERY h5.navMenuTrigger UN-SELECTED IF DOCUMENT IS CLICKED ON ANY ELEMENT THAT DOES NOT HAVE THE CLASS OF h5.navMenuTrigger (I.E., ANYWHERE ELSE ON PAGE) */
			
 	$(document).click(function(event){
        
		if(!$(event.target).hasClass('navMenuTrigger')){
		
			$("ul.navMenu").slideUp();
			
			$("ul.navMenu").removeClass("slidDown");
			
			$("h5.navMenuTrigger").removeClass("selected");
			
		}
    
	});
				
	/* slideDiv UP-AND-DOWN, as for accordionBox of Selected Clients */
			
	$("h6.slideDivTrigger").click(function(){
		
		if ($(this).hasClass("selected")) {
			
			$(this).removeClass("selected");
			
			$(this).next().slideUp();
			
		} else {
			
			$("ul.slideDiv").slideUp();
		
			$("h6.slideDivTrigger").removeClass("selected");
			
			$(this).addClass("selected");
			
			$(this).next().slideDown();
					
		}
		
	});
	
	/* SCROLL DOWN TO ANCHOR (Note: Select html for Firefox and IE, body for Chrome, Safari, and Opera) <http://stackoverflow.com/questions/8579643/simple-jquery-scroll-to-anchor-up-or-down-the-page>
	
	Note that although this method does not involve href hash tags, I leave them set on the link anchors for ease of bookmarking; but according to my trials, href values themselves do not work with offset().top if there are blanks or special characters -- even if URL-encoded (Modify example here: <http://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_eff_animate_smoothscroll>) */
	
	$(".samePageNavBttn").click(function() {
		
		var aID=$(this).attr("id").substr(3); /* delete arbitrary 'Nav" substring that distinguishes id of button (this) from id of target (aTag, below) */
		
		var aTag = $("a[name='"+ aID +"']");
		
		$('html,body').animate({
			
			scrollTop: aTag.offset().top
			
		});
	
	});
	
	/* SCROLL UP TO TOP: Fixed at bottom of viewport with Footer (Note: Select html for Firefox and IE, body for Chrome, Safari, and Opera). */
	
	$("div.backToTopScroller").click(function(){
		
		$("html, body").animate({
			
			scrollTop: 0
		
		});
		
	});
	
	$("div#fixedBackToTopLink").click(function(){
		
		$("html, body").animate({
			
			scrollTop: 0
		
		});
		
	});
	
	/* In CSS, #fixedBackToTopLink starts with display:none since no scrolling to top is needed (and to not obscure part of intro video). */
	
	$(window).scroll(function() {
		
		if ($(document).scrollTop() > 320) {
			
			$("div#fixedBackToTopLink").fadeIn();
		
		} else {
			
			$("div#fixedBackToTopLink").fadeOut();
		
		}
	
	});
  
/* END OF jQUERY */
			
}); 
