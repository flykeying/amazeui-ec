$(document).ready(function(){
    window.onscroll = function(){
        var pageTop = $(document).scrollTop();
        var alpha = parseInt(pageTop/3)+10;
        if (alpha<100){
            $('.wos-header-bg').css('filter','alpha(opacity=' + alpha + ')');
            $('.wos-header-bg').css('-moz-opacity',alpha/100);
            $('.wos-header-bg').css('opacity',alpha/100);
            $('.wos-header-icon').css('filter','alpha(opacity=' + alpha + ')');
            $('.wos-header-icon').css('-moz-opacity',alpha/100);
            $('.wos-header-icon').css('opacity',alpha/100);
        }
    }
})