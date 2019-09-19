jQuery( document ).ready( function() {
  jQuery("a.scrollto").click(function () {
    elementClick = jQuery(this).attr("href")
    destination = jQuery(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 600);
    return false;
  });
  jQuery( '.navigation__item' ).click( function () {
      jQuery( '.hamburger__item' ).toggleClass( 'hamburger__item_open' );
      jQuery( '#navigation' ).toggleClass('hidden');    
	});
});