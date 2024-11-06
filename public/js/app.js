function filtrarRegalos() {
    const precio = document.getElementById("precio").value;
    const intereses = document.getElementById("intereses").value;
    const ocasion = document.getElementById("ocasion").value;
    console.log(`Filtrar regalos por: ${precio}, ${intereses}, ${ocasion}`);
  }
  
  document.getElementById("carrito-icon").addEventListener("click", () => {
    document.getElementById("carrito").scrollIntoView({ behavior: "smooth" });
  });
  
  document.getElementById("usuario-icon").addEventListener("click", () => {
    document.getElementById("iniciar-sesion").scrollIntoView({ behavior: "smooth" });
  });
  function buscarRegalos() {
    const query = document.getElementById("busqueda").value;
    alert(`Buscando regalos para: ${query}`);
  }
  