// Sidenavbar user dropdown open/hide

$('.userDropDownBtn').click(function () {

    if ($('.dropDownContent').hasClass('d-none')) {
        $('.dropDownContent').removeClass('d-none');
        $('.navUserName img').css({ 'transform': 'rotate(0)' })
    } else {
        $('.dropDownContent').addClass('d-none');
        $('.navUserName img').css({ 'transform': 'rotate(-90deg)' })

    }

})


$('.nestedMenuParent').click(function () {
    if ($('.nestedMenu').hasClass('d-none')) {
        $('.nestedMenu').removeClass('d-none');
        $('.nestedMenuParent img').css({ 'transform': 'rotate(0)' })
    } else {
        $('.nestedMenu').addClass('d-none');
        $('.nestedMenuParent img').css({ 'transform': 'rotate(-90deg)' })

    }
})


// Password Toogler
function passwordShow() {

    if ($('.password').attr('type') === 'password') {
        $('.password').attr('type', 'text');
    } else {
        $('.password').attr('type', 'password');

    }
}


function confirmPasswordShow() {

    if ($('.confirmPassword').attr('type') === 'password') {
        $('.confirmPassword').attr('type', 'text');
    } else {
        $('.confirmPassword').attr('type', 'password');

    }
}




document.addEventListener("DOMContentLoaded", function () {

    el_autohide = document.querySelector('.autohide');

    // add padding-top to bady (if necessary)
    navbar_height = document.querySelector('.navbar').offsetHeight;
    document.body.style.paddingTop = navbar_height + 'px';

    if (el_autohide) {
        var last_scroll_top = 0;
        window.addEventListener('scroll', function () {
            let scroll_top = window.scrollY;
            if (scroll_top < last_scroll_top) {
                el_autohide.classList.remove('scrolled-down');
                el_autohide.classList.add('scrolled-up');
                $('.advacneSearchSticky').css({ "top": navbar_height + 'px' })

                // $('.overflow-auto').css({ 'height': `calc(100vh- ${navbar_height}px)` })


                $('.gMapTop').css({ 'top': '21.6rem' })
                $("#propertyMap").css({ "height": "calc(100vh - 21.6rem)" })


            }
            // else {
            //     el_autohide.classList.remove('scrolled-up');
            //     el_autohide.classList.add('scrolled-down');
            //     $('.advacneSearchSticky').css({ "top": "0" })

            //     $('.gMapTop').css({ 'top': '14.6rem' })
            //     $("#propertyMap").css({ "height": "calc(100vh - 14.6rem)" })

            // }
            // last_scroll_top = scroll_top;
        });
        // window.addEventListener
    }
    // if

});
// DOMContentLoaded  end



function heroFilterAction() {


    if ($('.filterSelect').hasClass("d-none")) {
        $('.heroSearchC').removeClass('col-lg-8').addClass('col-lg-5');
        $('.heroAction').removeClass('col-lg-4').addClass('col-lg-7');
        $('.searchBtnBox').removeClass('col-lg-12').addClass('col-lg-4');

        $('.filterSelect').removeClass('d-none');
        $('.filterSelect2').removeClass('d-none');



        $('.searchBox').css({ "max-width": "125.3rem" })

    } else {
        $('.heroSearchC').removeClass('col-lg-5').addClass('col-lg-8');
        $('.heroAction').removeClass('col-lg-7').addClass('col-lg-4');
        $('.searchBtnBox').removeClass('col-lg-4').addClass('col-lg-12');

        $('.filterSelect').addClass('d-none');
        $('.filterSelect2').addClass('d-none');




        $('.searchBox').css({ "max-width": "81.4rem" })

    }


}



// Show Advance Search Panel

function advanceFilterAction() {

    if ($('.dropdownSearch').hasClass('d-none')) {
        $('.dropdownSearch').removeClass('d-none')
    } else {
        $('.dropdownSearch').addClass('d-none')
    }
}




// Show and Hide list and Map view

function toggleViewAction() {


    if ($('.search-results').hasClass('responsiveSearchRes')) {
        $('.search-results').removeClass('responsiveSearchRes');
        $('.gMap').addClass('responsiveMap');


        $('.map-viewBtn').removeClass('d-none');
        $('.list-viewBtn').addClass('d-none');

        $('.btnClass').addClass('btn-dark');
        $('.btnClass').removeClass('btn-light');

    } else {
        $('.search-results').addClass('responsiveSearchRes');
        $('.gMap').removeClass('responsiveMap');

        $('.map-viewBtn').addClass('d-none');
        $('.list-viewBtn').removeClass('d-none');

        $('.btnClass').removeClass('btn-dark');
        $('.btnClass').addClass('btn-light');


    }
}


// Show Hide Req Properties

$('.reqProp').click(function () {
    if ($('.reqPropExpand').hasClass('d-none')) {
        $('.reqPropExpand').removeClass('d-none');

    } else {
        $('.reqPropExpand').addClass('d-none');

    }
})


$('.addListingBtn').click(function () {
    $('.myListingCardBox').addClass('d-none');
    $('.reqPropFoot').addClass('d-none');
    $('.postForm').removeClass('d-none');


})



// Increment/Decrement btn 
$('.decBtn').click(function () {
    let featureValue = $(this).siblings('.incInput').val();
    if (featureValue > 1) {
        $(this).siblings('.incInput').val(parseInt(featureValue) - 1);
    }
})

$('.IncBtn').click(function () {

    let featureValue = $(this).siblings('.incInput').val();
    $(this).siblings('.incInput').val(parseInt(featureValue) + 1)

})


$('.propFeaturesInput').change(function () {
    let propFeatursId = $(this).data('propid');


    if ((this).checked) {
        $(`.propFeature${propFeatursId}`).removeClass('d-none')
    } else {
        $(`.propFeature${propFeatursId}`).addClass('d-none')

    }

})



// Custom Input File
$('.thumbnailContainer').click(function (e) {
    e.preventDefault();
    $('.thumbnailInput').trigger('click');

})


function readURL() {
    // $('#frame'+$row_track_id+'').attr('src', URL.createObjectURL(event.target.files[0])).width(150).height(200);
    $('#thumbnailImage').removeClass('d-none');
    $('#thumbnailImage').attr('src', URL.createObjectURL(event.target.files[0]));


    $('.imgUp').addClass('d-none');
    $('.changeImg').removeClass('d-none');
    $('.removeMessage').removeClass('d-none');

}


$('.imgRemBtn').click(function () {
    $('.thumbnailInput').val('');
    $('#thumbnailImage').addClass('d-none');
    $('.imgUp').removeClass('d-none');
    $('.changeImg').addClass('d-none');
    $('.removeMessage').addClass('d-none');

})





// function addOptionToRow($rowno) {
//     $.each(optionList, function (key, value) {
//         $('#image_tag' + $rowno)
//             .append($("<option></option>")
//                 .attr("value", value.property_images_tag_id)
//                 .text(value.property_images_tags));
//     });
// }


function addUploadImage() {

    $row_track_id = $('#addImageId .imageItem:last').data('row_track');
    if ($row_track_id == null) {
        $row_track_id = 1;
    } else {
        $row_track_id = $row_track_id + 1;
    }


    console.log()


    if ($('#addImageId .imageItem').length == 0) {
        $("#addImageId").append(
            `
            <div class="col-lg-4 imageItem mb-4" data-row_track='${$row_track_id}' id="imageItem${$row_track_id}">
                <div class="multiParentCont">
                    <div class="addContainer" onclick="addImage(${$row_track_id})">
                        <img class="previewImg d-none" id="frame${$row_track_id}"  src="" alt="">
                        <div class ="upMesg" id='upMessage${$row_track_id}'>
                        <div class ="text-center">
                        <img class ="mb-2"
                        src="assets/images/icon/u_image-plus.svg"
                        alt="">
                        <p>Add Image</p>
                        </div>
                        </div>
                    </div>
    
    
                    <div class="imageTypeSel d-none" id="imageTypeSel${$row_track_id}">
                        <div>
                            <select class="form-select form-select-lg required" onchange='onSelectImageType(${$row_track_id})' id="imateTypeSelInput${$row_track_id}">
                                <option value="">Image Type</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                    </div>
    
                    <div class="delMessage d-none" id="delMess${$row_track_id}">
                        <button class="delUpImg" type="button" onclick="deleteUploadImage(${$row_track_id})"><img
                            src="assets/images/icon/u_plus.svg" alt=""></button>
                    </div>
    
                    <input name='image[${$row_track_id}]' onchange='readURLDynamic(1,${$row_track_id})' id="input${$row_track_id}" class="form-control visuallyHiddenFile required" type="file">
    
                </div>
            </div>
    
        `);
    } else if ($('#addImageId .imageItem').length <= 4) {

        $("#addImageId").append(
            `
            <div class="col-lg-4 imageItem mb-4" data-row_track='${$row_track_id}' id="imageItem${$row_track_id}">
                <div class="multiParentCont">
                    <div class="addContainer" onclick="addImage(${$row_track_id})">
                        <img class="previewImg d-none" id="frame${$row_track_id}"  src="" alt="">
                        <div class ="upMesg" id='upMessage${$row_track_id}'>
                        <div class ="text-center">
                        <img class ="mb-2"
                        src="assets/images/icon/u_image-plus.svg"
                        alt="">
                        <p>Add Image</p>
                        </div>
                        </div>
                    </div>
    
    
                    <div class="imageTypeSel d-none" id="imageTypeSel${$row_track_id}">
                        <div>
                            <select class="form-select form-select-lg" onchange='onSelectImageType(${$row_track_id})' id="imateTypeSelInput${$row_track_id}">
                                <option value="">Image Type</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                    </div>
    
                    <div class="delMessage d-none" id="delMess${$row_track_id}">
                        <button class="delUpImg" type="button" onclick="deleteUploadImage(${$row_track_id})"><img
                            src="assets/images/icon/u_plus.svg" alt=""></button>
                    </div>
    
                    <input name='image[${$row_track_id}]' onchange='readURLDynamic(1,${$row_track_id})' id="input${$row_track_id}" class="form-control visuallyHiddenFile" type="file">
    
                </div>
            </div>
    
        `);
    }


    // addOptionToRow($row_track_id);
}



function readURLDynamic(input, id) {
    // $('#frame'+$row_track_id+'').attr('src', URL.createObjectURL(event.target.files[0])).width(150).height(200);
    $(`#frame${id}`).removeClass('d-none');
    $(`#frame${id}`).attr('src', URL.createObjectURL(event.target.files[0]));

    $(`#upMessage${id}`).addClass('d-none');
    $(`#imageTypeSel${id}`).removeClass('d-none');
    $(`#delMess${id}`).removeClass('d-none');

    addUploadImage();


}

function deleteUploadImage(rowno) {
    $(`#imageItem${rowno}`).remove();
    $row_track_id = $('#addImageId .imageItem:last').data('row_track');
    if ($row_track_id == null) {
        addUploadImage();
    }

}



function onSelectImageType(selectInputId) {

    if ($(`#imateTypeSelInput${selectInputId}`).val() !== "") {
        $(`#imageTypeSel${selectInputId}`).addClass('imageSecondSel');
    } else {
        $(`#imageTypeSel${selectInputId}`).removeClass('imageSecondSel');

    }
}


function addImage(inputId) {

    $(`#input${inputId}`).trigger('click');
}

addUploadImage();



