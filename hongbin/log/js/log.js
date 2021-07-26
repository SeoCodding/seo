

  $(document).ready(function(){
    $("#nav_btn1").click(function(){
    $("nav").slideDown(800); //목차 누르면 네비호출
    });

    $("#nav_btn1").click(function(){
    $("header img,header p").fadeOut(); //목차누르면 제목숨김(높이조절위해서)
    });
    
    $("#nav_btn2").click(function(){
    $("nav").slideUp(800);  //닫기누르면 네비숨김
    })

    $("#nav_btn2").click(function(){
    $("header img,header p").fadeIn(); //닫기누르면 제목호출    
    });

    // app.use(function (req, res, next) {
    //     if (req.url && req.url.indexOf('.htm') > -1) {
    //       res.header('Content-Type', 'text/html');
    //     }
    //     next(); //한글깨짐방지
    //   });

});