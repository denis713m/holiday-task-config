'use strict';

export async function loadJson(url){
    try{
        const response = await fetch(url);
        return response.json();
    }
    catch(e){
        console.error(error)
    }
}