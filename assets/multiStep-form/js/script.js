var form = $("#my-form");
form.validate({
    errorPlacement: function errorPlacement(error, element) { element.before(error); },
    rules: {
        contactPersonName: {
            required: "#contactWithMe:unchecked"
        },
        contactPersonPhone: {
            required: "#contactWithMe:unchecked"
        },
        contactPersonEmail: {
            required: "#contactWithMe:unchecked"
        },
        contactPersonRel: {
            required: "#contactWithMe:unchecked"
        },
        propSell: {
            required: "#Sell:checked"
        },
        propRent: {
            required: "#Rent:checked"
        },
        propSecDepo: {
            required: "#Rent:checked"
        },

    },

    //Add boostrap design Section
    errorElement: "em",
    errorPlacement: function (error, element) {
        // Add the `invalid-feedback` class to the error element
        error.addClass("invalid-feedback");

        if (element.prop("type") === "checkbox") {
            error.insertAfter(element.next("label"));
        } else {
            error.insertAfter(element);
        }
    },
    highlight: function (element, errorClass, validClass) {
        $(element).addClass("is-invalid").removeClass("is-valid");
    },
    unhighlight: function (element, errorClass, validClass) {
        $(element).addClass("is-valid").removeClass("is-invalid");
    }

    //Add boostrap design Section
});
form.children(".formChildren").steps({
    headerTag: "h3",
    bodyTag: "section",
    transitionEffect: "slideLeft",
    onStepChanging: function (event, currentIndex, newIndex) {

        // console.log(currentIndex, newIndex)
        if (currentIndex < newIndex) {
            if (form.valid()) {
                window.scroll(0, 0);
                form.validate().settings.ignore = ":disabled,:hidden";
                $('.progressStep').html(`${newIndex + 1}`);
                $('.form-prog').css({ "width": 25 * (newIndex + 1) + "%" })
            }

            return form.valid();
        } else {
            window.scroll(0, 0);

            $('.progressStep').html(`${currentIndex}`);
            $('.form-prog').css({ "width": 25 * currentIndex + "%" })

            return form;
        }



    },
    onFinishing: function (event, currentIndex) {
        form.validate().settings.ignore = ":disabled";
        // console.log("something")

        return form.valid();

    },
    onFinished: function (event, currentIndex) {
        form.submit();

        form.submit();
        console.log(event);

        $('.myListingCardBox').removeClass('d-none');
        $('.postForm').addClass('d-none');
        $('.reqPropFoot').addClass('d-none');

    }
});



$('#contactWithMe').change(function () {
    $('.contact-info-box').addClass('d-none');
})

$('#assignPerson').change(function () {
    $('.contact-info-box').removeClass('d-none');
})






$('.buyRent').change(function () {
    if ($(this).val() == 1) {
        $('#rentPropertyBox').addClass('d-none');
        $('#sellPropertyBox').removeClass('d-none');
    } else {
        $('#sellPropertyBox').addClass('d-none');
        $('#rentPropertyBox').removeClass('d-none');
    }
})





// $('#availFrom').change(function () {
//     if ($(this).is(':checked')) {
//         $('#availableFromDate').removeAttr('disabled');
//         $('#availableFromDate').removeClass('d-none');

//     }

// })


// $('#readyToMove').change(function () {
//     if ($(this).is(':checked')) {
//         $('#availableFromDate').attr('disabled');
//         $('#availableFromDate').addClass('d-none');
//     }

// })



