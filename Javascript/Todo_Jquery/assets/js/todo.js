//check off Specific Todos by clicking

// $("li").click(function(){   //click only adds to existing elements
//     $(this).toggleClass("completed");
// });

$("ul").on("click", "li", function () {
    $(this).toggleClass("completed");
});

//Click on X to delete Todos
$("ul").on("click", "span", function (event) {
    //remove the entire li instead of just the X with parent
    $(this).parent().fadeOut(500, function(){
        $(this).remove(); //$(this) refers to parent element
    });
    //prevents from trigerring multiple events due to nested elements
    event.stopPropagation();
  });


  $("input[type='text']").keypress(function (e) { 
      if(event.which === 13){
          //grabbing todo text
          let todoText = $(this).val();
          $(this).val(""); //set input field to empty after grabbing value
          $("ul").append("<li><span>X</span> " + todoText + "</li>");
      }
  });