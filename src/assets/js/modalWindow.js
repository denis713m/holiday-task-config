'use strict';
for(let i = 1; ; i++){
    const work = document.querySelector(`a[id='work${i}'`);
    if(work){
        console.log("TRY!!!");
        work.onclick = showModal;
    }
    else{
        break;
    }
}

const modal = document.getElementById("openModal");

//const close = document.querySelector(".close");
const close = document.getElementById("modal");

modal.onclick = () => {
    console.log("done");
    modal.style.display = "none";
};

function showModal() {

    modal.style.display = "block";
}

