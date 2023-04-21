/*let celdas = document.querySelectorAll("td");

celdas.forEach(function (td) {
  td.addEventListener("click", function () {
    console.log("click");
  });
});
*/

/*let celdas = document.querySelectorAll("td");

celdas.forEach(function (td) {
  td.addEventListener("click", function () {
    console.log("click");
  });
});
*/

let links = document.querySelectorAll(".close");


links.forEach(function (link) {
    link.addEventListener("click", function (eve) {
        eve.preventDefault();
        let content = document.querySelector(".content");

        //quitar clases de animacion que ya tienen en html
        content.classList.remove("animate__fadeInDown");
        content.classList.remove("animate__animated");

        //agregar de nuevo
        content.classList.add("animate__fadeInUp");
        content.classList.add("animate__animated");

            setTimeout(function () {
            location.href = "/";
            }, 600);

        return false;
    });
});
