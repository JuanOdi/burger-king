export const accordion = () => {
  $( '.js-accordion' ).each( function() {
    let $root = $( this );

    $root.find( '.list-accordion__link' ).off( 'click' ).on( 'click', function( e ) {
      e.preventDefault();
      const $this = $( this );
      const $content = $this.closest( '.list-accordion__item' ).find( '.list-accordion__content' );

      if ( $this.hasClass( 'is-active' ) ) {
        $this.removeClass( 'is-active' );
        $content.stop().slideUp();
      } else {
        $root.find( '.is-active' ).removeClass( 'is-active' ).closest( '.list-accordion__item' ).find( '.list-accordion__content' ).stop().slideUp();

        $this.addClass( 'is-active' );
        $content.stop().slideDown();
      }
    } );
    $root.find( '.list-accordion__content' ).hide();
  } );
  $( '.js-accordion' ).each( function() {
    let $root = $( this );

    $root.find( '.top-faq__link' ).off( 'click' ).on( 'click', function( e ) {
      e.preventDefault();
      const $this = $( this );
      const $content = $this.closest( '.top-faq__item' ).find( '.top-faq__content' );

      if ( $this.hasClass( 'is-active' ) ) {
        $this.removeClass( 'is-active' );
        $content.stop().slideUp();
      } else {
        $root.find( '.is-active' ).removeClass( 'is-active' ).closest( '.top-faq__item' ).find( '.top-faq__content' ).stop().slideUp();

        $this.addClass( 'is-active' );
        $content.stop().slideDown();
      }
    } );
    $root.find( '.top-faq__content' ).hide();
  } );
}