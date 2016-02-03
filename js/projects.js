'use strict';

(function() {
	//cache DOM start
	const $workViewport = $('#workViewport');
	const $project1Li = $workViewport.find('#project1');
	const $project2Li = $workViewport.find('#project2');
	const $project3Li = $workViewport.find('#project3');

	const $noHoverTxt1 = $project1Li.find('.noHoverTxt-project');
	const $noHoverTxt2 = $project2Li.find('.noHoverTxt-project');
	const $noHoverTxt3 = $project3Li.find('.noHoverTxt-project');
	

	//cache DOM end
	
	$project1Li.on('mouseover', () => {

	});

	$project2Li.on('mouseover', () => {

	});
}());