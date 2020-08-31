// Check Off Specific Todos By Clicking
$("li").on("click", function(){
	$(this).toggleClass("strike-through");
});
// Click on X to delete todo
$("span").on("click", function(event){
	// remove
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	// Stop the event Bubbling from other elements
	event.stopPropagation();

});
