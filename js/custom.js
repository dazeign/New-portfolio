var modal_trigger = $(".modal-trigger");
var modal_trigger_2 = document.querySelectorAll('.modal-trigger');
var modal_folio_close = $(".folio-modal-close");


modal_trigger.on('click', function() {
    $('.site-wrapper').addClass('modal-opened');

})

modal_folio_close.on('click', function() {
    $('.site-wrapper').removeClass('modal-opened');
})

function modalfix() {
    const modals = document.querySelectorAll('.site-modal');
    modals.forEach((item) => {
        item.addEventListener("animationstart", function() {
            item.style.overflow = "auto";
            $('.site-wrapper').addClass('transitioning');
        })
        item.addEventListener("animationend", function() {
            item.style.overflow = "auto";
            $('.site-wrapper').removeClass('transitioning');
        })

    })


}

// modal_trigger_2.forEach((trigger) => {
//   var getTriggerId = $(trigger).attr('id');
//   console.log(getTriggerId);

// } )



modalfix();


$(document).ready(function() {


    $('.portolio-modal-trigger').animatedModal({
        modalTarget: 'portfolio-modal',
        animatedIn: 'animate__backInUp',
        animatedOut: 'animate__zoomOutDown',
        animationDuration: '1s',
        overflow: "hidden"
    });
    $('.contact-modal-trigger').animatedModal({
        modalTarget: 'contact-modal',
        // animatedIn:'animate__fadeInUp',
        // animatedOut: 'animate__fadeOutUp',
        animatedIn: 'animate__backInUp',
        animatedOut: 'animate__zoomOutDown',
        animationDuration: '1s',
        overflow: "hidden"
    });




    var $grid = $('.iso-grid-wrap');
    $grid.packery({
        // options
        itemSelector: '.isotope-item',
        // gutter: 15,
        resize: true
    });
    $grid.imagesLoaded().progress(function() {
        $grid.packery('layout');
    });


    var $gridMas = $('.iso-mas-grid-wrap');
    $gridMas.packery({
        // options
        itemSelector: '.isotope-mas-item',
        // gutter: 15,
        resize: true
    });
    $gridMas.imagesLoaded().progress(function() {
        $gridMas.packery('layout');
    });


    // filter functions
    var filterFns = {
        // show if number is greater than 50
        numberGreaterThan50: function() {
            var number = $(this).find('.number').text();
            return parseInt(number, 10) > 50;
        },
        // show if name ends with -ium
        ium: function() {
            var name = $(this).find('.name').text();
            return name.match(/ium$/);
        }
    };

    // bind filter button click
    $('#isotope-filters').on('click', 'a', function() {
        var filterValue = $(this).attr('data-filter');
        // use filterFn if matches value
        filterValue = filterFns[filterValue] || filterValue;
        $grid.isotope({
            filter: filterValue
        });
    });
    // bind filter button click
    $('#isotope-mas-filters').on('click', 'a', function() {
        var filterValue = $(this).attr('data-filter');
        // use filterFn if matches value
        filterValue = filterFns[filterValue] || filterValue;
        $gridMas.isotope({
            filter: filterValue
        });
    });

    // change is-checked class on buttons
    $('.isotope-nav').each(function(i, buttonGroup) {
        var $buttonGroup = $(buttonGroup);
        $buttonGroup.on('click', 'a', function() {
            $buttonGroup.find('.active').removeClass('active');
            $(this).addClass('active');
        });
    });
})


// Menu Essential script

$('.dropdown-menu a.dropdown-toggle').on('click', function(e) {
    if (!$(this).next().hasClass('show')) {
        $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
    }
    var $subMenu = $(this).next(".dropdown-menu");
    $subMenu.toggleClass('show');
    $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
        $('.dropdown-submenu .show').removeClass("show");
    });
    return false;
});


function loaderCounter() {
    var count = setInterval(function() {
        var c = parseInt($('.counter').text());
        $('.counter').text((++c).toString());
        if (c == 100) {
            clearInterval(count);
            $('.preloader').addClass('hide');
            // $('.preloader').addClass('done');
        }
    }, 10)
}
loaderCounter();

$(window).load(function() {
    setTimeout(function() {
        $('body').addClass('theme-mode-panel-open')
        $('.mode-switcher-panel-wrapper .switcher-minimize-button').addClass('open')

    }, 2500);

})

// Smooth Scroll

$(".goto").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
        // Store hash
        var hash = this.hash;
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 1000, function() {
            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
        });
    } // End if
  });