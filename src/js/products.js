$(document).ready(function(){

  $(window).on('scroll', function() {
    var scrollpos = $(window).scrollTop(); // 현재 스크롤 위치
    var content01 = $('#content1').offset().top; // #content1 요소의 화면에서의 위치
    var content02 = $('#content2').offset().top;
    var content03 = $('#content3').offset().top;
    var content04 = $('#content4').offset().top;
    var content05 = $('#content5').offset().top;

    console.log(scrollpos);
    // 스크롤 값이 400을 넘고, #content1이 화면에 나타나면 애니메이션을 추가
    if (scrollpos + $(window).height() > content01 + 100) {
      $('#content1').addClass('animate__animated animate__fadeInUp').css('opacity', '1');
    }
    if (scrollpos + $(window).height() > content02 + 100) {
      $('#content2').addClass('animate__animated animate__fadeInUp').css('opacity', '1');
    }
    if (scrollpos + $(window).height() > content03 + 100) {
      $('#content3').addClass('animate__animated animate__fadeInUp').css('opacity', '1');
    }
    if (scrollpos + $(window).height() > content04 + 100) {
      $('#content4').addClass('animate__animated animate__fadeInUp').css('opacity', '1');
    }
    if (scrollpos + $(window).height() > content05 + 100) {
      $('#content5').addClass('animate__animated animate__fadeInUp').css('opacity', '1');
    }
  });

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