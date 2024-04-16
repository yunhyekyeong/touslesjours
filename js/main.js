$(function(){
//------------------------


//----탑배너------ 2021.11.15
$('#top_banner i').on('click', function(){
    $('#top_banner .container').slideToggle(200);
    $(this).toggleClass('on');
    $('#header').animate({top:'0'})
    
});
//-------------------------------------



//----헤더 바------ 2021.11.19

$(window).on('scroll', function(){
    var sct=$(window).scrollTop();
    console.log(sct);
    if(sct>0){
        $('#header').addClass('on')
    }else{
        $('#header').removeClass('on')
    }
});

//----반응형 헤더 바------ 2021.11.17

$('.mopen').on('click', function(){
    $('.gnb').toggleClass('on');
    $(this).toggleClass('on');
    $('#header .sns').toggleClass('on');

})

$('.gnb>ul>li>a').on('click', function(){
    if($(window).width() < 769) {
        $(this).next().slideToggle();
        $(this).parent().siblings().find('.depth').slideUp();
    }
});
//-----------------------------------------



//----메인비주얼 동영상 배경------ 2021.11.15
$('#mvv').YTPlayer({
    videoURL:'https://youtu.be/SQQ_chojEZ0',
    containment:'#main_visual ',
    autoPlay: true,
    mute:true,
    useOnMobile: true,
    loop: true,
    startAt:0, 
    opacity:1,
    showControls:false,
    quality:1080,
});
//--------------------------------------------




//----뉴프로덕트 신제품 ------ 2021.11.18
$('.rgt_slider').slick({
    arrows:false,
    autoplay:true,
    dots:true,
    

});
//----------------------------------

//----베스트------ 2021.11.18
$('.b_slide').slick({
    arrows:false,
    autoplay:false,
    dots:true,
    slidesToShow: 5,
    slidesToScroll:5,
    nextArrow:'<div class="next"><i class="xi-angle-right-thin"></i></div>',
    prevArrow:'<div class="prev"><i class="xi-angle-left-thin"></i></div>',
    responsive: [
        {
        breakpoint: 768,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2
            }
        }
    ]  
});    

//----케이크------ 2021.11.18

$('.p_slide').slick({
    arrows:true,
    slidesToShow: 3,
    slidesToScroll:3,
    nextArrow:'<div class="next"><i class="xi-angle-right-thin"></i></div>',
    prevArrow:'<div class="prev"><i class="xi-angle-left-thin"></i></div>',
    responsive: [
        {
        breakpoint: 768,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
            }
        }
    ] 
}); 

//----notice ------ 2021.11.25
$('.j_slide').slick({
    arrows:false,
    autoplay:true,
    autoplaySpeed:2000,
    slidesToShow: 1,
    slidesToScroll:1,
}); 

$('.pm_slide').slick({
    arrows:false,
    autoplay:true,
    autoplaySpeed:2000,
    slidesToShow: 1,
    slidesToScroll:1,
});


//------------------------
});