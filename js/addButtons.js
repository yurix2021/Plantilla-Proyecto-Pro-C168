AFRAME.registerComponent("createbuttons", {
  init: function() {
    // 1. Crea el botón para ordenar
    var button1 = document.createElement("button");
    button1.innerHTML = "ORDENAR";
    button1.setAttribute("id", "order-button");
    button1.setAttribute("class", "btn btn-danger ml-3 mr-3");

    // 2. Crea el botón para el resumen de la orden
    // Completa el código //

    // 3. Añádelos en algún lugar
    var buttonDiv = document.getElementById("button-div");
    buttonDiv.appendChild(button2);
    buttonDiv.appendChild(button1);
  }
});
