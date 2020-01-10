$(document).ready(function() {
 //
 // add your jQuery code here
$("#button1").mouseenter(function(){
    $('#button1').removeClass("makeRed").addClass("makeBorder");
});

$("#button1").mouseleave(function(){
    $("#button1").removeClass("makeBorder").addClass("makeRed");
});

$("button").click(function(){
    $("p").slideToggle(2000);
});

$("button").click(function(){
    $("#button2").fadeIn(slow).fadeOut(slow);
})

}); 