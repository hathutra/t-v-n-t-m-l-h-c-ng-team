// var menuActive = false;
// var menu = $('.menu');
// var burger = $('.menu-toggle');
// initMenu();
// function initMenu()
// {
//     if($('.menu').length)
//     {
//         var menu = $('.menu');
//         if($('.menu-toggle').length)
//         {
//             burger.on('click', function()
//             {
//                 if(menuActive)
//                 {
//                     closeMenu();
//                 }
//                 else
//                 {
//                     openMenu();

//                     $(document).one('click', function cls(e)
//                     {
//                         if($(e.target).hasClass('menu_mm'))
//                         {
//                             $(document).one('click', cls);
//                         }
//                         else
//                         {
//                             closeMenu();
//                         }
//                     });
//                 }
//             });
//         }
//     }
// }

// function openMenu()
// {
//     menu.addClass('active');
//     menuActive = true;
// }

// function closeMenu()
// {
//     menu.removeClass('active');
//     menuActive = false;
// }

/*fixed header*/
$(window).scroll(function(){
    if ($(window).scrollTop() >= 40) {
        $('.header-container').addClass('fixed-header');
    }
    else {
        $('.header-container').removeClass('fixed-header');
    }
});