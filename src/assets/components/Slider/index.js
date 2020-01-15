'use strict';
import createPicture from '../Picture';
import createRadioButtons from './components/RadioButton'

/*let nSlides = 0;*/
/*let shownSlide = 0;*/


/**
 *
 * @param {Array<object>} slides
 * @return
 */
export default function (slides) {
    const sliderContainer = document.createElement( 'div' );
    sliderContainer.style.position = "relative";
    /*nSlides = slides.length;*/

    slides.forEach( (slide, index) => {
        const slideElem = document.createElement( 'div' );
        slideElem.classList.add("slideContainer");
        slideElem.appendChild( createSlide( slide.author.profilePicture ) );
        slideElem.appendChild( createSlideInfo (slide) );
        slideElem.setAttribute("id", `slide${index}`);
        if(index > 0){
            slideElem.style.opacity = "0";
            slideElem.style.top = "0";
            slideElem.style.position = "absolute";
        }
        sliderContainer.appendChild(slideElem);
    } );

    const sliderControls = createRadioButtons(slides)
/*    const sliderControls = document.createElement( 'div' );
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
            slideShow.style.opacity = "1";
            slideShow.style.top = "0";
            slideShow.style.position = null;

            const slideHide = document.getElementById(`slide${shownSlide}`);
            slideHide.style.opacity = "0";
            slideHide.style.top = "0";
            slideHide.style.position = "absolute";

            shownSlide = radioBtn.getAttribute("id").substring(3);
        });





        label.appendChild(radioBtn);

        const circleElem = document.createElement("span");
        circleElem.classList.add("checkmark");
        label.appendChild(circleElem);

        sliderControls.appendChild(label);
    });

    const slideChage = setInterval(()=>{
        const nextSlide = getNextIndex();
        const slideShow = document.getElementById(`slide${nextSlide}`);
        slideShow.style.opacity = "1";
        slideShow.style.top = "0";
        slideShow.style.position = null;
        document.getElementById(`btn${nextSlide}`).checked = true;
        const slideHide = document.getElementById(`slide${shownSlide}`);
        slideHide.style.opacity = "0";
        slideHide.style.top = "0";
        slideHide.style.position = "absolute";
        shownSlide = nextSlide;

    }, 5000);*/

    sliderContainer.appendChild(sliderControls);

    return sliderContainer;
}

/*function getNextIndex () {
    return (shownSlide + 1) % nSlides;
}*/

function createSlideInfo(slide) {
    const slideInfoElem = document.createElement( 'div' );
    slideInfoElem.classList.add("slideInfo");
    slideInfoElem.appendChild(createTextElem('p', slide.comment, ['quote', 'textPosition']));
    slideInfoElem.appendChild(createTextElem('cite', `${slide.author.name} ${slide.author.surname}, ${slide.author.position}`, ['author', 'textPosition']));
    return slideInfoElem;
}

function createTextElem(tag, info, cssclass){
    const textElem = document.createElement(tag);
    textElem.classList.add(...cssclass);
    textElem.innerText = info;
    return textElem;
}
function createSlide(picture) {
    const slideImageContainer = document.createElement( 'div' );
    slideImageContainer.classList.add("slideImgContainer");

    const img = createPicture(picture,'./assets/images/testimonial-1.jpg', "comment's author picture", ["slideImgContainer"]);
    slideImageContainer.appendChild(img);
    return slideImageContainer;
}






