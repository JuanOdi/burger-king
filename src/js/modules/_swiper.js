export const swiperJS = () => {
  if ( $( '.js-swiper' ).length ) {
    $( '.js-swiper' ).each( function() {
      let options = null;

      if ( $( this ).hasClass( 'top-banner' ) ) {
        options = {
          autoplay: true,
          effect: 'fade',
          loop: true,
          noSwipingClass: 'swiper-slide',
        };
      } else if ( $( this ).hasClass( 'layout-01__swiper' ) ) {
        options = {
          loop: true,
          slidesPerView: 3,
          spaceBetween: 10,
          navigation: {
            nextEl: ".swiper-next",
            prevEl: ".swiper-prev",
          },
        };
      }
      else if ( $( this ).hasClass( 'top-menu-bnr__swiper' ) ) {
        options = {
          autoplay: {
            delay: 0,
          },
          loop: true,
          slidesPerView: 'auto',
          speed: 8000,
      }
      }
      else if ( $( this ).hasClass( 'layout-02__swiper' ) ) {
        options = {
          autoplay: {
            delay: 0,
          },
          loop: true,
          slidesPerView: 'auto',
          speed: 8000,
          spaceBetween: 24
      }
      }
      if ($(this).hasClass('top-blog__swiper02') && window.matchMedia('(max-width: 991px)').matches) {
        options = {
          loop: true,
          slidesPerView: 4,
          spaceBetween: 22,
        };
      }
      new Swiper( this, options );
    } );
  }
}