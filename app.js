const formulario = document.querySelector("#formulario");
let objeto;
formulario.addEventListener("submit", validarFormulario);

function validarFormulario(e) {
  e.preventDefault();
  const nombre = document.querySelector("#nombre").value;
  const email = document.querySelector("#email").value;
  const mensaje = document.querySelector("#mensaje").value;

  objeto = { nombre, email, mensaje };

  localStorage.setItem("datos", JSON.stringify(objeto));
  window.location.href = "contacto.html";
}
