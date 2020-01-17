//Dom variables
var header = document.getElementById("myHeader");
var menu = document.getElementById("myMenu");
var openButton = document.getElementById("myOpenButton");
var overlay = document.getElementById("myOverlay");
var body = document.getElementById("myBody");

//Call on scroll to show header
window.onscroll = function () {
    showHeader()
};

//Offset of when to display header
var headerHeight = 250;

//opens the navbar
function openNav() {
    document.scro
    menu.style.width = "25%";
    menu.style.opacity = "100";
    openButton.style.opacity = "0";
    overlay.style.width = "100%";
    overlay.style.opacity = "100";
    header.style.opacity = "0";
    body.style.overflowY = "hidden";
}


//closes the navbar
function closeNav() {
    menu.style.width = "0px";
    openButton.style.opacity = "100";
    overlay.style.width = "0%";
    overlay.style.opacity = "0";
    if (window.pageYOffset > headerHeight) {
        header.style.opacity = "100";
    }
    body.style.overflowY = "auto";

}

//shows header
function showHeader() {
    if (window.pageYOffset > headerHeight) {
        header.style.opacity = "100";
    }
    if (window.pageYOffset < headerHeight) {
        header.style.opacity = "0";
    }
}