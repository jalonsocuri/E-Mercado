//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
var productsArray = [];

function showProductsList(array) {
  showSpinner();
  let htmlContentToAppend = "";
  for (let i = 0; i < array.length; i++) {
    let product = array[i];

    htmlContentToAppend +=
      `
        <a href="product-info.html" class="list-group-item list-group-item-action">
            <div class="row">
                <div class="col-3">
                    <img src="` +
      product.imgSrc +
      `" alt="` +
      product.description +
      `" class="img-thumbnail">
                </div>
                <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                        <h4 class="mb-1">` +
      product.name +
      ` </small>
                    </div>
                        <p class="mb-1"> ` +
      product.description +
      ` </p> Precio: ` +
      product.cost +
      `  </p> Vendidos:   ` +
      product.soldCount +
      ` </p> 
                        
                </div>
            </div>
        </a>
        `;

    document.getElementById("cat-list-container").innerHTML =
      htmlContentToAppend;
  }
  hideSpinner();
}

document.addEventListener("DOMContentLoaded", function (e) {
  getJSONData(PRODUCTS_URL).then(function (resultObj) {
    if (resultObj.status === "ok") {
      productsArray = resultObj.data;
      showProductsList(productsArray);
    }
  });
});

function ascendente() {
  productsArray.sort((a, b) => {
    if (a.cost > b.cost) {
      return 1;
    }
    if (a.cost < b.cost) {
      return -1;
    } else {
      return 0;
    }
  });
  showProductsList(productsArray);
}

function descendente() {
  productsArray.sort((a, b) => {
    if (a.cost < b.cost) {
      return 1;
    }
    if (a.cost > b.cost) {
      return -1;
    } else {
      return 0;
    }
  });
  showProductsList(productsArray);
}

function sortCant() {
  productsArray.sort((a, b) => {
    if (a.soldCount < b.soldCount) {
      return 1;
    }
    if (a.soldCount > b.soldCount) {
      return -1;
    } else {
      return 0;
    }
  });
  showProductsList(productsArray);
}

function filtrar() {
  var min = parseInt(document.getElementById("minimo").value);
  var max = parseInt(document.getElementById("maximo").value);
  let filtrados = [];

  for (let product of productsArray) {
    if (product.cost >= min && product.cost <= max) {
      filtrados.push(product);
    }
  }
  showProductsList(filtrados);
}

function limpiar() {
  document.getElementById("minimo").value = "";
  document.getElementById("maximo").value = "";

  showProductsList(productsArray);
}

let busqueda = [];
function buscar() {
  let buscado = document.getElementById("buscador").value;

  let busqueda = productsArray.filter(product => {
    return product.name.toLowerCase().indexOf(buscado.toLowerCase()) > -1 || product.description.toLowerCase().indexOf(buscado.toLowerCase()) > -1 ;
  })
  showProductsList(busqueda);
}

document.getElementById("buscador").addEventListener("keyup", () =>{
  buscar();
});
