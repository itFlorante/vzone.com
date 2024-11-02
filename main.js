var settingsmeun = document.querySelector(".settings-menu");
var darkBtn = document.getElementById("dark-btn");
var darkthemecolor = document.querySelector("dark-theme-color");



function Textcolor() {

    if (localStorage.getItem("theme") == "light") {
        localStorage.setItem("theme", "dark");

        if (localStorage.getItem("theme") == "light") {
            Color == 'red'
            console.log();
        }

    } else {
        localStorage.setItem("theme", "light"), Color = 'blue';
    }
}



function settingsMenuToggle() {
    settingsmeun.classList.toggle("settings-menu-height");
}
darkBtn.onclick = function() {
    darkBtn.classList.toggle("dark-btn-on");
    document.body.classList.toggle("dark-theme");

    if (localStorage.getItem("theme") == "light") {
        localStorage.setItem("theme", "dark");

    } else {
        localStorage.setItem("theme", "light");
    }

}


if (localStorage.getItem("theme") == "light") {
    darkBtn.classList.remove("dark-btn-on");
    document.body.classList.remove("dark-theme");

} else if (localStorage.getItem("theme") == "dark") {
    darkBtn.classList.add("dark-btn-on");
    document.body.classList.add("dark-theme");


} else {
    localStorage.setItem("theme", "light");

}