$(document).ready(function(){
  // slick
  $('.index_inner').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    prevArrow: '<a class="card-control-prev"><i class="fa-solid fa-chevron-left"></i></a>',
    nextArrow: '<a class="card-control-next"><i class="fa-solid fa-chevron-right"></i></a>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });

  // lndex
  let slickIndex = 0 ;
  function searchIndexCard(){
    slickIndex = $('.slick-current').data('slick-index');
    const currntCard = $(`.slide[data-slick-index="${slickIndex}"] img`);
    const prevCard = $(`.slide[data-slick-index="${slickIndex-1}"] img`);
    const nextCard = $(`.slide[data-slick-index="${slickIndex+1}"] img`);
    
    $('.slide img').css({
      'opacity': '0'
    });

    currntCard.css({
      'opacity': '1',
      'position': 'absolute',
      'left': '150px',
      'z-index': 1
    });
    prevCard.css({
      'opacity': '1',
      'position': 'absolute',
      'left': '254px',
      'z-index': -1
    });
    nextCard.css({
      'opacity': '1',
      'position': 'absolute',
      'left': '60px',
      'z-index': -1
    });
  };
  searchIndexCard()

  $('#index_carousel').on('afterChange', function(){
    searchIndexCard();
  });

});