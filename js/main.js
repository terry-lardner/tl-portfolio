'use strict';

(function() {
	//cache DOM start
	const $workViewport = $('#contentViewport').find('#workViewport');

	const $viewportWeb = $workViewport.find('#viewportWeb');
	const $viewportCodepen = $workViewport.find('#viewportCodepen');
	const $viewportOther = $workViewport.find('#viewportOther');

	const $objViewportWeb = {
		div: $viewportWeb,
		link: $viewportWeb.find('#previewWeb'),
		img: $viewportWeb.find('img'),
		mouseOverBg: $viewportWeb.find('.mouseOverBg'),
		mouseOverTxt: $viewportWeb.find('.mouseOverTxt'),
		noHoverBg: $viewportWeb.find('.noHoverBg')
	};

	const $objViewportCodePen = {
		div: $viewportCodepen,
		link: $viewportCodepen.find('#previewCodepen'),
		img: $viewportCodepen.find('img'),
		mouseOverBg: $viewportCodepen.find('.mouseOverBg'),
		mouseOverTxt: $viewportCodepen.find('.mouseOverTxt'),
		noHoverBg: $viewportCodepen.find('.noHoverBg')
	};

	const $objViewportOther = {
		div: $viewportOther,
		link: $viewportOther.find('#previewOther'),
		img: $viewportOther.find('img'),
		mouseOverBg: $viewportOther.find('.mouseOverBg'),
		mouseOverTxt: $viewportOther.find('.mouseOverTxt'),
		noHoverBg: $viewportOther.find('.noHoverBg')
	};
	//cacheDOM end

	let animIntervalImg = 200;
	let animIntervalmouseOverBg = 300;
	let animIntervalmouseOverTxt = 300;
	let animIntervalNoHover = 50;
	let targetOpacity = 0.1;

	function showAnim(obj) {
		obj.noHoverBg.stop().animate({'opacity':0}, animIntervalNoHover);
		obj.img.stop().animate({opacity: targetOpacity}, animIntervalImg, () => {
			obj.mouseOverBg.stop().animate({opacity:1}, { duration: animIntervalmouseOverBg });
			obj.mouseOverTxt.stop().animate({'margin-left':'0'}, animIntervalmouseOverTxt);
		});		
	}

	function hideAnim(obj) {
		obj.img.stop().animate({opacity:1}, animIntervalImg, () => {
			obj.mouseOverBg.stop().animate({opacity:0}, { duration: animIntervalmouseOverBg });
			obj.mouseOverTxt.stop().animate({'margin-left':'-150'}, animIntervalmouseOverTxt);
			obj.noHoverBg.stop().animate({opacity:1}, 800);
		});	

	}

	//animate #My work
	$objViewportWeb.link.on('mouseover', () => {
		showAnim($objViewportWeb);
	});

	$objViewportWeb.link.on('mouseleave', () => {
		hideAnim($objViewportWeb);
	});

	//animate #Codepen.io
	$objViewportCodePen.link.on('mouseover', () => {
		showAnim($objViewportCodePen);

	});

	$objViewportCodePen.link.on('mouseleave', () => {		
		hideAnim($objViewportCodePen);

	});

	//animate #Other
	$objViewportOther.link.on('mouseover', () => {
		showAnim($objViewportOther);
	});

	$objViewportOther.link.on('mouseleave', ()=> {	
		hideAnim($objViewportOther);
	});

}());