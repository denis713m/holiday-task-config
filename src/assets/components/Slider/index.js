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


    sliderContainer.appendChild(sliderControls);

    return sliderContainer;
}


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






