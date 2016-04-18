	$(function() {
	    $( "#dialog" ).dialog();
	  });
	$(function() {
	    $( "#menu" ).menu();
	  });
	$(function() {
	    $( "#tabs" ).tabs({
			  active: 1
			});
	  }); 
	$(function() {
		$( "#draggable" ).draggable();
		$( "#droppable" ).droppable({
			drop: function( event, ui ) {
				$( this )
				.addClass( "ui-state-highlight" )
					.html( "Eliminado" );            
			}
			
		});
	});  
	$(function() {
		$( "#draggable" ).draggable();
		$( "#droppable" ).droppable({
			out: function( event, ui ) {
				$( this )
					.removeClass( "ui-state-highlight" )
					.html( "Papelera de reciclaje" );            
			}
			
		});
	}); 
	$(function() {
	    $( "#datepicker" ).datepicker();
	  });
	$(function() {
	    $( "#datepicker2" ).datepicker();
	  });  
	
