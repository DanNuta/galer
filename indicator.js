import { widthScreen } from "./main.js";


export function rightBtn(){
   
    const categoryImg = document.querySelectorAll("[data-filter]");
    const lengthFilter = categoryImg.length;



    categoryImg.forEach((item) => {

        if(lengthFilter <= 5 || getStyle(categoryImg[lengthFilter-1], "--left") === widthScreen * 4) return
        item.style.setProperty("--left", getStyle(item, "--left") +  widthScreen * -1)
      
    })
}

function getStyle(element, props){
    return parseFloat(getComputedStyle(element).getPropertyValue(props)) || 0;
}





export function leftBtn(){
    const categoryImg = document.querySelectorAll("[data-filter]");
    const lengthFilter = categoryImg.length;

    if(getStyle(categoryImg[0], "--left") === 0) return
    
    categoryImg.forEach((item) => {
        item.style.setProperty("--left", getStyle(item, "--left") +  widthScreen)
        

    })
}