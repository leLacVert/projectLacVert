var acc = document.getElementsByClassName("accordion");
for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.height === "auto") {
            panel.style.height = "0";
            var accordeon = new Audio();
            accordeon.src = "assets/sound/accordeon.mp3";
            accordeon.play();
        } else {
            panel.style.height = "auto";
            var accordeon3 = new Audio();
            accordeon3.src = "assets/sound/accordeon2.wav";
            accordeon3.play();
        }
    });
}
