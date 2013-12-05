
$(document).ready(function(){
	$('input#tut1-btn').click(function(){
        $('#tut1').fadeOut('slow');
		$('#mask, .window').fadeOut('slow');
    });
    $('input#tut1-submit').click(function(){
		popUpMaskTut();
        $('#tut1').fadeIn('slow');
    });
	$('input#tut2-btn').click(function(){
        $('#tut2').fadeOut('slow');
		$('#mask, .window').fadeOut('slow');
    });
    $('input#tut2-submit').click(function(){
		popUpMaskTut();
        $('#tut2').fadeIn('slow');
    });
	$('input#tut3-btn').click(function(){
        $('#tut3').fadeOut('slow');
		$('#mask, .window').fadeOut('slow');
    });
    $('input#tut3-submit').click(function(){
		popUpMaskTut();
        $('#tut3').fadeIn('slow');
    });
	$('input#tut4-btn').click(function(){
        $('#tut4').fadeOut('slow');
		$('#mask, .window').fadeOut('slow');
    });
    $('input#tut4-submit').click(function(){
		popUpMaskTut();
        $('#tut4').fadeIn('slow');
    });
    $('input#mail-message-btn').click(function(){
        $('#mail-message').fadeOut('slow');
		$('#mask, .window').fadeOut('slow');
    });
    $('input#submit-mail').click(function(){		
        var formParams = $('form#contact-form').serialize();
        $.ajax({
            url: 'contact.php',
            type: 'POST',
            traditional: true,
            data: formParams,
            success: function(data){
                var response = jQuery.parseJSON(data);
                $('#mail-failure').hide();
                $('#invalid-email').hide();
                $('#empty-field').hide();
                $('#mail-success').hide();      
                if(response.success){
                    $('#mail-message-header').toggleClass('mail-message-error', false);
                    $('#mail-message-header').toggleClass('mail-message-success', true);
                    $('#mail-success').show();
                }else{
                    $('#mail-message-header').toggleClass('mail-message-error', true);
                    $('#mail-message-header').toggleClass('mail-message-success', false);
                    $('#mail-failure').show();
                    for(i=0; i<response.errors.length; i++){
                        if(response.errors[i].error == 'empty')                            
                            $('#empty-field').show();
                        else if(response.errors[i].error == 'invalid')
                            $('#invalid-email').show();
                    }
                }  
			    popUpMask();
                $('#mail-message').fadeIn('slow');
            }
        });
    });
});