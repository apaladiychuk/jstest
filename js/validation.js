$(document).ready(function()
{
        registerValidation = 
		{
			'email' : function() 
			{
				$("span#errorEmail").remove();
				var element = $('#email');
				var elementBox = $('#email_div');
				var pattern = /^.+@.+[.].{2,}$/i;
				if(!pattern.test(element.val())) 
				{
					element.css("border-color", "red");
					elementBox.append("<span id='errorEmail' style='color: red;'>Input a valid E-mail address!</span>");
					registerValidation.errors = true;
				}
				else
				{
					element.css("border-color", "LightGreen");
					registerValidation.errors = false;
				}
			},
			'phonenumber' : function() 
			{
				$("span#errorPhone").remove();
				var element = $('#phonenumber');
				var elementBox = $('#phone_div');
				var pattern = /^\+[0-9]{1,2}\([0-9]{3}\)[0-9]{3}-[0-9]{2}-[0-9]{2}$/i;
				if(!pattern.test(element.val())) 
				{
					element.css("border-color", "red");
					elementBox.append("<span id='errorPhone' style='color: red;'>Input a valid phone number!</span>");
					registerValidation.errors = true;
				}
				else
				{
					element.css("border-color", "LightGreen");
					registerValidation.errors = false;
				}
			},
			'password' : function() 
			{
				$("span#errorPass").remove();
				var pass = $('#register-password');
				var elementBox = $('#pass_div');
				var passConfirm = $('#confirm-password');
				if(pass.val() != passConfirm.val() || pass.val() =='' || passConfirm.val() == '')
				{
					pass.css("border-color", "red");
					passConfirm.css("border-color", "red");
					elementBox.append("<span id='errorPass' style='color: red;'>Passwords do not match!</span>");
					registerValidation.errors = true;
				}
				else
				{
					pass.css("border-color", "LightGreen");
					passConfirm.css("border-color", "LightGreen");
					registerValidation.errors = false;
				}
			},
        };
		$('#email').change(registerValidation.email);
		$('#phonenumber').change(registerValidation.phonenumber);
		$('#register-password').change(registerValidation.password);
		$('#confirm-password').change(registerValidation.password);
		$("#phonenumber").mask("+38(999)999-99-99");
		$('#register-submit').click(function (){
                registerValidation.email();
				registerValidation.phonenumber();
				registerValidation.password();
				if(registerValidation.errors) return false;
				//в моём браузере при нажатии просто обновляло странцу, не понял почему, поэтому false
				else return false;
                
        });
});