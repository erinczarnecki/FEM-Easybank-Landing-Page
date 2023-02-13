console.log("hello, world!")


function mobileOpen() {
    var x = document.getElementById("hamburger-icon");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block"
    }
}
