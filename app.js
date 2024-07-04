


document.getElementById("show-content").addEventListener("click", function () {
    document.querySelector(".home").style.display = "none";
    document.querySelector(".content").style.display = "block";
});


document.getElementById("refreshButton").addEventListener("click", function() {
    location.reload(); // Isso recarregará a página
  });
  
function iniciar() {
    var audio = document.getElementById("som");
    audio.volume = 0.1;
    audio.play();
  }



  


  
  
  
