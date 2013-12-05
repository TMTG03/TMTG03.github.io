
$(document).ready(function() {  					   
	$(window).resize(function () {
        var maskHeight = $(document).height();
        var maskWidth = $(window).width();
		var maskHeightTut = $(document).height();
        var maskWidthTut = $(window).width();
        $('#mask').css({'width':maskWidth,'height':maskHeight});
		$('#masktut').css({'width':maskWidthTut,'height':maskHeightTut}); 
	});         
});

function popUpMask() {
        var maskHeight = $(document).height();
        var maskWidth = $(window).width();
        $('#mask').css({'width':maskWidth,'height':maskHeight});   
        $('#mask').fadeTo("slow",0.7);  
}

function popUpMaskTut() {
        var maskHeightTut = $(document).height();
        var maskWidthTut = $(window).width();
        $('#masktut').css({'width':maskWidthTut,'height':maskHeightTut});   
        $('#masktut').fadeTo("slow",0.7);  
}