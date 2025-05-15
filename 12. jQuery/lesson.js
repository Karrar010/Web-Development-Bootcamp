// alert("Working");
// document.querySelectorAll("h1") or document.querySelector("h1") is same as jQuery("h1") and $("h1") which selects all h1's

// --------- Selecting Elements ---------
// $("h1")

// --------- Manipulating Styles --------
$("h1").addClass("big-title margin-50")
// $("h1").removeClass("margin-50")
// console.log($("h1").hasClass("margin-50"))
$("h1").css("color","green");
$("button").css("font-style","italic");


// --------- Manipulating Text --------
$("button").text("jQuery Text");
// jQuery("h1").html("<em>Bye.</em>")

// --------- Manipulating Attributes ---------
console.log($("a").attr("href"));
$("a").attr("href","http://www.bing.com");



// --------- Adding event listeners ---------
$("h1").click(function(){
    $("h1").css("color","purple")
});
// $("button").click(function(){
//     $("h1").css("color","purple")
// });
$("input").keypress(function(event){
    $("h1").css("color","purple")
    $("h1").text($("input").val());
    // console.log(event.key);
});

//------- Animation for mouse hover
$("h1").on("mouseover",function(){
    $("h1").css("color","orange")
    // console.log(event.key);
});
$("h1").on("mouseleave",function(){
    $("h1").css("color","purple")
    // console.log(event.key);
});



// -------- Adding and removing Elements --------
// $("h1").before("<button>Click here</button>")
// $("h1").after("<button>Click here</button>")
// $("h1").prepend("<button>Click here</button>")
// $("h1").append("<button>Click here</button>")


// --------- Website Animation ---------
// $("h1").hide();
// $("h1").show();
// $("h1").fadeOut();
// $("h1").fadeIn();
// $("h1").slideUp();
// $("h1").slideDown();

$("button").on("click",function(){
    // $("h1").toggle();
    $("h1").fadeToggle();
    // $("h1").slideToggle();
})


$("h1").animate({opacity : 0.5})
$("h1").hide().slideDown().animate({opacity : 1})