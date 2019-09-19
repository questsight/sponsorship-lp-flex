jQuery( document ).ready( function() {
	jQuery( '.purpose__title-one' ).click( function () {
    var activ = jQuery( this ).attr('active')
		jQuery( '.purpose__title-one' ).removeClass( 'active' );
    jQuery( this ).addClass( 'active' );
    jQuery( '.purpose__title-background' ).html( activ );
    jQuery( '.purpose__content' ).addClass( 'hidden' );
    jQuery( "[number='"+activ+"']" ).removeClass( 'hidden' );
	});
});