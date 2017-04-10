$(document).ready(function()
{
        registerValidation = 
		{
			'email' : function() 
			{
				var element = $('#email');
				var elementOffset = element.offset();
				$('<div id="emailInfo" class="info"></div>').appendTo($('.form-group').get(6));
				var emailInfo = $('#emailInfo');
				var pattern = /^.+@.+[.].{2,}$/i;
				if(!pattern.test(element.val())) 
				{
					emailInfo.removeClass('correct').addClass('error').html('Input a valid email: example@gmail.com');
					emailInfo.css({
									top: elementOffset.top - element.height() - 165,
									left: elementOffset.left + element.width() - 745
					});
					emailInfo.show();
					element.css("border-color", "red");
					registerValidation.errors = true;
				}
				else
				{
					emailInfo.removeClass('error').addClass('correct').html('√');
					emailInfo.css({
									top: elementOffset.top - element.height() - 165,
									left: elementOffset.left + element.width() - 745
					});
					emailInfo.show();
					element.css("border-color", "#ccc");
					registerValidation.errors = false;
				}
			},
			'phonenumber' : function() 
			{
				var element = $('#phonenumber');
				var elementOffset = element.offset();
				$('<div id="phonenumberInfo" class="info"></div>').appendTo($('.form-group').get(7));
				var phonenumberInfo = $('#phonenumberInfo');
				var pattern = /^\+[0-9]{1,2}\([0-9]{3}\)[0-9]{3}-[0-9]{2}-[0-9]{2}$/i;
				if(!pattern.test(element.val())) 
				{
					element.css("border-color", "red");
					phonenumberInfo.removeClass('correct').addClass('error').html('Wrong phone number: +38(000)000-00-00');
					phonenumberInfo.css({
									top: elementOffset.top - element.height() - 175,
									left: elementOffset.left + element.width() - 755
					});
					phonenumberInfo.show();
					registerValidation.errors = true;
				}
				else
				{
					element.css("border-color", "#ccc");
					phonenumberInfo.removeClass('error').addClass('correct').html('√');
					phonenumberInfo.css({
									top: elementOffset.top - element.height() - 175,
									left: elementOffset.left + element.width() - 755
					});
					phonenumberInfo.show();
					registerValidation.errors = false;
				}
			},
			'password' : function() 
			{
				var pass = $('#register-password');
				var passConfirm = $('#confirm-password');
				var passConfirmOffset = passConfirm.offset();
				$('<div id="confirm-passwordInfo" class="info"></div>').appendTo($('.form-group').get(9));
				var confirm_passwordInfo = $('#confirm-passwordInfo');
				if(pass.val() != passConfirm.val() || pass.val() =='' || passConfirm.val() == '')
				{
					pass.css("border-color", "red");
					passConfirm.css("border-color", "red");
					confirm_passwordInfo.removeClass('correct').addClass('error').html('Passwords don\'t match');
					confirm_passwordInfo.css({
									top: passConfirmOffset.top - passConfirm.height() - 165,
									left: passConfirmOffset.left + passConfirm.width() - 665
					});
					confirm_passwordInfo.show();
					registerValidation.errors = true;
				}
				else
				{
					pass.css("border-color", "#ccc");
					passConfirm.css("border-color", "#ccc");
					confirm_passwordInfo.removeClass('error').addClass('correct').html('√');
					confirm_passwordInfo.css({
									top: passConfirmOffset.top - passConfirm.height() - 165,
									left: passConfirmOffset.left + passConfirm.width() - 665
					});
					confirm_passwordInfo.show();
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