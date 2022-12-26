import { widthScreen, getStyle } from "./main.js";


export function rightBtn(){
   
    const categoryImg = document.querySelectorAll("[data-filter]");
    const styleProperty = getStyle(categoryImg[0], "--width");



    console.log(styleProperty)

    if(getStyle(categoryImg[categoryImg.length-1], "--left") === styleProperty * 4) return

    categoryImg.forEach((item) => {
        item.style.setProperty(--"--left", getStyle(item, "--left") +  styleProperty * -1)
    })
}







export function leftBtn(){
    const categoryImg = document.querySelectorAll("[data-filter]");
    const styleProperty = getStyle(categoryImg[0], "--width");

    if(getStyle(categoryImg[0], "--left") === 0) return
    
    categoryImg.forEach((item) => {
        item.style.setProperty("--left", getStyle(item, "--left") +  styleProperty)
        

    })
}