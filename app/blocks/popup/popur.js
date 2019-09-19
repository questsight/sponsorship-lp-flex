jQuery( document ).ready( function() {
  jQuery( '#close-callback' ).click( function () {
		jQuery( '#callback' ).addClass( 'hidden' );
	});
  jQuery( '.activation-callback' ).click( function () {
		jQuery( '#callback' ).removeClass( 'hidden' );
	});
});