window.addEventListener("load", function () {
  // No necesitas el setTimeout, puedes mostrar la ventana emergente inmediatamente si lo deseas
  document.querySelector("#open").addEventListener("click", function (event) {
    event.preventDefault(); // Evita que el enlace realice su acción predeterminada

    // Agrega &autoplay=1 al src del iframe al abrir el popup
    const iframe = document.querySelector("iframe");
    const src = iframe.getAttribute("src");
    iframe.setAttribute("src", src + "&autoplay=1");

    document.querySelector(".popup").style.display = "block";
  });

  document.querySelector("#close").addEventListener("click", function () {
    // Pausa el video antes de cerrar el popup
    const iframe = document.querySelector("iframe");
    const player = new Vimeo.Player(iframe);

    player.pause().then(function () {
      // Oculta el popup después de pausar el video
      document.querySelector(".popup").style.display = "none";
    });
  });
});
