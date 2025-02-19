$(document).ready(function(){

  // 첫 번째 슬라이더 설정
  $("#moving_panel").slick({
    autoplay: true,
    autoplaySpeed: 0,
    speed: 4500,
    cssEase: "linear",
    slidesToShow: 5,
    slidesToScroll: 2,
    pauseOnFocus: true,
    pauseOnHover: true,
    centerMode: false,
    touchMove: false,
    variableWidth: true,
    infinite: true,
  });

  // 두 번째 슬라이더 설정
  $("#moving_panel2").slick({
    autoplay: true,
    autoplaySpeed: 0,
    speed: 4000,
    cssEase: "linear",
    slidesToShow: 10,
    slidesToScroll: 2,
    pauseOnFocus: true,
    pauseOnHover: true,
    centerMode: false,
    touchMove: false,
    infinite: true,
  });

  // 슬라이더 요소를 변수에 저장
  var slider = $('.slider');
  var slider2 = $('.slider2');

  // 슬라이더를 일시 중지 및 재개하는 함수
  function pauseSliders() {
    slider.slick('slickPause');
    slider2.slick('slickPause');
  }

  function playSliders() {
    slider.slick('slickPlay');
    slider2.slick('slickPlay');
  }

  // 슬라이더 이벤트 핸들러 설정
  $('.slider_bg_set').on('mouseenter', pauseSliders).on('mouseleave', playSliders);

  // 스크롤 이벤트 핸들러 설정
  $(window).on('scroll', function() {
    var scrollpos = $(window).scrollTop(); // 현재 스크롤 위치
    var windowHeight = $(window).height(); // 브라우저 창 높이

    // 각 콘텐츠 요소의 위치 및 애니메이션 설정
    $('#content1, #content2, #content3, #content4, #content5').each(function() {
      var contentTop = $(this).offset().top; // 콘텐츠 요소의 화면에서의 위치
      if (scrollpos + windowHeight > contentTop + 100) {
        $(this).addClass('animate__animated animate__fadeInUp').css('opacity', '1');
      }
    });
  });

  // 모달 표시 이벤트 핸들러 설정
  $('#product_guide, #interest_info, #fee_info, #other_info, #product_terms').on('shown.bs.modal', function () {
    set_position(this);
    if (this.id === 'fee_info') {
      // 모든 li 태그를 선택하여 숫자 인덱스 추가
      $('#mod_list li').each(function(index) {
        $(this).text((index + 1) + '. ' + $(this).text());
      });
    }
  });

});

// 모달 위치 설정 함수
function set_position(modal) {
  var modal_dialog = $(modal).find('.modal_posistion');
  var modal_width = modal_dialog.outerWidth();
  var window_width = $(window).width();
  var margin_left = (window_width - modal_width) / 2;
  var window_height = $(window).height();
  var modal_height = modal_dialog.outerHeight();
  var margin_top = (window_height - modal_height) / 2;
  modal_dialog.css({'margin-left': margin_left + 'px', 'margin-top': margin_top + 'px'});
}