// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var archieButton = document.getElementById("archieButton");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
archieButton.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


$(".donateButton").hover(
  function() {
$(this)
.toggleClass("active")
  });

 $( "li" ).hover(
  function() {
    $( this )
    .toggleClass( "active" )
}); 

$( "#archieButton" ).hover(
  function() {
    $( this )
    .toggleClass( "active" )
}); 

$( ".button" ).hover(
  function() {
    $( this )
    .toggleClass( "active" )
}); 

