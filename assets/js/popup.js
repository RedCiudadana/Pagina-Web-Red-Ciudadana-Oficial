window.addEventListener("load", function () {
    // No necesitas el setTimeout, puedes mostrar la ventana emergente inmediatamente si lo deseas
    document.querySelector("#open").addEventListener("click", function (event) {
      event.preventDefault(); // Evita que el enlace realice su acción predeterminada
      document.querySelector(".popup").style.display = "block";
    });
  
    document.querySelector("#close").addEventListener("click", function () {
      document.querySelector(".popup").style.display = "none";
    });
  });
  