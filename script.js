window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header").style.height = "50px";
    document.getElementById("header").style.marginTop = "-30px";
    document.getElementById("openbtn").style.marginLeft = "25px";
    document.getElementById("header-img").style.height = "100px";
    document.getElementById("header-img").style.marginLeft = "70%";
    document.getElementById("header-img").style.marginTop = "-50px";
  } else {
    document.getElementById("header").style.height = "170px";
    document.getElementById("openbtn").style.marginLeft = "-389px";
    document.getElementById("header-img").style.height = "150px";
    document.getElementById("header-img").style.marginLeft = "0%";
    document.getElementById("header-img").style.marginTop = "0px";
  }
}


function openNav() {
    document.getElementById("myNav").style.width = "30%";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }


function onHover(){
  if (document.getElementById('movieposter')){

  } else {

  }
}