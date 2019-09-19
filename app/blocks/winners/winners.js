jQuery( document ).ready( function() {
  var hone = 0;
  jQuery('#winners__box .winners__one').each(function(i,elem) {
    if(i == 0) {
      hone = jQuery(this).height();
    } else {
      jQuery(this).removeClass("hidden");
      if(hone < jQuery(this).height()){
        hone = jQuery(this).height();
      }
      jQuery(this).addClass("hidden");
    }
  });
  jQuery('#winners__box .winners__one').height(hone);
  
  var winner = 1;
  var winners = jQuery("#winners__box .winners__one").length;
  if(winners < 2) {
    jQuery( '#winners__arrow-left' ).addClass('hidden');
    jQuery( '#winners__arrow-right' ).addClass('hidden');
  }
	jQuery( '#winners__arrow-left' ).click( function () {
    jQuery( '[winner="'+winner+'"]' ).addClass('hidden');
    if(winner == 1){
      winner = winners;
    } else {
      winner = winner - 1;
    }
    jQuery( '[winner="'+winner+'"]' ).removeClass('hidden');
	});
  jQuery( '#winners__arrow-right' ).click( function () {
    jQuery( '[winner="'+winner+'"]' ).addClass('hidden')
    if(winner == winners){
      winner = 1;
    } else {
      winner = winner + 1;
    }
    jQuery( '[winner="'+winner+'"]' ).removeClass('hidden');
	});
  
  
  var hsone = 0;
  jQuery('#specialwinners__box .winners__one').each(function(i,elem) {
    if(i == 0) {
      hsone = jQuery(this).height();
    } else {
      jQuery(this).removeClass("hidden");
      if(hsone < jQuery(this).height()){
        hsone = jQuery(this).height();
      }
      jQuery(this).addClass("hidden");
    }
  });
  jQuery('#specialwinners__box .winners__one').height(hsone);
  
  var specialwinner = 1;
  var specialwinners = jQuery("#specialwinners__box .winners__one").length;
  if(specialwinners < 2) {
    jQuery( '#specialwinners__arrow-left' ).addClass('hidden');
    jQuery( '#specialwinners__arrow-right' ).addClass('hidden');
  }
	jQuery( '#specialwinners__arrow-left' ).click( function () {
    
    jQuery( '[specialwinner="'+specialwinner+'"]' ).addClass('hidden')
    if(specialwinner == 1){
      specialwinner = specialwinners;
    } else {
      specialwinner = specialwinner - 1;
    }
    jQuery( '[specialwinner="'+specialwinner+'"]' ).removeClass('hidden');
	});
  jQuery( '#specialwinners__arrow-right' ).click( function () {
    jQuery( '[specialwinner="'+specialwinner+'"]' ).addClass('hidden')
    if(specialwinner == 1){
      jQuery( '#specialwinners__arrow-left' ).removeClass('hidden');
    }
    if(specialwinner == specialwinners){
      specialwinner = 1;
    } else {
      specialwinner = specialwinner + 1;
    }
    jQuery( '[specialwinner="'+specialwinner+'"]' ).removeClass('hidden');
	});
});