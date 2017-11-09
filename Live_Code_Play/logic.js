
		/*	$('#btn-result').click(
					function() {
						$("#resultcontainer").contents().find("html").html("<style>"+$('#csscontainer').val()+"</style>"+$("#htmlcontainer").val());
						document.getElementById("resultcontainer").contentWindow.eval($('#jscontainer').val());
					}
				);
		*/
		
$(document).ready( function(){


			var windowHeight = $(window).height();
			var navBarHeight = $(".navbar").height();
			var codeContainerHeight = windowHeight - navBarHeight;

			var defaultHTMLInput = "<div class='loader'></div>";
			var defaultCSSInput =  ".loader{"+
    								"\n\tborder: 16px solid #f3f3f3; /* Light grey */"+
    								"\n\tborder-top: 16px solid #3498db; /* Blue */ "+
    								"\n\tborder-radius: 50%;"+
    								"\n\twidth: 120px;"+
								    "\n\theight: 120px;"+
								    "\n\tanimation: spin 2s linear infinite;"+
								    "\n\tmargin:0 auto;"+
								    "\n\tmargin-top:55px;"+
								"\n}"+
								"\n@keyframes spin {"+
								    "\n\t0% { transform: rotate(0deg); }"+
								    "\n\t100% { transform: rotate(360deg);"+
								    "}"+
								    "\n }";


			$(".code-container").height(codeContainerHeight+"px");

			$(".code-container").css("marginTop",navBarHeight+1);

			$(".code-container").css("float","left");


			$(window).resize(
			function()
			{
				if ($(window).width() <= 768)
				{	

					var windowHeight = $(window).height();
					var windowWidth = $(window).width();
					var navBarHeight = $(".navbar").height();
					var codeContainerHeight = windowHeight - navBarHeight;

					$(".code-container").height(codeContainerHeight+"px");

					$(".code-container").css("marginTop",navBarHeight+1);

					$(".code-container").css("float","none");

					$(".code-container").css("width",windowWidth);

				}
			});


			$(".toggle").click
			(
				function()
				{
					$(this).toggleClass("btn-success");
					var activeDiv = $(this).html();
					$("."+activeDiv+"-container").toggle();
					var visibleDivs = $(".code-container").filter(function(){
							return($(this).css("display")!="none");
						}).length;	
					var Width = 100/visibleDivs;
					$(".code-container").css("width", Width+"%");
				}
			);



	var p = $("#resultcontainer").contents().find("body");
	p.css("margin","2px");
 	p.html('<span id="bothtml"></span><style id="botcss"></style>');

 	// Default Values:

 	$("#htmlcontainer").html(defaultHTMLInput);
 	$("#csscontainer").html(defaultCSSInput);
 	p.find("#bothtml").html(defaultHTMLInput);
 	p.find("#botcss").html(defaultCSSInput);


 	
 	$("#htmlcontainer").on('keyup',function(){
  		p.find("#bothtml").html($(this).val());
 	});

	 $("#csscontainer").on('keyup',function(){
	  	p.find("#botcss").html($(this).val());
	 });

	 $("#jscontainer").on('change',function(){
	  p.find("#botjs").remove();
	  p.append('<script id="botjs">'+$(this).val()+'</script>');
	 });

	 $("#btn-result").on('click',function(){
	  p.find("#botjs").remove();
	  p.append('<script id="botjs">'+$("#jscontainer").val()+'</script>');
	 });

	 
});

