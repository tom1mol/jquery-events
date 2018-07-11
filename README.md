html before jquery effects

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>jQuery</title>
	<link href="style.css" rel="stylesheet" type="text/css">
	<link href='http://fonts.googleapis.com/css?family=Roboto' rel='stylesheet' type='text/css'>
	<link href='http://fonts.googleapis.com/css?family=Dosis' rel='stylesheet' type='text/css'>
</head>
<body>
	<div id="container">
		<nav>
			<ul>
				<li id="logoNav">CODE INSTITUTE</li>
				<li id="stream1_btn">Stream 1</li>
				<li id="stream2_btn">Stream 2</li>
				<li id="stream3_btn">Stream 3</li>
			</ul>
		</nav>
		<div class="card stream1">
			<img class="card_image"src="img/3.png">
			<div class="card_bottom">
				<h2 id="hr_html"class="card_head">HTML</h2>
				<p class="card_para">Once you join a Code Institute Bootcamp you will be taken on an accelerated contextualised learning path across 3 streams. Nothing is learned in isolation.We contextualise the content so that the knowledge and skills gained in each learning unit feeds into, and is expanded upon, within the next unit.The outputs of each stream will be a project. </p>
				<a href="" class="bottom_button">Button</a>
			</div>
		</div>
		<div class="card stream3">
			<img class="card_image "src="img/1.png">	
			<h2 id="hr_mysql"class="card_head">MySql</h2>
			<p class="card_para">If you have questions about your career in coding or simply want to meet the Code Institute team, then come along to our next Careers Open Evening in Dublin</p>
			<a href="" class="bottom_button">Button</a>
		</div>
		
		<div class="card stream2">
			<img class="card_image "src="img/2.png">
			<h2 id="hr_python"class="card_head">Python</h2>
			<p class="card_para">If you have questions about your career in coding or simply want to meet the Code Institute team, then come along to our next Careers Open Evening in Dublin</p>
			<a href="" class="bottom_button">Button</a>
		</div>
		<div class="card stream1">
			<img class="card_image"src="img/3.png">
			<div class="card_bottom">
				<h2 id="hr_jquery"class="card_head">jQuery</h2>
				<p class="card_para">Once you join a Code Institute Bootcamp you will be taken on an accelerated contextualised learning path across 3 streams. Nothing is learned in isolation.We contextualise the content so that the knowledge and skills gained in each learning unit feeds into, and is expanded upon, within the next unit.The outputs of each stream will be a project. </p>
				<a href="" class="bottom_button">Button</a>
			</div>
		</div>
		<div class="card stream3">
			<img class="card_image"src="img/4.png">
			<h2 id="hr_django"class="card_head">Django</h2>
			<p class="card_para">The syllabus has been developed to help you transform your career. The summarised syllabus, below, provides you with a snapshop of what skills you will come away with. Feel free to contact us for more detail on what you will learn.</p>
			<a href="" class="bottom_button">Button</a>
		</div>
		<div class="card stream1">
			<img class="card_image"src="img/1.png">
			<h2 id="hr_css"class="card_head">CSS</h2>
			<p class="card_para">The syllabus has been developed to help you transform your career. The summarised syllabus, below, provides you with a snapshop of what skills you will come away with. Feel free to contact us for more detail on what you will learn.</p>
			<a href="" class="bottom_button">Button</a>
		</div>
		<div id="my_footer">
			<p id="copyright">Copyright Infomation</p>
		</div>
	</div>
	<script src="https://code.jquery.com/jquery-3.2.1.js" integrity="sha256-DZAnKJ/6XZ9si04Hgrsxu/8s717jcIzLy3oi35EouyE=" crossorigin="anonymous"></script>
	<script type="text/javascript" src="script.js"></script> <!-- Scripts located at the bottom of the body to insure page is fully loaded before execution -->
	
</body>
</html>



script.js

buttons

 // background color goes black when mouse goes over buttons
 $(".bottom_button").mouseenter(function(){
 	$("body").css("background-color", "black");
 });
 
 //background-color goes grey when mouse leaves button
 
 $(".bottom_button").mouseleave(function(){
 	$("body").css("background-color", "#eee");
 });
 
 /* disappears and reappears after 1000miliseconds */
 $("#button_effects1").click(function(){
 	$('#button_effects1').hide();
 	$('#button_effects1').show(1000);
        });
        
/* disappears and reappears after 1000 miliseconds*/
/*
 $("#button_effects1").click(function(){
 	$('#button_effects1').toggle();
 	$('#button_effects1').toggle(1000);
        }); */
