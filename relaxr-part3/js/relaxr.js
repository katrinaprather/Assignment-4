
/*Checks to see if the document has 
loaded before executing script*/
$(function(){

	/* Stops the default action of 
	an element from happening*/
	$("a").click(function(){
		event.preventDefault();
	});

	/*Functions that make specific elements
	perform specific jQuery effects*/
	function readMore(){
		$("#show-this-on-click").slideDown();
		$(".readless").show();
		$(this).hide();

	}
	function readLess(){
		$("#show-this-on-click").slideUp();
		$(this).hide();
		$(".readmore").show("slow", function(){
			alert("My crystal ball says your name is Travis!");
		});
	}
	function learnMore(){
		$("#learnmoretext").slideDown();
		$(".learnmore").hide();

	}

	/*Events: When clicking elements with these classes,
	it calls the specific function to envoke its actions*/
	$(".readmore").click(readMore);
	$(".readless").click(readLess);
	$(".learnmore").click(learnMore);



});