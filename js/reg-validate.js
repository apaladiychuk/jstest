	$(document).ready(function() {
    $('#register-form').bootstrapValidator(
	{
        // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: 
		{
            username: 
			{
                validators: {
                        stringLength: {
                        min: 3,
                    },
                        notEmpty: {
                        message: 'Please supply your username'
                    }
                }
            },
            email: 
			{
                validators: {
                    notEmpty: {
                        message: 'Input your e-mail address!'
                    },
                    emailAddress: {
                        message: 'Please supply a valid email address'
                    }
                }
            },
            phone: 
			{
                validators: {
                     stringLength: {
                        min: 17,
						message: 'Input a valid phone number!'
                    },
                    notEmpty: {
                        message: 'Input a phone number!'
                    }
                }
            },
            password: 
			{
                validators: {
                     stringLength: {
                        min: 8,
                    },
                    notEmpty: {
                        message: 'Input a desired password!'
                    }
                }
            },
            confirm_password: 
			{
                validators: {
                    identical: {
                    field: 'password',
                    message: 'Passwords do not match!'
					},
                    notEmpty: {
                        message: 'Re-write your password!'
                    }
                }
            }
		}
    })
        .on('success.form.bv', function(e) {
            $('#success_message').slideDown({ opacity: "show" }, "slow") // Do something ...
                $('#contact_form').data('bootstrapValidator').resetForm();

            // Prevent form submission
            e.preventDefault();

            // Get the form instance
            var $form = $(e.target);

            // Get the BootstrapValidator instance
            var bv = $form.data('bootstrapValidator');

            // Use Ajax to submit form data
            $.post($form.attr('action'), $form.serialize(), function(result) {
                console.log(result);
            }, 'json');
        });
});