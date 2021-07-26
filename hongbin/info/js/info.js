$(document).ready(function(){
    //네비버튼
    $("#nav_btn1").click(function(){
    $("nav").slideDown(); //목차누르면 네비호출
    });

    $("#nav_btn1").click(function(){
    $("header img").fadeOut(); //목차누르면 제목숨김(높이조절위해서)
    });

    $("#nav_btn1").click(function(){
        $("header .btn1,.btn2").fadeOut(); //목차누르면 제목숨김(높이조절위해서)
        });
    
    $("#nav_btn2").click(function(){
    $("nav").slideUp();  //닫기누르면 네비숨김
    })

    $("#nav_btn2").click(function(){
    $("header img").fadeIn();     //닫기 누르면 제목호출
    });


    $("#nav_btn2").click(function(){
    $("header .btn1,.btn2").fadeIn();     //닫기 누르면 제목호출
    });



    //확대컷 버튼

    $(".btn1").click(function(){
    $(".big_cut").fadeIn(); //확대컷등장
    });

    $(".btn2").click(function(){
    $(".big_cut").fadeOut(); //확대컷숨김
    });
    
    $(".btn6").click(function(){
    $(".big_cut2").fadeIn(); //확대컷등장
    });

    $(".btn7").click(function(){
    $(".big_cut,.big_cut2").fadeOut(); //확대컷숨김
    });
    
  
  
});

// app.use(function (req, res, next) {
//   if (req.url && req.url.indexOf('.htm') > -1) {
//     res.header('Content-Type', 'text/html');
//   }
//   next(); //한글깨짐방지
// });

