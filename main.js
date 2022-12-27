import { cateboryBtn, categoryImg } from "./data.js";
import { rightBtn, leftBtn } from "./indicator.js";
import { video, playVideo } from "./video.js";

const btnCategory = document.querySelector("[data-category-btn]");
const categoryImgGalery = document.querySelector("[data-category-container]");
const btnLeft = document.querySelector("[data-left]");
const btnRight = document.querySelector("[data-right]");
const close = document.querySelector("[data-close]");

close.classList.add("ascunde")


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
    const filterData = document.querySelector("[data-category-container]");

  while(filterData.firstChild){
       filterData.removeChild(filterData.firstChild)
    }



    const lengthArray = arr.length-1;
    arr.forEach((item, i) =>{
        curentCounter  = (i * widthScreen);
        createItemImg(item, curentCounter, i, lengthArray, arr);
    })
}



function createItemImg(element, value, item, lengthArr, arr){
    const imgDiv = document.createElement("div");

    if(element.type === "img"){
        const img = document.createElement("img");
        img.src = element.img;
        imgDiv.append(img);
        imgDiv.style.setProperty("--left", value)
        imgDiv.style.setProperty("--width", widthScreen)
        imgDiv.classList.add("img");
        imgDiv.dataset.filter = item;
        item === 4 ? imgDiv.classList.add("active") : item === lengthArr && imgDiv.classList.add("active")
        imgDiv.addEventListener("click", (e) => expandElementFilter(e, element))
        categoryImgGalery.append(imgDiv)
    }
    else if(element.type === "video"){ 

        video({data: element,
               widthScreen, 
               value, 
               item, 
               lengthArr, 
               imgDiv, 
               expandElementFilter,
               categoryImgGalery,
               arr 
            })
    }
}



function filterImages(e){
    closeFullSceen()
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
close.addEventListener("click", closeFullSceen)



export function getStyle(element, prop){
    return parseFloat(getComputedStyle(element).getPropertyValue(prop)) || 0
}

function expandElementFilter(e, element, arr){
    
    if(element.type === "img"){
        const active = document.querySelector(".active");
        close.classList.remove("ascunde")
        active.classList.remove("active")
        const target = e.target.parentElement;
        const datasetId = target.dataset.filter;
        let datasetTarget = target.dataset.filter;
        const widthScreen = Math.floor(categoryImgGalery.getBoundingClientRect().width);
        const childrenFilterImg = categoryImgGalery.childNodes;
        target.classList.add("active");
    
        childrenFilterImg.forEach((item, i) => {
            item.style.setProperty("--width", widthScreen); 
            item.style.setProperty("--left",  i < datasetId ? (datasetTarget--) * widthScreen * -1 : (datasetTarget++) * widthScreen );
        })
        
    }else if(element.type === "video"){
        playVideo(e, element, arr)
    }
}



function closeFullSceen(){
    const length = filterImagesArr.length;
    const imgDiv = document.createElement("div");
    const active = document.querySelector(".active");
    const widthScreen = Math.floor(categoryImgGalery.getBoundingClientRect().width) / 5;
    const childrenFilterImg = categoryImgGalery.childNodes;

    if(filterImagesArr[0].type === "video"){
        console.log(widthScreen)

        filterImagesArr.forEach((element, item) => {
            const value = item * widthScreen;

            video({data: element,
                widthScreen, 
                value, 
                item, 
                length, 
                imgDiv, 
                expandElementFilter,
                categoryImgGalery,
                arr: filterImagesArr
             })
        })
    }
   
    
    close.classList.add("ascunde")
    active.classList.remove("active")

    childrenFilterImg.forEach((item, i) => {
        i === 4 ? item.classList.add("active") : i === childrenFilterImg.length-1 && item.classList.add("active")
        item.style.setProperty("--width", widthScreen); 
        item.style.setProperty("--left",  i * widthScreen );
    })
}

