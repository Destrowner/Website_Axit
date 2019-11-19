document.addEventListener('DOMContentLoaded', function() {

	(function() {
		const contactName = document.getElementById('contactName'),
					contactEmail = document.getElementById('contactEmail'),
					contactSubject = document.getElementById('contactSubject'),
					contactMessage = document.getElementById('contactMessage'),
					contactSubmit = document.getElementById('contactSubmit');

		const mainName = document.getElementById('mainName'),
					mainEmail = document.getElementById('mainEmail'),
					mainPass = document.getElementById('mainPass'),
					mainSubmit = document.getElementById('mainSubmit');

		const nameRegex = /^[a-zA-Z]+$/,
					emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
					subjectRegex = /[a-zA-Z{1, 20}]/,
					messageRegex = /[a-zA-Z{5, 100}]/,
					pass = '';

		contactSubmit.addEventListener('click', function(e) {	
			validate(contactName, nameRegex.test(contactName.value), e);
			validate(contactEmail, emailRegex.test(contactEmail.value), e);
			validate(contactSubject, subjectRegex.test(contactSubject.value), e);
			validate(contactMessage, messageRegex.test(contactMessage.value), e);
		});

		mainSubmit.addEventListener('click', function(e) {
			validate(mainName, nameRegex.test(mainName.value), e);
			validate(mainEmail, emailRegex.test(mainEmail.value), e);
			if (mainPass.value == pass) {
				e.preventDefault();
			}
		});
	}());

	function validate(elem, bool, e) {
		if (!bool) {
			e.preventDefault();
			elem.style.cssText = 'color: red; border-radius: 5px; border: 2px solid red';
		} else {
			elem.style.cssText = '';
		}
	}

});