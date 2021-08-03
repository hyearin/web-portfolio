$(document).ready(function(){

    //상황 메뉴박스를 누르면... 기능이 작동한다.
    //기능 메뉴가 나타난다.
    //     2차메뉴에 active 라는 클래스를 추가한다.
    $(".menu_box").click(function(){
        $(".menu_2_box").addClass("active");
    });

    $(".ham_close").click(function(){
        $(".menu_2_box").removeClass("active");
    });
    
});