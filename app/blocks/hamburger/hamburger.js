jQuery( document ).ready( function() {
	jQuery( '#hamburger' ).click( function () {
		jQuery( '#hamburger .hamburger__item' ).toggleClass( 'hamburger__item_open' );
    jQuery( '#navigation' ).toggleClass('hidden');
	});
});