export const anchorLink = () => {
  const scroll = function( scrollTop = 0, offset = 50 ) {
    $( 'html, body' ).stop().animate( { scrollTop: scrollTop - offset }, 1000 );
  };

  $( '[href^="#"]' ).click( function( e ) {
    e.preventDefault();
    const $this = $( this );
    const href = $this.attr('href');

    if ( '#top' == href ) {
      scroll();
    } else if ( $this.hasClass('scroll-down') ) {
      scroll( $( window ).height() + $(window).scrollTop() );
    } else if ( href.length > 2 ) {
      scroll( $( href ).offset().top );
    }
  } );

  $( '[href*="#"]:not([href^="#"])' ).click( function( e ) {
    const $this = $( this );
    const base = location.href.substring( 0, location.href.lastIndexOf( '/' ) ).toLowerCase();
    const href = $this.attr( 'href' );
    const hrefBase = href.substr( 0, href.indexOf( '#' ) );

    if ( base == hrefBase ) {
      e.preventDefault();
      const hash = href.substr( href.indexOf( '#' ) );
      
      scroll( $( hash ).offset().top );
    }
  });

  if ( location.hash ) {
    if( $( location.hash ).length > 0 ) {
      scroll( $( location.hash ).offset().top );
    }
  }
}