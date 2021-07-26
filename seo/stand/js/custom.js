//윈도우팝업

   $('.window').click(function(e){
    e.preventDefault();
    //window.open("파일명","팝업이름","옵션설정")
    //옵션 : left, top, width, height, status, toolbar, location, menuber, scroollbars, fullscreen
    window.open("popup.html","popup01","width=800, height=590, left=50, top=50, scrollbars=0, toolbar=0, menubar=0");

});



//버튼을 클릭하면 전체메뉴를 보이게하세요
$(document).ready(function(){
    
    $(".tit .btn").click(function(e){
    e.preventDefault(); /* 샵초기화 */
    // $("#cont_nav").css("display","block");
    // $("#cont_nav").show();
    // $("#cont_nav").FadeIn();
    // $("#cont_nav").slideDown();
    // $("#cont_nav").toggle();
    // $("#cont_nav").fadeToggle();
    $("#cont_nav").slideToggle(200);
    $(this).toggleClass("on"); //클래스에 클래스명 추가

    

});

//배너스크립트 html마크업셋팅 --> css 연동 --> 

$(".ban").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows:true,
    autoplay:true,
    autoplay:3000,
    dots:true
    
});

//갤러리
$(".gallery_img").slick({
    fade: true,
    pauseOnHover: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 300,
    slidesToShow: 1
});
$(".play").click(function(){
    $(".gallery_img").slick("slickPlay");
});
$(".pause").click(function(){
    $(".gallery_img").slick("slickPause");
});
$(".prev").click(function(){
    $(".gallery_img").slick("slickPrev");
});
$(".next").click(function(){
    $(".gallery_img").slick("slickNext");
});

//탭메뉴
var $tab_list = $(".tab_menu");

$tab_list.find("ul ul").hide(); // ul ul 을숨긴다
$tab_list.find('li.active > ul').show(); //active가 붙은 ul을 찾는다

function tabMenu(e){
    e.preventDefault(); // 샵제거
    var $this = $(this);
    $this.next("ul").show().parent("li").addClass("active").siblings("li").removeClass("active").find(">ul").hide();
} 
$tab_list.find("ul>li>a").click(tabMenu).focus(tabMenu);

});

//레이어팝업
$('.layer').click(function(e){
    e.preventDefault();
    // $('#layer').css("display","block")
    // $('#layer').show();
    // $('#layer').FadeIn();
    $('#layer').slideDown();    
});

$('#layer .close').click(function(e){
    e.preventDefault();
    $('#layer').slideUp();
});

$(".lightgallery").lightGallery({
    thembnail: true, //썸네일
    autoplay: true,
    pause: 3000,
    progressBar: true 
});
