(function($){

    //배너 이미지 슬라이드
    var mySwiper = new Swiper('.swiper-container', {
        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
        pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
      },
        autoplay: {
        delay: 5000,
      },
    
    
    });
    
        //영화차트 슬라이드
        var mySwiper = new Swiper('.swiper-container2', {
            slidesPerView: 4,
            spaceBetween: 24,
            mousewheel: {
            invert: true,
            },
            keyboard: {
            enabled: true,
            onlyInViewport: false,
            },
            autoplay:{
                delay:6000,
            },
            breakpoints:{ //반응형
            600:{
                slidesPerView:1.4,
                spaceBetween:24
                },
            768: {
                slidesPerView: 2,
                spaceBetween: 24
                },
            960:{
                slidesPerView: 3,
                spaceBetween: 24
                }
            }
        });
            
        //영화차트 탭메뉴
        var movBtn = $(".movie_title > ul > li");
        var movCont = $(".movie_chart > div");
    
        movCont.hide().eq(0).show(); // eq는 0을 의미하고 처음꺼만 보여지게해라
    
        movBtn.click(function(e){
            e.preventDefault();
            var target = $(this);
            var index = target.index(); //클릭했을때 숫자가 나올수잇음
            movBtn.removeClass("active");
            target.addClass("active");
            movCont.css("display","none");
            movCont.eq(index).css("display","block");
        });
    
        //공지사항 탭메뉴
        var tabMenu = $(".notice");
    
        //컨텐츠 내용을 숨겨주세요
        tabMenu.find("ul > li > ul").hide();
        tabMenu.find("li.active > ul").show();
    
        function tabList(e){
            e.preventDefault(); //#기능차단
            var target =$(this);
            target.next().show().parent("li").addClass("active").siblings("li").removeClass("active").find("ul").hide();
            //버튼을 클릭하면 형제의 ul을 보여주고
            //부모의 li태그에 클래스를 추가하고
            //형제의 li태그에 클래스를 제거
            //제거한 자식의 ul 태그를 숨겨줌
        }
    
        tabMenu.find("ul > li > a").click(tabList).focus(tabList); //포커스는 순서대로 탭눌렀을때 순서대로 가게끔

})(jQuery); 