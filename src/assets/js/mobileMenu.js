'use strict';

let isMenuShow = false;

const menuBtn = document.getElementById("menu");
const menu = document.getElementById("headerMenu");


menuBtn.onclick = () =>{
    if(isMenuShow){
        menu.setAttribute("id", "headerMenu");
        isMenuShow = false;
    }
    else{
        menu.setAttribute("id", "mobileMenu");
        isMenuShow = true;
    }
};

menu.onclick = (event) =>{
  if(event.target !== menu){
      menu.setAttribute("id", "headerMenu");
      isMenuShow = false;
      menuBtn.checked = false;
  }
};

window.onresize = ()=>{
    if(window.innerWidth > 992){
        menu.setAttribute("id", "headerMenu");
        menu.style.paddingTop = `0px`;
    }
    else
    {
        if(isMenuShow)
        {
            menu.setAttribute("id", "mobileMenu");
            menu.style.paddingTop = `${window.innerHeight *0.1}px`;
        }
    }
};

