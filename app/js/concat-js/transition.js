jQuery(function($){

 
	
	

    
    // -----------------TRANSITION------------------------//

  var bloc = $("#carree");
    
    $("#dejainscrit").click(function(){
        bloc.animate({
            'top' : '0%',
             'left' : '55%'
        });
        $( "#inscription" ).hide();
        $( "#connection" ).show();
        
    });
    
    
     $("#goinscri").click(function(){
         bloc.animate({
            'top' : '0%',
             'left' : '10%'
        });
        $( "#inscription" ).show();
        $( "#connection" ).hide();
    });
	
	
 
 });//ready