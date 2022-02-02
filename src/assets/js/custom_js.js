
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
        $("#myModal").on("hide.bs.modal", function () {
          $("#partnerVideo").attr("src", "");
        });

        /* Assign the initially stored url back to the iframe src
    attribute when modal is displayed again */
        $("#myModal").on("show.bs.modal", function () {
          $("#partnerVideo").attr("src", url);
        });
      });
 
      const phoneInputField = document.querySelector("#phone");
      const phoneInput = window.intlTelInput(phoneInputField, {
        utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
      });

      const phoneInputField2 = document.querySelector("#phone2");
      const phoneInput2 = window.intlTelInput(phoneInputField2, {
        utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
      });

      jQuery(document).ready(function ($) {
        $("#partners-testimonials, #developers-testimonials").owlCarousel({
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
        });
      });
