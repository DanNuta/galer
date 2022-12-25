import { cateboryBtn, categoryImg } from "./data.js";

const btnCategory = document.querySelector("[data-category-btn]");
const categoryImgGalery = document.querySelector("[data-category-img]");

let curentCounter = 0;
let widthScreen = Math.floor(categoryImgGalery.getBoundingClientRect().width) / 5;


categoryButton(cateboryBtn);
createImg(categoryImg)





function categoryButton(arr){
    arr.forEach(element => {
        const btn = document.createElement("button");
        btn.textContent = element.catebory;
        btnCategory.append(btn)
    });
}



function createImg(arr){

    console.log(arr)

    arr.forEach((item, i) =>{
        curentCounter += widthScreen * i;
        createItemImg(item, curentCounter)
    })

}



function createItemImg(element, value){
    const imgDiv = document.createElement("div");
    const img = document.createElement("img");
    img.src = element.img;
    imgDiv.append(img)
    img.style.setProperty("--left", value)

    categoryImgGalery.append(imgDiv)
}

