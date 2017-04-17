jQuery(document).ready(function($) {

  var show_less = "Show Less"
  var show_more = "More"
  $('#btn1').text(show_less);
  $('#btn2').text(show_less);
  $('#btn1').click(function(){
    $(this).text(function(i,old){
        return old==show_less ?  show_more : show_less;
    });
});
  $('#btn2').click(function(){
    $(this).text(function(i,old){
        return old==show_less ?  show_more : show_less;
    });
});
    
    /*======= Skillset *=======*/
    
    
    // $('.level-bar-inner').css('width', '0');
    
    // $(window).on('load', function() {

    //     $('.level-bar-inner').each(function() {
        
    //         var itemWidth = $(this).data('level');
            
    //         $(this).animate({
    //             width: itemWidth
    //         }, 800);
            
    //     });

    // });
   
    

});