let sumar = document.getElementById("sumar");
let sumarOtro = document.getElementById("sumarOtro");
let add = document.getElementById("add");

let vacia = document.getElementById("lista_vacia");
let carga = document.getElementById("contenedor_carga");
let llena = document.getElementById("lista_llena");
let detalle = document.getElementById("detalle_producto");

let card = document.getElementById("card_2");
let list = document.getElementById("list");

let modeloDeProducto = "";

let form_titulo = document.getElementById("titulo");
let form_iconos = document.getElementById("iconos");
let form_descripcion = document.getElementById("descripcion");

let i = document.getElementById("i");
i = 0;

list.addEventListener("click", function (e) {
  if (e.target.getAttribute("data-titulo")) {
    detalleDelProducto(
      e.target.getAttribute("data-titulo"),
      e.target.getAttribute("data-image"),
      e.target.getAttribute("data-desc")
    );

    borrarProducto(e.target.getAttribute("data-numb"));
  }
});

function detalleDelProducto(titulo, iconos, descripcion) {
  let modeloDetalle = `<div id='card_2'><h2>Detalle del producto</h2>
    <div id='detalleTipo'><img src="./image/${iconos}"></div>
    <div id="detalleTitulo">${titulo}</div>
    <div  id="detalleDescripcion">${descripcion}</div>
    <div> 
    <button onclick="returnPopUp()" > Volver </button>
    </div>
</div>`;
  //console.log(modeloDetalle);
  detalle.innerHTML = modeloDetalle;

  llena.style.display = "none";
  vacia.style.display = "none";
  carga.style.display = "none";
  detalle.style.display = "block";
}

function returnPopUp() {
  llena.style.display = "flex";
  vacia.style.display = "none";
  carga.style.display = "none";
  detalle.style.display = "none";
}

sumar.addEventListener("click", function () {
  llena.style.display = "none";
  vacia.style.display = "none";
  carga.style.display = "flex";
  detalle.style.display = "none";
});

sumarOtro.addEventListener("click", function () {
  llena.style.display = "none";
  vacia.style.display = "none";
  carga.style.display = "flex";
  detalle.style.display = "none";
});

function borrarProducto(i) {
  //console.log(i);
  if (i === i) {
    list.remove();
  }
}

add.addEventListener("click", function () {
  let titulo = form_titulo.value;
  let iconos = form_iconos.value;
  let descripcion = form_descripcion.value;

  modeloDeProducto = `<div class="elemento" id='${i}' >
            <div class='pepeloco'>
            <div id='icon'><img src="./image/${iconos}" alt="${titulo}"></div>
            <div id="titu">${titulo}</div>
            </div>
            <div id='botonesListado'>
            <button id='detalleDelProducto' data-titulo="${titulo}" data-image="${iconos}" data-desc="${descripcion}"> > </button>
            <button onclick="borrarProducto(${i})">x</button></div>`;

  if (titulo == "" || iconos == "") {
    warning.style.display = "block";
  } else {
    warning.style.display = "none";
    list.innerHTML += modeloDeProducto;
    listadoStorage.push(modeloDeProducto);
    //console.log(modeloDeProducto);
    i++;
    vacia.style.display = "none";
    carga.style.display = "none";
    llena.style.display = "flex";
    detalle.style.display = "none";
  }

  form_titulo.value = "";
  form_iconos.value = "";
  form_descripcion.value = "";
  //console.log(titulo + iconos + descripcion);
});
