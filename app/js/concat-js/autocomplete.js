jQuery(function($){

 
 /***********************************************************************************************************/
	
	
	var availableTags = [
      "ActionScript",
      "AppleScript",
      "Asp",
      "BASIC",
      "C",
      "C++",
      "Clojure",
      "COBOL",
      "ColdFusion",
      "Erlang",
      "Fortran",
      "Groovy",
      "Haskell",
      "Java",
      "JavaScript",
      "Lisp",
      "Perl",
      "PHP",
      "Python",
      "Ruby",
      "Scala",
      "Scheme"
    ];
	
	
  
	
	
/*******************************************************************************************/
	
	$.ajax(  {
		
		url:'../json/cities.json',
		method:"GET",
		dataType:"json",
		success:function(monObjet){
			
			
			
			
			//console.log(monObjet);
			var i = 0;
			
			var villes = [];
			//villes.push("brux");
			
			for(i=0; i<monObjet.length; i++)
				
				
				{
					
					var obj = {};
				
				
				obj["value"] = monObjet[i].zip;
				obj["label"] = monObjet[i].zip+" "+monObjet[i].name;
				obj["ville"] = monObjet[i].name;

			villes.push(obj);
					
				}//for
			
			console.log(villes);
			
			$("#cp").autocomplete({
				source: function( request, response ) {
          var matcher = new RegExp( "^" + $.ui.autocomplete.escapeRegex( request.term ), "i" );
          response( $.grep( villes, function( item ){
              return matcher.test( item.label );
          }) );
      }
,
				minLength:1,
				
	select: function(event, ui){
		
		
		$("#ville").val(ui.item.ville);
	}
			});
			
			
			
		
			
			
			
		}//success function
		
		
		
		
		
		
	});//ajax
	
	
}); // Jquery ready