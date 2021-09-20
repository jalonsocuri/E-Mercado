//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
var product = {};
function showImages(array) {
  let htmlContentToAppend = "";

  for (let i = 0; i < array.length; i++) {
    let image = array[i];

    htmlContentToAppend +=
      `
        <div class="col-lg-3 col-md-4 col-6">
            <div class="d-block mb-4 h-100">
                <img class="img-fluid img-thumbnail" src="` +
      image +
      `" alt="">
            </div>
        </div>
        `;

    document.getElementById("productImages").innerHTML = htmlContentToAppend;
  }
}

document.addEventListener("DOMContentLoaded", function (e) {
  getJSONData(PRODUCT_INFO_URL).then(function (resultObj) {
    if (resultObj.status === "ok") {
      product = resultObj.data;

      let productNameHTML = document.getElementById("productName");
      let productDescriptionHTML =
        document.getElementById("productDescription");
      let productCountHTML = document.getElementById("productCount");
      let productCategoryHTML = document.getElementById("categoria");
      let productCostHTML = document.getElementById("cost");

      productNameHTML.innerHTML = product.name;
      productDescriptionHTML.innerHTML = product.description;
      productCountHTML.innerHTML = product.soldCount;
      productCategoryHTML.innerHTML = product.category;
      productCostHTML.innerHTML = product.cost;

      showImages(product.images);
    }
  });
});

  let comment = {};

  function showComment(array) {
    let htmlContentToAppend = "";
    htmlContentToAppend += ` <div class = "list-group"> `;

    for (let i = 0; i < array.length; i++) {
      let comment = array[i];
      let estrella = "";
      for (let i = 1; i <= 5; i++) {
        if (i <= comment.score) {
          estrella += ` <i class=" fas fa-star"></i>`;
        } else {
          estrella += ` <i class=" far fa-star"></i>`;
        }
      }
      htmlContentToAppend +=
        `
        <div class="list-group-item list-group-item-action flex-column align-items-start">
        <div class="d-flex w-100 justify-content-between">
        <h6 class="mb-1"><b>` +
        comment.user +
        ` </b></h6>
        <h6 class= "d-flex w-100 left"> ` +
        estrella +
        `</h6>
        <h6> ` +
        comment.dateTime +
        `</h6>
        </div>
        <dd> <h6 class="mb-1"> ` +
        comment.description +
        ` </h6> </dd>
    </div>
        `;
    }
    htmlContentToAppend += `</div>`;
    document.getElementById("comments").innerHTML = htmlContentToAppend;
  }
  getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function (resultObj) {
    if (resultObj.status === "ok") {
      comment = resultObj.data;

      showComment(comment);
    }
  });


function calificacion(numero) {
  puntaje = numero;
  let estrella = "Calificar: ";
  for (let i = 1; i <= 5; i++) {
    if (i <= numero) {
      estrella +=
        ` <i class=" fas fa-star" onclick="calificacion(` + i + `);"></i>`;
    } else {
      estrella +=
        ` <i class=" far fa-star" onclick="calificacion(` + i + `);"></i>`;
    }
  }
  document.getElementById("estrellitas").innerHTML = estrella;
}

var puntaje = 1;

function comentario() {
  let commentary = {};

  let datos = JSON.parse(localStorage.getItem("datos"));

  var fecha = new Date();
  var año = fecha.getFullYear();
  var mes = fecha.getMonth();
  var dia = fecha.getDate();
  var hora = fecha.getHours();
  var minutos = fecha.getMinutes();
  var segundos = fecha.getSeconds();

  date= año;
  date += ((mes < 10)? "-0": "-") + mes;
  date += ((dia < 10)? "-0": "-") + dia;
  date += " ";
  date += ((hora < 10)? "0": " ") + hora;
  date += ((minutos < 10)? "0": ":") + minutos;
  date += ((segundos < 10)? "0": ":") + segundos;
  commentary.user = datos.nombre;
  commentary.score = puntaje;
  commentary.description = document.getElementById("opinion").value;
  commentary.dateTime = date;
 
  comment.push(commentary);
  showComment(comment);
}
