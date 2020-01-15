'use strict';

const header = document.getElementById("pageHeader");
const headerTop = document.getElementById("headerTop");
const buttonMenu = document.querySelector("label[class='button'");

window.onscroll = headerStyle;

window.onload = headerStyle;

function headerStyle() {
        if (window.scrollY===0)
        {
            header.style.backgroundColor = null;
            headerTop.style.paddingTop = "40px";
            headerTop.style.paddingBottom = "40px";
            headerTop.style.borderBottom = "1px solid rgba(255, 255, 255, 0.15)";
            buttonMenu.style.top = "32px";
        }
        else
        {
            header.style.backgroundColor = "#292c47";
            headerTop.style.paddingTop = "25px";
            headerTop.style.paddingBottom = "25px";
            headerTop.style.borderBottom = null;
            buttonMenu.style.top = "18px";
        }


}