import { cateboryBtn, categoryImg } from "./data.js";

const btnCategory = document.querySelector("[data-category-btn]");
const categoryImgGalery = document.querySelector("[data-category-container]");


let curentCounter = 0;
let widthScreen = Math.floor(categoryImgGalery.getBoundingClientRect().width) / 5;
let filterImagesArr = categoryImg;


categoryButton(cateboryBtn);
createImg(filterImagesArr)





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
        createItemImg(item, curentCounter)
    })

    

}



function createItemImg(element, value){
    const imgDiv = document.createElement("div");
    const img = document.createElement("img");
    img.src = element.img;
    imgDiv.append(img);
    imgDiv.style.setProperty("--left", value)
    imgDiv.style.setProperty("--width", widthScreen)
    imgDiv.classList.add("img");
    imgDiv.dataset.hgfhfghfg
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

