      function playVideo(videoId, videoSrc){
        var video=document.getElementById(videoId);
        document.getElementById(videoId).getElementsByTagName('source')[0].src="https://optimhire.com/corporate/"+videoSrc;
        document.getElementById(videoId).src="https://optimhire.com/corporate/"+videoSrc;
        video.play()
      }
      function openNav() {
        document.getElementById("mySidenav").style.width = "100%";
      }

      function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
      }

      $(document).ready(function () {
        /* Get iframe src attribute value i.e. YouTube video url
    and store it in a variable */
        var url = $("#partnerVideo").attr("src");

        /* Assign empty url value to the iframe src attribute when
    modal hide, which stop the video playing */
        $(".modal").on("hide.bs.modal", function () {
          $("video").attr("src", "");
        });

        /* Assign the initially stored url back to the iframe src
    attribute when modal is displayed again */
        $("#myModal").on("show.bs.modal", function () {
          $("#partnerVideo").attr("src", url);
        });
      });
 
      // const phoneInputField = document.querySelector("#phone");
      // const phoneInput = window.intlTelInput(phoneInputField, {
      //   utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
      // });

      const phoneInputField2 = document.querySelector("#phone2");
      const phoneInput2 = window.intlTelInput(phoneInputField2, {
        isValidNumber: true,
        separateDialCode: true,
        hiddenInput: "full",
        utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
      });

      $("#phone2").mouseleave(function() {
          var full_number = phoneInput2.getNumber(intlTelInputUtils.numberFormat.E164);
          // $('#phone_value').val(full_number);
          var countryData = phoneInput2.getSelectedCountryData();
          $('#country_code').val(countryData.dialCode);
      });
      
      // Restricts input for each element in the set of matched elements to the given inputFilter.
      (function($) {
        $.fn.inputFilter = function(inputFilter) {
          return this.on("input keydown keyup mousedown mouseup select contextmenu drop", function() {
            if (inputFilter(this.value)) {
              this.oldValue = this.value;
              this.oldSelectionStart = this.selectionStart;
              this.oldSelectionEnd = this.selectionEnd;
            } else if (this.hasOwnProperty("oldValue")) {
              this.value = this.oldValue;
              this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
            } else {
              this.value = "";
            }
          });
        };
      }(jQuery));

      jQuery(document).ready(function ($) {
        /* $("").owlCarousel({
          loop: true,
          center: true,
          items: 3,
          margin: 30,
          autoplay: false,
          dots: false,
          nav: true,
          autoplayTimeout: 8500,
          smartSpeed: 450,
          navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
          responsive: {
            0: {
              items: 1.5,
            },
            768: {
              items: 3,
            },
            1170: {
              items: 3,
            },
          },
        }); */
        $("#partners-testimonials,#developers-testimonials, #news-testimonials").owlCarousel({
          items:3,
          itemsDesktop:[1400,3],
          itemsDesktopSmall:[980,3],
          itemsTablet:[768,3],
          pagination:true,
          navigation:true,
          slideSpeed:1000,
          autoPlay:true,
          margin:30,
          dots: false,
          nav: true,      
          navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
           responsive: {
                0: {
                  items: 1.5,
            center: true,
            loop:true,
                },
                768: {
                  items: 3,
                },
                1170: {
                  items: 3,
                },
              },
        });
    
      });

      $(document).ready(function(){
        $('#customerContact').validate({
          ignore: '.ignore',
          // set the errorClass as a random string to prevent label disappearing when valid
          errorClass : "error invalid-feedback text-start",
          // use highlight and unhighlight
          highlight: function (element, errorClass, validClass) {
            
          },
          unhighlight: function (element, errorClass, validClass) {
           
          },
          validClass: "my-valid-class",
          rules: {

            "name": {
                required: true,
                minlength: 3
            },
            "email": {
                required: true,
                email: true
            },

            "phone": {
              required: true,
              number: true
            },
          },
          messages: {
            "name": {
              required: "Please enter your name"
            },
            "phone":{
              required: "Please enter your contact number",
              number: "Please enter a valid phone number"
            },
            email: {
                required: "We need your email address to contact you",
                email: "Your email address must be in the format of name@domain.com",
            },
          },

          submitHandler: submitForm

        });
      })

      function submitForm() {
        var data = $("#customerContact").serialize();
        $.ajax({
          dataType: 'json',
          type: 'POST',
          url: 'https://optimhire.com/corporate/sendContactMessage',
          data: data,
          cache: false,
          beforeSend: function() {
            $("#error-login, #successMessage").fadeOut();
            $("#contactBtn").html('<i class="fa fa-spinner fa-spin" aria-hidden="true"></i>').prop('disabled', true);;
          },
          success: function(response) {

            $("#contactBtn").html('Submit').prop('disabled', false);
            if(response.success){
              $("#successMessage").fadeIn(1000, function() {
                $("#successMessage").html('<div class="alert alert-success text-center"> <i class="fa fa-check"></i> &nbsp; Thank you for your interest, our team will contact you shortly.</div>');
                document.customerContact.reset();
                $('div.my-error-class1').hide();
                $(this).fadeOut(10000);
                setTimeout(function(){
                  $('#PressKit').modal('hide')
                }, 5000);
              });
            }
            else{
              $("#successMessage").fadeIn(1000, function() {
                $("#successMessage").html('<div class="alert alert-danger text-center"> <i class="fa fa-exclamation-triangle"></i> &nbsp; ' + response.message + '</div>');
                document.customerContact.reset();
                $('div.my-error-class1').hide();
                $(this).fadeOut(10000);
                setTimeout(function(){
                  $('#PressKit').modal('hide')
                }, 5000);
              });
            }
          },
          error: function(data){
            $("#successMessage").fadeIn(1000, function() {
              $("#successMessage").html('<div class="alert alert-danger text-center"> <i class="fa fa-exclamation-triangle"></i> &nbsp; Something went wrong, please try again.</div>');
              document.customerContact.reset();
              $('div.my-error-class1').hide();
              $(this).fadeOut(10000);
              setTimeout(function(){
                $('#PressKit').modal('hide')
              }, 5000);
            });
          }
      });
      return false;
      }