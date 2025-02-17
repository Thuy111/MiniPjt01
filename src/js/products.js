$(document).ready(function(){
  //캐러셀
  $(".slider").slick( { // 첫번쩨 슬라이더 설정
    autoplay: true,
    autoplaySpeed: 0,
    speed:3000,
    cssEase:"linear",
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnFocus: true,
    pauseOnHover: true,
    centerMode: false,
    touchMove: false,
    variableWidth: true,
    infinite: true,
  } );
  $(".slider2").slick( { // 두번째 슬라이더 설정
    autoplay: true,
    autoplaySpeed: 0,
    speed:2000,
    cssEase:"linear",
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnFocus: true,
    pauseOnHover: true,
    centerMode: false,
    touchMove: false,
    variableWidth: true,
    infinite: true,
  } );

  // 마우스가 첫 번째 슬라이더 위에 있을 때 멈추고, 
  // 벗어나면 다시 시작
  $('.slider_bg_set').hover(
    function() {
      console.log("hover");
      $(".slider").slick('slickPause');
      $(".slider2").slick('slickPause');
    },
    function() {
      console.log("벗어남");
      $(".slider").slick('slickPlay');
      $(".slider2").slick('slickPlay');
    }
  );


});
