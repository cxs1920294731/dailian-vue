/**
 * Created by Administrator on 2017/9/16.
 */
$(function () {
    $(window).scroll(function(){
        var scrollTop = $(this).scrollTop();
        var scrollHeight = $(document).height();
        var windowHeight = $(this).height();
        if(scrollTop > 500){
            $('.btn-to-top').fadeIn();
            $('.to-buy').fadeIn();
        }else {
            $('.btn-to-top').fadeOut();
            $('.to-buy').fadeOut();
        }
    });

})
$(function () {
    // $('body').on('click','.header-nav .menu-nav', function () {
    //    var html= $('.header-nav .header-menu');
    //     if (html.hasClass('show')){
    //         html.removeClass('show');
    //         return;
    //     }
    //     if (!html.hasClass('show')){
    //         html.addClass('show');
    //         return;
    //     }
    // })
})
$(function () {
    // $('body').on('click','.header-nav .header-box-ad .btn-search',function () {
    //     $(this).parents('.header-nav').addClass('header-search');
    //     $('.header-nav .header-menu').removeClass('show');
    //     // $(this).addClass('.header-search')
    // });
    $(document).click(function (e) {
        var target = $(e.target);
        if(target.closest(".header-nav").length == 0){
            $('.header-nav').removeClass('header-search');
            $('.header-nav .header-menu').removeClass('show');
            $('.header-nav .search-validation').fadeOut();
        }
    })
    $('body').on('click','.backgound-gray',function (e) {
        var target = $(e.target);
        if(target.closest(".select-choice").length == 0){
            console.log('cao+contry');
            $('.backgound-gray').removeClass('show');
        }
    })
});
$(function () {
    //底部表单验证
    $('.footer-set .email-submit .btn-submit').click(function () {
        var Regex =  /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

        var emial =$('.footer-set .email-submit .footer-search').val();
        if (emial == ""||!Regex.test(emial)){
            $('.footer-set .email-submit .email-validation').fadeIn();
            setTimeout(function () {
                $('.footer-set .email-submit .email-validation').fadeOut();
            },200000)
        }else {
            $('.footer-set .email-submit .email-validation').fadeOut();
        }
    });
    //顶部搜索框验证
    // $('body').on('click','.header-nav .search-box .icon-search-red',function () {
    //     console.log('hhh');
    //     var enter_name = $('.header-nav .search-box input').val();
    //     if (enter_name == ""){
    //         $('.header-nav .search-validation').fadeIn();
    //         setTimeout(function () {
    //             $('.header-nav .search-validation').fadeOut();
    //         },2000)
    //     }else {
    //         $('.header-nav .search-validation').fadeOut();
    //     }
    // })
});
$(function () {
    // $('body').on('focus','.login-register.register .input-col .country',function () {
    //     var html =  $('.login-register .backgound-gray');
    //     html.addClass('show');
    // });
    // $('.login-register.register .input-col').blur(function () {
    //     var html =  $('.login-register .select-choice');
    //     html.removeClass('show');
    //     html.css({
    //         height:0
    //     })
    // });
    $('.login-register').on('click','.select-choice li',function () {
        var html =  $('.login-register .select-choice');
        html.removeClass('show');
    })
    $('body').on('click','#register .icon-show-pass',function () {
        var html= $('#register .icon-form-vis');
        if (html.hasClass('show')){
            html.removeClass('show');
            html.addClass('hidden');
            $('#register .password').attr('type','password');
            return;
        }
        if (html.hasClass('hidden')){
            html.removeClass('hidden');
            html.addClass('show');
            $('#register .password').attr('type','text');
            return;
        }
    })
})
$(function () {
    $('body').on('click','#login .icon-show-pass',function () {
        var html= $('#login .icon-form-vis');
        if (html.hasClass('show')){
            html.removeClass('show');
            html.addClass('hidden');
            $('#login .password').attr('type','password');

        }else if(html.hasClass('hidden')){
            html.removeClass('hidden');
            html.addClass('show');
            $('#login .password').attr('type','text');
        }
    });
});
$(function () {
    // $('body').on('focus','.apply-now .enter-info .country',function () {
    //     console.log('shijain');
    //     var html =  $('.apply-now .backgound-gray');
    //     html.addClass('show');
    // });
})

//var googleUser = {};

//亚马逊登录
window.onAmazonLoginReady = function() {
    amazon.Login.setClientId('amzn1.application-oa2-client.7a45c19ddc7241a38a077aea9e81b574');
};
(function(d) {
    var a = d.createElement('script'); a.type = 'text/javascript';
    a.async = true; a.id = 'amazon-login-sdk';
    a.src = 'https://api-cdn.amazon.com/sdk/login1.js';
    //d.getElementById('amazon-root').appendChild(a);
    var s1 = d.getElementsByTagName('head')[0];
    s1.appendChild(a);
})(document);
// facebook登录
window.fbAsyncInit = function() {
    FB.init({
        appId      : '149074655701825',
        cookie     : true,  // enable cookies to allow the server to access// the session
        xfbml      : true,  // parse social plugins on this page
        version    : 'v2.8' // use graph api version 2.8
    });
    //FB.getLoginStatus(function(response) {
    //    statusChangeCallback(response);
    //});
};
(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
//谷歌验证
