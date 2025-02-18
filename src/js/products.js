$(document).ready(function(){
  //캐러셀
  $(".slider").slick( { // 첫번쩨 슬라이더 설정
    autoplay: true,
    autoplaySpeed: 0,
    speed:3000,
    cssEase:"linear",
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnFocus: false,
    pauseOnHover: false,
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
    pauseOnFocus: false,
    pauseOnHover: false,
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

  $('#product_guide').on('shown.bs.modal', function () {
      // var modal_dialog = $(this).find('.modal_posistion');
  
      // var modal_width = modal_dialog.outerWidth();
      // var window_width = $(window).width();
      // var margin_left = (window_width - modal_width) / 2;
  
      // var window_height = $(window).height(); // 브라우저 윈도우의 높이
      // var modal_height = modal_dialog.outerHeight(); // 모달의 높이
      // var margin_top = (window_height - modal_height) / 2;
  
      // // console.log("모달너비/창너비/줄마진값"+modal_width+'/'+window_width+'/'+margin_left);
      // // 수평/수직 중앙에 배치
      // modal_dialog.css({'margin-left': margin_left + 'px'});
      // modal_dialog.css('margin-top', margin_top + 'px');
      set_position(this);
  });
  $('#interest_info').on('shown.bs.modal', function () {
      set_position(this);
  });
  $('#fee_info').on('shown.bs.modal', function () {
    set_position(this);
          // 모든 li 태그를 선택
    var items = document.querySelectorAll('#mod_list li');
    // 각 li 태그에 숫자 인덱스를 추가
    items.forEach(function(item, index) {
      item.textContent = (index + 1) + '. ' + item.textContent;
    });

  });
  $('#other_info').on('shown.bs.modal', function () {
      set_position(this);
  });
  $('#product_terms').on('shown.bs.modal', function () {
      set_position(this);
  });

});

function set_position(modal){
  var modal_dialog = $(modal).find('.modal_posistion');
  var modal_width = modal_dialog.outerWidth();
  var window_width = $(window).width();
  var margin_left = (window_width - modal_width) / 2;
  var window_height = $(window).height();
  var modal_height = modal_dialog.outerHeight();
  var margin_top = (window_height - modal_height) / 2;
  modal_dialog.css({'margin-left': margin_left + 'px'});
  modal_dialog.css('margin-top', margin_top + 'px');
}