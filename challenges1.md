
 
154  01-events_in_jquery/css/style.css
@@ -0,0 +1,154 @@
+body{
+	font-family: 'Roboto', sans-serif;
+ 	background-color: #eee;
+}
+
+h1{
+	font-size: 3em;
+	text-align: center;
+}
+h2{
+	font-size: 1em;
+	text-align: left;
+}
+p{
+	font-size: .9rem;
+}
+p.text{
+	background-color: red;
+}
+
+div{
+	border-radius: 4px;
+}
+
+.card_image{
+	width: 100%;
+}
+.bottom_button{
+	display: flex;/*creates flex item*/
+	box-sizing:border-box;
+	border-radius: 4px;
+	display: block;
+	width: 100%;
+	background-color:rgba(129, 187, 201,.85);
+	text-align: center;
+	padding: 1em .75em;
+	text-decoration: none;
+	color: #fff;
+
+}
+
+.card_bottom{
+	display: flex;
+	flex-flow:column;/*sets flex direction*/
+}
+.card_head{
+	flex:0;
+}
+.card_para{
+	flex:1 0 auto;
+}
+
+#container
+{
+	display: flex;		/* makes container a flexbox*/
+	flex-flow: row wrap; 	/* layout the boxes in rows and wrap them*/
+	box-sizing:border-box;
+	margin-right:auto;
+	margin-left:auto;
+	max-width:1050px;	
+}
+#logo{
+	width: 800px;
+	margin: auto;
+}
+
+.card{
+	flex:1; /* equal width to cards applied*/
+	display: flex;	/* make the contents controllable by flexbox*/
+	flex-flow:column;	/* */
+	min-width: 240px; /**/
+	margin: 10px;
+	padding: 20px;
+	background-color: #fff;
+}
+/*adds colour red to paragraphs when called by jquery function*/
+.highlight_text{
+	background-color: #EB5255;
+}
+/*adds colour lightblue to h2 background when called by jquery function*/
+.h2_color{
+	background-color: lightblue;
+	
+}
+/*increases font-size of  h2 when called by jquery function*/
+.h2_font_size{
+	font-size: 2em;
+}
+
+
+#my_footer{
+	width:100%;
+	text-align: center;
+}
+#copyright{
+	margin-top:10px;
+	margin-bottom:10px;
+
+}
+
+/*************************
+Navigation
+
+**************************/
+
+nav{
+	font-family: roboto;
+	background-color: #eee;
+	margin: 30px auto;
+	width: 100%;
+}
+ul{
+	display: flex;/*assigns as a flex container*/
+	justify-content:space-between;
+	flex-flow: row;/*direction of flex*/
+	align-items:baseline;
+	border-radius: 10px;
+	list-style-type: none; /*Remove Bullets*/
+	padding: 0;	
+}
+li{
+	flex:1;/*sets equal width to flex items*/
+	height: 30px;
+	font-family: Dosis;
+	padding:20px 20px 20px 20px;
+	text-align: center;
+	font-size: 1.3em;
+}
+
+#logoNav{
+	flex:6;
+	text-align: left;
+	font-size: 2em;
+	font-weight: bold;
+}
+
+.underline{
+  text-decoration:underline;
+}
+.border{
+  border: solid 5px #ccc;
+}
+
+/*for desktop layout*/
+@media screen and (max-width: 700px){
+	ul{
+		flex-flow: column;
+		align-items:center;
+	}
+	li{
+		font-size: 2em;
+	}
+}
+
  
BIN  01-events_in_jquery/images/1.png
Binary file not shown.
  
BIN  01-events_in_jquery/images/2.png
Binary file not shown.
  
BIN  01-events_in_jquery/images/3.png
Binary file not shown.
  
BIN  01-events_in_jquery/images/4.png
Binary file not shown.
  
BIN  01-events_in_jquery/images/code-institute.jpg
Binary file not shown.
  
BIN  01-events_in_jquery/images/slider-1.jpg
Binary file not shown.
  
BIN  01-events_in_jquery/images/slider-2.jpg
Binary file not shown.
  
BIN  01-events_in_jquery/images/slider-3.jpg
Binary file not shown.
  
BIN  01-events_in_jquery/images/slider-4.jpg
Binary file not shown.
 
75  01-events_in_jquery/jquery_events.html
@@ -0,0 +1,75 @@
+<!doctype html>
+<html>
+<head>
+	<meta charset="utf-8" />
+	<meta name="viewport" content="width=device-width, initial-scale=1">
+	<title>jQuery</title>
+	<link href="css/style.css" rel="stylesheet" type="text/css">
+	<link href='http://fonts.googleapis.com/css?family=Roboto' rel='stylesheet' type='text/css'>
+	<link href='http://fonts.googleapis.com/css?family=Dosis' rel='stylesheet' type='text/css'>
+</head>
+<body>
+	<div id="container">
+		<nav>
+			<ul>
+				<li id="logoNav">CODE INSTITUTE</li>
+				<li id="stream1_btn">Stream 1</li>
+				<li id="stream2_btn">Stream 2</li>
+				<li id="stream3_btn">Stream 3</li>
+			</ul>
+		</nav>
+		<div class="card stream1">
+			<img class="card_image"src="images/3.png">
+			<div class="card_bottom">
+				<h2 id="hr_html"class="card_head" >HTML</h2>
+				<p class="card_para">Once you join a Code Institute Bootcamp you will be taken on an accelerated contextualised learning path across 3 streams. Nothing is learned in isolation.We contextualise the content so that the knowledge and skills gained in each learning unit feeds into, and is expanded upon, within the next unit.The outputs of each stream will be a project. 
+				</p>
+				<a href="" class="bottom_button">Button</a>
+			</div>
+		</div>
+		<div class="card stream3">
+			<img class="card_image "src="images/1.png">	
+			<h2  id="hr_mysql"class="card_head">MySql</h2>
+			<p class="card_para">If you have questions about your career in coding or simply want to meet the Code Institute team, then come along to our next Careers Open Evening in Dublin</p>
+			<a href="" class="bottom_button">Button</a>
+		</div>
+		
+		<div class="card stream2">
+			<img class="card_image "src="images/2.png">
+			<h2 id="hr_python" class="card_head">Python</h2>
+			<p class="card_para">If you have questions about your career in coding or simply want to meet the Code Institute team, then come along to our next Careers Open Evening in Dublin</p>
+			<a href="" class="bottom_button">Button</a>
+		</div>
+		<div class="card stream1">
+			<img class="card_image"src="images/3.png">
+			<div class="card_bottom">
+				<h2 id="hr_jquery" class="card_head">jQuery</h2>
+				<p class="card_para">Once you join a Code Institute Bootcamp you will be taken on an accelerated contextualised learning path across 3 streams. Nothing is learned in isolation.We contextualise the content so that the knowledge and skills gained in each learning unit feeds into, and is expanded upon, within the next unit.The outputs of each stream will be a project. </p>
+				<a href="" class="bottom_button">Button</a>
+			</div>
+		</div>
+		<div class="card stream3">
+			<img class="card_image"src="images/4.png">
+			<h2 id="hr_django" class="card_head">Django</h2>
+			<p class="card_para">The syllabus has been developed to help you transform your career. The summarised syllabus, below, provides you with a snapshop of what skills you will come away with. Feel free to contact us for more detail on what you will learn.</p>
+			<a href="" class="bottom_button">Button</a>
+		</div>
+		<div class="card stream1">
+			<img class="card_image"src="images/1.png">
+			<h2 id="hr_css"class="card_head">CSS</h2>
+			<p class="card_para">The syllabus has been developed to help you transform your career. The summarised syllabus, below, provides you with a snapshop of what skills you will come away with. Feel free to contact us for more detail on what you will learn.</p>
+			<a href="" class="bottom_button">Button</a>
+		</div>
+		<div id="my_footer">
+			<p id="copyright">Copyright Infomation</p>
+		</div>
+	</div>
+	<script
+	src="https://code.jquery.com/jquery-3.2.1.js"
+	integrity="sha256-DZAnKJ/6XZ9si04Hgrsxu/8s717jcIzLy3oi35EouyE="
+	crossorigin="anonymous"></script>
+	
+	<script type="text/javascript" src="js/script.js"></script> <!-- Scripts located at the bottom of the body to insure page is fully loaded before execution -->
+	
+</body>
+</html> 
 
83  01-events_in_jquery/js/script.js
@@ -0,0 +1,83 @@
+//waits until page is loaded first
+$(document).ready(function(){
+
+    //applies colour red to paragraphs when clicked on 
+    $("p").click(function(){
+        $("p").addClass( "highlight_text");
+    });
+
+    //will add lightblue to h2 elements
+    $("h2").hover(function(){
+        $("h2").addClass( "h2_color");   
+    });
+
+    /*this will apply larger font size to the active h2 element 
+    by adding the h2_font_size class but 
+    not the other h2 elements by removing class h2_font_size from them*/
+
+    $("#hr_html").hover(function(){
+        $("#hr_mysql").removeClass("h2_font_size");
+        $("#hr_python").removeClass("h2_font_size");
+        $("#hr_jquery").removeClass("h2_font_size");
+        $("#hr_django").removeClass("h2_font_size");
+        $("#hr_css").removeClass("h2_font_size");
+        $("#hr_mysql").removeClass("h2_font_size");
+        $("#hr_html").addClass("h2_font_size");
+
+    });
+
+    $("#hr_mysql").hover(function(){
+        $("#hr_python").removeClass("h2_font_size");
+        $("#hr_jquery").removeClass("h2_font_size");
+        $("#hr_django").removeClass("h2_font_size");
+        $("#hr_css").removeClass("h2_font_size");
+        $("#hr_html").removeClass("h2_font_size");
+        $("#hr_mysql").addClass("h2_font_size");
+    });
+
+    $("#hr_python").hover(function(){
+        $("#hr_mysql").removeClass("h2_font_size");
+        $("#hr_jquery").removeClass("h2_font_size");
+        $("#hr_django").removeClass("h2_font_size");
+        $("#hr_css").removeClass("h2_font_size");
+        $("#hr_html").removeClass("h2_font_size");
+        $("#hr_python").addClass("h2_font_size");
+    });
+
+    $("#hr_jquery").hover(function(){
+        $("#hr_mysql").removeClass("h2_font_size");
+        $("#hr_python").removeClass("h2_font_size");
+        $("#hr_django").removeClass("h2_font_size");
+        $("#hr_css").removeClass("h2_font_size");
+        $("#hr_html").removeClass("h2_font_size");
+        $("#hr_jquery").addClass("h2_font_size");
+    });
+
+    $("#hr_django").hover(function(){
+        $("#hr_mysql").removeClass("h2_font_size");
+        $("#hr_python").removeClass("h2_font_size");
+        $("#hr_jquery").removeClass("h2_font_size");
+        $("#hr_css").removeClass("h2_font_size");
+        $("#hr_html").removeClass("h2_font_size");
+        $("#hr_django").addClass("h2_font_size");
+    });
+
+    $("#hr_css").hover(function(){
+        $("#hr_mysql").removeClass("h2_font_size");
+        $("#hr_python").removeClass("h2_font_size");
+        $("#hr_jquery").removeClass("h2_font_size");
+        $("#hr_django").removeClass("h2_font_size");
+        $("#hr_html").removeClass("h2_font_size");
+        $("#hr_css").addClass("h2_font_size");
+    });
+
+    //applies colour black to body background when mouse enters over buttons
+    $(".bottom_button").mouseenter(function(){
+        $("body").css( "background-color", "black"); 
+    });
+
+    //applies colour grey to body background when mouse leaves buttons
+    $(".bottom_button").mouseleave(function(){
+        $("body").css( "background-color", "#eee"); 
+    });
+});
 
154  02-jquery_effects/css/style.css
@@ -0,0 +1,154 @@
+body{
+	font-family: 'Roboto', sans-serif;
+ 	background-color: #eee;
+}
+
+h1{
+	font-size: 3em;
+	text-align: center;
+}
+h2{
+	font-size: 1em;
+	text-align: left;
+}
+p{
+	font-size: .9rem;
+}
+p.text{
+	background-color: red;
+}
+
+div{
+	border-radius: 4px;
+}
+
+.card_image{
+	width: 100%;
+}
+.bottom_button{
+	display: flex;/*creates flex item*/
+	box-sizing:border-box;
+	border-radius: 4px;
+	display: block;
+	width: 100%;
+	background-color:rgba(129, 187, 201,.85);
+	text-align: center;
+	padding: 1em .75em;
+	text-decoration: none;
+	color: #fff;
+
+}
+
+.card_bottom{
+	display: flex;
+	flex-flow:column;/*sets flex direction*/
+}
+.card_head{
+	flex:0;
+}
+.card_para{
+	flex:1 0 auto;
+}
+
+#container
+{
+	display: flex;		/* makes container a flexbox*/
+	flex-flow: row wrap; 	/* layout the boxes in rows and wrap them*/
+	box-sizing:border-box;
+	margin-right:auto;
+	margin-left:auto;
+	max-width:1050px;	
+}
+#logo{
+	width: 800px;
+	margin: auto;
+}
+
+.card{
+	flex:1; /* equal width to cards applied*/
+	display: flex;	/* make the contents controllable by flexbox*/
+	flex-flow:column;	/* */
+	min-width: 240px; /**/
+	margin: 10px;
+	padding: 20px;
+	background-color: #fff;
+}
+/*adds colour red to paragraphs when called by jquery function*/
+.highlight_text{
+	background-color: #EB5255;
+}
+/*adds colour lightblue to h2 background when called by jquery function*/
+.h2_color{
+	background-color: lightblue;
+	
+}
+/*increases font-size of  h2 when called by jquery function*/
+.h2_font_size{
+	font-size: 2em;
+}
+
+
+#my_footer{
+	width:100%;
+	text-align: center;
+}
+#copyright{
+	margin-top:10px;
+	margin-bottom:10px;
+
+}
+
+/*************************
+Navigation
+
+**************************/
+
+nav{
+	font-family: roboto;
+	background-color: #eee;
+	margin: 30px auto;
+	width: 100%;
+}
+ul{
+	display: flex;/*assigns as a flex container*/
+	justify-content:space-between;
+	flex-flow: row;/*direction of flex*/
+	align-items:baseline;
+	border-radius: 10px;
+	list-style-type: none; /*Remove Bullets*/
+	padding: 0;	
+}
+li{
+	flex:1;/*sets equal width to flex items*/
+	height: 30px;
+	font-family: Dosis;
+	padding:20px 20px 20px 20px;
+	text-align: center;
+	font-size: 1.3em;
+}
+
+#logoNav{
+	flex:6;
+	text-align: left;
+	font-size: 2em;
+	font-weight: bold;
+}
+
+.underline{
+  text-decoration:underline;
+}
+.border{
+  border: solid 5px #ccc;
+}
+
+/*for desktop layout*/
+@media screen and (max-width: 700px){
+	ul{
+		flex-flow: column;
+		align-items:center;
+	}
+	li{
+		font-size: 2em;
+	}
+}
+
  
BIN  02-jquery_effects/images/1.png
Binary file not shown.
  
BIN  02-jquery_effects/images/2.png
Binary file not shown.
  
BIN  02-jquery_effects/images/3.png
Binary file not shown.
  
BIN  02-jquery_effects/images/4.png
Binary file not shown.
  
BIN  02-jquery_effects/images/slider-1.jpg
Binary file not shown.
  
BIN  02-jquery_effects/images/slider-2.jpg
Binary file not shown.
  
BIN  02-jquery_effects/images/slider-3.jpg
Binary file not shown.
  
BIN  02-jquery_effects/images/slider-4.jpg
Binary file not shown.
 
74  02-jquery_effects/jquery_effects.html
@@ -0,0 +1,74 @@
+<!doctype html>
+<html>
+<head>
+	<meta charset="utf-8" />
+	<meta name="viewport" content="width=device-width, initial-scale=1">
+	<title>jQuery Effects</title>
+	<link href="css/style.css" rel="stylesheet" type="text/css">
+	<link href='http://fonts.googleapis.com/css?family=Roboto' rel='stylesheet' type='text/css'>
+	<link href='http://fonts.googleapis.com/css?family=Dosis' rel='stylesheet' type='text/css'>
+</head>
+<body>
+	<div id="container">
+		<nav>
+			<ul>
+				<li id="logoNav">CODE INSTITUTE</li>
+				<li id="stream1_btn">Stream 1</li>
+				<li id="stream2_btn">Stream 2</li>
+				<li id="stream3_btn">Stream 3</li>
+			</ul>
+		</nav>
+		<div class="card stream1">
+			<img class="card_image"src="images/3.png">
+			<div class="card_bottom">
+				<h2 id="hr_html"class="card_head" >HTML</h2>
+				<p id="par1"class="card_para">Once you join a Code Institute Bootcamp you will be taken on an accelerated contextualised learning path across 3 streams. Nothing is learned in isolation.We contextualise the content so that the knowledge and skills gained in each learning unit feeds into, and is expanded upon, within the next unit.The outputs of each stream will be a project. </p>
+				<button type="button" id="button_effects1" class="bottom_button">Button</button>
+			</div>
+		</div>
+		<div class="card stream3">
+			<img class="card_image "src="images/1.png">	
+			<h2  id="hr_mysql"class="card_head">MySql</h2>
+			<p id="par2"class="card_para">If you have questions about your career in coding or simply want to meet the Code Institute team, then come along to our next Careers Open Evening in Dublin</p>
+			<button type="button"  id="button_effects2" class="bottom_button">Button</button>
+		</div>
+		
+		<div class="card stream2">
+			<img class="card_image "src="images/2.png">
+			<h2 id="hr_python" class="card_head">Python</h2>
+			<p id="par3"class="card_para">If you have questions about your career in coding or simply want to meet the Code Institute team, then come along to our next Careers Open Evening in Dublin</p>
+			<button type="button" id="button_effects3" class="bottom_button">Button</button>
+		</div>
+		<div class="card stream1">
+			<img class="card_image"src="images/3.png">
+			<div class="card_bottom">
+				<h2 id="hr_jquery" class="card_head">jQuery</h2>
+				<p id="par4"class="card_para">Once you join a Code Institute Bootcamp you will be taken on an accelerated contextualised learning path across 3 streams. Nothing is learned in isolation.We contextualise the content so that the knowledge and skills gained in each learning unit feeds into, and is expanded upon, within the next unit.The outputs of each stream will be a project. </p>
+				<button type="button" id="button_effects4" class="bottom_button">Button</button>
+			</div>
+		</div>
+		<div class="card stream3">
+			<img class="card_image"src="images/4.png">
+			<h2 id="hr_django" class="card_head">Django</h2>
+			<p id="par5"class="card_para">The syllabus has been developed to help you transform your career. The summarised syllabus, below, provides you with a snapshop of what skills you will come away with. Feel free to contact us for more detail on what you will learn.</p>
+			<button type="button" id="button_effects5" class="bottom_button">Button</button>
+		</div>
+		<div class="card stream1">
+			<img class="card_image"src="images/1.png">
+			<h2 id="hr_css"class="card_head">CSS</h2>
+			<p id="par6"class="card_para">The syllabus has been developed to help you transform your career. The summarised syllabus, below, provides you with a snapshop of what skills you will come away with. Feel free to contact us for more detail on what you will learn.</p>
+			<button type="button" id="button_effects6" class="bottom_button">Button</button>
+		</div>
+		<div id="my_footer">
+			<p id="copyright">Copyright Infomation</p>
+		</div>
+	</div>
+	<script
+	src="https://code.jquery.com/jquery-3.2.1.js"
+	integrity="sha256-DZAnKJ/6XZ9si04Hgrsxu/8s717jcIzLy3oi35EouyE="
+	crossorigin="anonymous"></script>
+	
+	<script type="text/javascript" src="js/script.js"></script> <!-- Scripts located at the bottom of the body to insure page is fully loaded before execution -->
+	
+</body>
+</html> 
 
158  02-jquery_effects/js/script.js
@@ -0,0 +1,158 @@
+//waits until page is loaded first
+$(document).ready(function(){
+
+    //applies colour red to paragraphs when clicked on 
+    $("p").click(function(){
+        $("p").addClass( "highlight_text");
+    });
+
+    //will add lightblue to h2 elements
+    $("h2").hover(function(){
+        $("h2").addClass( "h2_color");   
+    });
+
+    /* This will apply larger font size to the active h2 element 
+       by adding the h2_font_size class and remove the h2_font_size
+       from all other h2 elements.
+       Note that this solution is very repetitive, and later on we'll
+       see an easier and more concise way of achieving this.
+    */
+    $("#hr_html").hover(function(){
+        $("#hr_mysql").removeClass("h2_font_size");
+        $("#hr_python").removeClass("h2_font_size");
+        $("#hr_jquery").removeClass("h2_font_size");
+        $("#hr_django").removeClass("h2_font_size");
+        $("#hr_css").removeClass("h2_font_size");
+        $("#hr_html").addClass("h2_font_size");
+    });
+
+    $("#hr_mysql").hover(function(){
+        $("#hr_python").removeClass("h2_font_size");
+        $("#hr_jquery").removeClass("h2_font_size");
+        $("#hr_django").removeClass("h2_font_size");
+        $("#hr_css").removeClass("h2_font_size");
+        $("#hr_html").removeClass("h2_font_size");
+        $("#hr_mysql").addClass("h2_font_size");
+    });
+
+    $("#hr_python").hover(function(){
+        $("#hr_mysql").removeClass("h2_font_size");
+        $("#hr_jquery").removeClass("h2_font_size");
+        $("#hr_django").removeClass("h2_font_size");
+        $("#hr_css").removeClass("h2_font_size");
+        $("#hr_html").removeClass("h2_font_size");
+        $("#hr_python").addClass("h2_font_size");
+    });
+
+    $("#hr_jquery").hover(function(){
+        $("#hr_mysql").removeClass("h2_font_size");
+        $("#hr_python").removeClass("h2_font_size");
+        $("#hr_django").removeClass("h2_font_size");
+        $("#hr_css").removeClass("h2_font_size");
+        $("#hr_html").removeClass("h2_font_size");
+        $("#hr_jquery").addClass("h2_font_size");
+
+    });
+    $("#hr_django").hover(function(){
+        $("#hr_mysql").removeClass("h2_font_size");
+        $("#hr_python").removeClass("h2_font_size");
+        $("#hr_jquery").removeClass("h2_font_size");
+        $("#hr_css").removeClass("h2_font_size");
+        $("#hr_html").removeClass("h2_font_size");
+        $("#hr_django").addClass("h2_font_size");
+
+    });
+    $("#hr_css").hover(function(){
+        $("#hr_mysql").removeClass("h2_font_size");
+        $("#hr_python").removeClass("h2_font_size");
+        $("#hr_jquery").removeClass("h2_font_size");
+        $("#hr_django").removeClass("h2_font_size");
+        $("#hr_html").removeClass("h2_font_size");
+        $("#hr_css").addClass("h2_font_size");
+
+    });
+
+    //applies colour black to body body background when mouse  over buttons
+    $(".bottom_button").mouseenter(function(){
+        $("body").css( "background-color", "black"); 
+
+    });
+    //applies colour grey to bodybackground when mouse leaves buttons
+    $(".bottom_button").mouseleave(function(){
+        $("body").css( "background-color", "#eee"); 
+
+
+    });
+
+    //uncomment to see example of hide function
+
+     /*$("#button_effects1").click(function(){
+        $('#button_effects1').hide('slow');
+
+    });*/
+
+
+    //adds slideTogggle to buttons to toggle paragraphs open and closed
+    $("#button_effects1").click(function(){
+        $('#par1').slideToggle('1000');
+    });
+    $("#button_effects2").click(function(){
+        $('#par2').slideToggle('1000');
+    });
+    $("#button_effects3").click(function(){
+        $('#par3').slideToggle('1000');
+    });
+    $("#button_effects4").click(function(){
+        $('#par4').slideToggle('1000');
+    });
+    $("#button_effects5").click(function(){
+        $('#par5').slideToggle('1000');
+    });
+    $("#button_effects6").click(function(){
+        $('#par6').slideToggle('1000');
+    });
+
+    //adds fade to when  mouserenter and mouseleave button
+    $("#button_effects1").mouseenter(function(){
+        $('#button_effects1').fadeTo(1000, 0.5);
+    });
+    $("#button_effects1").mouseleave(function(){
+        $('#button_effects1').fadeTo(1000, 1);
+    });
+
+    $("#button_effects2").mouseenter(function(){
+        $('#button_effects2').fadeTo(1000, 0.5);
+    });
+    $("#button_effects2").mouseleave(function(){
+        $('#button_effects2').fadeTo(1000, 1);
+    });
+
+    $("#button_effects3").mouseenter(function(){
+        $('#button_effects3').fadeTo(1000, 0.5);
+    });
+    $("#button_effects3").mouseleave(function(){
+        $('#button_effects3').fadeTo(1000, 1);
+    });
+
+    $("#button_effects4").mouseenter(function(){
+        $('#button_effects4').fadeTo(1000, 0.5);
+    });
+    $("#button_effects4").mouseleave(function(){
+        $('#button_effects4').fadeTo(1000, 1);
+    });
+
+    $("#button_effects5").mouseenter(function(){
+        $('#button_effects5').fadeTo(1000, 0.5);
+    });
+    $("#button_effects5").mouseleave(function(){
+        $('#button_effects5').fadeTo(1000, 1);
+    });
+
+    $("#button_effects6").mouseenter(function(){
+        $('#button_effects6').fadeTo(1000, 0.5);
+    });
+    $("#button_effects6").mouseleave(function(){
+        $('#button_effects6').fadeTo(1000, 1);
+    });
+
+});
 
25  03-method_chaining/button.html
@@ -0,0 +1,25 @@
+<!doctype html>
+<html>
+<head>
+	<meta charset="utf-8" />
+	<meta name="viewport" content="width=device-width, initial-scale=1">
+	<title>jQuery Method Chaining</title>
+	<link href="css/style.css" rel="stylesheet" type="text/css">
+</head>
+<body>
+	<div id="container">
+		<div class='card'>
+			<button   class="bottom_button makeRed">Button 1</button>	
+			<p  class="card_para">Once you join a Code Institute Bootcamp you will be taken on an accelerated contextualised learning path across 3 streams. Nothing is learned in isolation.We contextualise the content so that the knowledge and skills gained in each learning unit feeds into, and is expanded upon, within the next unit.The outputs of each stream will be a project. </p>
+			<button  class="bottom_button makeRed">Button 2</button>
+			<p  class="card_para">Once you join a Code Institute Bootcamp you will be taken on an accelerated contextualised learning path across 3 streams. Nothing is learned in isolation.We contextualise the content so that the knowledge and skills gained in each learning unit feeds into, and is expanded upon, within the next unit.The outputs of each stream will be a project. </p>
+		</div>
+	</div>		
+	<script
+	src="https://code.jquery.com/jquery-3.2.1.js"
+	integrity="sha256-DZAnKJ/6XZ9si04Hgrsxu/8s717jcIzLy3oi35EouyE="
+	crossorigin="anonymous"></script>
+	<script type="text/javascript" src="js/script.js"></script> <!-- Scripts located at the bottom of the body to insure page is fully loaded before execution -->
+	
+</body>
+</html> 
 
63  03-method_chaining/css/style.css
@@ -0,0 +1,63 @@
+
+#container
+{
+	display: flex;		/* makes container a flexbox*/
+	flex-flow: row wrap; 	/* layout the boxes in rows and wrap them*/
+	box-sizing:border-box;
+	margin-right:auto;
+	margin-left:auto;
+	max-width:1050px;	
+}
+.bottom_button{
+	display: flex;
+	box-sizing:border-box;
+	border-radius: 4px;
+	display: block;
+	width: 100%;
+	background-color:rgba(129, 187, 201,.85);
+	text-align: center;
+	padding: 1em .75em;
+	text-decoration: none;
+	color: #fff;
+
+}
+
+.card_bottom{
+	display: flex;
+	flex-flow:column;
+}
+
+.card{
+	flex:1; /* */
+	display: flex;	/* make the contents controllable by flexbox*/
+	flex-flow:column;	/* */
+	max-width: 240px; /**/
+	margin: 10px;
+	padding: 20px;
+	background-color: #fff;
+}
+
+/*adds colour red*/
+.makeRed{
+	background-color: red;
+}
+/*adds border*/
+.makeBorder{
+	border:2px;
+}
+
+
+/*************************
+Navigation
+
+**************************/
+
+
+.underline{
+  text-decoration:underline;
+}
+.border{
+  border: solid 5px #ccc;
+}
+
+
 
28  03-method_chaining/js/script.js
@@ -0,0 +1,28 @@
+$(document).ready(function() {
+ 	//revoves claas makeRed, adds class makeBorder on mouseenter
+ 	$("button").mouseenter(function(){
+ 	 $(this).removeClass("makeRed").addClass("makeBorder");
+
+ 	});
+ 	//reverses above on mouseleave
+ 	$("button").mouseleave(function(){
+ 	 $("button").removeClass("makeBorder").addClass("makeRed");
+
+ 	});
+ 	//toggles paragraphs when either button is clicked
+ 	$("button").click(function(){
+ 	 $("p").slideToggle(2000);
+ 	});
+
+ 	//hides/shows  paragraphs when either button is clicked
+ 	$("button").click(function(){
+ 	 $("p").hide(2000).show(2000);
+ 	});
+ 		//fadeIn and fadoeOut on paragraphs when either button is clicked
+ 	$("button").click(function(){
+ 	 $("p").fadeIn().fadeOut();
+ 	});
+
+
+}); 
+
 
73  04-the_importance_of_this/challenge/Cards.html
@@ -0,0 +1,73 @@
+<!doctype html>
+<html>
+<head>
+	<meta charset="utf-8" />
+	<meta name="viewport" content="width=device-width, initial-scale=1">
+	<title>jQuery</title>
+	<link href="css/style.css" rel="stylesheet" type="text/css">
+	<link href='http://fonts.googleapis.com/css?family=Roboto' rel='stylesheet' type='text/css'>
+	<link href='http://fonts.googleapis.com/css?family=Dosis' rel='stylesheet' type='text/css'>
+</head>
+<body>
+	<div id="container">
+		<nav>
+			<ul>
+				<li id="logoNav">CODE INSTITUTE</li>
+				<li class="stream-nav" id="stream1">Stream 1</li>
+				<li class="stream-nav" id="stream2">Stream 2</li>
+				<li class="stream-nav" id="stream3">Stream 3</li>
+			</ul>
+		</nav>
+		<div class="card stream1">
+			<img class="card_image"src="images/3.png">
+			<div class="card_bottom">
+				<h2 class="card_head">HTML</h2>
+				<p class="card_para">Once you join a Code Institute Bootcamp you will be taken on an accelerated contextualised learning path across 3 streams. Nothing is learned in isolation.We contextualise the content so that the knowledge and skills gained in each learning unit feeds into, and is expanded upon, within the next unit.The outputs of each stream will be a project. </p>
+				<a href="" class="bottom_button">Button</a>
+			</div>
+		</div>
+		<div class="card stream2">
+			<img class="card_image "src="images/1.png">	
+			<h2 class="card_head">MySql</h2>
+			<p class="card_para">If you have questions about your career in coding or simply want to meet the Code Institute team, then come along to our next Careers Open Evening in Dublin</p>
+			<a href="" class="bottom_button">Button</a>
+		</div>
+		
+		<div class="card stream2">
+			<img class="card_image "src="images/2.png">
+			<h2 class="card_head">Python</h2>
+			<p class="card_para">If you have questions about your career in coding or simply want to meet the Code Institute team, then come along to our next Careers Open Evening in Dublin</p>
+			<a href="" class="bottom_button">Button</a>
+		</div>
+		<div class="card stream1">
+			<img class="card_image"src="images/3.png">
+			<div class="card_bottom">
+				<h2 class="card_head">jQuery</h2>
+				<p class="card_para">Once you join a Code Institute Bootcamp you will be taken on an accelerated contextualised learning path across 3 streams. Nothing is learned in isolation.We contextualise the content so that the knowledge and skills gained in each learning unit feeds into, and is expanded upon, within the next unit.The outputs of each stream will be a project. </p>
+				<a href="" class="bottom_button">Button</a>
+			</div>
+		</div>
+		<div class="card stream3">
+			<img class="card_image"src="images/4.png">
+			<h2 class="card_head">Django</h2>
+			<p class="card_para">The syllabus has been developed to help you transform your career. The summarised syllabus, below, provides you with a snapshop of what skills you will come away with. Feel free to contact us for more detail on what you will learn.</p>
+			<a href="" class="bottom_button">Button</a>
+		</div>
+		<div class="card stream1">
+			<img class="card_image"src="images/1.png">
+			<h2 class="card_head">CSS</h2>
+			<p class="card_para">The syllabus has been developed to help you transform your career. The summarised syllabus, below, provides you with a snapshop of what skills you will come away with. Feel free to contact us for more detail on what you will learn.</p>
+			<a href="" class="bottom_button">Button</a>
+		</div>
+		<div id="my_footer">
+			<p id="copyright">Copyright Infomation</p>
+		</div>
+	</div>
+	<script
+	src="https://code.jquery.com/jquery-3.2.1.js"
+	integrity="sha256-DZAnKJ/6XZ9si04Hgrsxu/8s717jcIzLy3oi35EouyE="
+	crossorigin="anonymous"></script>
+	<script type="text/javascript" src="js/script.js"></script> <!-- Scripts located at the bottom of the body to insure page is fully loaded before execution -->
+	
+</body>
+</html> 
 
137  04-the_importance_of_this/challenge/css/style.css
@@ -0,0 +1,137 @@
+body{
+	font-family: 'Roboto', sans-serif;
+ 	background-color: #eee;
+}
+
+h1{
+	font-size: 3em;
+	text-align: center;
+}
+h2{
+	font-size: 1em;
+	text-align: left;
+}
+p{
+	font-size: .9rem;
+}
+
+div{
+	border-radius: 4px;
+}
+
+.card_image{
+	width: 100%;
+}
+.bottom_button{
+	display: flex;
+	box-sizing:border-box;
+	border-radius: 4px;
+	display: block;
+	width: 100%;
+	background-color:rgba(129, 187, 201,.85);
+	text-align: center;
+	padding: 1em .75em;
+	text-decoration: none;
+	color: #fff;
+
+}
+
+.card_bottom{
+	display: flex;
+	flex-flow:column;
+}
+.card_head{
+	flex:0;
+}
+.card_para{
+	flex:1 0 auto;
+}
+
+#container
+{
+	display: flex;		/* makes container a flexbox*/
+	flex-flow: row wrap; 	/* layout the boxes in rows and wrap them*/
+	box-sizing:border-box;
+	margin-right:auto;
+	margin-left:auto;
+	max-width:1050px;	
+}
+#logo{
+	width: 800px;
+	margin: auto;
+}
+
+.card{
+	flex:1; /* */
+	display: flex;	/* make the contents controllable by flexbox*/
+	flex-flow:column;	/* */
+	min-width: 240px; /**/
+	margin: 10px;
+	padding: 20px;
+	background-color: #fff;
+}
+
+#my_footer{
+	width:100%;
+	text-align: center;
+}
+#copyright{
+	margin-top:10px;
+	margin-bottom:10px;
+
+}
+
+/*************************
+Navigation
+
+**************************/
+
+nav{
+	font-family: roboto;
+	background-color: #eee;
+	margin: 30px auto;
+	width: 100%;
+}
+ul{
+	display: flex;
+	justify-content:space-between;
+	flex-flow: row;
+	align-items:baseline;
+	border-radius: 10px;
+	list-style-type: none; /*Remove Bullets*/
+	padding: 0;	
+}
+li{
+	flex:1;
+	height: 30px;
+	font-family: Dosis;
+	padding:20px 20px 20px 20px;
+	text-align: center;
+	font-size: 1.3em;
+}
+
+#logoNav{
+	flex:6;
+	text-align: left;
+	font-size: 2em;
+	font-weight: bold;
+}
+
+.underline{
+  text-decoration:underline;
+}
+.border{
+  border: solid 5px #ccc;
+}
+
+/*for desktop  navigation*/
+@media screen and (max-width: 700px){
+	ul{
+		flex-flow: column;
+		align-items:center;
+	}
+	li{
+		font-size: 2em;
+	}
+}
+
  
BIN  04-the_importance_of_this/challenge/images/1.png
Binary file not shown.
  
BIN  04-the_importance_of_this/challenge/images/2.png
Binary file not shown.
  
BIN  04-the_importance_of_this/challenge/images/3.png
Binary file not shown.
  
BIN  04-the_importance_of_this/challenge/images/4.png
Binary file not shown.
 
17  04-the_importance_of_this/challenge/js/script.js
@@ -0,0 +1,17 @@
+$(document).ready(function() {
+    $(".stream-nav").on("click", function() {
+        /**
+         * When we click on an element that has
+         * a 'box' class, this event will be fired.
+         */
+        var elementId = $(this).attr("id");
+        var cardClass = $(".card").attr("class").split(" ")[0];
+
+        if ($("." + elementId).css("background-color") == "rgb(235, 82, 85)") {
+            $("." + elementId).css("background-color", "#fff");
+        } else {
+            $("." + cardClass).css("background-color", "#fff");
+            $("." + elementId).css("background-color", "rgb(235, 82, 85)");
+        }
+    });
+});
 
17  04-the_importance_of_this/example-1/css/style.css
@@ -0,0 +1,17 @@
+.container {
+	display: flex;
+	flex-flow: row wrap;
+	box-sizing:border-box;
+	margin-right:auto;
+	margin-left:auto;
+	max-width:1050px;
+}
+.box {
+	flex:1;
+	display: flex;	/* make the contents controllable by flexbox*/
+	flex-flow:column;
+	min-width: 240px;
+	margin: 10px;
+	padding: 20px;
+	background-color: #000;
+} 
 
36  04-the_importance_of_this/example-1/index.html
@@ -0,0 +1,36 @@
+<!DOCTYPE html>
+<html>
+<head>
+	<link rel="stylesheet" type="text/css" href="css/style.css">
+	<script
+	src="https://code.jquery.com/jquery-3.2.1.js"
+	integrity="sha256-DZAnKJ/6XZ9si04Hgrsxu/8s717jcIzLy3oi35EouyE="
+	crossorigin="anonymous"></script>
+	<script src="js/script.js"></script>
+</head>
+<body>
+	<div class="container">
+		
+		<div class="box one">
+		</div>
+		<div class="box three">
+		</div>
+		<div class="box one">
+		</div>
+		
+		<div class="box two">
+		</div>
+		<div class="box one">
+		</div>
+		<div class="box two">
+		</div>
+		
+		<div class="box three">
+		</div>
+		<div class="box three">
+		</div>
+		<div class="box two">
+		</div>
+	</div>
+</body>
+</html> 
 
10  04-the_importance_of_this/example-1/js/script.js
@@ -0,0 +1,10 @@
+$(document).ready(function() {
+    $(".box").on("click", function() {
+    	/**
+    	 * When we click on an element that has
+    	 * a 'box' class, this event will be fired.
+    	 */
+    	var classNames = $(this).attr("class").split(" ");
+        $("." + classNames[1]).css("background-color", "red");
+    });
+}) 
 
17  04-the_importance_of_this/example-2/css/style.css
@@ -0,0 +1,17 @@
+.container {
+	display: flex;
+	flex-flow: row wrap;
+	box-sizing:border-box;
+	margin-right:auto;
+	margin-left:auto;
+	max-width:1050px;
+}
+.box {
+	flex:1;
+	display: flex;	/* make the contents controllable by flexbox*/
+	flex-flow:column;
+	min-width: 240px;
+	margin: 10px;
+	padding: 20px;
+	background-color: #000;
+} 
 
36  04-the_importance_of_this/example-2/index.html
@@ -0,0 +1,36 @@
+<!DOCTYPE html>
+<html>
+<head>
+	<link rel="stylesheet" type="text/css" href="css/style.css">
+	<script
+	src="https://code.jquery.com/jquery-3.2.1.js"
+	integrity="sha256-DZAnKJ/6XZ9si04Hgrsxu/8s717jcIzLy3oi35EouyE="
+	crossorigin="anonymous"></script>
+	<script src="js/script.js"></script>
+</head>
+<body>
+	<div class="container">
+		
+		<div class="box one">
+		</div>
+		<div class="box three">
+		</div>
+		<div class="box one">
+		</div>
+		
+		<div class="box two">
+		</div>
+		<div class="box one">
+		</div>
+		<div class="box two">
+		</div>
+		
+		<div class="box three">
+		</div>
+		<div class="box three">
+		</div>
+		<div class="box two">
+		</div>
+	</div>
+</body>
+</html> 
 
22  04-the_importance_of_this/example-2/js/script.js
@@ -0,0 +1,22 @@
+$(document).ready(function() {
+    $(".box").on("click", function() {
+    	/**
+    	 * When we click on an element that has
+    	 * a 'box' class, this event will be fired.
+    	 */
+    	var classNames = $(this).attr("class").split(" ");
+    	var boxClass = classNames[0];
+    	var className = classNames[1];
+    	if ($(this).css("background-color") == "rgb(255, 0, 0)") {
+    		// If this object is already red, turn it black
+    		$("." + className).css("background-color", "#000"); 
+    	} else {
+    		// Else turn all elements with a box class black
+    		// and then change the color of all elements
+    		// with the same class name as the clicked element
+    		// to red.
+    		$("." + boxClass).css("background-color", "#000");
+    		$("." + className).css("background-color", "red");
+    	}
+    });
+}) 
 
25  04-the_importance_of_this/hiding_paragraphs/index.html
@@ -0,0 +1,25 @@
+<!doctype html>
+<html>
+<head>
+	<meta charset="utf-8" />
+	<meta name="viewport" content="width=device-width, initial-scale=1">
+	<title>jQuery</title>
+	<link href="style.css" rel="stylesheet" type="text/css">
+	<script
+	src="https://code.jquery.com/jquery-3.2.1.js"
+	integrity="sha256-DZAnKJ/6XZ9si04Hgrsxu/8s717jcIzLy3oi35EouyE="
+	crossorigin="anonymous"></script>
+</head>
+<body>
+	<div id="container">
+		<div class='card'>	
+			<p>Once you join a Code Institute Bootcamp you will be taken on an accelerated contextualised learning path across 3 streams. Nothing is learned in isolation.We contextualise the content so that the knowledge and skills gained in each learning unit feeds into, and is expanded upon, within the next unit.The outputs of each stream will be a project. </p>
+		</div>
+		<div class='card'>	
+			<p>Once you join a Code Institute Bootcamp you will be taken on an accelerated contextualised learning path across 3 streams. Nothing is learned in isolation.We contextualise the content so that the knowledge and skills gained in each learning unit feeds into, and is expanded upon, within the next unit.The outputs of each stream will be a project. </p>
+		</div>
+	</div>		
+	<script type="text/javascript" src="script.js"></script> <!-- Scripts located at the bottom of the body to insure page is fully loaded before execution -->
+	
+</body>
+</html> 
 
3  04-the_importance_of_this/hiding_paragraphs/script.js
@@ -0,0 +1,3 @@
+$('p').click(function() {
+	$(this).slideToggle('slow');
+}); 
 
18  04-the_importance_of_this/hiding_paragraphs/style.css
@@ -0,0 +1,18 @@
+#container {
+	display: flex;		/* makes container a flexbox*/
+	flex-flow: row wrap; 	/* layout the boxes in rows and wrap them*/
+	box-sizing:border-box;
+	margin-right:auto;
+	margin-left:auto;
+	max-width:1050px;	
+}
+
+.card {
+	flex:1; /* */
+	display: flex;	/* make the contents controllable by flexbox*/
+	flex-flow:column;	/* */
+	max-width: 240px; /**/
+	margin: 10px;
+	padding: 20px;
+	background-color: #fff;
+} 
 
25  04-the_importance_of_this/mouseenter_and_mouseleave/index.html
@@ -0,0 +1,25 @@
+<!doctype html>
+<html>
+<head>
+	<meta charset="utf-8" />
+	<meta name="viewport" content="width=device-width, initial-scale=1">
+	<title>jQuery</title>
+	<link href="style.css" rel="stylesheet" type="text/css">
+	<script
+	src="https://code.jquery.com/jquery-3.2.1.js"
+	integrity="sha256-DZAnKJ/6XZ9si04Hgrsxu/8s717jcIzLy3oi35EouyE="
+	crossorigin="anonymous"></script>
+</head>
+<body>
+	<div id="container">
+		<div class='card'>	
+			<button class="makeRed">Button One</button>
+		</div>
+		<div class='card'>	
+			<button class="makeRed">Button Two</button>
+		</div>
+	</div>		
+	<script type="text/javascript" src="script.js"></script> <!-- Scripts located at the bottom of the body to insure page is fully loaded before execution -->
+	
+</body>
+</html> 
 
7  04-the_importance_of_this/mouseenter_and_mouseleave/script.js
@@ -0,0 +1,7 @@
+$('button').mouseenter(function() {
+	$(this).removeClass('makeRed').addClass('makeBlue');
+});
+
+$('button').mouseleave(function() {
+	$(this).removeClass('makeBlue').addClass('makeRed');
+}); 
 
26  04-the_importance_of_this/mouseenter_and_mouseleave/style.css
@@ -0,0 +1,26 @@
+#container {
+	display: flex;		/* makes container a flexbox*/
+	flex-flow: row wrap; 	/* layout the boxes in rows and wrap them*/
+	box-sizing:border-box;
+	margin-right:auto;
+	margin-left:auto;
+	max-width:1050px;	
+}
+
+.card {
+	flex:1; /* */
+	display: flex;	/* make the contents controllable by flexbox*/
+	flex-flow:column;	/* */
+	max-width: 240px; /**/
+	margin: 10px;
+	padding: 20px;
+	background-color: #fff;
+}
+
+.makeRed {
+	background-color: red;
+}
+
+.makeBlue {
+	background-color: blue;
+} 
