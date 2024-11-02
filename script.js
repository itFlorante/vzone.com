var menuIcon = document.querySelector(".menu-icon");
var sidebar = document.querySelector(".sidebar");
var container = document.querySelector(".container");



menuIcon.onclick = function() {
    sidebar.classList.toggle("small-sidebar");
    container.classList.toggle('small-container');
}

let profilepic = document.getElementById("profilepic");
    let inputFile = document.getElementById("input-file");
    
    inputFile.onchange = function(){
        profilepic.src = URL.createObjectURL(inputFile.files[0]);
       
    }
    
    let settingsmenu = document.querySelector(".settings-menu");
    let subLinks = document.getElementById("sub-links");
    let more_links = document.getElementById("more_links");

    function OpenmyMenu(){
        settingsmenu.classList.toggle("opon_menu");
    }
    function myNotification(){
        subLinks.classList.toggle("opon_links");
    }
    
    function moreLink(){
        more_links.classList.toggle("more_link");
    }

    var darkBtn = document.getElementById("dark-btn");
    //var darkthemecolor = document.querySelector("dark-theme-color");


    darkBtn.onclick = function() {
        darkBtn.classList.toggle("dark-btn-on");
        document.body.classList.toggle("dark-theme");
    
        if (localStorage.getItem("Mode") == "light") {
            localStorage.setItem("Mode", "dark");
        } else {
            localStorage.setItem("Mode", "light");
        }
    
    }
    
    
    if (localStorage.getItem("Mode") == "light") {
        darkBtn.classList.remove("dark-btn-on");
        document.body.classList.remove("dark-theme");
        
    } else if (localStorage.getItem("Mode") == "dark") {
        darkBtn.classList.add("dark-btn-on");
        document.body.classList.add("dark-theme");
    
    
    } else {
        localStorage.setItem("Mode", "light");
    
    }
    







 
