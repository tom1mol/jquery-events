$(document).ready(function() {
 
 

 //applies red color to paragraphs when clicked on. linked to style.css .highlight_text and p.text
	$("p").click(function() {
		$("p").addClass("highlight_text");
});

//add lightblue to h2 elements when hovered over. linked to style.css .h2_color

$("h2").hover(function(){
	$("h2").addClass("h2_color");
	
});

/* this will apply larger font size to the active h2 element
by adding the h2_font_size class but
not the other h2 elements by removing class h2_font_size fcrom them
put ID on h2 element in html*/

$("#hr_html").hover(function(){
	$("#hr_mysql").removeClass("h2_font_size");
	$("#hr_python").removeClass("h2_font_size");
	$("#hr_jquery").removeClass("h2_font_size");
	$("#hr_django").removeClass("h2_font_size");
	$("#hr_css").removeClass("h2_font_size");
	$("#hr_html").addClass("h2_font_size");
});

$("#hr_mysql").hover(function(){
	$("#hr_python").removeClass("h2_font_size");
	$("#hr_jquery").removeClass("h2_font_size");
	$("#hr_django").removeClass("h2_font_size");
	$("#hr_css").removeClass("h2_font_size");
	$("#hr_html").removeClass("h2_font_size");
	$("#hr_mysql").addClass("h2_font_size");
	});
	
$("#hr_python").hover(function(){
	$("#hr_mysql").removeClass("h2_font_size");		
	$("#hr_jquery").removeClass("h2_font_size");
	$("#hr_django").removeClass("h2_font_size");
	$("#hr_css").removeClass("h2_font_size");
	$("#hr_html").removeClass("h2_font_size");
	$("#hr_python").addClass("h2_font_size");
	});
	
$("#hr_jquery").hover(function(){
	$("#hr_mysql").removeClass("h2_font_size");
	$("#hr_python").removeClass("h2_font_size");
	$("#hr_django").removeClass("h2_font_size");
	$("#hr_css").removeClass("h2_font_size");
	$("#hr_html").removeClass("h2_font_size");
	$("#hr_jquery").addClass("h2_font_size");
});
$("#hr_django").hover(function(){
	$("#hr_mysql").removeClass("h2_font_size");
	$("#hr_python").removeClass("h2_font_size");
	$("#hr_jquery").removeClass("h2_font_size");
	$("#hr_css").removeClass("h2_font_size");
	$("#hr_html").removeClass("h2_font_size");
	$("#hr_django").addClass("h2_font_size");
});

$("#hr_css").hover(function(){
	$("#hr_mysql").removeClass("h2_font_size");
	$("#hr_python").removeClass("h2_font_size");
	$("#hr_jquery").removeClass("h2_font_size");
	$("#hr_django").removeClass("h2_font_size");
	$("#hr_html").removeClass("h2_font_size");
	$("#hr_css").addClass("h2_font_size");
});

/*
 // background color goes black when mouse goes over buttons
 $(".bottom_button").mouseenter(function(){
 	$("body").css("background-color", "black");
 });
 
 //background-color goes grey when mouse leaves button
 
 $(".bottom_button").mouseleave(function(){
 	$("body").css("background-color", "#eee");
 });
 
 */
 
 /*
// disappears and reappears after 1000miliseconds      hide button   challenge1
 $("#button_effects1").click(function(){
 	$('#button_effects1').hide();
 	$('#button_effects1').show(1000);   //this part makes it reappear
        });
    
*/    

// challenge2 jquery events hide <p> with click of button then display <p> with click of button
 $("#button_effects1").click(function(){
 	$("#par1").toggle();
 	
 });
 
 $("#button_effects2").click(function(){
 	$("#par2").toggle();
 });
        
// challenge 3 use slideToggle to show/hide <p>
$("#button_effects3").click(function(){
	$("#par3").slideToggle();
});

//challenge4 use fadeTo with mouseenter/leave to modify button. fadeTo 50% mousenter 100% on mouseleave
$("#button_effects4").mouseenter(function(){
	$("#button_effects4").fadeTo(1000, 0.5);
});

$("#button_effects4").mouseleave(function(){
	$("#button_effects4").fadeTo(1000, 1);
});


/* disappears and reappears after 1000 miliseconds*/
/*
 $("#button_effects1").click(function(){
 	$('#button_effects1').toggle();
 	$('#button_effects1').toggle(1000);
        }); */

/*
//adds slideToggle to buttons to toggle paragraphs open and closed

$("#button_effects1").click(function(){
	$("#par1").slideToggle('1000');	
});

$("#button_effects2").click(function(){
	$("#par2").slideToggle('1000');
});

$("#button_effects3").click(function(){
	$("#par3").slideToggle('1000');
});

$("#button_effects4").click(function(){
	$("#par4").slideToggle('1000');
});

$("#button_effects5").click(function(){
	$("#par5").slideToggle("1000");
});

$("#button_effects6").click(function(){
	$("#par6").slideToggle("1000");
});


//adds fade to when mouseEnter and mouseLeave

$("#button_effects1").mouseenter(function(){
	$("#button_effects1").fadeTo(1000, 0.5);  //1000miliseconds, 0.5 opacity
});

$("#button_effects1").mouseleave(function(){
	$("#button_effects1").fadeTo(1000, 1);
});

$("#button_effects2").mouseenter(function(){
	$("#button_effects2").fadeTo(1000, 0.5);
});

$("#button_effects2").mouseleave(function(){
	$("#button_effects2").fadeTo(1000, 1);
});

$("#button_effects3").mouseenter(function(){
	$("#button_effects3").fadeTo(1000, 0.5);
});

$("#button_effects3").mouseleave(function(){
	$("#button_effects3").fadeTo(1000, 1);
});

$("#button_effects4").mouseenter(function(){
	$("#button_effects4").fadeTo(1000, 0.5);
});

$("#button_effects4").mouseleave(function(){
	$("#button_effects4").fadeTo(1000, 1);
});

$("#button_effects5").mouseenter(function(){
	$("#button_effects5").fadeTo(1000, 0.5);
});

$("#button_effects5").mouseleave(function() {
    $("#button_effects5").fadeTo(1000, 1);
});

$("#button_effects6").mouseenter(function(){
	$("#button_effects6").fadeTo(1000, 0.5);
});

$("#button_effects6").mouseleave(function(){
	$("#button_effects6").fadeTo(1000, 1);
});

*/



});


