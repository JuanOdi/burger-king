export const tabs = () => {
  if ( $( '.js-tabs' ).length ) {
    const updateTabs = function( id = '', $root = null ) {
      if ( null === $root ) {
        $root = $( '[href="' + id + '"]' ).closest( '.js-tabs' );
      }

      if ( null === id ) {
        id = $root.find( '.js-tabs__link' ).first().attr( 'href' );
      }

      const $nav = $root.find( '.js-tabs__nav' );
      const $content = $root.find( '.js-tabs__wrap' );

      console.log(id, $root);
      
      $nav.find( '.is-active' ).removeClass( 'is-active' );
      $content.find( '.is-active' ).removeClass( 'is-active' );

      $nav.find( '[href="' + id + '"]' ).parent().addClass( 'is-active' );
      $content.find( id ).addClass( 'is-active' );
    };

    $( '.js-tabs' ).each( function() {
      const $root = $( this );

      $root.find( '.js-tabs__link' ).off( 'click' ).on( 'click', function( e ) {
        e.preventDefault();
        const $this = $( this );

        if ( ! $this.hasClass( 'is-active' ) ) {
          const id = $this.attr( 'href' );

          updateTabs( id, $root );

          /* Uncomment to enable history logging */
          // history.pushState( { pageid: id }, '', id );
        }
      } );

      updateTabs( null, $root );
    } );

    /* Uncomment to enable history logging */
    // if ( location.hash ) {
    //   updateTabs( location.hash );
    // }
    //
    // onpopstate = function() {
    //   if ( location.hash ) {
    //     updateTabs( location.hash );
    //   } else {
    //     $( '.js-tabs' ).each( function() {
    //       updateTabs( null, $( this ) );
    //     } );
    //   }
    // }
  }
}