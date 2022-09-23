console.log('Conected')

// Contenido del Html -> preparado para enviar el fragment
// const contentArticle = document.querySelector('.article-section__body');

 // 1 step
const dataJson = fetch('./data.json');
// const data = dataJson.clone();

//change img
const contentImg = document.getElementById('img');
const figcaptionImg = document.getElementById('content_img');
const imgNew = document.getElementById('img')

// change contents
const parragraph = document.querySelector('.parragraph')
const section__footer = document.querySelector('.section__footer')

// CALL A THE LINKS
const btnLinkMoon = document.getElementById("moon")
const btnLinkMars = document.getElementById("mars")
const btnLinkEuropa = document.getElementById("europa")
const btnLinkTitan = document.getElementById("titan")


btnLinkMoon.addEventListener('click', () =>{
    // console.log("click")
    dataJson
        .then(res =>res.clone().json())
        .then(res => getData(res.destinations))

    console.log(dataJson)

    const getData = (data) => {
            
        let viweData = data[0]
        console.log(viweData)        
    
        imgNew.src = viweData.images.png
        parragraph.innerHTML = viweData.description
        figcaptionImg.replaceChild(img, contentImg)

    }

})

btnLinkMars.addEventListener('click', () =>{
     // console.log("click")
     dataJson
        .then(res =>res.clone().json())
        .then(res => getData(res.destinations))

    console.log(dataJson)

    const getData = (data) => {
        let viweData = data[1]
        // console.log(viweData)        
    
        imgNew.src = viweData.images.png
        parragraph.innerHTML = viweData.description
        figcaptionImg.replaceChild(img, contentImg)

    }

})


btnLinkEuropa.addEventListener('click', () =>{
      // console.log("click")
    dataJson
        .then(res =>res.clone().json())
        .then(res => getData(res.destinations))

    console.log(dataJson)

    const getData = (data) => {
            
        let viweData = data[2]
        // console.log(viweData)        
    
        imgNew.src = viweData.images.png
        parragraph.innerHTML = viweData.description
        figcaptionImg.replaceChild(img, contentImg)

    }

})

btnLinkTitan.addEventListener('click', () =>{
     // console.log("click")
    dataJson
        .then(res =>res.clone().json())
        .then(res => getData(res.destinations))

    console.log(dataJson)

    const getData = (data) => {
            
        let viweData = data[3]
        console.log(viweData)        
    
        imgNew.src = viweData.images.png
        parragraph.innerHTML = viweData.description
        figcaptionImg.replaceChild(img, contentImg)

    }

})


