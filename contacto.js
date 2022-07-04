const datos = JSON.parse(localStorage.getItem("datos"));
const respuesta = document.querySelector(".respuesta");

if (datos) {
  respuesta.innerHTML = `${datos.nombre} revise su correo ${datos.email} para confirmar tu registro. Gracias por su comentario=>${datos.mensaje}`;
}