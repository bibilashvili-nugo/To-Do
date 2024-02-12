const liElements = document.querySelectorAll("li");
const backgroundImg = document.querySelector(".right-container");

for(let i = 0; i < liElements.length; i++){
    liElements[i].addEventListener("click", () => {
        for(let p = 0; p <liElements.length; p++){
            if(liElements[p].classList.contains("active")){
                liElements[p].classList.remove("active")
            }
        }

        const elements = liElements[i];
        if(!elements.classList.contains("active")){
            elements.classList.add("active")
        }

        if(elements.classList.contains("active") &&
        elements.classList.contains("myDay")){
            backgroundImg.style.backgroundImage = "url(./images/image1.jpg)";
        }

        if(elements.classList.contains("active") &&
        elements.classList.contains("important")){
            backgroundImg.style.backgroundImage = "url(./images/image2.png)";
        }

        if(elements.classList.contains("active") &&
        elements.classList.contains("planned")){
            backgroundImg.style.backgroundImage = "url(./images/image3.jpg)";
        }
        
        if(elements.classList.contains("active") &&
        elements.classList.contains("assigned")){
            backgroundImg.style.backgroundImage = "url(./images/image4.jpg)";
        }
        
        if(elements.classList.contains("active") &&
        elements.classList.contains("task")){
            backgroundImg.style.backgroundImage = "url(./images/image5.jpg)";
        }

        if(elements.classList.contains("active") &&
        elements.classList.contains("groceries")){
            backgroundImg.style.backgroundImage = "url(./images/image6.jpg)";
        }
        
        if(elements.classList.contains("active") &&
        elements.classList.contains("gettingStarted")){
            backgroundImg.style.backgroundImage = "url(./images/image7.jpg)";
        }

        if(elements.classList.contains("active") &&
        elements.classList.contains("webPage")){
            backgroundImg.style.backgroundImage = "url(./images/image8.jpg)";
        }
        
        if(elements.classList.contains("active") &&
        elements.classList.contains("webTasks")){
            backgroundImg.style.backgroundImage = "url(./images/image9.jpg)";
        }
    })  
}