const inputTexto = document.querySelector(".input-texto");
const mensaje = document.querySelector(".mensaje");
const reglasEncriptado = [
  ["e", "enter"],
  ["i", "imes"],
  ["a", "ai"],
  ["o", "ober"],
  ["u", "ufat"],
];
alertaInput();
const encriptar = (textoInicial) => {
  textoInicial = textoInicial.toLowerCase();
  let i = 0;
  while (i < reglasEncriptado.length) {
    if (textoInicial.includes(reglasEncriptado[i][0])) {
      textoInicial = textoInicial.replaceAll(
        reglasEncriptado[i][0],
        reglasEncriptado[i][1]
      );
    }
    i++;
  }
  return textoInicial;
};
const desencriptar = (textoEncriptado) => {
  textoEncriptado = textoEncriptado.toLowerCase();
  let i = 0;
  while (i < reglasEncriptado.length) {
    if (textoEncriptado.includes(reglasEncriptado[i][1])) {
      textoEncriptado = textoEncriptado.replaceAll(
        reglasEncriptado[i][1],
        reglasEncriptado[i][0]
      );
    }
    i++;
  }
  return textoEncriptado;
};
function btnEncriptar() {
  if (inputTexto.value === "") {
    alert("Por favor ingrese un texto para encriptar");
  } else {
    mensaje.value = encriptar(inputTexto.value);
    inputTexto.value = "";
    mensaje.style.backgroundImage = "none";
    mensaje.focus();
  }
}
function btnDesencriptar() {
  if (inputTexto.value === "") {
    alert("Por favor ingrese un texto para desencriptar");
  } else {
    mensaje.value = desencriptar(inputTexto.value);
    inputTexto.value = "";
    mensaje.style.backgroundImage = "none";
    mensaje.focus();

  }
}
function copiarTexto() {
  if (mensaje.value !== "") {
    mensaje.select();
    let copyEncript = mensaje.value;
    navigator.clipboard.writeText(mensaje.value);
    alert(`Mensaje copiado en su papelera`);
    mensaje.value = "";
    mensaje.classList.add("mensaje");
    inputTexto.focus();
    alertaInputMensaje();
  } else {
    alert("No hay ningun mensaje que copiar");
  }
}
function alertaInput() {
  if (inputTexto.value === "") {
    document.querySelector(".valInputTexto").innerText =
      "Llenar el espacio solo con letras minúsculas y sin acentos";
  } else {
    document.querySelector(".valInputTexto").innerText = "";
  }
}
function alertaInputMensaje() {
  if (mensaje.value != "") {
    mensaje.style.backgroundImage = "none";
  }else{
    mensaje.style.backgroundImage = `url('../img/munheco.png')`;

  }
}
