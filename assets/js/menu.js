window.addEventListener('DOMContentLoaded', function() {
	window.MENU = (function() {
		var pushRightbutton = document.getElementById('push-right');
		var pushRightNavButton = document.getElementById('push-right-navigate');
		var closeButton = document.getElementById('close-button');
		var nav = document.getElementById('nav-right');
		var main = document.getElementById('main');
		var transitionEvent = getTransitionEvent();

		pushRightbutton.addEventListener('click', function(e) {
			nav.classList.add('navRight--wrapper-open');
			nav.classList.remove('navRight--wrapper-closed');
			main.classList.add('has-push-right');
		});

		closeButton.addEventListener('click', function(e) {
			nav.classList.remove('navRight--wrapper-open');
			nav.classList.add('navRight--wrapper-closed');
			main.classList.remove('has-push-right');
		});

		pushRightNavButton.addEventListener('click', function() {
			pushRightbutton.dispatchEvent(new Event('click'));
			transitionEvent && nav.addEventListener(transitionEvent, function() {
				location.href = '/configurator.html';
			});		
		});
		


	}());


});

function getTransitionEvent(){
    var t;
    var el = document.createElement('fakeelement');
    var transitions = {
      'transition':'transitionend',
      'OTransition':'oTransitionEnd',
      'MozTransition':'transitionend',
      'WebkitTransition':'webkitTransitionEnd'
    }

    for(t in transitions){
        if( el.style[t] !== undefined ){
            return transitions[t];
        }
    }
}