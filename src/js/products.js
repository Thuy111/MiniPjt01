$(document).ready(function(){
  //캐러셀
  $(".slider").slick( {
    autoplay: true,
    autoplaySpeed: 0, //1000ms = 1s 1초
    speed:2000,
    cssEase:"linear",
    slidesToShow: 5, //처음 보여줄 갯수
    slidesToScroll: 1, //몇개씩 움직일지
    pauseOnFocus: true, //마우스가 올라가면 멈출지 결정
    pauseOnHover: true, // -
    responsive: [ //반응형 설정
      // {
      //   breakpoint: 768,
      //   settings: {
      //     slidesToShow: 3,
      //   }
      // },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 3,                  
        }
      }
    ]

  } );
});