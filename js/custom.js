$(function() {

    $("#login-form").validate({

        rules: {
            username: {
                required: true,
                minlength:2,
                maxlength:16
            },
            password: {
                required: true,
                email: true
            },
            form_tel: {
                required: true,
                digits: true
            },
            password: {
                required: true,
                minlength:3,
                maxlength:16
            },
            form_pswd2: {
                required: true,
                minlength: 6,
                equalTo: "#form_pswd1"
            }
        },
        messages: {
            username: {
                required: "Поле Имя обязательное для заполнения",
                minlength: "Логин должен быть минимум 2 буквы",
                maxlength: "Логин должен быть максимум 16 знаков"
            },
            password: {
                required: "Поле Имя обязательное для заполнения",
                minlength: "Логин должен быть минимум 2 буквы",
                maxlength: "Логин должен быть максимум 16 знаков"
            },
            form_email: {
                required: "Поле E-mail обязательное для заполнения",
                email: "Введите пожалуйста корректный e-mail"
            }
        },
        focusCleanup: true,
        focusInvalid: false,
        invalidHandler: function(event, validator) {
            $(".js-form-message").text("Исправьте пожалуйста все ошибки.");
        },
        onkeyup: function(element) {
            $(".js-form-message").text("");
        },
        errorPlacement: function(error, element) {
            return true;
        },
        errorClass: "form-input_error",
        validClass: "form-input_success"
    });
    $.validator.addMethod( "phoneUK", function( phone_number, element ) {
    phone_number = phone_number.replace( /\(|\)|\s+|-/g, "" );
    return this.optional( element ) || phone_number.length > 9 &&
        phone_number.match( /^(?:(?:(?:00\s?|\+)44\s?)|(?:\(?0))(?:\d{2}\)?\s?\d{4}\s?\d{4}|\d{3}\)?\s?\d{3}\s?\d{3,4}|\d{4}\)?\s?(?:\d{5}|\d{3}\s?\d{3})|\d{5}\)?\s?\d{4,5})$/ );
}, "Please specify a valid phone number" );


});
