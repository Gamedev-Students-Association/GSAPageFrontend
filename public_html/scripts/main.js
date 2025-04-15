/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

function dropDownMobileMenu(){
    const menu = document.getElementsByClassName("topnav")[0];
    if(menu.className === "topnav"){
        menu.className += ' mobileVisible';
        document.getElementsByClassName("icon")[0].innerHTML = "Zwiń";
    } else {
        menu.className = 'topnav';
        document.getElementsByClassName("icon")[0].innerHTML = "Rozwiń";
    }
}
