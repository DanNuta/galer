import { widthScreen, getStyle } from "./main.js";


export function rightBtn(){
   
    const categoryImg = document.querySelectorAll("[data-filter]");
    const styleProperty = getStyle(categoryImg[0], "--width");
    const active = document.querySelector(".active");


    if(categoryImg.length <= 5){
        if(active.nextElementSibling){
            active.classList.remove("active")
            active.nextElementSibling.classList.add("active");
           
    
            categoryImg.forEach((item) => {
                const activeElement = item.classList.contains("active") && item;
                const nextElement = activeElement.nextElementSibling;
                const prevElement = activeElement.previousElementSibling;
                
                if(prevElement){
                    prevElement.querySelector("video").pause();
                    activeElement.querySelector("video").play()
                }

                item.style.setProperty("--left", getStyle(item, "--left") +  styleProperty * -1)

            })

            return
        }
    }

    
    if(active.nextElementSibling){
        active.classList.remove("active")
        active.nextElementSibling.classList.add("active")

        categoryImg.forEach((item) => {
            item.style.setProperty("--left", getStyle(item, "--left") +  styleProperty * -1)
        })
    }

}







export function leftBtn(){
    const active = document.querySelector(".active");
    const categoryImg = document.querySelectorAll("[data-filter]");
    const styleProperty = getStyle(categoryImg[0], "--width");

    if(getStyle(categoryImg[0], "--left") === 0) return

    active.classList.remove("active");
    active.previousElementSibling.classList.add("active")

    categoryImg.forEach((item) => {
        const activeElement = item.classList.contains("active") && item;
        const nextElement = activeElement.nextElementSibling;
       
                
        if(nextElement){
                nextElement.querySelector("video").pause();
                activeElement.querySelector("video").play()
            }

        item.style.setProperty("--left", getStyle(item, "--left") +  styleProperty)
    })
}