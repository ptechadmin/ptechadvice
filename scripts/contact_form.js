window.onload = function() {
            document.getElementById('contact-form').addEventListener('submit', function(event) {
                event.preventDefault();
                // generate a five digit number for the contact_number variable
                this.contact_number.value = Math.random() * 100000 | 0;
                // these IDs from the previous steps
                emailjs.sendForm('service_mfsybca', 'template_3uoajcp', this)
                    .then(function() {
                        console.log('SUCCESS!');
						document.getElementById("contact-form").reset()
						window.alert("Message Sent!");
                    }, function(error) {
                        console.log('FAILED...', error);
						document.getElementById("contact-form").reset()
                    });
            });
			
			
        }