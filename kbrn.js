const carrito = document.getElementById("carrito");
const elementos1 = document.getElementById("lista-1");
const lista = document.querySelector("#lista-carrito tbody");
const vaciarcarritoBtn = document.getElementById("vaciar-carrito");
crearProductos();
cargarEventListeners();

console.log(productos);

console.log(productos.filter((item) => item.categoria == "NIKE"));
console.log(productos.filter((item) => item.categoria == "ADIDAS"));
console.log(productos.filter((item) => item.categoria == "NEW BALANCE"));

function crearProductos() {
  const listadoProductos = document.getElementById("listado-productos");
  productos.map((item) => {
    const producto = document.createElement("div");
    producto.innerHTML = `
      <div class="product">
          <img src="${item.imagen}" alt="" />
          <div class="product-txt">
            <h3>${item.name}</h3>
            <p>${item.calidad}</p>
            <p class="precio">${item.precio}</p>
            <a
              href="#"
              class="agregar-carrito btn-2"
              data-id="${item.id}"
              id="btn-add-carrito-${item.id}"
              >Agregar al Carrito</a
            >
          </div>
        </div>
      `;
    listadoProductos.appendChild(producto);
  });
}

function cargarEventListeners() {
  elementos1.addEventListener("click", comprarElemento);
  // carrito.addEventListener("click", eliminarElemento);
  vaciarcarritoBtn.addEventListener("click", vaciarCarrito);
}

function comprarElemento(e) {
  console.log("Comprado");
  e.preventDefault();
  if (e.target.classList.contains("agregar-carrito")) {
    const elemento = e.target.parentElement.parentElement;
    leerDatosElemento(elemento);
  }
}

function leerDatosElemento(elemento) {
  let productosEnCarrito = document.getElementById("listado-carrito");
  let idProducto = productosEnCarrito.childElementCount + 1;

  const infoElemento = {
    imagen: elemento.querySelector("img").src,
    titulo: elemento.querySelector("h3").textContent,
    precio: elemento.querySelector(".precio").textContent,
    id: idProducto,
  };

  insertarCarrito(infoElemento);
}

function insertarCarrito(elemento) {
  const row = document.createElement("tr");
  row.innerHTML = `
       <td>
         <img src ="${elemento.imagen}"  />
       </td>
       <td>
           ${elemento.titulo}
       </td>
       <td>
       ${elemento.precio}
       </td>
       <td>
          <a href="#" class="borrar" data-id=${elemento.id} id="btn-remove-carrito-${elemento.id}">X </a>
       </td>

    `;

  lista.appendChild(row);

  let producto = document.getElementById(`btn-remove-carrito-${elemento.id}`);
  producto.addEventListener("click", eliminarElemento);
}

function eliminarElemento(e) {
  console.log("eliminando registro");
  e.preventDefault();
  let elementos1, elementoId;
  if (e.target.classList.contains("borrar")) {
    e.target.parentElement.parentElement.remove();
    elemento = e.target.parentElement.parentElement;
    elementoId = elemento.querySelector("a").getAttribute("data-id");
  }
}

function vaciarCarrito() {
  while (lista.firstChild) {
    lista.removeChild(lista.firstChild);
  }
  return false;
}
