           
  function accordeon() {
      var accordeon = new Audio();
      accordeon.src = "assets/sound/accordeon.mp3";
      accordeon.play();
      
  }
  function accordeon2() {
      var accordeon2 = new Audio();
      accordeon2.src = "assets/sound/accordeon2.wav";
      accordeon2.play();
  }

  function openModal() {
      document.getElementById("modal").style.display = "block";
  }
  function closeModal() {
      document.getElementById("modal").style.display = "none";
  }

  var radio = document.getElementsByTagName("radio");
  while (radio[0].value == 'non') {
    var inputName = document.getElementById('inputName');
    var inputMail = document.getElementById('inputMail');
    inputName.style.display = "none";
    inputMail.style.display = "none";
  }
inputName.style.display = "block";
inputMail.style.display = "block";
  