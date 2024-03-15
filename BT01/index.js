var openModalBtn = document.getElementById("openModalBtn");
var modal = document.getElementById("myModal");
var closeBtn = modal.getElementsByClassName("close")[0];

openModalBtn.addEventListener("click", function (event) {
    event.preventDefault();
    modal.classList.add("show");
});

closeBtn.addEventListener("click", function () {
    modal.classList.remove("show");
});