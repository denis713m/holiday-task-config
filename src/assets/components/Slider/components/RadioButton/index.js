'use strict';
import './styles.scss';

let shownSlide = 0;
let nSlides = 0;

export default function (slides) {
    nSlides = slides.length;
    const sliderControls = document.createElement( 'div' );
    sliderControls.setAttribute("id", "slideControls");
    slides.forEach((slide, index) => {
        const label = document.createElement("label");
        label.classList.add("radioButton");
        const radioBtn = document.createElement("input");
        radioBtn.setAttribute("type", "radio");
        radioBtn.setAttribute("id", `btn${index}`);
        if(index === 0){
            radioBtn.checked = true;}
        else{
            radioBtn.checked = false;
        }
        radioBtn.hidden = true;
        radioBtn.setAttribute("name", "radio");
        radioBtn.addEventListener('change',() =>{
            const slideShow = document.getElementById(`slide${radioBtn.getAttribute("id").substring(3)}`);
            changeSlide(slideShow);
            shownSlide = radioBtn.getAttribute("id").substring(3);
        });
        label.appendChild(radioBtn);
        const circleElem = document.createElement("span");
        circleElem.classList.add("checkmark");
        label.appendChild(circleElem);
        sliderControls.appendChild(label);
    });
    setInterval(()=>{
        const nextSlide = getNextIndex();
        const slideShow = document.getElementById(`slide${nextSlide}`);
        changeSlide(slideShow);
        document.getElementById(`btn${nextSlide}`).checked = true;
        shownSlide = nextSlide;
    }, 5000);
    return sliderControls;
}

function getNextIndex () {
    return (shownSlide + 1) % nSlides;
}

function changeSlide(slideShow) {
    slideShow.style.opacity = "1";
    slideShow.style.top = "0";
    slideShow.style.position = null;
    const slideHide = document.getElementById(`slide${shownSlide}`);
    slideHide.style.opacity = "0";
    slideHide.style.top = "0";
    slideHide.style.position = "absolute";
}
