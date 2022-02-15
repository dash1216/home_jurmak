/*$('.feature').owlCarousel({
    loop:true,
    margin:2,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
           
        },
        600:{
            items:2,
            nav:true,
            loop:true
        },
        1000:{
            items:3,
            nav:true,
            loop:true
        }
        
    }
}); */
$(document).ready(function() {
 
    $("#owl-demo").owlCarousel({
   
        autoPlay: 3000, //Set AutoPlay to 3 seconds
   
        items : 4,
        itemsDesktop : [1199,3],
        itemsDesktopSmall : [979,3]
   
    });
   
  });
  function searchToggle(obj, evt){
    var container = $(obj).closest('.search-wrapper');
        if(!container.hasClass('active')){
            container.addClass('active');
            evt.preventDefault();
        }
        else if(container.hasClass('active') && $(obj).closest('.input-holder').length == 0){
            container.removeClass('active');
            // clear input
            container.find('.search-input').val('');
        }
}
$(function(){
    $.scrollIt({    
        topOffset:-50
  });
});
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:1,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:2,
            nav:true
        },
        1000:{
            items:3,
            nav:true,
            loop:true
        }
    }
})