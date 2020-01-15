'use strict';
import createPicture from '../components/Picture';

let choosenWorkNumber = '0';

for(let i = 1; ; i++){
    const work = document.querySelector(`a[id='work${i}'`);
    if(work){
        work.onclick = showModal;
    }
    else{
        break;
    }
}

const modal = document.getElementById("openModal");

const close = document.querySelector(".close");


modal.onclick = closeWindow;
close.onclick = closeWindow;


function closeWindow() {
    modal.style.display = "none";
    document.querySelector(`a[id='work${choosenWorkNumber}'`).style.boxShadow = null;
};

function showModal() {
    choosenWorkNumber =  event.target.getAttribute("id").substring(4);
    event.target.style.boxShadow = "inset 0 0 0 2000px rgba(232, 69, 69, 0.85)";
    const img = createPicture (`./assets/images/work-${choosenWorkNumber}.jpg`, "./assets/images/work-1.jpg", 'work picture', ["modalWindowPicture"] );
    document.getElementById('modal').replaceChild(img, document.querySelector(".modalWindowPicture"));
    modal.style.display = "block";
}

