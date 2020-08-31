// Check Off Specific Todos By Clicking
$("li").on("click", function(){
	$(this).toggleClass("strike-through");
});
// Click on X to delete todo
$("span").on("click", function(){
	alert("you click on span");
});

$("li").on("click", function(){
	alert("you click on li");
});

$("body").on("click", function(){
	alert("you click on body");
});

$("html").on("click", function(){
	alert("you click on html");
});