

export function video(data){
    const img = document.createElement("img");
    img.src = data.data.img;
    data.imgDiv.append(img);
    data.imgDiv.style.setProperty("--left", data.value)
    data.imgDiv.style.setProperty("--width", data.widthScreen)
    data.imgDiv.classList.add("img");
    data.imgDiv.classList.add("video");
    data.imgDiv.dataset.filter = data.item;
    data.item === 4 ? imgDiv.classList.add("active") : data.item === data.lengthArr && data.imgDiv.classList.add("active")
    data.imgDiv.addEventListener("click", (e) => data.expandElementFilter(e, data.data, data.arr))
    data.categoryImgGalery.append(data.imgDiv);
}


export function playVideo(e, element, arr){
    const close = document.querySelector("[data-close]");
    close.classList.remove("ascunde")
    if(e.target.nodeName !== "IMG") return

   const categoryContainer = document.querySelector("[data-category-container]");
   const dataFilter = document.querySelectorAll("[data-filter]");
   let widthScreen = Math.floor(categoryContainer.getBoundingClientRect().width);
   const target = e.target.parentElement;
   const datasetId = target.dataset.filter;
   let datasetTarget = target.dataset.filter;
   
   
   dataFilter.forEach((item, i) =>{
       item.classList.remove("active")
       item.querySelector("img") &&  item.querySelector("img").remove();
       const video = document.createElement("video");
       video.controls = true;
       video.src = arr[i].video;
       video.classList.add("video")
       item.appendChild(video)
       item.style.setProperty("--width", widthScreen); 
       item.style.setProperty("--left",  i < datasetId ? (datasetTarget--) * widthScreen * -1 : (datasetTarget++) * widthScreen );
       const videoElement = target.querySelector("video");
       target.classList.add("active")
       videoElement.play()

   })
}