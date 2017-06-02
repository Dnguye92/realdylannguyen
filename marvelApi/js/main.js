// One function to open the side navigation to 20% of page and one function
// to close to 0% of page
function openNav() {
    document.getElementById("mySidenav").style.width = "20%";
    document.getElementById("main").style.marginLeft = "20%";
    document.getElementById("main").innerHTML = "&#9776; Close";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.getElementById("main").innerHTML = "&#9776; Open";
}
