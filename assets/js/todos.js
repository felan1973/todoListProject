// Check Off Specific Tosod By Clicking
$("ul").on("click", "li", function(){
    //Applying jquery it takes only one line of code!!!
    $(this).toggleClass("completed");
    // if li is gray
    // if($(this).css("color") === "rgb(128, 128, 128)"){
    //     // turn it black
    //     $(this).css({
    //         color : "black",
    //         textDecoration : "none"
    //     });
    // }
    // //else
    // else{
    //     //turn it gray
    //     $(this).css({
    //         color:"grey",
    //         textDecoration: "line-through"
    //     });
    // }
});

//Click on X to delete Todo
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        //grabbing new todo text from input
        var todoText = $(this).val();
        //create a new li and add to ul
        $(this).val("");
        $("ul").append("<li><span><i class='fa fa-trash' aria-hidden='true'></i></span> " + todoText + "</li>");
    }
})
    
 
$(".fa-pencil-square-o").click(function(){
    $("input[type='text']").fadeToggle();
});