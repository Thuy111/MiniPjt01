$(document).ready(function(){
  //캐러셀
  $(".slider").slick( {
    autoplay: true,
    autoplaySpeed: 0,
    speed:2000,
    cssEase:"linear",
    slidesToShow: 5,
    slidesToScroll: 1,
    pauseOnFocus: true,
    pauseOnHover: true,
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
