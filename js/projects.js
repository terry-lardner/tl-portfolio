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
		$('#defaultInfo').finish();
		$('#project2Info').finish();

		$noHoverTxt1.css({'background-color':'#1A033B'});

		$('#defaultInfo').animate({'opacity':0}, 200, () => {
			$('#defaultInfo').hide();
			$('#project1Info').removeClass('hide');
			$('#project1Info').animate({'opacity':1});
		});		
	});

	$project1Li.on('mouseleave', () => {
		$('#defaultInfo').finish();
		$('#project2Info').finish();

		$noHoverTxt1.css({'background-color':'#000'});

		$('#project1Info').animate({'opacity':0}, 200, () => {
			$('#project1Info').addClass('hide');
			$('#defaultInfo').show();
			$('#defaultInfo').animate({'opacity':1}, 200);
		});
	});

	$project2Li.on('mouseover', () => {
		$('#defaultInfo').finish();
		$('#project1Info').finish();

		$noHoverTxt2.css({'background-color':'#1A033B'});


		$('#defaultInfo').animate({'opacity':0}, 200, () => {
			$('#defaultInfo').hide();
			$('#project2Info').removeClass('hide');
			$('#project2Info').animate({'opacity':1});
		});		
	});

	$project2Li.on('mouseleave', () => {
		$('#defaultInfo').finish();
		$('#project1Info').finish();

		$noHoverTxt2.css({'background-color':'#000'});
		$('#project2Info').animate({'opacity':0}, 200, () => {
			$('#project2Info').addClass('hide');
			$('#defaultInfo').show();
			$('#defaultInfo').animate({'opacity':1}, 200);
		});
	});
}());