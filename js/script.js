jQuery(function($){ 
  $('html').removeClass('nojs')
  $('html').addClass('hasjs')
});

function submit() {
  alert("Remember to tell your friends... we all will reach the top");
}

function showHidden() {
  var x = document.getElementById("hidden");
  if (x.style.display == "none"){
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}