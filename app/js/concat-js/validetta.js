jQuery(function($){

 
	
	


	//--------------------- INSCRIPTION---------------------- //
    
$('#inscription').validetta({
  onValid : function( event ) {
    event.preventDefault(); // Will prevent the submission of the form
   
   //alert( 'Nice, Form is valid.' );
 
 // ici faire la requête ajax

	 var email = $("#email").val();
      var nom = $("#nom").val();
      var prenom = $("#prenom").val();
      var chiffre = $("#cp").val();
      var commune = $("#ville").val();
      var date = $("#datepicker").val();
	  
	$.ajax({
		// 1) on définit le fichier vers lequel on envoye la requête POST
		url: '../index.html',
		// 2/ on spécifie la méthode  
		type:'POST',
		// 3) on définit les variables POST qui sont ennvoyées au fichier .php
		data : email,
        
		 // 4) format de retour du fichier php dans "data"
		dataType: 'html',
		// 5) fonction à effectuer en cas de succès
		success : function(data){
			//$("#form").hide; si on veut faire disparaitre le formulaire
			$("#contenu").html(data);
			
		}//success
		
	})  //ajax fonction
	  
 }, // valid
  onError : function( event ){
    //alert( 'Stop bro !! There are some errors.');
  
  
  }, // error
  
  
  display : 'bubble',//position de la bulle d'erreur
  errorClass : 'validetta-error',
  /** Same for valid validation */
  validClass : 'validetta-valid', // Same for valid validation
  bubblePosition: 'right', // Bubble position // right / bottom
  bubbleGapLeft: 15, // Right gap of bubble (px unit)
  bubbleGapTop: 0, // Top gap of bubble (px unit)
  /* To enable real-time form control, set this option true. */
  realTime : true
  
});//validetta	
	
// ------------------CONNECTION -------------------------------//
    
    
$('#connection').validetta({
  onValid : function( event ) {
    event.preventDefault(); // Will prevent the submission of the form
   
   //alert( 'Nice, Form is valid.' );
 
 // ici faire la requête ajax
	  
	 var email = $("#identifiant").val();
	  
	$.ajax({
		// 1) on définit le fichier vers lequel on envoye la requête POST
		url: './php.php',
		// 2/ on spécifie la méthode  
		type:'POST',
		// 3) on définit les variables POST qui sont ennvoyées au fichier .php
		data : email,
		 // 4) format de retour du fichier php dans "data"
		dataType: 'html',
		// 5) fonction à effectuer en cas de succès
		success : function(data){
			//$("#form").hide; si on veut faire disparaitre le formulaire
			$("#contenu2").html(data);
			
		}//success
			
	})  //ajax fonction	  
 
 }, // valid
  onError : function( event ){
    //alert( 'Stop bro !! There are some errors.');
  
  
  }, // error
  
  
  display : 'bubble',//position de la bulle d'erreur
  errorClass : 'validetta-error',
  /** Same for valid validation */
  validClass : 'validetta-valid', // Same for valid validation
  bubblePosition: 'right', // Bubble position // right / bottom
  bubbleGapLeft: 15, // Right gap of bubble (px unit)
  bubbleGapTop: 0, // Top gap of bubble (px unit)
  /* To enable real-time form control, set this option true. */
  realTime : true
  
});//validetta	
		
}); // DOCUMENT READY