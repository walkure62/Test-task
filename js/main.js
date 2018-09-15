// Анимация background
var imgHead = [
	'./images/bg/bg.jpg',
	'./images/bg/bg1.jpg',
	'./images/bg/bg2.jpg',
	'./images/bg/bg3.jpg',
	'./images/bg/bg4.jpg',
	'./images/bg/bg5.jpg'
], i = 1;

function csaHead() {

	if (i > (imgHead.length - 1)) {

		$('.csa-head').animate({ 'opacity': '0' }, 200, function () {

			i = 1;

			$('.csa-head').css({ 'background': 'url(' + imgHead[0] + ')' });

		});

		$('.csa-head').animate({ 'opacity': '1' }, 200);

	} else {

		$('.csa-head').animate({ 'opacity': '0' }, 200, function () {

			$('.csa-head').css({ 'background': 'url(' + imgHead[i] + ')' });

			$('.csa-head').css({ 'background-size': '100%' });

			$('.csa-head').css({ 'background-repeat': 'no-repeat' });

			i++;

		});

		$('.csa-head').animate({ 'opacity': '1' }, 200);

	}

}

var intervalCsaHead = setInterval(csaHead, 8000);