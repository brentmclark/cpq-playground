window.addEventListener('DOMContentLoaded', function() {
	window.MENU = (function() {
		var pushRightbutton = document.getElementById('push-right');
		var flyoutRightbutton = document.getElementById('flyout-right');
		var pushRightNavButton = document.getElementById('push-right-navigate');
		var flyoutRightNavButton = document.getElementById('flyout-right-navigate');
		var closeButton = document.getElementById('close-button');
		var nav = document.getElementById('nav-right');
		var main = document.getElementById('main');
		var transitionEvent = getTransitionEvent();

		nav.addEventListener('click', function (e) {
		    if (e.target.id === 'close-button')
		    {
		        nav.classList.remove('navRight--wrapper-open');
		        nav.classList.add('navRight--wrapper-closed');
		        main.classList.remove('has-push-right');
		    }
		});

		//Push Nav
		pushRightbutton.addEventListener('click', function(e) {
			nav.classList.add('navRight--wrapper-open');
			nav.classList.remove('navRight--wrapper-closed');
			main.classList.add('has-push-right');
		});

		pushRightNavButton.addEventListener('click', function() {
			pushRightbutton.dispatchEvent(new Event('click'));
			transitionEvent && nav.addEventListener(transitionEvent, function() {
				location.href = '/configurator';
			});		
		});

		//Flyout Nav
		flyoutRightbutton.addEventListener('click', function(e) {
			nav.classList.add('navRight--wrapper-open');
			nav.classList.remove('navRight--wrapper-closed');
		});

		flyoutRightNavButton.addEventListener('click', function() {
			flyoutRightbutton.dispatchEvent(new Event('click'));
			transitionEvent && nav.addEventListener(transitionEvent, function() {
				location.href = '/configurator';
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