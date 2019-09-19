/*const lazyLoadImg = new IntersectionObserver(
  function (entries) {
    for (let i = 0; i < entries.length; i++) {
      const entry = entries[i];
      const target = entry.target;
      if (entry.isIntersecting && target.hasAttribute('data-lazy-load')) {
        if (target.nodeName === 'IMG') {
          target.setAttribute('src', target.getAttribute('data-lazy-load'));
        } else if (target.nodeName === 'SOURCE') {
          target.setAttribute('srcset', target.getAttribute('data-lazy-load'));
        } else {
          target.style.backgroundImage = 'url(' + target.getAttribute('data-lazy-load') + ')';
        }
        target.removeAttribute('data-lazy-load')
        lazyLoadImg.unobserve(target);
        target.style.opacity = 1;
      }
    }
  },
  {
    root: null,
    rootMargin: ( window.innerHeight / 2 ) + 'px ' + ( window.innerWidth / 2 ) + 'px',
    threshold: [0],
  }
);
// Start observing an element
const lazyLoadImgElems = document.querySelectorAll('[ data-lazy-load ]');
for (let i = 0; i < lazyLoadImgElems.length; i++) {
  lazyLoadImg.observe(lazyLoadImgElems[i]);
  lazyLoadImgElems[i].style.opacity = 0;
  lazyLoadImgElems[i].style.transition = '1s';
}*/
jQuery( document ).ready( function() {
	jQuery( '#hamburger' ).click( function () {
		jQuery( '#hamburger .hamburger__item' ).toggleClass( 'hamburger__item_open' );
    jQuery( '#navigation' ).toggleClass('hidden');
	});
});
jQuery( document ).ready( function() {
	jQuery( '#jury-all' ).click( function () {
		jQuery( '.jury__one' ).removeClass( 'hidden' );
    jQuery( '#jury-all' ).addClass( 'hidden' );
	});
});
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
jQuery( document ).ready( function() {
  jQuery( '#close-callback' ).click( function () {
		jQuery( '#callback' ).addClass( 'hidden' );
	});
  jQuery( '.activation-callback' ).click( function () {
		jQuery( '#callback' ).removeClass( 'hidden' );
	});
});
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