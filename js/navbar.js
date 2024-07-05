$(() => {
    $('nav.nav ul li a').hover(function(){
        $('.nav li ').removeClass('selected');
        $(this).parent().addClass('selected');
    })
    $('nav.mobile h3').click(function(){
        $(this).next().slideToggle();
    });
})