import { cateboryBtn, categoryImg } from "./data.js";
import { rightBtn, leftBtn } from "./indicator.js"

const btnCategory = document.querySelector("[data-category-btn]");
const categoryImgGalery = document.querySelector("[data-category-container]");
const btnLeft = document.querySelector("[data-left]");
const btnRight = document.querySelector("[data-right]");


let curentCounter = 0;
export let widthScreen = Math.floor(categoryImgGalery.getBoundingClientRect().width) / 5;
let filterImagesArr = categoryImg;


categoryButton(cateboryBtn);
createImg(filterImagesArr);





function categoryButton(arr){
    arr.forEach(element => {
        const btn = document.createElement("button");
        btn.textContent = element.category;
        btnCategory.append(btn)
        btn.dataset.category = element.category
        btn.addEventListener("click", filterImages)
    });
}



function createImg(arr){

    while(categoryImgGalery.firstChild){
        categoryImgGalery.removeChild(categoryImgGalery.firstChild)
    }

    arr.forEach((item, i) =>{
        curentCounter  = (i * widthScreen);
        createItemImg(item, curentCounter, i);
    })

    

}



function createItemImg(element, value, item){
    const imgDiv = document.createElement("div");
    const img = document.createElement("img");
    img.src = element.img;
    imgDiv.append(img);
    imgDiv.style.setProperty("--left", value)
    imgDiv.style.setProperty("--width", widthScreen)
    imgDiv.classList.add("img");
    imgDiv.dataset.filter = item;

    imgDiv.addEventListener("click", expandElementFilter)
    categoryImgGalery.append(imgDiv)
}



function filterImages(e){
    const value = e.target.dataset.category;

    filterImagesArr = categoryImg.filter(item => {

        switch(value){
            case "all":
                return true
                break;
            case value:
                return value === item.category;
                break; 
        }
    })


    createImg(filterImagesArr)
}




btnRight.addEventListener("click", rightBtn)

btnLeft.addEventListener("click", leftBtn)



export function getStyle(element, prop){
    return parseFloat(getComputedStyle(element).getPropertyValue(prop)) || 0
}



function expandElementFilter(e){
    const target = e.target.parentElement;
    const datasetId = target.dataset.filter;
    let datasetTarget = target.dataset.filter;
    const widthScreen = Math.floor(categoryImgGalery.getBoundingClientRect().width);
    const childrenFilterImg = categoryImgGalery.childNodes;

    childrenFilterImg.forEach((item, i) => {
        item.style.setProperty("--width", widthScreen); 
        item.style.setProperty("--left",  i < datasetId ? (datasetTarget--) * widthScreen * -1 : (datasetTarget++) * widthScreen );
    })
}

