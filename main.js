document.getElementById("nav-toggle").addEventListener("click", function () {
    var sidebar = document.getElementById("sidebar");
    var navToggle = document.getElementById("nav-toggle");
    sidebar.classList.toggle("sidebar-open");
    navToggle.classList.toggle("sidebar-open");
});