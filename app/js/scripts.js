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
// DEGRADEEEE------//
// SOURCE DU BACKGROUND : https://codepen.io/quasimondo/pen/lDdrF //

var colors = new Array(
  [62,35,255],
  [60,255,60],
  [255,35,98],
  [45,175,230],
  [255,0,255],
  [255,128,0]);

var step = 0;
//color table indices for: 
// current color left
// next color left
// current color right
// next color right
var colorIndices = [0,1,2,3];

//transition speed
var gradientSpeed = 0.002;

function updateGradient()
{
  
  if ( $===undefined ) return;
  
var c0_0 = colors[colorIndices[0]];
var c0_1 = colors[colorIndices[1]];
var c1_0 = colors[colorIndices[2]];
var c1_1 = colors[colorIndices[3]];

var istep = 1 - step;
var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
var color1 = "rgb("+r1+","+g1+","+b1+")";

var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
var color2 = "rgb("+r2+","+g2+","+b2+")";

 $('#gradient').css({
   background: "-webkit-gradient(linear, left top, right top, from("+color1+"), to("+color2+"))"}).css({
    background: "-moz-linear-gradient(left, "+color1+" 0%, "+color2+" 100%)"});
  
  step += gradientSpeed;
  if ( step >= 1 )
  {
    step %= 1;
    colorIndices[0] = colorIndices[1];
    colorIndices[2] = colorIndices[3];
    
    //pick two new target color indices
    //do not pick the same as the current one
    colorIndices[1] = ( colorIndices[1] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
    colorIndices[3] = ( colorIndices[3] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
    
  }
}

setInterval(updateGradient,10);


// AFFICHAGE DE BASE //

$( "#inscription" ).show();
$( "#connection" ).hide();


jQuery(function($){
	$.datepicker.regional['fr'] = {
		closeText: 'Fermer',
		currentText: 'Aujourd\'hui',
		monthNames: ['Janvier','Fevrier','Mars','Avril','Mai','Juin',
		'Juillet','Aout','Septembre','Octobre','Novembre','Decembre'],
		monthNamesShort: ['Jan','Fev','Mar','Avr','Mai','Jun',
		'Jul','Aou','Sep','Oct','Nov','Dec'],
		dayNames: ['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'],
		dayNamesShort: ['Dim','Lun','Mar','Mer','Jeu','Ven','Sam'],
		dayNamesMin: ['Di','Lu','Ma','Me','Je','Ve','Sa'],
		weekHeader: 'Sm',
		dateFormat: 'D, d M, yy',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: '',
		numberOfMonths: 1,
		showButtonPanel: true,
		showAnim: 'fold',
		showOn: "button",
      buttonImage: "../css/images/calendar.gif",
      buttonImageOnly: true,
      buttonText: "Select date",
      changeMonth: true,
      changeYear: true
		};
	$.datepicker.setDefaults($.datepicker.regional['fr']);
	
});//fin datepicker regional
 
$(function(){ 

$( "#datepicker" ).datepicker();
    
});
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