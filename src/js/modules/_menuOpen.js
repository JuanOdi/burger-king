export const menuOpen = {
  init: function() {
    $( '.js-menu-toggle' ).on( 'click', function() {
      $( 'html' ).toggleClass( 'is-menu-opened' );
    } );
  },

  resize: function() {
    $( 'html' ).removeClass( 'is-menu-opened' );
  },
}