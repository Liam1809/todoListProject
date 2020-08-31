// Check Off Specific Todos By Clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("strike-through");
});
// Click on X to delete todo
$("ul").on("click", "span", function(event){
	// remove
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	// Stop the event Bubbling from other elements
	event.stopPropagation();
});

// Creating Todos
$('input[type="text"]').on("keypress", function(event){
	let text;
	if(event.which === 13){
		// grab new todo text from input
		text = $(this).val();
		$(this).val("");
		// create new li and add to ul
		$("ul").append("<li><span>X</span> " + text + "</li>");
	}

});