// Bind page load function
$(document).ready( function() {	

    // Declare counter variable
    var counter = 0;

    // Bind Delete contact function removes table rows
    $('#delContact').live( 'click',function() {
        $(this).parent().parent().remove();		
    }); // end bind function remove rows

    // Bind Add contact function adds new table rows
    $('#addContact').click(function() {
    	// Get input from the user
    	var inputName = $('#name').val();
    	var inputEmail = $('#email').val();
    	var inputPhone = $('#phone').val();	

    	// Set row value 
    	var idRow = counter+1;

    	// create table cells and rows
    	$('tbody').append("<tr>  
    	   <td>"+idRow+"<td> 
    	   <td>"+inputName+"</td>  
    	   <td>"+inputEmail+"</td> 
    	   <td>"+inputPhone+"</td>  
    	   <td><button id='delContact'>Delete</button><td> 
    	<tr>");  

    	// Increment counter
    	counter++;
    	});  end bind function add rows

}); // end page load
