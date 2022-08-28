new Glider(document.querySelector('.glider'), {
    dots: '#dots',
    slidesToShow: 1,
    slidesToScroll: 1,
    scrollLock: true,
    responsive: [
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 616,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    arrows: {
      prev: '.review__arrow-button--left',
      next: '.review__arrow-button--right'
    }
  });