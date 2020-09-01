window.addEventListener('scroll', function (e) {
    this.console.log(document.documentElement.scrollTop);
})
// FONCTION
window.onscroll = function () {

    // CONDITION NAVBAR

    if (document.documentElement.scrollTop > 600) {
        document.getElementById("navbar").style.background = "#090b13";
        document.getElementById("navbar-logo").style.opacity = "1"
        document.getElementById("button-menu-nav-w").style.opacity = "1"
        document.getElementById("div-button-nav").style.width = '84%'
        document.querySelector('header').style.display = "flex"
    } else {
        document.getElementById("navbar-logo").style.opacity = "0"
        document.getElementById("button-menu-nav-w").style.opacity = "1"
        document.getElementById("div-button-nav").style.width = '84%'
        document.getElementById("navbar").style.background = 'rgba(0, 0, 0, 0)'
        document.querySelector('header').style.display = "none"


    }

}