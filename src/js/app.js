$(document).ready(function(){
  // Header-Navigation
  $('nav#main_nav>ul>ul>li:not(:nth-last-child(-n+2))>a').on('mouseenter', function(){activeNav()});
  $('nav#main_nav').on('mouseleave', function(){inactiveNav()});
  $('nav#main_nav>ul>ul>li:nth-last-child(-n+2)').on('mouseenter', function(){inactiveNav()});
  $(window).on('scroll', function(){
    if($(window).scrollTop() > 40){
      activeNav();
    }else{
      inactiveNav();
    }
  });


  // navigation 활성화
  function activeNav(){
    $('nav#main_nav').css({
      'background-color': 'white',
      'border-bottom': '1px solid #f0f0f0'
    });
    $('nav#main_nav>ul>ul>li:nth-last-child(2)>a').css({
      'background-color': 'rgba(244, 244, 244, 0.8)',
      'color': 'rgb(68, 68, 68)',
      'border': '1px solid rgba(229, 229, 229, 0.8)'
    });
    $('nav#main_nav>ul>li h1').css('color', 'black');
    $('nav#main_nav>ul>ul>li>a').css('color', 'black');
  }
  // navigation 비활성화
  function inactiveNav(){
    $('nav#main_nav').css({
      'background-color': '#313955',
      'border-bottom': '1px solid rgba(0, 0, 0, 0)'
    });
    $('nav#main_nav>ul>ul>li:nth-last-child(2)>a').css({
      'background-color': 'rgba(34,34,34,0.2)',
      'color': 'white',
      'border': '1px solid rgba(34, 34, 34, 0.1)'
    });
    $('nav#main_nav>ul>li h1').css('color', 'white');
    $('nav#main_nav>ul>ul>li>a').css('color', 'white');
  }
});

