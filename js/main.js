// console.log("js file connected");


$(document).ready(function() {

  $("#firstBtn").on("click", function() {
    $("h4#statement").delay(1000).slideDown(1000);
  });

  $("button#send_chat").on("click", function(){
    var enterChat = $("input#entered_chat").val();
    // console.log(enterChat);
    $('<h4>Nicholas: "' + enterChat + '"</h4>').appendTo("h4#user-statement");
  });

}); // END.ready function
